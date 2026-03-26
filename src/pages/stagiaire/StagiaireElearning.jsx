import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Globe, Video, ExternalLink, FileText } from 'lucide-react';

export function StagiaireElearning() {
  const platforms = [
    {
      name: 'Bibliothèque Percepio',
      description: 'Accédez à des milliers de livres numériques et ressources académiques',
      icon: BookOpen,
      color: '#1E88E5',
      url: '#',
    },
    {
      name: 'OFPPT Langues',
      description: 'Plateforme d\'apprentissage des langues étrangères',
      icon: Globe,
      color: '#00C9A7',
      url: '#',
    },
    {
      name: 'Altissia',
      description: 'Formation linguistique en ligne avec cours interactifs',
      icon: Video,
      color: '#FF9800',
      url: '#',
    },
    {
      name: 'Microsoft Teams',
      description: 'Rejoignez vos classes virtuelles et collaborez avec vos formateurs',
      icon: Video,
      color: '#9C27B0',
      url: '#',
    },
  ];

  const recentCourses = [
    {
      title: 'Introduction à Java',
      progress: 75,
      lastAccess: 'Il y a 2 heures',
    },
    {
      title: 'Base de données relationnelles',
      progress: 60,
      lastAccess: 'Hier',
    },
    {
      title: 'HTML & CSS Avancé',
      progress: 90,
      lastAccess: 'Il y a 3 jours',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">E-learning</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Accédez à vos ressources de formation en ligne
        </p>
      </div>

      {/* Plateformes */}
      <div>
        <h2 className="text-gray-900 dark:text-white mb-4">Plateformes disponibles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: platform.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white mb-2">{platform.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {platform.description}
                    </p>
                    <Button className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Accéder
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Cours récents */}
      <div>
        <h2 className="text-gray-900 dark:text-white mb-4">Cours en cours</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentCourses.map((course, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">
                <h3 className="text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Dernier accès: {course.lastAccess}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progression</span>
                  <span className="text-gray-900 dark:text-white">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-[#232936] rounded-full h-2">
                  <div
                    className="bg-[#00C9A7] h-2 rounded-full transition-all"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Continuer
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Ressources */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">Ressources utiles</h3>
        <div className="space-y-3">
          {[
            'Guide d\'utilisation des plateformes',
            'Tutoriels vidéo',
            'FAQ E-learning',
            'Support technique',
          ].map((resource, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#1E88E5]" />
                <span className="text-gray-900 dark:text-white">{resource}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
