import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès!');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#141820]">
      <PublicHeader />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-gray-900 dark:text-white mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Notre équipe est à votre disposition pour répondre à vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E88E5]/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-[#1E88E5]" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Téléphone</h3>
              <p className="text-gray-600 dark:text-gray-400">+212 539-380871</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-[#00C9A7]" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">ismontictanger.ofppt@gmail.ma</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-400">Av. des Forces Armées Royales, Tanger, Maroc</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-gray-900 dark:text-white mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet</Label>
                    <Input id="nom" placeholder="Votre nom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tel">Téléphone</Label>
                  <Input id="tel" type="tel" placeholder="+212 6XX-XXXXXX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sujet">Sujet</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admission">Demande d'admission</SelectItem>
                      <SelectItem value="info">Demande d'information</SelectItem>
                      <SelectItem value="stage">Stage en entreprise</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-gray-900 dark:text-white mb-4">Horaires d'accueil</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#1E88E5]" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Lundi - Vendredi</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">8h30 - 18h30</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#1E88E5]" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Samedi</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">9h00 - 13h00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-900 dark:text-white">Dimanche</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fermé</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-gray-900 dark:text-white mb-4">Localisation</h3>
                <div className="aspect-video bg-gray-200 dark:bg-[#232936] rounded-lg flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-900 dark:text-white">ISMONTIC</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Av. des Forces Armées Royales<br />
                    Tanger, Maroc
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}