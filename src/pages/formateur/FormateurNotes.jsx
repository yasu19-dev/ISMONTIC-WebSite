import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { CheckCircle2, Save, Users, FileText } from 'lucide-react';

export function FormateurNotes() {
  const [selectedGroup, setSelectedGroup] = useState('TDD201');
  const [selectedModule, setSelectedModule] = useState('Dev Web');
  const [isSaved, setIsSaved] = useState(false);

  const students = [
    { id: '1', nom: 'SAOUSAOU', prenom: 'Zaid', note: 14 },
    { id: '2', nom: 'HARROUDI', prenom: 'Yasmine', note: 16.5 },
    { id: '3', nom: 'BELGHAZI', prenom: 'Aya', note: '' },
    { id: '4', nom: 'TKITAK', prenom: 'Oussama', note: 12 },
    { id: '5', nom: 'LAZAR', prenom: 'Anas', note: '' },
  ];

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#1E88E5]" />
            Saisie des notes
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Saisissez et enregistrez les notes d'évaluation de vos étudiants.
          </p>
        </div>
        <Button onClick={handleSave} className="bg-[#00C9A7] hover:bg-[#00B093] flex items-center gap-2">
          <Save className="w-4 h-4" />
          Enregistrer les notes
        </Button>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4 items-end bg-gray-50 dark:bg-[#1a1f2e]">
        <div className="space-y-2 flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Groupe</label>
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="bg-white dark:bg-[#232936]">
              <SelectValue placeholder="Choisir un groupe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DEVWOFS201">DEVWOFS201</SelectItem>
              <SelectItem value="DEVWOFS202">DEVWOFS202</SelectItem>
              <SelectItem value="DEVWOFS203">DEVWOFS203</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Module</label>
          <Select value={selectedModule} onValueChange={setSelectedModule}>
            <SelectTrigger className="bg-white dark:bg-[#232936]">
              <SelectValue placeholder="Choisir un module" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dev Web">Développement Front End</SelectItem>
              <SelectItem value="Base de donnees">Base de données</SelectItem>
              <SelectItem value="Java">Programmation JavaScript</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type d'évaluation</label>
          <Select defaultValue="cc1">
            <SelectTrigger className="bg-white dark:bg-[#232936]">
              <SelectValue placeholder="Type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cc1">Contrôle Continu 1</SelectItem>
              <SelectItem value="cc2">Contrôle Continu 2</SelectItem>
              <SelectItem value="efm">EFM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {isSaved && (
        <div className="p-4 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          Les notes ont été enregistrées avec succès.
        </div>
      )}

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-400" />
            Liste des étudiants ({selectedGroup})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-[#1a1f2e] text-gray-600 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 font-medium rounded-tl-lg">Code Stagiaire</th>
                <th className="px-4 py-3 font-medium">Nom</th>
                <th className="px-4 py-3 font-medium">Prénom</th>
                <th className="px-4 py-3 font-medium rounded-tr-lg w-32">Note /20</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={student.id} className="border-b dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 text-gray-500 font-mono">R123{student.id}56</td>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{student.nom}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{student.prenom}</td>
                  <td className="px-4 py-2">
                    <Input 
                      type="number" 
                      min="0" 
                      max="20" 
                      step="0.25"
                      defaultValue={student.note} 
                      className="w-24 text-center font-medium"
                      placeholder="-- / 20"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}