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
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  AlertCircle,
  Download,
  Filter,
  Clock,
  FileText,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../../components/ui/badge';

export function AdminAbsenceStats() {
  const [selectedFiliere, setSelectedFiliere] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedGroup, setSelectedGroup] = useState('all');

  // Statistiques globales
  const globalStats = [
    {
      title: 'Taux d\'absence global',
      value: '13.5%',
      icon: AlertCircle,
      trend: { value: '+2.3%', isPositive: false },
      color: '#EF5350',
    },
    {
      title: 'Taux par séance (Moy.)',
      value: '8.2%',
      icon: Clock,
      trend: { value: '-1.1%', isPositive: true },
      color: '#1E88E5',
    },
    {
      title: 'Taux par groupe (Max)',
      value: '18.4%',
      icon: Users,
      trend: { value: '+0.5%', isPositive: false },
      color: '#FF9800',
    },
    {
      title: 'Absences ce mois',
      value: '342',
      icon: Calendar,
      trend: { value: '+45', isPositive: false },
      color: '#FF9800',
    },
    {
      title: 'Étudiants absents',
      value: '89',
      icon: Users,
      trend: { value: '+12', isPositive: false },
      color: '#1E88E5',
    },
    {
      title: 'Heures perdues',
      value: '1,368h',
      icon: Clock,
      trend: { value: '+180h', isPositive: false },
      color: '#9C27B0',
    },
  ];

  // Évolution mensuelle des absences
  const absencesEvolution = [
    { mois: 'Sept', absences: 245, taux: 10.2 },
    { mois: 'Oct', absences: 289, taux: 12.1 },
    { mois: 'Nov', absences: 312, taux: 13.0 },
    { mois: 'Déc', absences: 298, taux: 12.5 },
    { mois: 'Jan', absences: 325, taux: 13.6 },
    { mois: 'Fév', absences: 342, taux: 14.3 },
  ];

  // Absences par filière
  const absencesParFiliere = [
    { filiere: 'DD', absences: 170, taux: 15.2 },
    { filiere: 'ID', absences: 98, taux: 12.8 },
    { filiere: 'Info', absences: 67, taux: 10.1 },
  ];

  // Répartition des types d'absences
  const typesAbsences = [
    { name: 'Non justifiées', value: 182, color: '#EF5350' },
    { name: 'Justifiées', value: 98, color: '#00C9A7' },
    { name: 'Médicales', value: 42, color: '#1E88E5' },
    { name: 'En attente', value: 20, color: '#FF9800' },
  ];

  // Absences par jour de la semaine
  const absencesParJour = [
    { jour: 'Lun', absences: 45 },
    { jour: 'Mar', absences: 38 },
    { jour: 'Mer', absences: 42 },
    { jour: 'Jeu', absences: 51 },
    { jour: 'Ven', absences: 68 },
    { jour: 'Sam', absences: 35 },
  ];

  // Absences par créneau horaire
  const absencesParCreneau = [
    { creneau: '8h-11h', absences: 52 },
    { creneau: '11h-13h', absences: 45 },
    { creneau: '13h-16h', absences: 38 },
    { creneau: '16h-18h', absences: 62 },
  ];

  // Top étudiants absents
  const topAbsents = [
    {
      name: 'Imane TRIBAK',
      filiere: 'DD',
      groupe: 'DEVWOFS201',
      absences: 28,
      justifiees: 8,
    },
    {
      name: 'Oussama TKITAK',
      filiere: 'DD',
      groupe: 'DEVWOFS202',
      absences: 24,
      justifiees: 5,
    },
    {
      name: 'IHsane MOTICH',
      filiere: 'ID',
      groupe: 'ID202',
      absences: 22,
      justifiees: 12,
    },
    {
      name: 'Taha ROUGUI',
      filiere: 'Info',
      groupe: 'INFO201',
      absences: 19,
      justifiees: 3,
    },
    {
      name: 'Hanae SENHAYI',
      filiere: 'DD',
      groupe: 'DEVWOFS205',
      absences: 17,
      justifiees: 10,
    },
  ];

  // Modules avec plus d'absences
  const modulesAbsences = [
    { module: 'Javascript', absences: 78, formateur: 'Mme. NAAMANY' },
    { module: 'Réseaux', absences: 65, formateur: 'M. BOUYBANINE' },
    { module: 'POO', absences: 58, formateur: 'Mme. RIAD' },
    { module: 'Base de données', absences: 52, formateur: 'Mme. EL AKEL' },
    { module: 'Anglais', absences: 48, formateur: 'M. GUEDDALII' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">
            Statistiques d'absences
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Analyse complète des absences par filière, module et période
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Générer rapport
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exporter données
          </Button>
        </div>
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
              Vue analytique
            </label>
            <Select defaultValue="global">
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une vue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Vue globale</SelectItem>
                <SelectItem value="seance">Taux par séance</SelectItem>
                <SelectItem value="groupe">Taux par groupe</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Filière
            </label>
            <Select value={selectedFiliere} onValueChange={setSelectedFiliere}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une filière" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les filières</SelectItem>
                <SelectItem value="DD">DD</SelectItem>
                <SelectItem value="ID">ID</SelectItem>
                <SelectItem value="Info">Infographie</SelectItem>
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
                <SelectItem value="DD201">DEVWOFS201</SelectItem>
                <SelectItem value="DD202">DEVWOFS202</SelectItem>
                <SelectItem value="DD203">DEVWOFS203</SelectItem>
                <SelectItem value="DD204">DEVWOFS204</SelectItem>
                <SelectItem value="DD205">DEVWOFS205</SelectItem>
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
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
                <SelectItem value="semester">Ce semestre</SelectItem>
                <SelectItem value="year">Cette année</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Statistiques globales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {globalStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Graphiques */}
      <Tabs defaultValue="evolution" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="evolution">Évolution</TabsTrigger>
          <TabsTrigger value="filieres">Par filière</TabsTrigger>
          <TabsTrigger value="types">Types d'absences</TabsTrigger>
          <TabsTrigger value="patterns">Tendances</TabsTrigger>
        </TabsList>

        <TabsContent value="evolution" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Évolution mensuelle des absences
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={absencesEvolution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis
                  dataKey="mois"
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
                <Line
                  type="monotone"
                  dataKey="absences"
                  stroke="#EF5350"
                  strokeWidth={3}
                  dot={{ fill: '#EF5350', r: 5 }}
                  name="Nombre d'absences"
                />
                <Line
                  type="monotone"
                  dataKey="taux"
                  stroke="#FF9800"
                  strokeWidth={2}
                  dot={{ fill: '#FF9800', r: 4 }}
                  name="Taux (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="filieres" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Absences par filière
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={absencesParFiliere}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis
                  dataKey="filiere"
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
                <Bar
                  dataKey="absences"
                  fill="#1E88E5"
                  name="Nombre d'absences"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="taux"
                  fill="#EF5350"
                  name="Taux (%)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Répartition par type
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={typesAbsences}
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
                    {typesAbsences.map((entry, index) => (
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

            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Détails par type
              </h3>
              <div className="space-y-4">
                {typesAbsences.map((type, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: type.color }}
                        ></div>
                        <span className="text-sm text-gray-900 dark:text-white">
                          {type.name}
                        </span>
                      </div>
                      <span className="text-gray-900 dark:text-white">
                        {type.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${(type.value / 342) * 100}%`,
                          backgroundColor: type.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Absences par jour de la semaine
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={absencesParJour}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis
                    dataKey="jour"
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
                  <Bar
                    dataKey="absences"
                    fill="#9C27B0"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Absences par créneau horaire
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={absencesParCreneau}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis
                    dataKey="creneau"
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
                  <Bar
                    dataKey="absences"
                    fill="#FF9800"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Tableaux d'analyse */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Top étudiants absents */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-gray-900 dark:text-white">
              Étudiants les plus absents
            </h3>
          </div>
          <div className="space-y-3">
            {topAbsents.map((student, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {student.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {student.filiere} - {student.groupe}
                      </p>
                    </div>
                  </div>
                  <Badge variant="destructive">{student.absences}</Badge>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-green-600 dark:text-green-400">
                    {student.justifiees} justifiées
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-red-600 dark:text-red-400">
                    {student.absences - student.justifiees} non justifiées
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Modules avec plus d'absences */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-gray-900 dark:text-white">
              Modules avec le plus d'absences
            </h3>
          </div>
          <div className="space-y-3">
            {modulesAbsences.map((module, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white mb-1">
                    {module.module}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {module.formateur}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                    {module.absences}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alertes et recommandations */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">
          Alertes et recommandations
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white mb-1">
                Taux d'absence élevé le vendredi après-midi
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                25% d'absences en moyenne - Recommandation : Vérifier le planning
                et les modules programmés
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-lg">
            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white mb-1">
                89 étudiants nécessitent un suivi
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Plus de 15% d'absences - Action requise : Convocation et suivi
                personnalisé
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white mb-1">
                182 absences non justifiées en attente
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Recommandation : Relancer les étudiants pour justification sous 48h
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}