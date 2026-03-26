import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Send, Paperclip, MessageSquare } from 'lucide-react';

export function StagiaireComplaints() {
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const complaints = [
    {
      id: 'REC-2026-001',
      date: '2026-03-05',
      type: 'Réclamation pédagogique',
      statut: 'En cours',
      lastUpdate: 'Il y a 2 heures',
    },
    {
      id: 'REC-2026-002',
      date: '2026-03-01',
      type: 'Question administrative',
      statut: 'Résolu',
      lastUpdate: 'Il y a 4 jours',
    },
    {
      id: 'REC-2026-003',
      date: '2026-02-28',
      type: 'Problème technique',
      statut: 'En attente',
      lastUpdate: 'Il y a 5 jours',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Résolu':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'En cours':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'En attente':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi
    alert('Réclamation envoyée avec succès!');
    setType('');
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Réclamations</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Envoyez vos questions et réclamations
        </p>
      </div>

      <Tabs defaultValue="new" className="space-y-6">
        <TabsList>
          <TabsTrigger value="new">Nouvelle réclamation</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="new">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#00C9A7]" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white">Envoyer une réclamation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Remplissez le formulaire ci-dessous
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="type">Type de réclamation</Label>
                <Select value={type} onValueChange={setType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pedagogique">Réclamation pédagogique</SelectItem>
                    <SelectItem value="administrative">Question administrative</SelectItem>
                    <SelectItem value="technique">Problème technique</SelectItem>
                    <SelectItem value="attestation">Demande d'attestation</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objet">Objet</Label>
                <Input
                  id="objet"
                  placeholder="Résumé de votre réclamation"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre réclamation en détail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Pièce jointe (optionnel)</Label>
                <div className="flex items-center gap-3">
                  <Button type="button" variant="outline" className="w-full">
                    <Paperclip className="w-4 h-4 mr-2" />
                    Joindre un fichier
                  </Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Format accepté: PDF, JPEG, PNG (max 5MB)
                </p>
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer la réclamation
                </Button>
                <Button type="button" variant="outline">
                  Annuler
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <div className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-4">Mes réclamations</h3>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Dernière mise à jour</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell className="text-[#1E88E5]">{complaint.id}</TableCell>
                      <TableCell>{new Date(complaint.date).toLocaleDateString('fr-FR')}</TableCell>
                      <TableCell>{complaint.type}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(complaint.statut)}>
                          {complaint.statut}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-400">
                        {complaint.lastUpdate}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Voir détails
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}