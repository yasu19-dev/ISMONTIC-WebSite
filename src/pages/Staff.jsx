import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { Card } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Mail } from 'lucide-react';

export function Staff() {
  const direction = [
    {
      name: 'M. EL MECHRAFI Abdelhamid',
      role: 'Directeur du Complexe',
      email: 'a.mechrafi@ismontic.ma',
      initials: 'AM',
    },
    {
      name: 'M. ALILOU Saad ',
      role: 'Directeur Pédagogique',
      email: 's.alilou@ismontic.ma',
      initials: 'SA',
    },
  ];

  const administration = [
    {
      name: 'Mme. AYADI Hajiba ',
      role: 'Responsable Administrative',
      email: 'h.ayadi@ismontic.ma',
      initials: 'HA',
    },
    {
      name: 'M. SADIK Abdelmottalib',
      role: 'Gestionnaire des Stagiaires',
      email: 'a.sadik@ismontic.ma',
      initials: 'AS',
    },
    {
      name: 'M. MESSLOUHI Abdellah ',
      role: "Conseiller en Orientation",
      email: 'a.messlouhi@ismontic.ma',
      initials: 'AM',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#141820]">
      <PublicHeader />

      <div className="bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-white mb-4">Notre Équipe</h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Une équipe pédagogique expérimentée et dévouée à votre réussite
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Direction */}
          <div>
            <h2 className="text-gray-900 dark:text-white mb-6">Direction</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {direction.map((member, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-[#1E88E5] text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-gray-900 dark:text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {member.role}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-[#1E88E5] hover:underline flex items-center gap-1"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Administration */}
          <div>
            <h2 className="text-gray-900 dark:text-white mb-6">Service Administratif</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {administration.map((member, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-purple-500 text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-gray-900 dark:text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {member.role}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-[#1E88E5] hover:underline flex items-center gap-1"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}