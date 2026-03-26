import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Download, Calendar as CalendarIcon } from 'lucide-react';

export function StagiaireSchedule() {
   const schedule = {
    lundi: [
      { time: '08:30-10:50', module: 'Programmation Javascript', formateur: 'Prof. Youssef YAZIDI ALAOUI', salle: 'SDD3' },
      { time: '11:05-13:15', module: 'Base de données', formateur: 'Prof. Mounia NAAMANY', salle: 'SDD2' },
      { time: '13:30-15:50', module: 'TP Javascript', formateur: 'Prof. Youssef YAZIDI ALAOUI', salle: 'SDD3' },
    ],
    mardi: [
      { time: '08:30-10:50', module: 'Développement Front-end', formateur: 'Prof. Bouchra EL AKEL', salle: 'SDD1' },
      { time: '11:05-13:15', module: 'Anglais technique', formateur: 'Prof. Othmane GUEDDALI', salle: 'SL1' },
      { time: '13:30-15:50', module: 'TP Web', formateur: 'Prof. Bouchra EL AKEL', salle: 'SDD1' },
    ],
    mercredi: [
      { time: '08:30-10:50', module: 'Réseaux informatiques', formateur: 'Prof. Anas BOUYBANINE', salle: 'SID1' },
      { time: '11:05-13:15', module: 'PFE', formateur: 'Équipe pédagogique', salle: 'SDD4' },
    ],
    jeudi: [
      { time: '08:30-10:50', module: 'Base de données', formateur: 'Prof. Mounia NAAMANY', salle: 'SDD2' },
      { time: '11:05-13:15', module: 'TP Base de données', formateur: 'Prof. Mounia NAAMANY', salle: 'SDD2' },
      { time: '13:30-15:50', module: 'Développement Web', formateur: 'Prof. Bouchra EL AKEL', salle: 'SDD1' },
    ],
    vendredi: [
      { time: '08:30-10:40', module: 'Programmation Javascript', formateur: 'Prof. Youssef YAZIDI ALAOUI', salle: 'SDD3' },
      { time: '10:50-13:00', module: 'Réseaux informatiques', formateur: 'Prof. Anas BOUYBANINE', salle: 'SID1' },
    ],
  };

  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  const daysLabels = {
    lundi: 'Lundi',
    mardi: 'Mardi',
    mercredi: 'Mercredi',
    jeudi: 'Jeudi',
    vendredi: 'Vendredi',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Emploi du temps</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Semaine du 9 au 13 Mars 2026
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Changer de semaine
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Télécharger PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {days.map((day) => (
          <Card key={day} className="overflow-hidden">
            <div className="bg-[#1E88E5] text-white px-6 py-3">
              <h3 className="text-white">{daysLabels[day]}</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {schedule[day].map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#232936] rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-24 text-center">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {course.time}
                      </p>
                    </div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Module</p>
                        <p className="text-gray-900 dark:text-white">{course.module}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Formateur</p>
                        <p className="text-gray-900 dark:text-white">{course.formateur}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Salle</p>
                        <p className="text-gray-900 dark:text-white">{course.salle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}