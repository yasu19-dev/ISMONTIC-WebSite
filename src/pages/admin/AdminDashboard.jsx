import { Card } from '../../components/ui/card';
import { StatCard } from '../../components/StatCard';
import { Users, FileText, AlertTriangle, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export function AdminDashboard() {
  const recentAttestations = [
    { student: 'Zaid SAOUSAOU', type: 'Scolarité', status: 'En attente', date: 'Il y a 2h' },
    { student: 'Yamine HARROUDI', type: 'Stage', status: 'Validée', date: 'Il y a 5h' },
    { student: 'Aya BELGHAZI', type: 'Notes', status: 'Livrée', date: 'Hier' },
  ];

  const alerts = [
    { message: 'ID202: Taux d\'absence supérieur à 15%', severity: 'high' },
    { message: '8 demandes d\'attestations en attente', severity: 'medium' },
    { message: 'Backup système effectué avec succès', severity: 'low' },
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
        <h1 className="text-gray-900 dark:text-white mb-2">Tableau de bord Administration</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Vue d'ensemble du système
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
          title="Réclamations"
          value="15"
          icon={FileText}
          trend={{ value: '+3', isPositive: false }}
          color="#1E88E5"
        />
        <StatCard
          title="Demandes d'attestations"
          value="23"
          icon={CheckCircle}
          color="#00C9A7"
        />
        <StatCard
          title="Utilisateurs actifs"
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
            <h3 className="text-gray-900 dark:text-white">Alertes système</h3>
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
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-[#1E88E5]" />
            <h3 className="text-gray-900 dark:text-white">Attestations récentes</h3>
          </div>
          <div className="space-y-3">
            {recentAttestations.map((attestation, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{attestation.student}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {attestation.type} • {attestation.date}
                  </p>
                </div>
                <Badge className={getStatusColor(attestation.status)}>
                  {attestation.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Statistiques par filière */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">Statistiques par filière</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Développement Digital', students: 120, absences: '7.2%', color: '#1E88E5' },
            { name: 'Infrastructure Digitale', students: 95, absences: '9.5%', color: '#00C9A7' },
            { name: 'Infographie', students: 80, absences: '8.8%', color: '#9C27B0' },
          ].map((filiere, index) => (
            <div
              key={index}
              className="p-4 border dark:border-gray-800 rounded-lg"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${filiere.color}20` }}
              >
                <Users className="w-5 h-5" style={{ color: filiere.color }} />
              </div>
              <h4 className="text-gray-900 dark:text-white mb-3">{filiere.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Stagiaires</span>
                  <span className="text-gray-900 dark:text-white">{filiere.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Taux d'absence</span>
                  <span className="text-gray-900 dark:text-white">{filiere.absences}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Activité récente */}
      <Card className="p-6">
        <h3 className="text-gray-900 dark:text-white mb-4">Activité récente</h3>
        <div className="space-y-4">
          {[
            {
              icon: CheckCircle,
              color: '#00C9A7',
              text: 'Attestation validée pour Ahmed Bennani',
              time: 'Il y a 10 min',
            },
            {
              icon: Users,
              color: '#1E88E5',
              text: 'Nouvel utilisateur créé: Sara Idrissi',
              time: 'Il y a 30 min',
            },
            {
              icon: Clock,
              color: '#FF9800',
              text: 'Séance d\'absences enregistrée par Prof. El Amrani',
              time: 'Il y a 1h',
            },
            {
              icon: FileText,
              color: '#9C27B0',
              text: 'Nouvelle réclamation soumise',
              time: 'Il y a 2h',
            },
          ].map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: activity.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.text}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}