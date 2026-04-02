import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Calendar, Download, Eye } from 'lucide-react';

export function StagiaireManagerSchedule() {
  const [selectedGroup, setSelectedGroup] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">
            Consultation des emplois du temps
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Consultez les emplois du temps des différentes filières et groupes
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Exporter le planning
        </Button>
      </div>

      {/* View Schedule */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-medium">
                Emploi du temps
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Consultation uniquement
              </p>
            </div>
          </div>
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sélectionner un groupe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TDD201">TDD201</SelectItem>
              <SelectItem value="TDD202">TDD202</SelectItem>
              <SelectItem value="TDD203">TDD203</SelectItem>
              <SelectItem value="TRI101">TRI101</SelectItem>
              <SelectItem value="TSGE101">TSGE101</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedGroup ? (
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-[#232936]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Heure</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Lundi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Mardi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Mercredi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Jeudi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Vendredi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Samedi</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">08:00-10:00</td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Mathématiques</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. Alaoui - Salle 101</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Programmation C</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. El Fassi - Lab 03</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Réseaux</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Benjelloun - Salle 205</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Base de données</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Idrissi - Lab 02</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Anglais</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Mansouri - Salle 103</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 bg-gray-50 dark:bg-[#232936]">
                      <span className="text-xs text-gray-400">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">10:00-12:00</td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Base de données</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Idrissi - Lab 02</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Mathématiques</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. Alaoui - Salle 101</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Programmation C</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. El Fassi - Lab 03</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Anglais</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Mansouri - Salle 103</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Réseaux</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Benjelloun - Salle 205</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 bg-gray-50 dark:bg-[#232936]">
                      <span className="text-xs text-gray-400">-</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-[#1a1f2e]">
                    <td colSpan={7} className="px-4 py-2 text-center text-sm text-gray-500 dark:text-gray-400">
                      Pause déjeuner
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">14:00-16:00</td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Programmation C</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. El Fassi - Lab 03</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Réseaux</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Benjelloun - Salle 205</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Mathématiques</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. Alaoui - Salle 101</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Base de données</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Idrissi - Lab 02</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Projet</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. El Fassi - Lab 01</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 bg-gray-50 dark:bg-[#232936]">
                      <span className="text-xs text-gray-400">-</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Eye className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Sélectionnez un groupe pour voir son emploi du temps
            </p>
          </div>
        )}
      </Card>

      {/* Info Card */}
      <Card className="p-6 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <Eye className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              Mode consultation uniquement
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Vous pouvez consulter et exporter les emplois du temps, mais seul le Directeur peut les modifier.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}