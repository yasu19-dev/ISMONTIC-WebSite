import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { Card } from '../components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function Presentation() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans la formation de nos stagiaires',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Un environnement propice au travail d\'équipe et au partage',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Des formations certifiées et reconnues par les professionnels',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Adoption des dernières technologies et méthodes pédagogiques',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#141820]">
      <PublicHeader />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 dark:text-white mb-6 text-center">
            Présentation de l'ISMONTIC
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
            Un établissement de référence dans la formation aux métiers du digital
          </p>

          <Card className="p-8 mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Notre Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
             L'Institut Spécialisé des Métiers de l'Offshoring et des Nouvelles Technologies de l'Information (ISMONTIC)
            a pour mission de former des techniciens spécialisés hautement qualifiés dans les domaines
            de pointe du secteur numérique.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Créé pour répondre aux besoins croissants du marché de l'emploi en compétences techniques,
              l'ISMONTIC offre des formations pratiques et professionnalisantes, encadrées par des
              formateurs expérimentés issus du monde de l'entreprise.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Notre approche pédagogique combine théorie et pratique, avec une forte orientation vers
              les projets réels et les stages en entreprise, garantissant ainsi une excellente insertion
              professionnelle de nos diplômés.
            </p>
          </Card>

          <h2 className="text-gray-900 dark:text-white mb-6 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1E88E5]" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white">
            <h2 className="text-white mb-4 text-center">Nos Chiffres Clés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-white mb-1">+500</p>
                <p className="text-blue-100">Stagiaires</p>
              </div>
              <div>
                <p className="text-white mb-1">15+</p>
                <p className="text-blue-100">Formateurs</p>
              </div>
              <div>
                <p className="text-white mb-1">95%</p>
                <p className="text-blue-100">Taux d'insertion</p>
              </div>
              <div>
                <p className="text-white mb-1">50+</p>
                <p className="text-blue-100">Partenaires</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}
