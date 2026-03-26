import { useState, useCallback } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { UploadCloud, FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export function AdminSchedule() {
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
    // Simulating import process
    setTimeout(() => {
      setIsImported(true);
    }, 1000);
  };

  const dummySchedule = [
    { day: 'Lundi', time: '08:30 - 10:30', module: 'Développement Web', formateur: 'M. Alaoui', room: 'Salle 12' },
    { day: 'Lundi', time: '10:45 - 12:45', module: 'Base de données', formateur: 'Mme. Idrissi', room: 'Lab 4' },
    { day: 'Mardi', time: '08:30 - 12:45', module: 'Programmation Java', formateur: 'M. Benali', room: 'Lab 2' },
    { day: 'Mercredi', time: '14:00 - 18:00', module: 'Réseaux', formateur: 'M. Tazi', room: 'Salle 8' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Gestion des emplois du temps</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Importez et assignez les emplois du temps (fichiers Excel) pour les différents groupes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Upload Zone */}
        <Card className="md:col-span-1 p-6 flex flex-col items-center justify-center border-dashed border-2 bg-gray-50/50 dark:bg-[#1a1f2e]/50">
          <form
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="w-full flex flex-col items-center justify-center relative"
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".xlsx, .xls, .csv"
              onChange={handleChange}
            />
            
            <UploadCloud className={`w-12 h-12 mb-4 ${dragActive ? 'text-[#00C9A7]' : 'text-gray-400'}`} />
            
            <h3 className="text-gray-900 dark:text-white mb-2 font-medium text-center">
              Importer un fichier Excel
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              Glissez-déposez votre fichier ici, ou cliquez pour parcourir.
            </p>

            <label htmlFor="file-upload">
              <Button type="button" variant={file ? "outline" : "default"} className="pointer-events-none">
                {file ? 'Changer de fichier' : 'Parcourir'}
              </Button>
            </label>

            {dragActive && (
              <div className="absolute inset-0 bg-[#00C9A7]/10 rounded-lg pointer-events-none"></div>
            )}
          </form>

          {file && (
            <div className="w-full mt-6 p-3 bg-white dark:bg-[#232936] rounded-lg border flex items-center gap-3">
              <FileSpreadsheet className="w-8 h-8 text-green-600" />
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
              {isImported ? (
                <CheckCircle2 className="w-5 h-5 text-[#00C9A7]" />
              ) : (
                <Button size="sm" onClick={handleImport}>Importer</Button>
              )}
            </div>
          )}
        </Card>

        {/* Preview & Assign */}
        <Card className="md:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900 dark:text-white font-medium">
              Prévisualisation & Assignation
            </h3>
            {isImported && (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                Fichier valide
              </Badge>
            )}
          </div>

          {!isImported ? (
            <div className="h-[300px] flex flex-col items-center justify-center text-gray-400">
              <AlertCircle className="w-12 h-12 mb-4 opacity-50" />
              <p>Importez un fichier pour voir la prévisualisation</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-end gap-4 bg-gray-50 dark:bg-[#1a1f2e] p-4 rounded-lg">
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Assigner cet emploi du temps au groupe :
                  </label>
                  <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un groupe..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DEVOWS201">DEVWOFS201</SelectItem>
                      <SelectItem value="DEVOWS202">DEVWOFS202</SelectItem>
                      <SelectItem value="DEVOWS203">DEVWOFS203</SelectItem>
                      <SelectItem value="DEVOWS204">DEVWOFS204</SelectItem>
                      <SelectItem value="DEVOWS205">DEVWOFS205</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button disabled={!selectedGroup} className="bg-[#1E88E5] hover:bg-[#1565C0]">
                  Confirmer l'assignation
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-[#1a1f2e] text-gray-600 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3 font-medium rounded-tl-lg">Jour</th>
                      <th className="px-4 py-3 font-medium">Horaire</th>
                      <th className="px-4 py-3 font-medium">Module</th>
                      <th className="px-4 py-3 font-medium">Formateur</th>
                      <th className="px-4 py-3 font-medium rounded-tr-lg">Salle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummySchedule.map((row, idx) => (
                      <tr key={idx} className="border-b dark:border-gray-800 last:border-0">
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.day}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{row.time}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{row.module}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{row.formateur}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{row.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}