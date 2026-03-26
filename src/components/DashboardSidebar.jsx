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
} from 'lucide-react';

export function DashboardSidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const getSidebarItems = () => {
    if (user?.role === 'stagiaire') {
      return [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/stagiaire/dashboard' },
        { icon: User, label: 'Profil', path: '/stagiaire/profile' },
        { icon: FileText, label: 'Notes', path: '/stagiaire/notes' },
        { icon: Calendar, label: 'Emploi du temps', path: '/stagiaire/schedule' },
        { icon: FolderOpen, label: 'Documents', path: '/stagiaire/documents' },
        { icon: Megaphone, label: 'Annonces', path: '/stagiaire/announcements' },
        { icon: MessageSquare, label: 'Réclamations', path: '/stagiaire/complaints' },
        { icon: FileText, label: 'Attestations', path: '/stagiaire/attestations' },
        { icon: HeartPulse, label: 'Couverture Médicale', path: '/stagiaire/medical' },
        { icon: BookOpen, label: 'E-learning', path: '/stagiaire/elearning' },
      ];
    } else if (user?.role === 'formateur') {
      return [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/formateur/dashboard' },
        { icon: PenTool, label: 'Saisie des notes', path: '/formateur/notes' },
        { icon: ClipboardList, label: 'Absences', path: '/formateur/absences' },
        { icon: BarChart3, label: 'Statistiques', path: '/formateur/statistics' },
        { icon: User, label: 'Profil', path: '/formateur/profile' },
      ];
    } else if (user?.role === 'admin') {
      return [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin/dashboard' },
        { icon: Calendar, label: 'Emploi du temps', path: '/admin/schedule' },
        { icon: BarChart3, label: 'Statistiques absences', path: '/admin/absences-stats' },
        { icon: FileText, label: 'Attestations', path: '/admin/attestations' },
        { icon: Users, label: 'Utilisateurs', path: '/admin/users' },
        { icon: Settings, label: 'Paramètres', path: '/admin/settings' },
      ];
    }
    return [];
  };

  const sidebarItems = getSidebarItems();

  return (
    <aside className="w-64 h-screen sticky top-0 border-r bg-white dark:bg-[#1a1f2e] dark:border-gray-800 flex flex-col">
      <div className="p-6 border-b dark:border-gray-800">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#1E88E5] flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-900 dark:text-white">ISMONTIC</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
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