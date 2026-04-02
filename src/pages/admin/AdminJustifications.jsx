import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Search, Eye, CheckCircle, XCircle, Clock, FileText, Download } from 'lucide-react';
import { toast } from 'sonner'; // J'ai ajusté l'import de 'sonner@2.0.3' à 'sonner' pour éviter les erreurs de résolution dans un projet standard.

const mockJustifications = [
  {
    id: '1',
    stagiaire: 'Ahmed Bennani',
    groupe: 'DEV-101',
    date: '2024-03-15',
    seance: '08:30 - 10:30',
    motif: 'Rendez-vous médical urgent',
    document: 'certificat_medical.pdf',
    status: 'en_attente',
    dateSubmission: '2024-03-16 09:00',
  },
  {
    id: '2',
    stagiaire: 'Fatima Zahra',
    groupe: 'DEV-101',
    date: '2024-03-14',
    seance: '10:45 - 12:45',
    motif: 'Problème de transport',
    status: 'approuvee',
    dateSubmission: '2024-03-14 13:30',
    commentaire: 'Justification acceptée',
  },
  {
    id: '3',
    stagiaire: 'Youssef El Amrani',
    groupe: 'MARKETING-202',
    date: '2024-03-13',
    seance: '14:00 - 16:00',
    motif: 'Raison personnelle',
    status: 'rejetee',
    dateSubmission: '2024-03-14 10:00',
    commentaire: 'Justification insuffisante',
  },
  {
    id: '4',
    stagiaire: 'Sara Idrissi',
    groupe: 'DEV-101',
    date: '2024-03-12',
    seance: '08:30 - 10:30',
    motif: 'Décès dans la famille',
    document: 'acte_deces.pdf',
    status: 'approuvee',
    dateSubmission: '2024-03-12 15:00',
    commentaire: 'Toutes nos condoléances',
  },
  {
    id: '5',
    stagiaire: 'Mohamed Alaoui',
    groupe: 'DESIGN-303',
    date: '2024-03-11',
    seance: '14:00 - 16:00',
    motif: 'Rendez-vous administratif',
    document: 'convocation.pdf',
    status: 'en_attente',
    dateSubmission: '2024-03-11 16:30',
  },
];

export function AdminJustifications() {
  const { user } = useAuth();
  const [justifications, setJustifications] = useState(mockJustifications);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('tous');
  const [selectedJustification, setSelectedJustification] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [commentaire, setCommentaire] = useState('');

  const canModify = user?.role === 'admin' && (user.adminSubRole === 'directeur' || user.adminSubRole === 'responsable_stagiaire');

  const filteredJustifications = justifications.filter((justification) => {
    const matchesSearch = 
      justification.stagiaire.toLowerCase().includes(searchTerm.toLowerCase()) ||
      justification.groupe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      justification.motif.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'tous' || justification.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'en_attente':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600"><Clock className="w-3 h-3 mr-1" />En attente</Badge>;
      case 'approuvee':
        return <Badge className="bg-green-500 hover:bg-green-600"><CheckCircle className="w-3 h-3 mr-1" />Approuvée</Badge>;
      case 'rejetee':
        return <Badge className="bg-red-500 hover:bg-red-600"><XCircle className="w-3 h-3 mr-1" />Rejetée</Badge>;
      default:
        return null;
    }
  };

  const handleApprove = () => {
    if (selectedJustification) {
      setJustifications(justifications.map(j => 
        j.id === selectedJustification.id 
          ? { ...j, status: 'approuvee', commentaire } 
          : j
      ));
      toast.success('Justification approuvée avec succès');
      setShowDetailsModal(false);
      setCommentaire('');
    }
  };

  const handleReject = () => {
    if (selectedJustification) {
      setJustifications(justifications.map(j => 
        j.id === selectedJustification.id 
          ? { ...j, status: 'rejetee', commentaire } 
          : j
      ));
      toast.success('Justification rejetée');
      setShowDetailsModal(false);
      setCommentaire('');
    }
  };

  const openDetailsModal = (justification) => {
    setSelectedJustification(justification);
    setCommentaire(justification.commentaire || '');
    setShowDetailsModal(true);
  };

  const statsCards = [
    {
      title: 'Total',
      value: justifications.length,
      color: 'bg-blue-500',
    },
    {
      title: 'En attente',
      value: justifications.filter(j => j.status === 'en_attente').length,
      color: 'bg-yellow-500',
    },
    {
      title: 'Approuvées',
      value: justifications.filter(j => j.status === 'approuvee').length,
      color: 'bg-green-500',
    },
    {
      title: 'Rejetées',
      value: justifications.filter(j => j.status === 'rejetee').length,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Justificatifs d'absences</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Gérez les justificatifs d'absences soumis par les stagiaires
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl mt-2 text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des justificatifs</CardTitle>
          <CardDescription>
            Filtrez et consultez les justificatifs d'absences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher par stagiaire, groupe ou motif..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous les statuts</SelectItem>
                <SelectItem value="en_attente">En attente</SelectItem>
                <SelectItem value="approuvee">Approuvées</SelectItem>
                <SelectItem value="rejetee">Rejetées</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stagiaire</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJustifications.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500 py-8">
                      Aucune justification trouvée
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredJustifications.map((justification) => (
                    <TableRow key={justification.id}>
                      <TableCell>{justification.stagiaire}</TableCell>
                      <TableCell>{new Date(justification.date).toLocaleDateString('fr-FR')}</TableCell>
                      <TableCell>{getStatusBadge(justification.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          onClick={() => openDetailsModal(justification)}
                          className="bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-md"
                        >
                          Saisir Motif
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Details Modal */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Saisir Motif</DialogTitle>
            <DialogDescription>
              Veuillez saisir le motif et mettre à jour le statut de l'absence pour {selectedJustification?.stagiaire}
            </DialogDescription>
          </DialogHeader>

          {selectedJustification && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="motif">Motif de l'absence</Label>
                <Textarea
                  id="motif"
                  value={commentaire}
                  onChange={(e) => setCommentaire(e.target.value)}
                  placeholder="Saisissez le motif de l'absence..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Statut</Label>
                <Select defaultValue={selectedJustification.status}>
                  <SelectTrigger id="status" className="w-full">
                    <SelectValue placeholder="Sélectionnez un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approuvee">Justifié</SelectItem>
                    <SelectItem value="rejetee">Non justifié</SelectItem>
                    <SelectItem value="en_attente">En attente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailsModal(false)}>
              Annuler
            </Button>
            <Button 
              className="bg-[#1E88E5] hover:bg-[#1976D2] text-white"
              onClick={() => {
                toast.success('Motif enregistré avec succès');
                setShowDetailsModal(false);
              }}
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}