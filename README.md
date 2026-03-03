# Pegase — Design System

Système de design modulaire et composants React réutilisables pour les applications Pegase.

## 📁 Structure

```
pegase/
├── packages/
│   └── design-system/        # Package du design system
│       ├── src/
│       │   ├── Core/
│       │   │   ├── Badge/
│       │   │   ├── Button/
│       │   │   ├── Input/
│       │   │   ├── Menu/
│       │   │   └── Card/
│       │   ├── styles/       # Variables CSS communes
│       │   └── utils/
│       ├── dist/             # Sortie build (auto-générée)
│       ├── package.json
│       └── tsup.config.ts
│
└── app/
    └── backoffice/          # Application consommatrice
        ├── src/
        ├── package.json
        └── vite.config.ts
```

## 🚀 Installation

### Installation globale du workspace

```bash
npm install
```

Cela installe les dépendances pour **tous** les packages et applications du monorepo.

## 🛠️ Développement

### Build du design-system

Compile les composants TypeScript et CSS en distribution (dist/).

```bash
npm run build:ds
```

### Mettre à jour le backoffice

Après un build du design-system, il suffit de réinstaller les dépendances du backoffice :

```bash
cd app/backoffice
npm install
```

Cela tire la dernière version publiée du design-system dans `node_modules/`.

### Développer le design-system en live

Watchez les fichiers et rebuildez automatiquement :

```bash
npm run dev
```

## 📦 Composants disponibles

### Badge
Petit badge étiquette avec 6 variantes (primary, secondary, success, danger, warning, info).

```tsx
<Badge variant="primary">Label</Badge>
```

### Button
Bouton avec 6 variantes et 3 tailles.

```tsx
<Button variant="primary" size="medium">Click me</Button>
```

### Input
Champ texte avec 3 tailles.

```tsx
<Input size="medium" placeholder="Tapez..." />
```

### Menu
Barre de navigation horizontale avec gestion d'état actif dynamique.

```tsx
const [active, setActive] = useState('home');

<Menu activeKey={active} onChange={setActive} variant="primary">
  <MenuItem value="home">Accueil</MenuItem>
  <MenuItem value="about">À propos</MenuItem>
  <MenuItem value="contact">Contact</MenuItem>
</Menu>
```

### Card
Composant conteneur flexible avec image, titre, contenu et zone action.

```tsx
<Card size="medium">
  <CardImage src="/image.jpg" alt="Description" />
  <CardHeader>Titre</CardHeader>
  <CardBody>Contenu</CardBody>
  <CardFooter>
    <Button variant="primary" size="small">Action</Button>
  </CardFooter>
</Card>
```

## 🎨 Design Tokens

Toutes les variables CSS sont centralisées dans `src/styles/global.css` :

- **Couleurs** : primary, secondary, success, danger, warning, info
- **Espacements** : spacing-xsmall, spacing-small, spacing-medium, spacing-large
- **Typographie** : title-font (Ultra), body-font (Lato)
- **Tailles** : size-small, size-medium, size-large, size-xlarge
- **Bordures** : border-radius, border-small, border-medium, border-large
- **Ombres** : shadow-light, shadow-normal, shadow-dark
- **Transitions** : transition-fast, transition-normal, transition-slow

## 📤 Publication

Le design-system est publié sur GitHub Packages.

```bash
cd packages/design-system
npm publish
```

## 🔗 Consommer le design-system

Dans n'importe quelle application :

```bash
npm install @pegaseoff/pegase-ds
```

Puis importer :

```tsx
import { Badge, Button, Input, Menu, Card } from '@pegaseoff/pegase-ds';
import '@pegaseoff/pegase-ds/dist/index.css';
```

## 💡 Tips

- Chaque composant supporte une classe CSS personnalisée via `className`
- Les types TypeScript sont inclus (`CardProps`, `MenuProps`, etc.)
- React 19+ est requis
- Le design-system utilise des variable CSS pour tout customiser globalement

## 📝 License

ISC
