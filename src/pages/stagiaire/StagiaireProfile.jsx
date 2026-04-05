import { useEffect, useState } from 'react';
import axios from 'axios';
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
  Loader2
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function StagiaireProfile() {
  const { user: authUser } = useAuth();
  
  // États pour les données API
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // États pour les paramètres et champs éditables
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);
  
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Récupération des données au montage du composant
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/stagiaire/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });

        // Mapping des données issues de StagiaireProfileResource
        const data = response.data.data;
        setProfile(data);
        setAdresse(data.adresse || '');
        setEmail(data.email || '');
        setTelephone(data.telephone || '');
        setLoading(false);
      } catch (err) {
        console.error("Erreur API:", err);
        setError("Impossible de charger les informations du profil.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    await axios.put('http://127.0.0.1:8000/api/stagiaire/profile', {
      email,
      telephone,
      adresse
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Profil mis à jour !");
  } catch (error) {
    alert("Erreur lors de la mise à jour.");
  }
};

  // Écran de chargement
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="w-10 h-10 text-[#1E88E5] animate-spin" />
        <p className="text-gray-500">Chargement de votre profil...</p>
      </div>
    );
  }

  // Écran d'erreur
  if (error || !profile) {
    return (
      <Card className="p-8 text-center border-red-200 bg-red-50">
        <p className="text-red-600 font-medium">{error || "Profil introuvable"}</p>
        <Button onClick={() => window.location.reload()} className="mt-4" variant="outline">
          Réessayer
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Mon profil</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez vos informations personnelles et paramètres de compte
        </p>
      </div>

      {/* En-tête du profil dynamique */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <Avatar className="w-32 h-32">
              <AvatarImage src={profile.photo || ""} />
              <AvatarFallback className="bg-[#1E88E5] text-white text-3xl">
                {profile.nom[0]}{profile.prenom[0]}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-gray-900 dark:text-white mb-1">
              {profile.nom} {profile.prenom}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Étudiant en {profile.groupe}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="outline" className="bg-[#1E88E5]/10 text-[#1E88E5] border-[#1E88E5]/20">
                Année {profile.annee_scolaire}
              </Badge>
              <Badge variant="outline" className="bg-[#00C9A7]/10 text-[#00C9A7] border-[#00C9A7]/20">
                Groupe {profile.groupe}
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                CEF: {profile.cef}
              </Badge>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Modifier le profil</Button>
            <Button>Télécharger carte</Button>
          </div>
        </div>
      </Card>

      {/* Tabs avec les détails réels */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Informations personnelles</TabsTrigger>
          <TabsTrigger value="academic">Informations académiques</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Informations personnelles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullname">Nom complet</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="fullname" value={`${profile.nom} ${profile.prenom}`} className="pl-10" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cin">CIN</Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="cin" value={profile.cin || 'Non renseigné'} className="pl-10" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateNaissance">Date de naissance</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="dateNaissance" value={profile.date_naissance || 'Non renseignée'} className="pl-10" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lieuNaissance">Lieu de naissance</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="lieuNaissance" value={profile.lieu_naissance || 'Non renseigné'} className="pl-10" disabled />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="adresse">Adresse</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="pl-10" />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex justify-end gap-3">
              <Button variant="outline">Annuler</Button>
              <Button onClick={handleUpdateProfile}>Enregistrer les modifications</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Informations académiques</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Code CEF</Label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input value={profile.cef} className="pl-10" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Groupe</Label>
                <Input value={profile.groupe} disabled />
              </div>
              <div className="space-y-2">
                <Label>Année scolaire</Label>
                <Input value={profile.annee_scolaire} disabled />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          {/* Section Paramètres inchangée car gérée localement par le profil user */}
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-white mb-6">Notifications</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white">Email</p>
                    <p className="text-sm text-gray-600">Nouveaux messages et notes</p>
                  </div>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}