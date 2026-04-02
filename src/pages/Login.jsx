import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // N'oublie pas d'installer axios: npm install axios
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { GraduationCap, Lock, Mail, AlertCircle } from 'lucide-react'; // Ajout de AlertCircle
// import { useAuth } from '../contexts/AuthContext'; // On va le modifier plus tard, garde-le commenté pour l'instant
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Pour afficher les erreurs de l'API
  const [isLoading, setIsLoading] = useState(false); // Pour le bouton de chargement
  const navigate = useNavigate();
  // const { login } = useAuth(); // Sera utilisé quand on branchera le contexte global
  const { theme, toggleTheme } = useTheme();

  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 1. On interroge Laravel
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      },{
        headers: {
          'Accept': 'application/json' // Très important pour Laravel !
        }
      });

      // 2. On récupère les vraies données
      // --- DANS TON HANDLESUBMIT ---

// 2. On récupère les données (le rôle est aussi à la racine du JSON)
    const { token, user, role } = response.data;

    // 3. On connecte l'utilisateur dans le contexte
    login(user, token); 

    // 4. LOGIQUE DE REDIRECTION INTELLIGENTE
    if (role === 'admin') {
      // On regarde le sous-rôle pour savoir quel dashboard afficher
      if (user.adminSubRole === 'directeur') {
        navigate('/director/dashboard');
      } else {
        navigate('/responsable-stagiaire/dashboard');
      }
    } else {
      // Pour les formateurs et stagiaires, la logique reste simple
      navigate(`/${role}/dashboard`);
    }

    } catch (err) {
      console.error("DÉTAIL DE L'ERREUR :", err);
      if (err.response && err.response.status === 401) {
        setError('Email ou mot de passe incorrect.');
      } else {
        setError('Une erreur est survenue de notre côté. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E88E5] to-[#1565C0] flex items-center justify-center p-6 relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="absolute top-6 right-6 rounded-full text-white hover:bg-white/20"
      >
        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </Button>

      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-[#1E88E5] flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-gray-900 dark:text-white mb-2">ISMONTIC</h1>
          <p className="text-gray-600 dark:text-gray-400">Connexion à votre espace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Bloc d'affichage des erreurs */}
          {error && (
            <div className="p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="votre.email@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600 dark:text-gray-400">Se souvenir</span>
            </label>
            <Link to="/forgot-password" className="text-[#1E88E5] hover:text-[#1565C0]">
              Mot de passe oublié?
            </Link>
          </div>

          {/* Bouton avec état de chargement */}
          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? 'Connexion en cours...' : 'Se connecter'}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#1a1f2e] text-gray-500">Ou continuer avec</span>
            </div>
          </div>

          <Button type="button" variant="outline" className="w-full" size="lg">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 21 21">
              <rect x="1" y="1" width="19" height="19" rx="2" fill="#f25022"/>
              <rect x="11" y="1" width="9" height="9" rx="1" fill="#00a4ef"/>
              <rect x="1" y="11" width="9" height="9" rx="1" fill="#ffb900"/>
              <rect x="11" y="11" width="9" height="9" rx="1" fill="#7fba00"/>
            </svg>
            Microsoft
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1E88E5]">
            ← Retour à l'accueil
          </Link>
        </div>
      </Card>
    </div>
  );
}