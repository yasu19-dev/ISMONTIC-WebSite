import { useState } from 'react';
import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Search, MessageCircle, Send } from 'lucide-react';

export function FAQ() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const faqs = [
    {
      category: 'Admission',
      questions: [
        {
          q: 'Quelles sont les conditions d\'admission ?',
          a: 'L\'admission à l\'ISMONTIC nécessite un niveau bac ou équivalent. Les candidats doivent passer un test de sélection et un entretien.',
        },
        {
          q: 'Quand sont les inscriptions ?',
          a: 'Les inscriptions sont généralement ouvertes de juin à septembre pour la rentrée de septembre/octobre.',
        },
        {
          q: 'Quel est le coût de la formation ?',
          a: 'Les formations à l\'ISMONTIC sont gratuites car financées par l\'OFPPT.',
        },
      ],
    },
    {
      category: 'Formations',
      questions: [
        {
          q: 'Quelle est la durée des formations ?',
          a: 'La plupart des formations durent 2 ans et délivrent un diplôme de Technicien Spécialisé.',
        },
        {
          q: 'Y a-t-il des stages en entreprise ?',
          a: 'Oui, chaque formation comprend des stages pratiques en entreprise pour favoriser l\'insertion professionnelle.',
        },
        {
          q: 'Les diplômes sont-ils reconnus ?',
          a: 'Oui, tous nos diplômes sont reconnus par l\'État marocain et validés par l\'OFPPT.',
        },
      ],
    },
    {
      category: 'Vie à l\'institut',
      questions: [
        {
          q: 'Quels sont les horaires ?',
          a: 'Les cours ont lieu du lundi au vendredi, généralement de 8h30 à 17h avec une pause déjeuner.',
        },
        {
          q: 'Y a-t-il des activités parascolaires ?',
          a: 'Oui, l\'institut organise régulièrement des clubs, des conférences et des événements sportifs et culturels.',
        },
      ],
    },
  ];

  const quickQuestions = [
    'Comment s\'inscrire ?',
    'Quelles sont les filières disponibles ?',
    'Y a-t-il un hébergement ?',
    'Comment contacter l\'administration ?',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#141820]">
      <PublicHeader />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 dark:text-white mb-4 text-center">
            Foire aux Questions
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Trouvez rapidement les réponses à vos questions
          </p>

          {/* Search */}
          <Card className="p-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Rechercher une question..."
                className="pl-10"
              />
            </div>
          </Card>

          {/* FAQs */}
          {faqs.map((category, idx) => (
            <Card key={idx} className="p-6 mb-6">
              <h2 className="text-gray-900 dark:text-white mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}

          {/* Still need help */}
          <Card className="p-8 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
            <h3 className="text-gray-900 dark:text-white mb-2 text-center">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
            <div className="flex justify-center gap-3">
              <Button onClick={() => setChatOpen(true)}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Discuter avec nous
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-[#1a1f2e] rounded-2xl shadow-2xl border dark:border-gray-800 flex flex-col z-50">
          <div className="p-4 border-b dark:border-gray-800 flex items-center justify-between bg-[#1E88E5] text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <h3 className="text-white">Assistant ISMONTIC</h3>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            <div className="bg-gray-100 dark:bg-[#232936] p-3 rounded-lg max-w-[80%]">
              <p className="text-sm text-gray-900 dark:text-white">
                Bonjour! Comment puis-je vous aider aujourd'hui ?
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-600 dark:text-gray-400">Questions fréquentes:</p>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  className="text-left text-sm p-2 rounded-lg border dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#232936] text-gray-900 dark:text-white"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-800">
            <div className="flex gap-2">
              <Input
                placeholder="Tapez votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating chatbot button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#1E88E5] hover:bg-[#1565C0] text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      <PublicFooter />
    </div>
  );
}