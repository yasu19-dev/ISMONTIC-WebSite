import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  User,
  FileText,
  Calendar,
  FolderOpen,
  Megaphone,
  MessageSquare,
  BookOpen,
  ClipboardList,
  BarChart3,
  Users,
  Settings,
  GraduationCap,
  HeartPulse,
  PenTool,
  FileCheck,
  Lock,
} from 'lucide-react';

export function DashboardSidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const getSidebarItems = () => {
    // 1. DÉTERMINER LE RÔLE EFFECTIF
    const currentRole = user?.role === 'admin' 
      ? user.adminSubRole 
      : (user?.role || localStorage.getItem('role'));

    // 2. LOGIQUE POUR LES STAGIAIRES
    if (currentRole === 'stagiaire') {
      return [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/stagiaire/dashboard' },
        { icon: User, label: 'Profil', path: '/stagiaire/profile' },
        { icon: FileText, label: 'Notes', path: '/stagiaire/notes' },
        { icon: Calendar, label: 'Emploi du temps', path: '/stagiaire/schedule' },
        { icon: FolderOpen, label: 'Documents', path: '/stagiaire/documents' },
        { icon: Megaphone, label: 'Annonces', path: '/stagiaire/announcements' },
        { icon: MessageSquare, label: 'Réclamations', path: '/stagiaire/complaints' },
        { icon: HeartPulse, label: 'Couverture Médicale', path: '/stagiaire/medical' },
        { icon: BookOpen, label: 'E-learning', path: '/stagiaire/elearning' },
      ];
    } 
    
    // 3. LOGIQUE POUR LES FORMATEURS
    if (currentRole === 'formateur') {
      return [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/formateur/dashboard' },
        { icon: PenTool, label: 'Saisie des notes', path: '/formateur/notes' },
        { icon: ClipboardList, label: 'Absences', path: '/formateur/absences' },
        { icon: BarChart3, label: 'Statistiques', path: '/formateur/statistics' },
        { icon: User, label: 'Profil', path: '/formateur/profile' },
      ];
    } 

   // 4. LOGIQUE POUR LES ADMINS (Directeur / Responsable)
if (currentRole === 'directeur' || currentRole === 'responsable_stagiaire') {
  const isDirecteur = currentRole === 'directeur';
  const isResponsable = currentRole === 'responsable_stagiaire';

  return [
    { 
      icon: LayoutDashboard, 
      label: 'Tableau de bord', 
      // SYNC : Utilise 'responsable-stagiaire' pour correspondre à App.jsx
      path: isDirecteur ? '/director/dashboard' : '/responsable-stagiaire/dashboard' 
    },
    { 
      icon: Calendar, 
      label: 'Emploi du temps', 
      // SYNC : Utilise 'responsable-stagiaire' ici aussi
      path: isDirecteur ? '/director/schedule' : '/responsable-stagiaire/schedule' 
    },
    { 
      icon: FileCheck, 
      label: 'Justifications d\'absences', 
      path: '/responsable-stagiaire/justifications', // Sync avec App.jsx
      accessible: isResponsable,
      restricted: isDirecteur,
    },
    { 
      icon: BarChart3, 
      label: 'Statistiques d\'absences', 
      path: isDirecteur ? '/director/absences-stats' : '/responsable-stagiaire/absences-stats',
    },
    { 
      icon: FileText, 
      label: 'Attestations', 
      // SYNC : Change '/admin/attestations' par ton nouveau préfixe
      path: '/responsable-stagiaire/attestations', 
      accessible: isResponsable,
      restricted: isDirecteur,
    },
    { 
      icon: Users, 
      label: 'Utilisateurs', 
      path: '/director/users', // Sync avec App.jsx
      accessible: isDirecteur,
      restricted: isResponsable,
    },
  ];
}
    
    return [];
  };

  // --- LIGNE CRUCIALE : C'est ici que sidebarItems est défini ! ---
  const sidebarItems = getSidebarItems();

  return (
    <aside className="w-64 h-screen sticky top-0 border-r bg-white dark:bg-[#1a1f2e] dark:border-gray-800 flex flex-col">
      <div className="p-6 border-b dark:border-gray-800">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#1E88E5] flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-900 dark:text-white font-bold">ISMONTIC</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const isRestricted = item.restricted === true;
          const isAccessible = item.accessible !== false;
          
          if (isRestricted) {
            return (
              <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-60">
                <Icon className="w-5 h-5" />
                <span className="text-sm flex-1">{item.label}</span>
                <Lock className="w-4 h-4" />
              </div>
            );
          }

          if (!isAccessible) return null;
          
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#1E88E5] text-white'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#232936]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}