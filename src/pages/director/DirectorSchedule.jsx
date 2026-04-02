import { useState, useCallback } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { UploadCloud, FileSpreadsheet, CheckCircle2, AlertCircle, Download, Calendar } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export function DirectorSchedule() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [isImported, setIsImported] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setIsImported(false);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsImported(false);
    }
  };

  const handleImport = () => {
    setTimeout(() => {
      setIsImported(true);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">
            Gestion des emplois du temps
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Importez et gérez les emplois du temps des différentes filières
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Exporter le planning
        </Button>
      </div>

      {/* Import Section */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <UploadCloud className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              Importer un emploi du temps
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Formats acceptés : Excel (.xlsx, .xls), CSV
            </p>
          </div>
        </div>

        {/* Drag and Drop Zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10'
              : 'border-gray-300 dark:border-gray-700'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".xlsx,.xls,.csv"
            onChange={handleChange}
          />
          
          {file ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400">
                <FileSpreadsheet className="w-8 h-8" />
                <div className="text-left">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              
              {!isImported ? (
                <div className="flex gap-3 justify-center">
                  <Button onClick={handleImport} className="gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Confirmer l'import
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFile(null);
                      setIsImported(false);
                    }}
                  >
                    Annuler
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Import réussi !</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <FileSpreadsheet className="w-12 h-12 mx-auto text-gray-400" />
              <div>
                <p className="text-gray-900 dark:text-white mb-2">
                  Glissez-déposez votre fichier ici
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  ou
                </p>
                <label htmlFor="file-upload">
                  <Button asChild variant="outline">
                    <span className="cursor-pointer">Parcourir les fichiers</span>
                  </Button>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Import Info */}
        <div className="mt-4 flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p className="font-medium mb-1">Instructions d'import :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Le fichier doit contenir les colonnes : Jour, Heure, Module, Formateur, Salle</li>
              <li>L'import remplacera l'emploi du temps existant pour le groupe sélectionné</li>
              <li>Vérifiez bien les données avant d'importer</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* View Schedule */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              Consulter un emploi du temps
            </h3>
          </div>
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sélectionner un groupe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TDD201">TDD201</SelectItem>
              <SelectItem value="TDD202">TDD202</SelectItem>
              <SelectItem value="TDD203">TDD203</SelectItem>
              <SelectItem value="TRI101">TRI101</SelectItem>
              <SelectItem value="TSGE101">TSGE101</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedGroup ? (
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-[#232936]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Heure</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Lundi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Mardi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Mercredi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Jeudi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Vendredi</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Samedi</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">08:00-10:00</td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Mathématiques</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. Alaoui - Salle 101</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Programmation C</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">M. El Fassi - Lab 03</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Réseaux</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Benjelloun - Salle 205</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Base de données</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Idrissi - Lab 02</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <p className="text-gray-900 dark:text-white font-medium">Anglais</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mme. Mansouri - Salle 103</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 bg-gray-50 dark:bg-[#232936]">
                      <span className="text-xs text-gray-400">-</span>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Sélectionnez un groupe pour voir son emploi du temps
          </div>
        )}
      </Card>
    </div>
  );
}