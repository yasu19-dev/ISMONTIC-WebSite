import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Badge } from '../../components/ui/badge';
import { Download, TrendingUp, Loader2 } from 'lucide-react';

export function StagiaireNotes() {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedModule, setSelectedModule] = useState('all');
  
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        };

        // 1. On récupère les deux listes en parallèle
        const [resModules, resNotes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/stagiaire/modules', { headers }),
          axios.get('http://127.0.0.1:8000/api/stagiaire/notes', { headers })
        ]);

        // On gère les formats de réponse data.data ou data direct
        const allModules = resModules.data.data || resModules.data;
        const rawNotes = resNotes.data.data || resNotes.data;

        // 2. LOGIQUE DE FUSION CRITIQUE : On part de la liste des MODULES
        const merged = allModules.map(module => {
          // On cherche toutes les notes qui appartiennent à ce module précis
          const moduleNotes = rawNotes.filter(n => 
            String(n.module_id) === String(module.id) || 
            String(n.module?.id) === String(module.id)
          );
          
          // On calcule les stats pour ce module (s'il y a des notes)
          const stats = moduleNotes.reduce((acc, n) => {
            const val = parseFloat(n.valeur);
            if (n.type_evaluation === 'Contrôle') acc.controle = val;
            if (n.type_evaluation === 'TP') acc.tp = val;
            if (n.type_evaluation === 'Projet') acc.projet = val;
            acc.somme += val;
            acc.count += 1;
            return acc;
          }, { controle: null, tp: null, projet: null, somme: 0, count: 0 });

          return {
            id: module.id,
            module: module.intitule || module.nom, // s'adapte à ton nom de colonne
            controle: stats.controle,
            tp: stats.tp,
            projet: stats.projet,
            // Si count est 0, la moyenne sera null (affichera '-')
            moyenne: stats.count > 0 ? (stats.somme / stats.count).toFixed(2) : null,
            semestre: module.semestre || 'S1',
            session: moduleNotes.length > 0 ? moduleNotes[0].session : '-',
            // Statut dynamique
            statut: stats.count > 0 
              ? ((stats.somme / stats.count) >= 10 ? 'Validé' : 'Non Validé') 
              : 'En attente'
          };
        });

        setNotesData(merged);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la fusion des données", error);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const filteredData = notesData.filter((n) => {
    const matchModule = selectedModule === 'all' || n.module === selectedModule;
    const matchSemester = selectedSemester === 'all' || n.semestre.toLowerCase() === selectedSemester.toLowerCase();
    return matchModule && matchSemester;
  });

  const notesExistantes = notesData.filter(n => n.moyenne !== null);
  const moyenneGenerale = notesExistantes.length > 0 
    ? (notesExistantes.reduce((acc, n) => acc + parseFloat(n.moyenne), 0) / notesExistantes.length).toFixed(2)
    : "0.00";

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[#1E88E5] mb-2" />
        <p className="text-gray-500">Préparation du relevé de notes...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Mes Notes</h1>
          <p className="text-gray-600 dark:text-gray-400">Consultez l'ensemble de votre programme et vos résultats</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" /> Télécharger le relevé
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Moyenne générale</p>
              <p className="text-gray-900 dark:text-white font-bold text-xl">{moyenneGenerale}/20</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#00C9A7]" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">Semestre</label>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les semestres</SelectItem>
                <SelectItem value="s1">Semestre 1</SelectItem>
                <SelectItem value="s2">Semestre 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">Module</label>
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les modules</SelectItem>
                {notesData.map((n) => (
                   <SelectItem key={n.id} value={n.module}>{n.module}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Module</TableHead>
                <TableHead className="text-center">Contrôle</TableHead>
                <TableHead className="text-center">TP</TableHead>
                <TableHead className="text-center">Projet</TableHead>
                <TableHead className="text-center">Moyenne</TableHead>
                <TableHead className="text-center">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? filteredData.map((note, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{note.module}</TableCell>
                  <TableCell className="text-center">{note.controle !== null ? `${note.controle}/20` : '-'}</TableCell>
                  <TableCell className="text-center">{note.tp !== null ? `${note.tp}/20` : '-'}</TableCell>
                  <TableCell className="text-center">{note.projet !== null ? `${note.projet}/20` : '-'}</TableCell>
                  <TableCell className="text-center font-bold">
                    {note.moyenne ? `${note.moyenne}/20` : '-'}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={
                      note.statut === 'Validé' ? 'bg-green-100 text-green-700' : 
                      note.statut === 'En attente' ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-700'
                    }>
                      {note.statut}
                    </Badge>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    Aucun module trouvé.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}