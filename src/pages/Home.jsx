import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowRight, Users, BookOpen, Award, MapPin, Clock, Calendar } from 'lucide-react';
import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const filieres = [
    {
      title: 'Développement Digital',
      duration: '2 ans',
      description: 'Formation complète en développement web et mobile, incluant les dernières technologies.',
    },
    {
      title: 'Infrastructure Digitale',
      duration: '2 ans',
      description: 'Spécialisation en administration système, réseaux et sécurité informatique.',
    },
    {
      title: 'Infographie',
      duration: '2 ans',
      description: 'Formation spécialisée en communication visuelle, création graphique et maîtrise des outils de PAO pour l\'impression et le digital.',
    },
  ];

  const actualites = [
    {
      title: 'Rentrée Académique 2025/2026',
      date: '06 Septembre 2025',
      description: 'Les inscriptions pour la nouvelle année académique sont maintenant ouvertes.',
      // image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MjQ0NjQzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      image: '/images/actualites/1.jpg',
    },
    {
      title: 'Journée Portes Ouvertes',
      date: '19 Mars 2026',
      description: 'Venez découvrir nos formations et rencontrer notre équipe pédagogique.',
      // image: 'https://images.unsplash.com/photo-1762329386486-f38ef2077a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjUyMzIyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      image: '/images/actualites/2.jpg',
    },
    {
      title: 'Partenariat avec le Secteur Privé',
      date: '14 Mai 2026',
      description: 'Nouveaux accords de partenariat pour stages et emplois de nos diplômés.',
      // image: 'https://images.unsplash.com/photo-1758813240178-19ef760ded2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI1MzA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      image: '/images/actualites/3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#141820]">
      <PublicHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white text-4xl md:text-1xl font-bold leading-tight">
              Institut Spécialisé dans les Métiers de l'Offshoring et les Nouvelles Technologies de l'Information et de la Communication
            </h1>
            <p className="text-xl mb-8 text-blue-50">
              Formez-vous aux métiers du digital et de la technologie dans un environnement moderne et professionnalisant
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/presentation">
                  Voir plus d'informations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 dark:text-white mb-6">À propos de l'ISMONTIC</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                L'ISMONTIC est un établissement de formation professionnelle spécialisé dans les métiers de l'offshoring et les nouvelles technologies de l'information et de la communication. Notre mission est de former des techniciens spécialisés 
                hautement qualifiés pour répondre aux besoins du marché.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nous offrons des formations de qualité, encadrées par des professionnels du secteur, 
                avec des équipements modernes et des méthodes pédagogiques innovantes. 
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-[#1a1f2e] rounded-lg">
                  <Users className="w-8 h-8 mx-auto mb-2 text-[#1E88E5]" />
                  <p className="text-gray-900 dark:text-white">+500</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stagiaires</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-[#1a1f2e] rounded-lg">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-[#00C9A7]" />
                  <p className="text-gray-900 dark:text-white">15+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Formateurs</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-[#1a1f2e] rounded-lg">
                  <Award className="w-8 h-8 mx-auto mb-2 text-[#1E88E5]" />
                  <p className="text-gray-900 dark:text-white">95%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Taux d'insertion</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="./unnamed.webp"
                alt="ISMONTIC Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filières Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1f2e]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Nos Filières</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez nos formations spécialisées conçues pour vous préparer aux métiers d'avenir
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filieres.map((filiere, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{filiere.title}</h3>
                <p className="text-sm text-[#00C9A7] mb-3">{filiere.duration}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {filiere.description}
                </p>
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/filieres">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Actualités & Annonces</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Restez informé des dernières nouvelles de l'ISMONTIC
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {actualites.map((actu, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={actu.image}
                    alt={actu.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {actu.date}
                  </div>
                  <h3 className="text-gray-900 dark:text-white mb-2">{actu.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {actu.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localisation Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a1f2e]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-gray-900 dark:text-white mb-6">Nous trouver</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1E88E5] mt-1" />
                  <div>
                    <p className="text-gray-900 dark:text-white mb-1">Adresse</p>
                    <p className="text-gray-600 dark:text-gray-400">
                       Av. des Forces Armées Royales, Tanger, Maroc
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1E88E5] mt-1" />
                  <div>
                    <p className="text-gray-900 dark:text-white mb-1">Horaires d'accueil</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lundi - Vendredi: 8h30 - 18h30<br />
                      Samedi: 9h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" size="lg" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
            <div className="h-[400px] bg-gray-200 dark:bg-[#232936] rounded-2xl flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}