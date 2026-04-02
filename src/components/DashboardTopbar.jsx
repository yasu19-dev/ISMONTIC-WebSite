import { Bell, Moon, Sun, LogOut, ChevronDown, Shield, UserCog } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

export function DashboardTopbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth(); // J'ai retiré switchAdminRole si non utilisé, sinon remets-le.
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Logique ancienne conservée car plus robuste si prenom/nom sont séparés
  const getInitials = (prenom, nom, email) => {
    if (prenom && nom) {
      return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase(); 
    }
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  const displayName = user?.prenom && user?.nom 
    ? `${user.prenom} ${user.nom}` 
    : user?.email;

  // Extraction du rôle unifiée
  const currentRole = (user?.roles && user.roles.length > 0) 
    ? user.roles[0].code 
    : localStorage.getItem('role');

  const getRoleBadge = () => {
    // Si tu utilises des rôles de premier niveau
    if (currentRole === 'director') {
      return (
        <Badge className="bg-[#1E88E5] hover:bg-[#1976D2] text-white">
          <Shield className="w-3 h-3 mr-1" />
          Directeur
        </Badge>
      );
    } else if (currentRole === 'stagiaire-manager') {
      return (
        <Badge className="bg-[#00C9A7] hover:bg-[#00B896] text-white">
          <UserCog className="w-3 h-3 mr-1" />
          Responsable Stagiaire
        </Badge>
      );
    } 
    // Si tu utilises toujours des sous-rôles admin (logique du nouveau fichier)
    else if (currentRole === 'admin' && user?.adminSubRole) {
      if (user.adminSubRole === 'directeur') {
        return (
          <Badge className="bg-[#1E88E5] hover:bg-[#1976D2] text-white">
            <Shield className="w-3 h-3 mr-1" />
            Directeur
          </Badge>
        );
      } else if (user.adminSubRole === 'responsable_stagiaire') {
        return (
          <Badge className="bg-[#00C9A7] hover:bg-[#00B896] text-white">
            <UserCog className="w-3 h-3 mr-1" />
            Responsable Stagiaire
          </Badge>
        );
      }
    }
    return null;
  };

  return (
    <header className="h-16 border-b bg-white dark:bg-[#1a1f2e] dark:border-gray-800 sticky top-0 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-gray-900 dark:text-white font-medium">
            Bienvenue, {displayName || 'Utilisateur'}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* Nouveau Badge de Rôle intégré */}
          {getRoleBadge()}

          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 rounded-full">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-[#1E88E5] text-white text-sm">
                    {user && getInitials(user?.prenom, user?.nom, user?.email)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm font-medium">{displayName}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{displayName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
              </div>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 cursor-pointer">
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}