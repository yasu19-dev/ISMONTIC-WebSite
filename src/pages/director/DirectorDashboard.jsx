import { Card } from '../../components/ui/card';
import { StatCard } from '../../components/StatCard';
import { Users, AlertTriangle, Calendar, BarChart3, Activity } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Link } from 'react-router-dom';

export function DirectorDashboard() {
  // Alertes système uniquement
  const alerts = [
    { message: 'TDD101: Taux d\'absence supérieur à 15%', severity: 'high' },
    { message: 'Import de l\'emploi du temps TRI à finaliser', severity: 'medium' },
    { message: 'Backup système effectué avec succès', severity: 'low' },
  ];

  // Remplacement des justifications par les derniers Logs d'activité (Table activity_logs)
  const recentLogs = [
    { action: 'Import Emploi du temps', user: 'Système', date: 'Il y a 10 min', color: 'text-blue-500' },
    { action: 'Nouvel utilisateur créé', user: 'Admin', date: 'Il y a 1h', color: 'text-green-500' },
    { action: 'Modification planning TDD201', user: 'Direction', date: 'Il y a 3h', color: 'text-orange-500' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'border-red-500 bg-red-50 dark:bg-red-900/10';
      case 'medium':
        return 'border-orange-500 bg-orange-50 dark:bg-orange-900/10';
      default:
        return 'border-blue-500 bg-blue-50 dark:bg-blue-900/10';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2 text-2xl font-bold">Tableau de bord Direction</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Pilotage stratégique et indicateurs de performance ISMONTIC
        </p>
      </div>

      {/* KPIs - Justifications supprimées */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Taux d'absences global"
          value="8.5%"
          icon={AlertTriangle}
          trend={{ value: '-1.2%', isPositive: true }}
          color="#FF9800"
        />
        <StatCard
          title="Emplois du temps actifs"
          value="15"
          icon={Calendar}
          color="#00C9A7"
        />
        <StatCard
          title="Utilisateurs inscrits"
          value="487"
          icon={Users}
          trend={{ value: '+12', isPositive: true }}
          color="#9C27B0"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Alertes système */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-[#FF9800]" />
            <h3 className="text-gray-900 dark:text-white font-semibold">Alertes critiques</h3>
          </div>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${getSeverityColor(alert.severity)}`}
              >
                <p className="text-sm text-gray-900 dark:text-white font-medium">{alert.message}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Logs d'activité (Remplace les justifications) */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white font-semibold">Dernières activités</h3>
            </div>
          </div>
          <div className="space-y-4">
            {recentLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">{log.action}</span>
                  <span className="text-xs text-gray-500">{log.user}</span>
                </div>
                <span className="text-xs text-gray-400">{log.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4 font-semibold">Actions de pilotage</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/admin/schedule"
            className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl hover:bg-blue-100 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Planning</p>
              <p className="text-xs text-gray-500">Importer Excel/PDF</p>
            </div>
          </Link>

          <Link
            to="/admin/absences-stats"
            className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl hover:bg-orange-100 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Analytique</p>
              <p className="text-xs text-gray-500">Taux d'absentéisme</p>
            </div>
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl hover:bg-purple-100 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Staff & Stagiaires</p>
              <p className="text-xs text-gray-500">Gestion des comptes</p>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}