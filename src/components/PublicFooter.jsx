import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function PublicFooter() {
  return (
    <footer className="bg-gray-50 dark:bg-[#141820] border-t dark:border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">ISMONTIC</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Institut spécialisé dans les métiers de l'offshoring et les nouvelles technologies de l'information et de la communication
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/presentation" className="text-gray-600 dark:text-gray-400 hover:text-[#1E88E5] dark:hover:text-[#00C9A7]">Présentation</Link></li>
              <li><Link to="/filieres" className="text-gray-600 dark:text-gray-400 hover:text-[#1E88E5] dark:hover:text-[#00C9A7]">Filières</Link></li>
              <li><Link to="/staff" className="text-gray-600 dark:text-gray-400 hover:text-[#1E88E5] dark:hover:text-[#00C9A7]">Staff</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-[#1E88E5] dark:hover:text-[#00C9A7]">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +212 539-380871
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                ismontictanger.ofppt@gmail.ma
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Tanger, Maroc
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white mb-4">Réseaux sociaux</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E88E5] hover:bg-[#1565C0] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E88E5] hover:bg-[#1565C0] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E88E5] hover:bg-[#1565C0] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2026 ISMONTIC. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}