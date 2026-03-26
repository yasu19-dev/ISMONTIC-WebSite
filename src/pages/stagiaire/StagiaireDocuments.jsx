import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Search, Download, FileText, File, Calendar } from 'lucide-react';

export function StagiaireDocuments() {
  const documents = [
    {
      name: 'Règlement intérieur 2025-2026',
      type: 'PDF',
      category: 'Règlement',
      date: '2025-09-01',
      size: '2.5 MB',
    },
    {
      name: 'Formulaire de demande d\'attestation',
      type: 'PDF',
      category: 'Formulaire',
      date: '2025-09-15',
      size: '450 KB',
    },
    {
      name: 'Guide de stage en entreprise',
      type: 'PDF',
      category: 'Guide',
      date: '2025-10-01',
      size: '1.2 MB',
    },
    {
      name: 'Calendrier des examens S1',
      type: 'PDF',
      category: 'Calendrier',
      date: '2026-01-15',
      size: '380 KB',
    },
    {
      name: 'Convention de stage',
      type: 'DOCX',
      category: 'Formulaire',
      date: '2025-09-20',
      size: '120 KB',
    },
    {
      name: 'Guide E-learning',
      type: 'PDF',
      category: 'Guide',
      date: '2025-09-10',
      size: '890 KB',
    },
    {
      name: 'Procédures administratives',
      type: 'PDF',
      category: 'Guide',
      date: '2025-09-05',
      size: '650 KB',
    },
    {
      name: 'Charte informatique',
      type: 'PDF',
      category: 'Règlement',
      date: '2025-09-01',
      size: '320 KB',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Règlement':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Formulaire':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Guide':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Calendrier':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getFileIcon = (type) => {
    return type === 'PDF' ? FileText : File;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Documents</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Accédez à tous vos documents administratifs et pédagogiques
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total documents</p>
              <p className="text-gray-900 dark:text-white">{documents.length}</p>
            </div>
            <FileText className="w-8 h-8 text-[#1E88E5]" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Règlements</p>
              <p className="text-gray-900 dark:text-white">
                {documents.filter(d => d.category === 'Règlement').length}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <span className="text-red-600 dark:text-red-400">📋</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Formulaires</p>
              <p className="text-gray-900 dark:text-white">
                {documents.filter(d => d.category === 'Formulaire').length}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400">📝</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Guides</p>
              <p className="text-gray-900 dark:text-white">
                {documents.filter(d => d.category === 'Guide').length}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400">📚</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input placeholder="Rechercher un document..." className="pl-10" />
        </div>
      </Card>

      {/* Documents list */}
      <Card>
        <div className="p-6">
          <h3 className="text-gray-900 dark:text-white mb-4">Tous les documents</h3>
        </div>
        <div className="divide-y dark:divide-gray-800">
          {documents.map((doc, index) => {
            const Icon = getFileIcon(doc.type);
            return (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 dark:hover:bg-[#1a1f2e] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-[#232936] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-gray-900 dark:text-white truncate">
                        {doc.name}
                      </h4>
                      <Badge className={getCategoryColor(doc.category)}>
                        {doc.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(doc.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span>•</span>
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}