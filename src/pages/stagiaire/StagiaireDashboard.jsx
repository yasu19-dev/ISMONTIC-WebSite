import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { StatCard } from '../../components/StatCard';
import {
  BookOpen,
  Calendar,
  FileText,
  Megaphone,
  MessageSquare,
  CalendarCheck,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function StagiaireDashboard() {
  const upcomingCourse = {
    module: 'Développement Front-end',
    time: '10:00 - 12:00',
    room: 'Salle SDD2',
    formateur: 'Prof. Bouchra EL AKEL',
  };

  const recentNotes = [
    { module: 'Programmation Javascript', note: 16, type: 'Contrôle' },
    { module: 'Base de données', note: 14.5, type: 'TP' },
    { module: 'Développement Front-end', note: 17, type: 'Projet' },
  ];

  const recentAnnouncements = [
    {
      title: 'Calendrier des examens disponible',
      date: 'Il y a 2 heures',
      category: 'Important',
    },
    {
      title: 'Nouvelle ressource e-learning ajoutée',
      date: 'Il y a 5 heures',
      category: 'E-learning',
    },
    {
      title: 'Rappel: Date limite projet',
      date: 'Hier',
      category: 'Pédagogique',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Tableau de bord</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bienvenue sur votre espace stagiaire
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Moyenne générale"
          value="15.2/20"
          icon={TrendingUp}
          trend={{ value: '+0.5', isPositive: true }}
          color="#00C9A7"
        />
        <StatCard
          title="Taux de présence"
          value="94%"
          icon={Calendar}
          trend={{ value: '+2%', isPositive: true }}
          color="#1E88E5"
        />
        <StatCard
          title="Documents"
          value="12"
          icon={FileText}
          color="#FF9800"
        />
        <StatCard
          title="Annonces"
          value="5 nouvelles"
          icon={Megaphone}
          color="#9C27B0"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Prochain cours */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#1E88E5]" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Prochain cours</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Module</p>
              <p className="text-gray-900 dark:text-white">{upcomingCourse.module}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Horaire</p>
                <p className="text-gray-900 dark:text-white text-sm">{upcomingCourse.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Salle</p>
                <p className="text-gray-900 dark:text-white text-sm">{upcomingCourse.room}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Formateur</p>
              <p className="text-gray-900 dark:text-white text-sm">{upcomingCourse.formateur}</p>
            </div>
            <Button className="w-full" variant="outline" asChild>
              <Link to="/stagiaire/schedule">
                Voir l'emploi du temps
              </Link>
            </Button>
          </div>
        </Card>

        {/* Dernières notes */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#00C9A7]" />
              </div>
              <h3 className="text-gray-900 dark:text-white">Dernières notes</h3>
            </div>
          </div>
          <div className="space-y-3">
            {recentNotes.map((note, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{note.module}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{note.type}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  note.note >= 16 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  note.note >= 12 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                }`}>
                  {note.note}/20
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4" variant="outline" asChild>
            <Link to="/stagiaire/notes">
              Voir toutes les notes
            </Link>
          </Button>
        </Card>

        {/* Dernières annonces */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Annonces récentes</h3>
          </div>
          <div className="space-y-3">
            {recentAnnouncements.map((announcement, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm text-gray-900 dark:text-white flex-1">{announcement.title}</p>
                  <span className="text-xs px-2 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full whitespace-nowrap">
                    {announcement.category}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{announcement.date}</p>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4" variant="outline" asChild>
            <Link to="/stagiaire/announcements">
              Voir toutes les annonces
            </Link>
          </Button>
        </Card>
      </div>

      {/* Actions rapides */}
      <div>
        <h2 className="text-gray-900 dark:text-white mb-4">Actions rapides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-6 flex-col gap-2" asChild>
            <Link to="/stagiaire/appointments">
              <CalendarCheck className="w-8 h-8 text-[#1E88E5]" />
              <span>Prendre un rendez-vous</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-2" asChild>
            <Link to="/stagiaire/complaints">
              <MessageSquare className="w-8 h-8 text-[#00C9A7]" />
              <span>Envoyer une réclamation</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-2" asChild>
            <Link to="/stagiaire/documents">
              <FileText className="w-8 h-8 text-[#FF9800]" />
              <span>Mes documents</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-2" asChild>
            <Link to="/stagiaire/elearning">
              <BookOpen className="w-8 h-8 text-[#9C27B0]" />
              <span>E-learning</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}