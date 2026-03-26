import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { FileText, Plus, Clock, CheckCircle2 } from 'lucide-react';

export function StagiaireAttestations() {
  const [requests, setRequests] = useState([
    {
      id: 'REQ-002',
      date: '10 Mars 2026',
      type: 'Attestation de scolarité',
      status: 'Prête pour récupération le jeudi/vendredi',
    },
    {
      id: 'REQ-001',
      date: '15 Sep 2025',
      type: 'Attestation de scolarité',
      status: 'Récupérée',
    }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setRequests([
        {
          id: `REQ-00${requests.length + 1}`,
          date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
          type: 'Attestation de scolarité',
          status: 'En cours',
        },
        ...requests
      ]);
      setIsSubmitting(false);
    }, 800);
  };

  const getStatusBadge = (status) => {
    if (status === 'En cours') {
      return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400">En cours</Badge>;
    }
    if (status.includes('Prête')) {
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400">Prête</Badge>;
    }
    return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400">Récupérée</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#1E88E5]" />
            Demande d'attestation
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Demandez vos attestations de scolarité et suivez l'état d'avancement.
          </p>
        </div>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#1E88E5] hover:bg-[#1565C0] flex items-center gap-2">
          {isSubmitting ? (
            <Clock className="w-4 h-4 animate-spin" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
          Soumettre une demande
        </Button>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
          Historique de vos demandes
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-[#1a1f2e] text-gray-600 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 font-medium rounded-tl-lg">ID Demande</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Type d'attestation</th>
                <th className="px-4 py-3 font-medium rounded-tr-lg">Statut</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => (
                <tr key={idx} className="border-b dark:border-gray-800 last:border-0">
                  <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">{req.id}</td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{req.date}</td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{req.type}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusBadge(req.status)}
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {req.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                    Aucune demande effectuée pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}