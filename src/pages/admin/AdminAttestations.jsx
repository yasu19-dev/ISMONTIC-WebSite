import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Badge } from '../../components/ui/badge';
import { Search, FileText, Download, CheckCircle, XCircle, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';

export function AdminAttestations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

   const attestations = [
    {
      id: 'ATT-2025-001',
      student: 'Zaid SAOUSAOU',
      matricule: 'ST2025001',
      type: 'Attestation de scolarité',
      date: '2025-03-05',
      status: 'En attente',
      rdvDate: '2025-03-10',
      rdvTime: '10:00',
    },
    {
      id: 'ATT-2025-002',
      student: 'Yasmine HARROUDI',
      matricule: 'ST2025002',
      type: 'Attestation de stage',
      date: '2025-03-04',
      status: 'Validée',
      rdvDate: '2025-03-08',
      rdvTime: '14:00',
    },
    {
      id: 'ATT-2025-003',
      student: 'Aya BELGHAZI',
      matricule: 'ST2025003',
      type: 'Relevé de notes',
      date: '2025-03-03',
      status: 'Livrée',
      rdvDate: '2025-03-07',
      rdvTime: '09:30',
    },
    {
      id: 'ATT-2025-004',
      student: 'Oussama TKITAK',
      matricule: 'ST2025004',
      type: 'Attestation de scolarité',
      date: '2025-03-02',
      status: 'En attente',
      rdvDate: '2025-03-09',
      rdvTime: '11:00',
    },
    {
      id: 'ATT-2025-005',
      student: 'Anas LAZAR',
      matricule: 'ST2025005',
      type: 'Attestation de stage',
      date: '2025-03-01',
      status: 'Refusée',
      rdvDate: '-',
      rdvTime: '-',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Livrée':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Validée':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'En attente':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Refusée':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const filteredAttestations = attestations.filter(att => {
    const matchesSearch =
      att.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      att.matricule.toLowerCase().includes(searchTerm.toLowerCase()) ||
      att.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || att.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: attestations.length,
    enAttente: attestations.filter(a => a.status === 'En attente').length,
    validees: attestations.filter(a => a.status === 'Validée').length,
    livrees: attestations.filter(a => a.status === 'Livrée').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Demandes d'attestations</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez les demandes d'attestations des stagiaires
          </p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Exporter
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total</p>
              <p className="text-gray-900 dark:text-white">{stats.total}</p>
            </div>
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">En attente</p>
              <p className="text-gray-900 dark:text-white">{stats.enAttente}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <span className="text-orange-600 dark:text-orange-400">⏳</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Validées</p>
              <p className="text-gray-900 dark:text-white">{stats.validees}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Livrées</p>
              <p className="text-gray-900 dark:text-white">{stats.livrees}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Rechercher par nom, matricule ou ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-full md:w-auto min-w-[200px]">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="En attente">En attente</SelectItem>
                <SelectItem value="Validée">Validée</SelectItem>
                <SelectItem value="Livrée">Livrée</SelectItem>
                <SelectItem value="Refusée">Refusée</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Stagiaire</TableHead>
                <TableHead>Matricule</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date demande</TableHead>
                <TableHead>RDV</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAttestations.map((attestation) => (
                <TableRow key={attestation.id}>
                  <TableCell className="text-[#1E88E5]">{attestation.id}</TableCell>
                  <TableCell>{attestation.student}</TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {attestation.matricule}
                  </TableCell>
                  <TableCell>{attestation.type}</TableCell>
                  <TableCell>
                    {new Date(attestation.date).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    {attestation.rdvDate !== '-' ? (
                      <div className="text-sm">
                        <div>{new Date(attestation.rdvDate).toLocaleDateString('fr-FR')}</div>
                        <div className="text-gray-500 dark:text-gray-400">{attestation.rdvTime}</div>
                      </div>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(attestation.status)}>
                      {attestation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Détails de la demande</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">ID</p>
                              <p className="text-gray-900 dark:text-white">{attestation.id}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Stagiaire</p>
                              <p className="text-gray-900 dark:text-white">{attestation.student}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
                              <p className="text-gray-900 dark:text-white">{attestation.type}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button className="flex-1">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Valider
                              </Button>
                              <Button variant="destructive" className="flex-1">
                                <XCircle className="w-4 h-4 mr-2" />
                                Refuser
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {attestation.status === 'Validée' && (
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Générer
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}