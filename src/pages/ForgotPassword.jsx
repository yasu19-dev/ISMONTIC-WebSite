import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Mail, CheckCircle2, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
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
        </div>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Mot de passe oublié</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Saisissez votre email éducatif pour recevoir un lien de réinitialisation.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email éducatif</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="prenom.nom@ismontic.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Envoyer la demande
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-[#00C9A7]" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Demande envoyée !</h2>
            <p className="text-gray-600 dark:text-gray-400">
              La demande de réinitialisation a été envoyée à l'administration. Un email contenant les instructions a été envoyé à <strong>{email}</strong>.
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link to="/login" className="text-sm text-[#1E88E5] hover:text-[#1565C0] font-medium">
            ← Retour à la connexion
          </Link>
        </div>
      </Card>
    </div>
  );
}