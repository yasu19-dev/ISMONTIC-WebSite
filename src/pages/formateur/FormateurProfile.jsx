import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Switch } from '../../components/ui/switch';
import { Textarea } from '../../components/ui/textarea';
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
  Briefcase,
  GraduationCap,
  Users,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

export function FormateurProfile() {
  const { user } = useAuth();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);

  // Champs éditables
  const [adresse, setAdresse] = useState('Route Principale de Rabat à côté du Marjane,Tanger');
  const [email, setEmail] = useState(user?.email || 'mounia.naamany@ismontic.ma');
  const [telephone, setTelephone] = useState('+212 6 23 45 67 89');
  const [telephoneUrgence, setTelephoneUrgence] = useState('+212 5 22 12 34 56');
  const [bio, setBio] = useState(
    "Formatrice passionnée avec 14 ans d'expérience dans l'enseignement du développement web et mobile. Spécialisée en Java, JavaScript et frameworks modernes."
  );
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const formateurInfo = {
    matricule: 'F2015042',
    cin: 'CD987654',
    dateNaissance: '12/11/1985',
    lieuNaissance: 'Tanger',
    specialite: 'Développement Web & Mobile',
    grade: 'Formatrice Principale',
    dateRecrutement: '15/09/2000',
    departement: 'Développement Digital',
  };

  const modulesEnseignes = [
    {
      nom: 'Développement Front-end',
      code: 'DWA201',
      groupes: ['DEVOWFS201', 'DEVOWFS202'],
      heures: 120,
      niveau: '2ème année',
    },
    {
      nom: 'Programmation Javascript',
      code: 'PJV101',
      groupes: ['DEV103','DEV104'],
      heures: 90,
      niveau: '1ère année',
    },
    {
      nom: 'Base de données',
      code: 'FJS302',
      groupes: ['DEVOWFS201', 'DEVOWFS202','DEVOWFS203'],
      heures: 100,
      niveau: '2ème année',
    },
    {
      nom: 'Développement  back-end',
      code: 'DMB201',
      groupes: ['DEVOWFS201'],
      heures: 110,
      niveau: '2ème année',
    },
  ];


  const statsPersonnelles = [
    { label: 'Étudiants enseignés', value: '156', color: '#1E88E5' },
    { label: 'Modules actifs', value: '4', color: '#00C9A7' },
    { label: 'Heures dispensées', value: '390h', color: '#FF9800' },
    { label: 'Taux de satisfaction', value: '96%', color: '#9C27B0' },
  ];

  const formations = [
    {
      diplome: 'Master en Ingénierie Logicielle',
      etablissement: 'École Nationale Supérieure d\'Informatique',
      annee: '2012',
    },
    {
      diplome: 'Licence en Informatique',
      etablissement: 'Faculté des Sciences',
      annee: '2008',
    },
  ];

  const certifications = [
    { nom: 'Oracle Certified Professional Java Developer', annee: '2020' },
    { nom: 'React Advanced Certification', annee: '2021' },
    { nom: 'Pédagogie Numérique', annee: '2019' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Mon profil</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez vos informations professionnelles et paramètres de compte
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
              {formateurInfo.specialite}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="outline" className="bg-[#1E88E5]/10 text-[#1E88E5] border-[#1E88E5]/20">
                {formateurInfo.grade}
              </Badge>
              <Badge variant="outline" className="bg-[#00C9A7]/10 text-[#00C9A7] border-[#00C9A7]/20">
                {formateurInfo.departement}
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                Mat: {formateurInfo.matricule}
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{bio}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Modifier le profil</Button>
            <Button>Télécharger CV</Button>
          </div>
        </div>
      </Card>

      {/* Statistiques personnelles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsPersonnelles.map((stat, index) => (
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
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Informations personnelles</TabsTrigger>
          <TabsTrigger value="professional">Informations professionnelles</TabsTrigger>
          <TabsTrigger value="modules">Modules enseignés</TabsTrigger>
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
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cin">CIN</Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="cin"
                    value={formateurInfo.cin}
                    className="pl-10"
                    disabled
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateNaissance">Date de naissance</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="dateNaissance"
                    value={formateurInfo.dateNaissance}
                    className="pl-10"
                    disabled
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lieuNaissance">Lieu de naissance</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="lieuNaissance"
                    value={formateurInfo.lieuNaissance}
                    className="pl-10"
                    disabled
                    readOnly
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
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Biographie</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  placeholder="Décrivez votre parcours et vos compétences..."
                />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Annuler</Button>
              <Button>Enregistrer les modifications</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Informations professionnelles */}
        <TabsContent value="professional" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Informations professionnelles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Matricule</Label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input value={formateurInfo.matricule} className="pl-10" disabled readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Grade</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={formateurInfo.grade}
                    className="pl-10"
                    disabled
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Spécialité</Label>
                <Input value={formateurInfo.specialite} disabled readOnly />
              </div>
              <div className="space-y-2">
                <Label>Département</Label>
                <Input value={formateurInfo.departement} disabled readOnly />
              </div>
              <div className="space-y-2">
                <Label>Date de recrutement</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={formateurInfo.dateRecrutement}
                    className="pl-10"
                    disabled
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Ancienneté</Label>
                <Input value="9 ans" disabled readOnly />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-4">Formations académiques</h3>
            <div className="space-y-4">
              {formations.map((formation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#232936] rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1E88E5]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white mb-1">
                      {formation.diplome}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formation.etablissement}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      {formation.annee}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#00C9A7]/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#00C9A7]" />
                    </div>
                    <p className="text-sm text-gray-900 dark:text-white">{cert.nom}</p>
                  </div>
                  <Badge variant="outline">{cert.annee}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Modules enseignés */}
        <TabsContent value="modules" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Modules enseignés (2024/2025)</h3>
            <div className="space-y-4">
              {modulesEnseignes.map((module, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-[#1E88E5]" />
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white">{module.nom}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Code: {module.code}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-[#00C9A7]/10 text-[#00C9A7]">
                      {module.niveau}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Groupes
                      </p>
                      <div className="flex gap-1">
                        {module.groupes.map((groupe, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {groupe}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Volume horaire
                      </p>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {module.heures}h
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Étudiants
                      </p>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <p className="text-sm text-gray-900 dark:text-white">
                          {module.groupes.length * 25}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#1E88E5]/5 dark:bg-[#1E88E5]/10 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-900 dark:text-white mb-1">
                    Total volume horaire annuel
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Année scolaire 2024/2025
                  </p>
                </div>
                <p className="text-2xl text-[#1E88E5]">
                  {modulesEnseignes.reduce((acc, m) => acc + m.heures, 0)}h
                </p>
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
                      Recevez des notifications pour les absences et événements
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
                      Permettre aux étudiants de voir votre profil
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