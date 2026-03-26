import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Switch } from '../../components/ui/switch';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Bell,
  Shield,
  Eye,
  Camera,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

export function StagiaireProfile() {
  const { user } = useAuth();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);

  // Champs éditables
  const [adresse, setAdresse] = useState('Rue de la Résistance, Tanger');
  const [email, setEmail] = useState(user?.email || 'etudiant.exemple@ismontic.ma');
  const [telephone, setTelephone] = useState('+212 6 00 00 00 00');
  const [telephoneUrgence, setTelephoneUrgence] = useState('+212 5 39 00 00 00');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const studentInfo = {
    cef: '200051400448',
    cin: 'KB223621',
    dateNaissance: '14/05/2001',
    lieuNaissance: 'Tanger',
    filiere: 'Technicien Spécialisé en Développement Digital',
    niveau: '2ème année',
    groupe: 'DEVWOFS201',
    dateInscription: '01/09/2024',
    anneeScolaire: '2025/2026',
  };

  const academicStats = [
    { label: 'Moyenne générale', value: '15.2/20', color: '#00C9A7' },
    { label: 'Taux de présence', value: '94%', color: '#1E88E5' },
    { label: 'Modules validés', value: '12/16', color: '#FF9800' },
    { label: 'Crédits obtenus', value: '85/120', color: '#9C27B0' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Mon profil</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez vos informations personnelles et paramètres de compte
        </p>
      </div>

      {/* En-tête du profil */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <Avatar className="w-32 h-32">
              <AvatarImage src="" />
              <AvatarFallback className="bg-[#1E88E5] text-white text-3xl">
                {user?.name
                  ?.split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-gray-900 dark:text-white mb-1">{user?.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {studentInfo.filiere}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="outline" className="bg-[#1E88E5]/10 text-[#1E88E5] border-[#1E88E5]/20">
                {studentInfo.niveau}
              </Badge>
              <Badge variant="outline" className="bg-[#00C9A7]/10 text-[#00C9A7] border-[#00C9A7]/20">
                Groupe {studentInfo.groupe}
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                CEF: {studentInfo.cef}
              </Badge>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Modifier le profil</Button>
            <Button>Télécharger carte</Button>
          </div>
        </div>
      </Card>

      {/* Statistiques académiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {academicStats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: stat.color }}
              ></div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tabs avec les détails */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Informations personnelles</TabsTrigger>
          <TabsTrigger value="academic">Informations académiques</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        {/* Informations personnelles */}
        <TabsContent value="personal" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Informations personnelles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullname">Nom complet</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="fullname"
                    value={user?.name || ''}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cin">CIN</Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="cin"
                    value={studentInfo.cin}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateNaissance">Date de naissance</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="dateNaissance"
                    value={studentInfo.dateNaissance}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lieuNaissance">Lieu de naissance</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="lieuNaissance"
                    value={studentInfo.lieuNaissance}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="adresse">Adresse</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="adresse"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="telephoneUrgence">Téléphone d'urgence</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="telephoneUrgence"
                    value={telephoneUrgence}
                    onChange={(e) => setTelephoneUrgence(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Annuler</Button>
              <Button>Enregistrer les modifications</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Informations académiques */}
        <TabsContent value="academic" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Informations académiques</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Code CEF</Label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input value={studentInfo.cef} className="pl-10" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Filière</Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={studentInfo.filiere}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Niveau</Label>
                <Input value={studentInfo.niveau} disabled />
              </div>
              <div className="space-y-2">
                <Label>Groupe</Label>
                <Input value={studentInfo.groupe} disabled />
              </div>
              <div className="space-y-2">
                <Label>Date d'inscription</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={studentInfo.dateInscription}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Année scolaire</Label>
                <Input value={studentInfo.anneeScolaire} disabled />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-4">Parcours académique</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#00C9A7]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#00C9A7]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white mb-1">
                    2ème année - En cours
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Technicien Spécialisé en Développement Web Full Stack
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Septembre 2025 - En cours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#1E88E5]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#1E88E5]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white mb-1">
                    1ère année - Validée
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Technicien Spécialisé en Développement Digital
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Septembre 2024 - Juin 2025
                  </p>
                  <Badge className="mt-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Moyenne: 14.8/20
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Paramètres */}
        <TabsContent value="settings" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Notifications
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white">
                      Notifications par email
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Recevez des notifications pour les nouvelles annonces et notes
                    </p>
                  </div>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white">
                      Notifications push
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Recevez des notifications push sur votre appareil
                    </p>
                  </div>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Confidentialité
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white">
                      Profil visible
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Permettre aux autres étudiants de voir votre profil
                    </p>
                  </div>
                </div>
                <Switch
                  checked={profileVisibility}
                  onCheckedChange={setProfileVisibility}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Sécurité</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirmer le nouveau mot de passe
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Separator className="my-4" />
              <Button>Changer le mot de passe</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}