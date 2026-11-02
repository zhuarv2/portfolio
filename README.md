# Farouq Hafizhuddin — Personal Portfolio Website

Personal portfolio website presenting Farouq Hafizhuddin as an aspiring machine learning researcher and software developer. Designed with an **Editorial AI Research Lab** aesthetic.

---

## 🌟 Overview & Highlights

- **Aesthetic**: Deep navy (`#0B1020`), soft white (`#F1F5F9`), and electric cyan (`#38BDF8`) accent. Academic typography pairing `Inter` with `JetBrains Mono`.
- **4 Machine Learning Research Projects (TEKNOFEST AI in Health)**:
  - **Polyp Segmentation via ResUNet++**: 90.27% Validation IoU on CVC-ClinicDB.
  - **Cardiothoracic Ratio Estimation via CNN Regression**: MobileNetV2 landmark regression on chest radiographs with Smooth L1 Loss.
  - **12-Lead ECG Classification Architecture**: Dual-branch 1D-CNN + TCN with temporal attention pooling on PTB-XL (81.70% Test F1).
  - **5-Class ECG Classification Detail Report**: Stratified 5-fold evaluation on 5,000 balanced records with Butterworth bandpass filtering, 81.25% Test Macro F1, and gradient saliency interpretability.
- **Interactive Research Brief Modal**: All 11 scientific sections, verified metrics tables, interactive charts, and deep-linkable URLs (e.g. `/#research/polyp-segmentation`).
- **Featured Software Engineering Project: Trainer App**:
  - Live PWA at [trainerapp.driveme.id](https://trainerapp.driveme.id).
  - Production architecture: Vanilla JavaScript (ES6+), semantic HTML5 & CSS3, Service Worker caching, FastAPI REST backend, JWT Bearer authentication, Nginx reverse proxy on Ubuntu Linux.
  - Interactive browser preview with 3 tabs: Today's Routine, Weekly Planner, and Session History.
- **Technical Foundations (Skills)**: Grouped into Programming, Machine Learning, Frameworks, and Concepts.
- **Education & Scholarship**: Uluslararası Kayseri İlahiyat Vakfı Anadolu İHL & TDV Scholarship recipient.
- **Direct Contact**: Verified email (`hafizhuddinfarouq@gmail.com`), GitHub, and LinkedIn links.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Inter` & `JetBrains Mono`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone or navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
# Type-check and create optimized production build
npm run build
```

The production output will be generated inside the `dist/` directory, ready to deploy.

### Previewing the Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg               # Custom FH monogram favicon
│   └── research-papers/          # Original TEKNOFEST research reports
│       ├── research1.pdf
│       ├── research2.pdf
│       ├── research3.pdf
│       └── research4.pdf
├── src/
│   ├── components/
│   │   ├── Nav.tsx               # Sticky header with mobile drawer & focus rings
│   │   ├── Hero.tsx              # Headline, CTAs, and NeuralViz graphic
│   │   ├── NeuralViz.tsx         # SVG neural network diagram with PyTorch training code
│   │   ├── About.tsx             # Student journey & 3 pillars (Research, Engineering, Learning)
│   │   ├── Research.tsx          # 2x2 grid of ML studies with URL hash synchronization
│   │   ├── ResearchChart.tsx     # Scientific visualizations (IoU bars, CTR diagram, F1 metrics)
│   │   ├── ResearchModal.tsx     # 11-part academic brief modal with share and PDF download
│   │   ├── Projects.tsx          # Trainer App featured case study with 3 interactive tabs
│   │   ├── Skills.tsx            # Grouped technical foundations
│   │   ├── Education.tsx         # School & TDV scholarship cards
│   │   ├── Contact.tsx           # Email mailto, GitHub, and LinkedIn links
│   │   └── Footer.tsx            # Minimalist copyright and colophon
│   ├── data/
│   │   └── content.ts            # Centralized content store (all data easily editable)
│   ├── App.tsx
│   ├── index.css                 # Tailwind directives, focus rings, reduced motion
│   └── main.tsx
├── index.html                    # SEO metadata, Open Graph, and Google Fonts
├── tailwind.config.js            # Custom colors (navy-900, accent cyan, etc.)
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 📝 Updating Content

All personal details, research project data, skills, and links are centralized in:
[`src/data/content.ts`](src/data/content.ts)

Simply edit this single file to add new research papers, update skills, or modify descriptions.

---

## 🚢 Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
You can configure GitHub Actions to deploy the `dist/` folder to GitHub Pages on every push to the `main` branch.
