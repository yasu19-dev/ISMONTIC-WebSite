import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Search, Calendar, AlertCircle, Info, CheckCircle, Megaphone } from 'lucide-react';

export function StagiaireAnnouncements() {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const announcements = [
    {
      id: 1,
      title: 'Calendrier des examens du semestre disponible',
      content: 'Le calendrier détaillé des examens du premier semestre est maintenant disponible dans la section Documents. Merci de le consulter et de vous préparer en conséquence.',
      category: 'Important',
      date: '2026-03-05',
      time: '10:30',
      author: 'Direction Pédagogique',
    },
    {
      id: 2,
      title: 'Nouvelle ressource e-learning: Cours Java Avancé',
      content: 'Un nouveau cours sur la programmation Java avancée a été ajouté à la plateforme e-learning. Le cours couvre les concepts de multithreading, collections et design patterns.',
      category: 'E-learning',
      date: '2026-03-04',
      time: '14:00',
      author: 'Prof. Youssef YAZIDI ALAOUI',
    },
    {
      id: 3,
      title: 'Rappel: Date limite de soumission du projet web',
      content: 'Nous vous rappelons que la date limite de soumission du projet de développement web est fixée au 15 mars 2026. Veuillez respecter cette échéance.',
      category: 'Pédagogique',
      date: '2026-03-03',
      time: '09:00',
      author: 'Prof. Bouchra EL AKEL',
    },
    {
      id: 4,
      title: 'Journée Portes Ouvertes - 20 Mars',
      content: 'L\'ISMONTIC organise une journée portes ouvertes le 20 mars 2026. Vous êtes invités à y participer et à présenter vos projets aux visiteurs.',
      category: 'Événement',
      date: '2026-03-02',
      time: '11:00',
      author: 'Direction',
    },
    {
      id: 5,
      title: 'Maintenance système - Samedi 8 Mars',
      content: 'Une maintenance système est programmée le samedi 8 mars de 14h à 18h. Les plateformes e-learning et l\'accès aux documents seront temporairement indisponibles.',
      category: 'Technique',
      date: '2026-03-01',
      time: '16:00',
      author: 'Service Informatique',
    },
    {
      id: 6,
      title: 'Atelier: Préparation aux entretiens d\'embauche',
      content: 'Un atelier de préparation aux entretiens d\'embauche sera organisé le 12 mars 2026 à 14h en salle de conférence. Inscription obligatoire.',
      category: 'Événement',
      date: '2026-02-28',
      time: '10:00',
      author: 'Service Stage',
    },
    {
      id: 7,
      title: 'Nouvelles offres de stage disponibles',
      content: 'Plusieurs entreprises partenaires ont publié de nouvelles offres de stage. Consultez le tableau d\'affichage ou contactez le service des stages.',
      category: 'Stage',
      date: '2026-02-27',
      time: '15:30',
      author: 'Service Stage',
    },
    {
      id: 8,
      title: 'Changement d\'horaire - Cours de Base de données',
      content: 'Le cours de base de données du jeudi 13 mars est avancé de 10h à 8h30. Merci d\'en prendre note.',
      category: 'Pédagogique',
      date: '2026-02-26',
      time: '12:00',
      author: 'Prof. Mounia NAAMANY',
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Important':
        return AlertCircle;
      case 'E-learning':
        return CheckCircle;
      case 'Événement':
        return Calendar;
      default:
        return Info;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Important':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'E-learning':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Pédagogique':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Événement':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Stage':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Technique':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesCategory = categoryFilter === 'all' || announcement.category === categoryFilter;
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Annonces & Actualités</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Restez informé des dernières nouvelles de l'ISMONTIC
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total</p>
              <p className="text-gray-900 dark:text-white">{announcements.length}</p>
            </div>
            <Megaphone className="w-8 h-8 text-[#1E88E5]" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Importantes</p>
              <p className="text-gray-900 dark:text-white">
                {announcements.filter(a => a.category === 'Important').length}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cette semaine</p>
              <p className="text-gray-900 dark:text-white">5</p>
            </div>
            <Calendar className="w-8 h-8 text-[#00C9A7]" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Non lues</p>
              <p className="text-gray-900 dark:text-white">3</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <span className="text-orange-600 dark:text-orange-400">●</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Rechercher une annonce..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-full md:w-auto min-w-[200px]">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                <SelectItem value="Important">Important</SelectItem>
                <SelectItem value="Pédagogique">Pédagogique</SelectItem>
                <SelectItem value="E-learning">E-learning</SelectItem>
                <SelectItem value="Événement">Événement</SelectItem>
                <SelectItem value="Stage">Stage</SelectItem>
                <SelectItem value="Technique">Technique</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Announcements list */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => {
          const Icon = getCategoryIcon(announcement.category);
          return (
            <Card key={announcement.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: announcement.category === 'Important' ? '#fee' :
                      announcement.category === 'E-learning' ? '#f3e8ff' :
                      '#e8f4fd'
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{
                      color: announcement.category === 'Important' ? '#dc2626' :
                        announcement.category === 'E-learning' ? '#9333ea' :
                        '#2563eb'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-gray-900 dark:text-white">
                      {announcement.title}
                    </h3>
                    <Badge className={getCategoryColor(announcement.category)}>
                      {announcement.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {announcement.content}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(announcement.date).toLocaleDateString('fr-FR')}
                    </span>
                    <span>•</span>
                    <span>{announcement.time}</span>
                    <span>•</span>
                    <span>{announcement.author}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}