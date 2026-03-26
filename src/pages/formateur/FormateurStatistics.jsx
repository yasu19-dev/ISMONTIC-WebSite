import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { StatCard } from '../../components/StatCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Users,
  TrendingUp,
  TrendingDown,
  Award,
  Calendar,
  FileText,
  Download,
  Filter,
} from 'lucide-react';
import { useState } from 'react';

export function FormateurStatistics() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('semester');

  // Données statistiques globales
  const globalStats = [
    {
      title: 'Total étudiants',
      value: '156',
      icon: Users,
      trend: { value: '+12', isPositive: true },
      color: '#1E88E5',
    },
    {
      title: 'Moyenne générale',
      value: '14.2/20',
      icon: Award,
      trend: { value: '+0.8', isPositive: true },
      color: '#00C9A7',
    },
    {
      title: 'Taux de présence',
      value: '87%',
      icon: Calendar,
      trend: { value: '-3%', isPositive: false },
      color: '#FF9800',
    },
    {
      title: 'Taux de réussite',
      value: '92%',
      icon: TrendingUp,
      trend: { value: '+5%', isPositive: true },
      color: '#9C27B0',
    },
  ];

  // Données pour le graphique d'évolution des moyennes
  const moyennesData = [
    { mois: 'Sept', moyenne: 12.5 },
    { mois: 'Oct', moyenne: 13.2 },
    { mois: 'Nov', moyenne: 13.8 },
    { mois: 'Déc', moyenne: 14.1 },
    { mois: 'Jan', moyenne: 13.9 },
    { mois: 'Fév', moyenne: 14.2 },
  ];

  // Données pour le graphique de présence par module
  const presenceData = [
    { module: 'Javascript', present: 85, absent: 15 },
    { module: 'Front-end', present: 90, absent: 10 },
    { module: 'BDD', present: 78, absent: 22 },
    { module: 'Back-end', present: 88, absent: 12 },
    { module: 'Réseaux', present: 82, absent: 18 },
  ];

  // Données pour la répartition des notes
  const notesDistribution = [
    { range: '0-5', count: 5 },
    { range: '5-10', count: 18 },
    { range: '10-12', count: 32 },
    { range: '12-14', count: 48 },
    { range: '14-16', count: 38 },
    { range: '16-18', count: 12 },
    { range: '18-20', count: 3 },
  ];

  // Données pour la répartition par mention
  const mentionsData = [
    { name: 'Excellent', value: 15, color: '#00C9A7' },
    { name: 'Très bien', value: 28, color: '#1E88E5' },
    { name: 'Bien', value: 35, color: '#FF9800' },
    { name: 'Passable', value: 18, color: '#9C27B0' },
    { name: 'Insuffisant', value: 4, color: '#EF5350' },
  ];

  // Meilleurs étudiants
  const topStudents = [
    { name: 'Zaid Saousaou', moyenne: 18.5, groupe: 'DEVOWFS201' },
    { name: 'Yasmine Harroudi', moyenne: 17.8, groupe: 'DEVOWFS201' },
    { name: 'Aya Belghazi', moyenne: 17.2, groupe: 'DEVOWFS201' },
    { name: 'Oussama tkitak', moyenne: 16.9, groupe: 'DEVOWFS203' },
    { name: 'Adnan fahsi', moyenne: 16.5, groupe: 'DEVOWFS202' },
  ];

  // Étudiants en difficulté
  const strugglingStudents = [
    { name: 'Anas lazar', moyenne: 8.2, absences: 12, groupe: 'DEVOWFS203' },
    { name: 'Amal ettaliqui', moyenne: 9.1, absences: 8, groupe: 'DEVOWFS201' },
    { name: 'Imane tribak', moyenne: 9.8, absences: 15, groupe: 'DEVOWFS202' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Statistiques</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Suivez les performances et la progression de vos étudiants
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Exporter le rapport
        </Button>
      </div>

      {/* Filtres */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <h3 className="text-gray-900 dark:text-white">Filtres</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Vue des absences
            </label>
            <Select defaultValue="seance">
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une vue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seance">Taux par séance</SelectItem>
                <SelectItem value="groupe">Taux par groupe</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Groupe
            </label>
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un groupe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les groupes</SelectItem>
                <SelectItem value="DEVOWFS201">DEVOWFS201</SelectItem>
                <SelectItem value="DEVOWFS202">DEVOWFS202</SelectItem>
                <SelectItem value="DEVOWFS203">DEVOWFS203</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Module
            </label>
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les modules</SelectItem>
                <SelectItem value="java">Programmation Javascript</SelectItem>
                <SelectItem value="web">Développement Front-end</SelectItem>
                <SelectItem value="bdd">Base de données</SelectItem>
                <SelectItem value="reseau">Réseaux</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Période
            </label>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une période" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semester">Ce semestre</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
                <SelectItem value="year">Cette année</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Statistiques globales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {globalStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Graphiques */}
      <Tabs defaultValue="moyennes" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="moyennes">Évolution des moyennes</TabsTrigger>
          <TabsTrigger value="presence">Taux de présence</TabsTrigger>
          <TabsTrigger value="distribution">Distribution des notes</TabsTrigger>
        </TabsList>

        <TabsContent value="moyennes" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Évolution de la moyenne générale
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={moyennesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis
                  dataKey="mois"
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                  domain={[0, 20]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="moyenne"
                  stroke="#00C9A7"
                  strokeWidth={3}
                  dot={{ fill: '#00C9A7', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Moyenne"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="presence" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Taux de présence par module
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={presenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis
                  dataKey="module"
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Bar dataKey="present" fill="#1E88E5" name="Présents (%)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="absent" fill="#EF5350" name="Absents (%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Distribution des notes
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={notesDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis
                    dataKey="range"
                    stroke="#9CA3AF"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis
                    stroke="#9CA3AF"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Bar dataKey="count" fill="#9C27B0" name="Nombre d'étudiants" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Répartition par mention
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mentionsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mentionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Tableaux des étudiants */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Meilleurs étudiants */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#00C9A7]" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Meilleurs étudiants</h3>
          </div>
          <div className="space-y-3">
            {topStudents.map((student, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00C9A7] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {student.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {student.groupe}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {student.moyenne}/20
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Étudiants en difficulté */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-gray-900 dark:text-white">Étudiants en difficulté</h3>
          </div>
          <div className="space-y-3">
            {strugglingStudents.map((student, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {student.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {student.groupe}
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    {student.moyenne}/20
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {student.absences} absences
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Voir tous les étudiants
          </Button>
        </Card>
      </div>

      {/* Analyses complémentaires */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-[#1E88E5]" />
            <h3 className="text-gray-900 dark:text-white">
              Modules difficiles
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { module: 'Réseaux', moyenne: 11.2 },
              { module: 'Base de données', moyenne: 12.5 },
              { module: 'Programmation Mobile', moyenne: 13.1 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-[#232936] rounded"
              >
                <span className="text-sm text-gray-900 dark:text-white">
                  {item.module}
                </span>
                <span className="text-sm text-orange-600 dark:text-orange-400">
                  {item.moyenne}/20
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-[#00C9A7]" />
            <h3 className="text-gray-900 dark:text-white">
              Modules réussis
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { module: 'Développement Front-end', moyenne: 15.8 },
              { module: 'Programmation Javascript', moyenne: 14.9 },
              { module: 'Gestion de projet', moyenne: 14.5 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-[#232936] rounded"
              >
                <span className="text-sm text-gray-900 dark:text-white">
                  {item.module}
                </span>
                <span className="text-sm text-green-600 dark:text-green-400">
                  {item.moyenne}/20
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-[#FF9800]" />
            <h3 className="text-gray-900 dark:text-white">
              Tendances absences
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { jour: 'Lundi matin', taux: '18%' },
              { jour: 'Vendredi après-midi', taux: '25%' },
              { jour: 'Mercredi matin', taux: '12%' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-[#232936] rounded"
              >
                <span className="text-sm text-gray-900 dark:text-white">
                  {item.jour}
                </span>
                <span className="text-sm text-red-600 dark:text-red-400">
                  {item.taux}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}