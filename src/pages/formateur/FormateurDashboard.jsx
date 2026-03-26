import { Card } from '../../components/ui/card';
import { StatCard } from '../../components/StatCard';
import { Users, Clock, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Label } from '../../components/ui/label';
import { Megaphone } from 'lucide-react';

export function FormateurDashboard() {
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const upcomingClasses = [
    {
      module: 'Développement Web Avancé',
      groupe: 'DEVOWFS201',
      time: '08:00 - 13:30',
      room: 'SDD1',
    },
    {
      module: 'Programmation JavaScript',
      groupe: 'DEVOWFS202',
      time: '13:30 - 18:30',
      room: 'SDD2',
    },
  ];
   const recentAbsences = [
    { student: 'Zaid Saousaou', groupe: 'DEVOWFS201', date: 'Aujourd\'hui', status: 'Absence' },
    { student: 'Yasmine Harroudi', groupe: 'DEVOWFS201', date: 'Aujourd\'hui', status: 'Retard' },
    { student: 'Aya Belghazi', groupe: 'DEVOWFS202', date: 'Hier', status: 'Absence' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Tableau de bord Formateur</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Vue d'ensemble de vos activités
          </p>
        </div>
        
        <Dialog open={isAnnouncementOpen} onOpenChange={setIsAnnouncementOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1E88E5] hover:bg-[#1565C0] flex items-center gap-2">
              <Megaphone className="w-4 h-4" />
              Partager une annonce
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Nouvelle Annonce</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setIsAnnouncementOpen(false); }} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Type d'annonce</Label>
                <Select defaultValue="examen">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="examen">Examen / Contrôle</SelectItem>
                    <SelectItem value="absence">Absence du professeur</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Titre</Label>
                <Input placeholder="Ex: Rattrapage du cours Java" required />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea placeholder="Détails de votre annonce..." className="min-h-[100px]" required />
              </div>
              <Button type="submit" className="w-full bg-[#1E88E5] hover:bg-[#1565C0]">
                Publier l'annonce
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Cours aujourd'hui"
          value="3"
          icon={Clock}
          color="#1E88E5"
        />
        <StatCard
          title="Stagiaires"
          value="45"
          icon={Users}
          color="#00C9A7"
        />
        <StatCard
          title="Taux de présence"
          value="92%"
          icon={TrendingUp}
          trend={{ value: '+3%', isPositive: true }}
          color="#4CAF50"
        />
        <StatCard
          title="Absences cette semaine"
          value="12"
          icon={AlertTriangle}
          color="#FF9800"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Prochains cours */}
        <Card className="p-6">
          <h3 className="text-gray-900 dark:text-white mb-4">Prochains cours</h3>
          <div className="space-y-3">
            {upcomingClasses.map((classe, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-gray-900 dark:text-white">{classe.module}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Groupe {classe.groupe}
                    </p>
                  </div>
                  <span className="text-sm px-3 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full">
                    {classe.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {classe.room}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" asChild>
            <Link to="/formateur/absences">
              Enregistrer les absences
            </Link>
          </Button>
        </Card>

        {/* Absences récentes */}
        <Card className="p-6">
          <h3 className="text-gray-900 dark:text-white mb-4">Absences récentes</h3>
          <div className="space-y-3">
            {recentAbsences.map((absence, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{absence.student}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {absence.groupe} • {absence.date}
                  </p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  absence.status === 'Absence'
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                }`}>
                  {absence.status}
                </span>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" asChild>
            <Link to="/formateur/statistics">
              Voir les statistiques
            </Link>
          </Button>
        </Card>
      </div>

      {/* Module rapide */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">Mes modules</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Développement Web Avancé', students: 25, color: '#1E88E5' },
            { name: 'Programmation Java', students: 20, color: '#00C9A7' },
            { name: 'TP Programmation', students: 25, color: '#9C27B0' },
          ].map((module, index) => (
            <div
              key={index}
              className="p-4 border dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${module.color}20` }}
              >
                <Users className="w-5 h-5" style={{ color: module.color }} />
              </div>
              <p className="text-gray-900 dark:text-white mb-1">{module.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {module.students} stagiaires
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}