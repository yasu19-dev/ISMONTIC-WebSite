import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { HeartPulse, CheckCircle2 } from 'lucide-react';

export function StagiaireMedical() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <HeartPulse className="w-8 h-8 text-[#00C9A7]" />
          Couverture Médicale
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Veuillez remplir ce formulaire pour bénéficier ou mettre à jour votre dossier de couverture médicale obligatoire.
        </p>
      </div>

      {!isSubmitted ? (
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Identity Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b pb-2">Identité</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Code Stagiaire</Label>
                  <Input id="code" placeholder="Ex: R123456789" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cin">CIN</Label>
                  <Input id="cin" placeholder="Ex: AB12345" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" placeholder="Votre nom de famille" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" placeholder="Votre prénom" required />
                </div>
              </div>
            </div>

            {/* Contact & Address Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b pb-2">Coordonnées et Adresse</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="adresse">Adresse complète</Label>
                  <Input id="adresse" placeholder="N°, Rue, Quartier..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ville">Ville</Label>
                  <Input id="ville" placeholder="Ex: Tanger" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tel">Téléphone</Label>
                  <Input id="tel" type="tel" placeholder="06 XX XX XX XX" required />
                </div>
              </div>
            </div>

            {/* Family Status Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b pb-2">Situation Familiale</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Situation matrimoniale</Label>
                  <Select defaultValue="celibataire">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celibataire">Célibataire</SelectItem>
                      <SelectItem value="marie">Marié(e)</SelectItem>
                      <SelectItem value="divorce">Divorcé(e)</SelectItem>
                      <SelectItem value="veuf">Veuf/Veuve</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label>Bénéficiez-vous d'une allocation familiale ?</Label>
                  <RadioGroup defaultValue="non" className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oui" id="oui" />
                      <Label htmlFor="oui" className="font-normal cursor-pointer">Oui</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non" id="non" />
                      <Label htmlFor="non" className="font-normal cursor-pointer">Non</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-4">
              <Button type="button" variant="outline">Annuler</Button>
              <Button type="submit" className="bg-[#1E88E5] hover:bg-[#1565C0]">
                Soumettre le dossier
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Card className="p-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-[#00C9A7]/10 rounded-full flex items-center justify-center mb-2">
            <CheckCircle2 className="w-8 h-8 text-[#00C9A7]" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Dossier soumis avec succès
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            Votre demande de couverture médicale a bien été enregistrée. L'administration 
            traitera votre dossier dans les plus brefs délais. Vous recevrez une notification 
            une fois la validation effectuée.
          </p>
          <Button 
            className="mt-6" 
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Soumettre une nouvelle demande
          </Button>
        </Card>
      )}
    </div>
  );
}