# ISMONTIC - Plateforme de Gestion Éducative

Plateforme web moderne et complète pour l'Institut Spécialisé de Monétique, Informatique et Techniques de Communication (ISMONTIC).

## 🎯 Fonctionnalités

### 🌐 Site Public
- **Page d'accueil** : Présentation de l'institut avec hero section, filières, actualités et localisation
- **Présentation** : Mission, valeurs et chiffres clés de l'ISMONTIC
- **Filières** : Description détaillée des formations (Développement Digital, Infrastructure Digitale, Monétique)
- **Staff** : Présentation de l'équipe pédagogique et administrative
- **FAQ** : Questions fréquentes avec chatbot intégré
- **Contact** : Formulaire de contact avec informations pratiques

### 👨‍🎓 Espace Stagiaire
- **Tableau de bord** : Vue d'ensemble avec prochain cours, dernières notes et annonces récentes
- **Profil** : Gestion des informations personnelles
- **Notes** : Consultation des notes par module avec filtres
- **Emploi du temps** : Visualisation hebdomadaire des cours
- **Documents** : Accès aux documents administratifs et pédagogiques
- **Annonces** : Actualités et communications de l'institut
- **Réclamations** : Système de soumission et suivi des réclamations
- **Rendez-vous** : Prise de rendez-vous pour attestations (système de stepper)
- **E-learning** : Accès aux plateformes de formation en ligne (Scholarvox, OFPPT Langues, Altissia, Teams)

### 👨‍🏫 Espace Formateur
- **Tableau de bord** : Vue d'ensemble des cours et statistiques
- **Gestion des absences** : Enregistrement détaillé des absences et retards par séance
- **Statistiques** : Analyses des absences par module et groupe

### 👤 Espace Administration
- **Tableau de bord** : KPIs, alertes système et activité récente
- **Statistiques d'absences** : Analyses globales avec exports
- **Demandes d'attestations** : Gestion du workflow complet (validation, génération, livraison)
- **Gestion des utilisateurs** : Administration des comptes avec gestion des rôles
- **Paramètres** : Configuration du système

## 🎨 Design

### Identité Visuelle
- **Couleur principale** : Bleu institutionnel (#1E88E5 / #1565C0)
- **Couleur accent** : Turquoise (#00C9A7)
- **Design** : Moderne, épuré et professionnel
- **Responsive** : Desktop first avec adaptations tablette et mobile

### Thèmes
- **Mode clair** : Fond blanc avec cartes blanches et ombres légères
- **Mode sombre** : Fond bleu nuit (#141820) avec cartes (#1a1f2e)
- **Switch** : Toggle Dark/Light accessible depuis tous les écrans

### Composants
- Boutons (primary, secondary, outline, ghost)
- Cartes (cards) avec variations
- Badges de statut avec codes couleur
- Tableaux stylés avec tri et filtres
- Formulaires avec validation
- Modales et dialogues
- Système de navigation (sidebar, topbar)
- Composants Shadcn/UI

## 🛠️ Technologies

- **React** : Framework principal
- **TypeScript** : Typage statique
- **React Router** : Navigation
- **Tailwind CSS** : Styling
- **Shadcn/UI** : Bibliothèque de composants
- **Lucide React** : Icônes
- **Context API** : Gestion d'état (thème, authentification)

## 📱 Écrans Créés

### Public (7 écrans)
1. Home - Page d'accueil
2. Presentation - À propos
3. Filieres - Formations
4. Staff - Équipe
5. FAQ - Questions fréquentes + Chatbot
6. Contact - Formulaire et infos
7. Login - Authentification multi-profils

### Stagiaire (9 écrans)
1. Dashboard
2. Profil
3. Notes
4. Emploi du temps
5. Documents
6. Annonces
7. Réclamations
8. Rendez-vous
9. E-learning

### Formateur (3 écrans)
1. Dashboard
2. Enregistrement absences
3. Statistiques

### Administration (5 écrans)
1. Dashboard
2. Statistiques absences
3. Gestion attestations
4. Gestion utilisateurs
5. Paramètres

**Total : 24 écrans complets + fonctionnalités**

## 🚀 Utilisation

### Connexion
- **Stagiaire** : Choisir l'onglet "Stagiaire" et se connecter
- **Formateur** : Choisir l'onglet "Formateur" et se connecter
- **Admin** : Choisir l'onglet "Admin" et se connecter

### Navigation
- **Public** : Menu en haut avec toutes les sections
- **Connecté** : Sidebar à gauche avec menu contextuel selon le rôle
- **Switch thème** : Bouton Moon/Sun accessible partout

## 📊 Données

L'application utilise des données mockées pour la démonstration :
- Stagiaires, formateurs et administrateurs simulés
- Notes, absences et attestations d'exemple
- Annonces et documents de test
- Statistiques générées

## 🎯 Points Forts

✅ **Interface complète** : Tous les écrans demandés sont implémentés  
✅ **Design cohérent** : Système de design unifié avec variables CSS  
✅ **Responsive** : Adapté à tous les écrans  
✅ **Dark mode** : Support complet avec persistance  
✅ **Composants réutilisables** : Architecture modulaire  
✅ **Navigation intuitive** : UX optimisée par profil  
✅ **Accessibilité** : Composants accessibles (Shadcn/UI)  
✅ **Performance** : Code optimisé et structure claire  

## 📝 Notes Techniques

- **Authentification** : Système simulé avec Context API
- **Routes protégées** : Vérification des rôles utilisateur
- **Persistance** : LocalStorage pour le thème
- **Icons** : Lucide React pour la cohérence
- **Images** : Unsplash pour les photos de qualité
- **Formulaires** : Validation côté client
- **États** : Gestion avec React hooks

---

**Développé pour ISMONTIC - 2025**
