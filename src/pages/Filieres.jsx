import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookOpen, Clock, Award, TrendingUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Filieres() {
  const filieres = [
    {
      title: 'Développement Digital',
      code: 'DD',
      duration: '2 ans',
      niveau: 'Technicien Spécialisé',
      description: 'Formation complète aux métiers du développement web et mobile avec les technologies les plus récentes.',
      modules: [
        'Programmation Web (HTML, CSS, JavaScript)',
        'Frameworks modernes (React, Angular, Vue.js)',
        'Développement Backend (PHP, Node.js, Java)',
        'Bases de données (SQL, NoSQL)',
        'Développement Mobile (Android, iOS)',
        'DevOps et déploiement',
      ],
      debouches: [
        'Développeur Web Full Stack',
        'Développeur Mobile',
        'Développeur Frontend/Backend',
        'Intégrateur Web',
      ],
      color: '#1E88E5',
    },
    {
      title: 'Infrastructure Digitale',
      code: 'ID',
      duration: '2 ans',
      niveau: 'Technicien Spécialisé',
      description: 'Spécialisation en administration système, réseaux informatiques et cybersécurité.',
      modules: [
        'Administration Système (Linux, Windows Server)',
        'Réseaux informatiques (Cisco, routage, switching)',
        'Virtualisation et Cloud Computing',
        'Sécurité informatique et Cybersécurité',
        'Supervision et monitoring',
        'Scripts et automatisation',
      ],
      debouches: [
        'Administrateur Système et Réseaux',
        'Technicien Support IT',
        'Ingénieur Cybersécurité',
        'Administrateur Cloud',
      ],
      color: '#00C9A7',
    },
    {
      title: 'Infographie',
      code: 'INFO',
      duration: '2 ans',
      niveau: 'Technicien Spécialisé',
      description: 'Formation spécialisée dans la communication visuelle, la création graphique et la maîtrise des outils de PAO pour l\'impression et le digital.',
      modules: [
        'Adobe Photoshop (Traitement d\'image)',
        'Adobe Illustrator (Dessin vectoriel)',
        'Adobe InDesign (Mise en page)',
        'Théorie des couleurs et Typographie',
        'Conception UI/UX (Web & Mobile)',
        'Motion Design et Montage Vidéo',
      ],
      debouches: [
        'Infographiste 2D/3D',
        'Webdesigner / UI Designer',
        'Maquettiste PAO',
        'Directeur Artistique Junior',
      ],
      color: '#E91E63',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#141820]">
      <PublicHeader />

      <div className="bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-white mb-4">Nos Filières de Formation</h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Découvrez nos programmes de formation professionnelle adaptés aux besoins du marché
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="space-y-12">
          {filieres.map((filiere, index) => (
            <Card key={index} className="overflow-hidden">
              <div
                className="h-2"
                style={{ backgroundColor: filiere.color }}
              ></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${filiere.color}20` }}
                      >
                        <BookOpen className="w-6 h-6" style={{ color: filiere.color }} />
                      </div>
                      <div>
                        <h2 className="text-gray-900 dark:text-white">{filiere.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Code: {filiere.code} • Niveau: {filiere.niveau}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {filiere.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span>{filiere.duration}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-[#1E88E5]" />
                      <h3 className="text-gray-900 dark:text-white">Modules de formation</h3>
                    </div>
                    <ul className="space-y-2">
                      {filiere.modules.map((module, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: filiere.color }}></span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-[#00C9A7]" />
                      <h3 className="text-gray-900 dark:text-white">Débouchés professionnels</h3>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {filiere.debouches.map((debouche, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#00C9A7]"></span>
                          {debouche}
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 bg-gray-50 dark:bg-[#1a1f2e] rounded-lg">
                      <h4 className="text-gray-900 dark:text-white mb-2">Taux d'insertion</h4>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-gray-900 dark:text-white">95%</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">de nos diplômés trouvent un emploi</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-[#232936] rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{ width: '95%', backgroundColor: filiere.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t dark:border-gray-800 flex gap-3">
                  <Button asChild style={{ backgroundColor: filiere.color }}>
                    <Link to="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Nous contacter pour plus d'informations
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-8 mt-12 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Prêt à rejoindre l'ISMONTIC ?</h2>
            <p className="text-blue-50 mb-6">
              Contactez-nous dès maintenant pour commencer votre parcours vers une carrière réussie dans le digital
            </p>
            <div className="flex justify-center gap-3">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <PublicFooter />
    </div>
  );
}