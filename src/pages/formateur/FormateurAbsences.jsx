import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Checkbox } from '../../components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Calendar } from '../../components/ui/calendar';
import { Save, CheckCircle, Edit, Calendar as CalendarIcon } from 'lucide-react';

export function FormateurAbsences() {
  const [module, setModule] = useState('');
  const [groupe, setGroupe] = useState('');
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [motif, setMotif] = useState('');

  const students = [
    { id: 1, name: 'Zaid Saousaou', matricule: 'ST2025001', absent: false, retard: false },
    { id: 2, name: 'Yasmine Harroudi', matricule: 'ST2025002', absent: false, retard: false },
    { id: 3, name: 'Aya Belghazi', matricule: 'ST2025003', absent: false, retard: false },
    { id: 4, name: 'Oussama tkitak', matricule: 'ST2025004', absent: false, retard: false },
    { id: 5, name: 'Anas lazar', matricule: 'ST2025005', absent: false, retard: false },
    { id: 6, name: 'Adnan fahsi', matricule: 'ST2025006', absent: false, retard: false },
    { id: 7, name: 'Imane tribak', matricule: 'ST2025007', absent: false, retard: false },
    { id: 8, name: 'Amal ettaliqui', matricule: 'ST2025008', absent: false, retard: false },
  ];

  const [studentStatuses, setStudentStatuses] = useState(
    students.map(s => ({ ...s }))
  );

  const historique = [
    { id: 1, date: '10 Mars 2026', timeSlot: '08:30 - 10:30', groupe: 'TDD201', module: 'Développement Web', absents: 2, retards: 1 },
    { id: 2, date: '09 Mars 2026', timeSlot: '14:00 - 16:00', groupe: 'TDD201', module: 'Programmation Java', absents: 0, retards: 3 },
    { id: 3, date: '08 Mars 2026', timeSlot: '10:45 - 12:45', groupe: 'TDD202', module: 'Base de données', absents: 1, retards: 0 },
  ];

  const handleAbsenceChange = (id, checked) => {
    setStudentStatuses(prev =>
      prev.map(s => (s.id === id ? { ...s, absent: checked, retard: checked ? false : s.retard } : s))
    );
  };

  const handleRetardChange = (id, checked) => {
    setStudentStatuses(prev =>
      prev.map(s => (s.id === id ? { ...s, retard: checked, absent: checked ? false : s.absent } : s))
    );
  };

  const handleSave = () => {
    alert('Absences enregistrées avec succès!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Gestion des absences</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez les présences de vos stagiaires et consultez l'historique
        </p>
      </div>

      <Tabs defaultValue="saisie" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
          <TabsTrigger value="saisie">Saisie des absences</TabsTrigger>
          <TabsTrigger value="historique">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="saisie" className="space-y-6">
          {/* Sélection de la séance */}
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-4">Informations de la séance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Module</Label>
                <Select value={module} onValueChange={setModule}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Développement Web Avancé</SelectItem>
                    <SelectItem value="java">Programmation JavaScript</SelectItem>
                    <SelectItem value="tp">Approche agile</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Groupe</Label>
                <Select value={groupe} onValueChange={setGroupe}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un groupe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd201">DEVOWFS201</SelectItem>
                    <SelectItem value="dd202">DEVOWFS202</SelectItem>
                    <SelectItem value="id201">ID201</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date</Label>
                <div className="border rounded-md dark:border-gray-800 p-2 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Horaire</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez l'horaire" />
                  </SelectTrigger>
                  <SelectContent>
                <SelectItem value="8-10">08:30 - 10:50</SelectItem>
                <SelectItem value="10-12">11:05 - 13:20</SelectItem>
                <SelectItem value="14-16">13:30 - 15:50</SelectItem>
                <SelectItem value="16-18">16:05 - 18:30</SelectItem>
              </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Liste des stagiaires */}
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-4">
              Liste des stagiaires - Groupe {groupe || '...'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-800 bg-gray-50/50 dark:bg-[#1a1f2e]">
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white rounded-tl-lg">Matricule</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Nom complet</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Absence</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white rounded-tr-lg">Retard</th>
                  </tr>
                </thead>
                <tbody>
                  {studentStatuses.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#232936]"
                    >
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400 font-mono text-sm">
                        {student.matricule}
                      </td>
                      <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                        {student.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Checkbox
                          checked={student.absent}
                          onCheckedChange={(checked) =>
                            handleAbsenceChange(student.id, checked)
                          }
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Checkbox
                          checked={student.retard}
                          onCheckedChange={(checked) =>
                            handleRetardChange(student.id, checked)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Informations complémentaires */}
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-4">Informations complémentaires</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="motif">Motif ou remarque (optionnel)</Label>
                <Textarea
                  id="motif"
                  placeholder="Ajouter un motif ou une remarque sur le déroulement de la séance..."
                  value={motif}
                  onChange={(e) => setMotif(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Résumé et Actions */}
          <Card className="p-6 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <CheckCircle className="w-6 h-6 text-[#1E88E5] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="text-gray-900 dark:text-white mb-2 font-medium">Résumé de la saisie</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Absents</p>
                      <Badge variant="destructive">{studentStatuses.filter(s => s.absent).length}</Badge>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Retards</p>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">{studentStatuses.filter(s => s.retard).length}</Badge>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Présents</p>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{studentStatuses.filter(s => !s.absent && !s.retard).length}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <Button variant="outline" size="lg">
                  Annuler
                </Button>
                <Button onClick={handleSave} size="lg" className="bg-[#1E88E5] hover:bg-[#1565C0]">
                  <Save className="w-4 h-4 mr-2" />
                  Enregistrer
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="historique">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Historique des absences enregistrées
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-[#1a1f2e] text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-3 font-medium rounded-tl-lg">Date & Horaire</th>
                    <th className="px-4 py-3 font-medium">Groupe</th>
                    <th className="px-4 py-3 font-medium">Module</th>
                    <th className="px-4 py-3 font-medium text-center">Bilan</th>
                    <th className="px-4 py-3 font-medium text-right rounded-tr-lg">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {historique.map((session) => (
                    <tr key={session.id} className="border-b dark:border-gray-800 last:border-0 hover:bg-gray-50/50 dark:hover:bg-white/5">
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3 text-gray-400" />
                            {session.date}
                          </span>
                          <span className="text-gray-500">{session.timeSlot}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 font-medium text-gray-700 dark:text-gray-300">{session.groupe}</td>
                      <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{session.module}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Badge variant="destructive" className="px-1.5 min-w-[2rem] justify-center">{session.absents}</Badge>
                          <Badge variant="outline" className="px-1.5 min-w-[2rem] justify-center text-orange-600 border-orange-200 bg-orange-50">{session.retards}</Badge>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#1E88E5]">
                          <Edit className="w-4 h-4 mr-2" />
                          Modifier
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}