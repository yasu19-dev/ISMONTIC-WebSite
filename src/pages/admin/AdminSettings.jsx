import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { Textarea } from '../../components/ui/textarea';
import { Badge } from '../../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Settings,
  Bell,
  Shield,
  Database,
  Mail,
  Calendar,
  Users,
  FileText,
  Globe,
  Lock,
  Server,
  HardDrive,
  Palette,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';

export function AdminSettings() {
  // États pour les paramètres généraux
  const [institutionName, setInstitutionName] = useState('ISMONTIC');
  const [institutionEmail, setInstitutionEmail] = useState('contact@ismontic.ma');
  const [institutionPhone, setInstitutionPhone] = useState('+212 5 22 XX XX XX');
  const [institutionAddress, setInstitutionAddress] = useState(
    'Tanger, Maroc'
  );
  const [institutionWebsite, setInstitutionWebsite] = useState('www.ismontic.ma');

  // États pour les notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [notifyAbsences, setNotifyAbsences] = useState(true);
  const [notifyGrades, setNotifyGrades] = useState(true);
  const [notifyEvents, setNotifyEvents] = useState(true);

  // États pour les paramètres académiques
  const [currentYear, setCurrentYear] = useState('2025-2026');
  const [semesterStart, setSemesterStart] = useState('2025-09-01');
  const [semesterEnd, setSemesterEnd] = useState('2026-02-15');
  const [absenceLimit, setAbsenceLimit] = useState('15');
  const [passingGrade, setPassingGrade] = useState('10');

  // États pour la sécurité
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [passwordExpiry, setPasswordExpiry] = useState('90');
  const [loginAttempts, setLoginAttempts] = useState('5');

  // États pour la sauvegarde
  const [autoBackup, setAutoBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState('daily');
  const [backupRetention, setBackupRetention] = useState('30');

  const lastBackup = {
    date: '14/03/2026',
    time: '03:00',
    size: '2.4 GB',
    status: 'Réussie',
  };

  const systemInfo = {
    version: '2.5.1',
    database: 'PostgreSQL 15.2',
    storage: '45.2 GB / 100 GB',
    uptime: '45 jours',
    lastUpdate: '01/03/2026',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Paramètres</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Configuration globale de la plateforme et des services
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="academic">Académique</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="backup">Sauvegarde</TabsTrigger>
          <TabsTrigger value="system">Système</TabsTrigger>
        </TabsList>

        {/* Paramètres généraux */}
        <TabsContent value="general" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Informations de l'établissement
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="institutionName">Nom de l'établissement</Label>
                <Input
                  id="institutionName"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institutionEmail">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="institutionEmail"
                    type="email"
                    value={institutionEmail}
                    onChange={(e) => setInstitutionEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="institutionPhone">Téléphone</Label>
                <Input
                  id="institutionPhone"
                  value={institutionPhone}
                  onChange={(e) => setInstitutionPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institutionWebsite">Site web</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="institutionWebsite"
                    value={institutionWebsite}
                    onChange={(e) => setInstitutionWebsite(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="institutionAddress">Adresse</Label>
                <Textarea
                  id="institutionAddress"
                  value={institutionAddress}
                  onChange={(e) => setInstitutionAddress(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Annuler</Button>
              <Button>Enregistrer les modifications</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Apparence et personnalisation
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">Logo de l'établissement</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Format recommandé : PNG, 500x500px
                  </p>
                </div>
                <Button variant="outline">Changer le logo</Button>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Couleur principale</Label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#1E88E5] border-2 border-gray-200 dark:border-gray-700"></div>
                  <Input
                    type="text"
                    value="#1E88E5"
                    className="w-32"
                    disabled
                    readOnly
                  />
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Couleur d'accent</Label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#00C9A7] border-2 border-gray-200 dark:border-gray-700"></div>
                  <Input
                    type="text"
                    value="#00C9A7"
                    className="w-32"
                    disabled
                    readOnly
                  />
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Paramètres académiques */}
        <TabsContent value="academic" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">Année académique</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="currentYear">Année en cours</Label>
                <Select value={currentYear} onValueChange={setCurrentYear}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-2025">2024-2025</SelectItem>
                    <SelectItem value="2025-2026">2025-2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="semesterStart">Début du semestre</Label>
                <Input
                  id="semesterStart"
                  type="date"
                  value={semesterStart}
                  onChange={(e) => setSemesterStart(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="semesterEnd">Fin du semestre</Label>
                <Input
                  id="semesterEnd"
                  type="date"
                  value={semesterEnd}
                  onChange={(e) => setSemesterEnd(e.target.value)}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Règles académiques
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="absenceLimit">
                  Limite d'absences autorisées (%)
                </Label>
                <Input
                  id="absenceLimit"
                  type="number"
                  value={absenceLimit}
                  onChange={(e) => setAbsenceLimit(e.target.value)}
                />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Au-delà de cette limite, l'étudiant est exclu du module
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passingGrade">Note de passage (/20)</Label>
                <Input
                  id="passingGrade"
                  type="number"
                  value={passingGrade}
                  onChange={(e) => setPassingGrade(e.target.value)}
                />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Note minimale pour valider un module
                </p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <h4 className="text-sm text-gray-900 dark:text-white">
                Barème de mentions
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'Excellent', min: '16', max: '20', color: '#00C9A7' },
                  { label: 'Très bien', min: '14', max: '16', color: '#1E88E5' },
                  { label: 'Bien', min: '12', max: '14', color: '#FF9800' },
                  { label: 'Passable', min: '10', max: '12', color: '#9C27B0' },
                ].map((mention, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-[#232936] rounded-lg"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: mention.color }}
                    ></div>
                    <span className="flex-1 text-sm text-gray-900 dark:text-white">
                      {mention.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={mention.min}
                        className="w-16 text-center"
                        disabled
                        readOnly
                      />
                      <span className="text-gray-400">-</span>
                      <Input
                        type="number"
                        value={mention.max}
                        className="w-16 text-center"
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Réinitialiser</Button>
              <Button>Enregistrer</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Canaux de notification
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white">
                      Notifications par email
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Envoyer des emails pour les événements importants
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
                      Notifications SMS
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Envoyer des SMS pour les alertes urgentes
                    </p>
                  </div>
                </div>
                <Switch
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Types de notifications
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">
                    Alertes d'absences
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Notifier les étudiants et parents en cas d'absence
                  </p>
                </div>
                <Switch
                  checked={notifyAbsences}
                  onCheckedChange={setNotifyAbsences}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">
                    Publication de notes
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Notifier lors de la publication de nouvelles notes
                  </p>
                </div>
                <Switch checked={notifyGrades} onCheckedChange={setNotifyGrades} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">
                    Événements et annonces
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Notifier pour les événements et annonces importantes
                  </p>
                </div>
                <Switch checked={notifyEvents} onCheckedChange={setNotifyEvents} />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end">
              <Button>Enregistrer les préférences</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Sécurité */}
        <TabsContent value="security" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Paramètres de sécurité
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">
                    Authentification à deux facteurs
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Exiger une vérification en deux étapes pour tous les utilisateurs
                  </p>
                </div>
                <Switch
                  checked={twoFactorAuth}
                  onCheckedChange={setTwoFactorAuth}
                />
              </div>
              <Separator />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">
                    Délai d'expiration de session (minutes)
                  </Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passwordExpiry">
                    Expiration du mot de passe (jours)
                  </Label>
                  <Input
                    id="passwordExpiry"
                    type="number"
                    value={passwordExpiry}
                    onChange={(e) => setPasswordExpiry(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginAttempts">
                    Tentatives de connexion max
                  </Label>
                  <Input
                    id="loginAttempts"
                    type="number"
                    value={loginAttempts}
                    onChange={(e) => setLoginAttempts(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Réinitialiser</Button>
              <Button>Appliquer</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Politique de mot de passe
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900 dark:text-white">
                  Longueur minimale de 8 caractères
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900 dark:text-white">
                  Au moins une lettre majuscule et une minuscule
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900 dark:text-white">
                  Au moins un chiffre
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900 dark:text-white">
                  Au moins un caractère spécial
                </span>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Sauvegarde */}
        <TabsContent value="backup" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Database className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Configuration de la sauvegarde
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white">
                    Sauvegarde automatique
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Effectuer des sauvegardes automatiques régulières
                  </p>
                </div>
                <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
              </div>
              <Separator />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="backupFrequency">Fréquence</Label>
                  <Select
                    value={backupFrequency}
                    onValueChange={setBackupFrequency}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Toutes les heures</SelectItem>
                      <SelectItem value="daily">Quotidienne</SelectItem>
                      <SelectItem value="weekly">Hebdomadaire</SelectItem>
                      <SelectItem value="monthly">Mensuelle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="backupRetention">
                    Durée de rétention (jours)
                  </Label>
                  <Input
                    id="backupRetention"
                    type="number"
                    value={backupRetention}
                    onChange={(e) => setBackupRetention(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Lancer une sauvegarde maintenant</Button>
              <Button>Enregistrer</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <HardDrive className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Dernière sauvegarde
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Date
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {lastBackup.date}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Heure
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {lastBackup.time}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Taille
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {lastBackup.size}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Statut
                  </span>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {lastBackup.status}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                Restaurer à partir de cette sauvegarde
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Système */}
        <TabsContent value="system" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Server className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">
                Informations système
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Version de la plateforme
                  </span>
                  <Badge variant="outline">{systemInfo.version}</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Base de données
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {systemInfo.database}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Stockage utilisé
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {systemInfo.storage}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Temps de fonctionnement
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {systemInfo.uptime}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#232936] rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Dernière mise à jour
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {systemInfo.lastUpdate}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-[#1E88E5]" />
              <h3 className="text-gray-900 dark:text-white">Maintenance</h3>
            </div>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Database className="w-4 h-4 mr-2" />
                Optimiser la base de données
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <HardDrive className="w-4 h-4 mr-2" />
                Nettoyer les fichiers temporaires
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Générer un rapport de diagnostic
              </Button>
              <Separator />
              <Button variant="destructive" className="w-full">
                Redémarrer le système
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-gray-900 dark:text-white mb-2">
                  Support technique
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Pour toute assistance technique, contactez notre équipe support
                </p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      support@ismontic.ma
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Téléphone
                    </p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      +212 5 39 39 39 49
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}