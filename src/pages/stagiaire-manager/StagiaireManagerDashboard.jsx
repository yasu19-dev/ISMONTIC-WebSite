import { Card } from '../../components/ui/card';
import { StatCard } from '../../components/StatCard';
import { Users, FileText, AlertTriangle, CheckCircle, FileCheck, BarChart3 } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Link } from 'react-router-dom';

export function StagiaireManagerDashboard() {
  const recentAttestations = [
    { student: 'Ahmed Bennani', type: 'Scolarité', status: 'En attente', date: 'Il y a 2h' },
    { student: 'Fatima Zahra', type: 'Stage', status: 'Validée', date: 'Il y a 5h' },
    { student: 'Mohammed Alaoui', type: 'Notes', status: 'Livrée', date: 'Hier' },
  ];

  const alerts = [
    { message: 'TDD101: Taux d\'absence supérieur à 15%', severity: 'high' },
    { message: '8 demandes d\'attestations en attente', severity: 'medium' },
    { message: '12 justifications à traiter', severity: 'medium' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Livrée':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Validée':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'En attente':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

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
        <h1 className="text-gray-900 dark:text-white mb-2">
          Tableau de bord Responsable Stagiaire
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gestion des stagiaires et suivi des demandes
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Taux d'absences global"
          value="8.5%"
          icon={AlertTriangle}
          trend={{ value: '-1.2%', isPositive: true }}
          color="#FF9800"
        />
        <StatCard
          title="Justifications en attente"
          value="12"
          icon={FileCheck}
          trend={{ value: '+3', isPositive: false }}
          color="#1E88E5"
        />
        <StatCard
          title="Demandes d'attestations"
          value="8"
          icon={FileText}
          color="#EF5350"
        />
        <StatCard
          title="Stagiaires actifs"
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
            <h3 className="text-gray-900 dark:text-white">Alertes</h3>
          </div>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${getSeverityColor(alert.severity)}`}
              >
                <p className="text-sm text-gray-900 dark:text-white">{alert.message}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Demandes récentes d'attestations */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">Attestations récentes</h3>
              <Badge variant="destructive" className="ml-2">
                8
              </Badge>
            </div>
            <Link
              to="/stagiaire-manager/attestations"
              className="text-sm text-[#1E88E5] hover:underline flex items-center gap-1"
            >
              Voir tout
            </Link>
          </div>
          <div className="space-y-3">
            {recentAttestations.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {item.student}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.type} - {item.date}
                  </p>
                </div>
                <Badge variant="outline" className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">Actions rapides</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/stagiaire-manager/attestations"
            className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center relative">
              <FileText className="w-5 h-5 text-white" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                8
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Attestations en attente
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Traiter les demandes
              </p>
            </div>
          </Link>

          <Link
            to="/stagiaire-manager/justifications"
            className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Justifications d'absences
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Valider les justificatifs
              </p>
            </div>
          </Link>

          <Link
            to="/stagiaire-manager/absences-stats"
            className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Statistiques d'absences
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Analyser les données
              </p>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}