# Modèle de Portfolio Académique et Scientifique

Il s'agit d'un modèle de site web personnel et académique conçu spécifiquement pour les chercheurs, enseignants, doctorants et scientifiques. Il est construit avec **React, Vite et Vanilla CSS** pour offrir une expérience moderne, responsive et performante.

---

## 🛠️ Technologies Utilisées

* **React 19**
* **Vite 8** (Développement et compilation rapides)
* **Vanilla CSS** (Styles optimisés avec variables CSS)
* **Lucide React** (Icônes modernes et vectorielles)

---

## 🚀 Démarrage Rapide

### 1. Prérequis
Assurez-vous d'avoir installé **Node.js** (version 18 ou supérieure).

### 2. Installer les Dépendances
Clonez ou téléchargez ce dossier et exécutez :
```bash
npm install
```

### 3. Lancer le Serveur de Développement
Pour visualiser le site en local avec rechargement en direct (hot reload) :
```bash
npm run dev
```
Ouvrez votre navigateur à l'adresse indiquée dans la console (généralement `http://localhost:5173`).

### 4. Compiler pour la Production
Pour préparer le site et l'héberger sur votre serveur web, GitHub Pages ou GitLab Pages :
```bash
npm run build
```
Les fichiers prêts à être déployés seront générés dans le dossier `dist`.

---

## ✍️ Comment Personnaliser le Modèle

Toutes les informations du site sont structurées pour être facilement personnalisables sans avoir à toucher à la logique interne de React.

### 1. Informations Personnelles, Biographie et CV
Modifiez les fichiers de langues situés dans `src/locales/` :
* `es.js` (Espagnol)
* `en.js` (Anglais)
* `fr.js` (Français)

Dans ces fichiers, vous pouvez modifier les variables suivantes :
* Votre nom et fonction.
* Vos paragraphes de biographie.
* Votre parcours d'études, d'enseignement et d'expérience professionnelle (Timeline).
* Les outils et technologies que vous utilisez.

### 2. Photo de Profil
Remplacez l'image par défaut dans `public/images/profile.jpg` par votre propre photo (un format carré ou optimisé pour un recadrage circulaire est recommandé).

### 3. Télécharger les Publications Automatiquement
Le modèle dispose d'un script automatisé pour importer vos publications directement depuis des archives ouvertes (comme HAL) en utilisant votre identifiant auteur.
* Modifiez le script `scripts/fetch-publications.js` et remplacez l'ID auteur par votre identifiant HAL.
* Exécutez :
  ```bash
  node scripts/fetch-publications.js
  ```
  Cela mettra à jour automatiquement le fichier `src/data/publications.json`.

---

## ⚖️ Licence et Marques Déposées

Le code de ce modèle est distribué sous la licence **WTFPL (Do What The Fuck You Want To Public License)**. Vous pouvez copier, modifier, distribuer commercialement et renommer ce code sans restriction.

> [!WARNING]
> **Avis concernant les marques déposées :** Les logos inclus dans `public/logos/` (Sorbonne Nouvelle, HAL, Zenodo, GitHub, GitLab, etc.) sont la propriété exclusive et les marques de commerce de leurs institutions respectives. La licence WTFPL s'applique uniquement à la structure et aux styles du code source du modèle, et non à l'usage des logos et des identités visuelles tierces. Veuillez remplacer ou adapter ces logos en fonction de vos affiliations institutionnelles.
