import { useState } from 'react';
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
import { Download, TrendingUp } from 'lucide-react';

export function StagiaireNotes() {
  const [selectedSemester, setSelectedSemester] = useState('s1');
  const [selectedModule, setSelectedModule] = useState('all');

  const notes = [
    {
      module: 'Programmation Javascript',
      controle: 16,
      tp: 15,
      projet: 17,
      moyenne: 16,
      session: 'Normale',
      statut: 'Validé',
    },
    {
      module: 'Base de données',
      controle: 14,
      tp: 14.5,
      projet: 15,
      moyenne: 14.5,
      session: 'Normale',
      statut: 'Validé',
    },
    {
      module: 'Développement Front End',
      controle: 18,
      tp: 17,
      projet: 17.5,
      moyenne: 17.5,
      session: 'Normale',
      statut: 'Validé',
    },
    {
      module: 'Réseaux informatiques',
      controle: 13,
      tp: 14,
      projet: 13.5,
      moyenne: 13.5,
      session: 'Normale',
      statut: 'Validé',
    },
    {
      module: 'Anglais technique',
      controle: 15,
      tp: 16,
      projet: null,
      moyenne: 15.5,
      session: 'Normale',
      statut: 'Validé',
    },
  ];

  const moyenneGenerale = (notes.reduce((acc, n) => acc + n.moyenne, 0) / notes.length).toFixed(2);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Mes Notes</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Consultez vos résultats académiques
          </p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Télécharger le relevé
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Moyenne générale</p>
              <p className="text-gray-900 dark:text-white">{moyenneGenerale}/20</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#00C9A7]" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Modules validés</p>
              <p className="text-gray-900 dark:text-white">{notes.length}/5</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400">100%</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Meilleure note</p>
              <p className="text-gray-900 dark:text-white">18/20</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center">
              <span className="text-[#1E88E5]">🏆</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
              Semestre
            </label>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s1">Semestre 1</SelectItem>
                <SelectItem value="s2">Semestre 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
              Module
            </label>
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les modules</SelectItem>
                <SelectItem value="javascript">Programmation Javascript</SelectItem>
                <SelectItem value="db">Base de données</SelectItem>
                <SelectItem value="web">Développement Front-end</SelectItem>
                <SelectItem value="network">Réseaux informatiques</SelectItem>
                <SelectItem value="english">Anglais technique</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Table */}
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
                <TableHead className="text-center">Session</TableHead>
                <TableHead className="text-center">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notes.map((note, index) => (
                <TableRow key={index}>
                  <TableCell>{note.module}</TableCell>
                  <TableCell className="text-center">{note.controle}/20</TableCell>
                  <TableCell className="text-center">{note.tp}/20</TableCell>
                  <TableCell className="text-center">{note.projet ? `${note.projet}/20` : '-'}</TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      note.moyenne >= 16 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      note.moyenne >= 12 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {note.moyenne}/20
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">{note.session}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {note.statut}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}