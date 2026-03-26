import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Moon, Sun, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function PublicHeader() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Présentation', path: '/presentation' },
    { label: 'Filières', path: '/filieres' },
    { label: 'Staff', path: '/staff' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur dark:bg-[#1a1f2e]/95 dark:border-gray-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#1E88E5] flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-900 dark:text-white">ISMONTIC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors ${
                location.pathname === item.path
                  ? 'text-[#1E88E5] dark:text-[#00C9A7]'
                  : 'text-gray-600 hover:text-[#1E88E5] dark:text-gray-300 dark:hover:text-[#00C9A7]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
          <Button asChild>
            <Link to="/login">Connexion</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
