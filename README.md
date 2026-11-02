# Farouq Hafizhuddin — Personal Portfolio & AI Research Showcase

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://zhuarv2.github.io/portfolio/)
[![GitHub Pages](https://github.com/zhuarv2/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/zhuarv2/portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg)](https://vitejs.dev/)

> **Live Website:** [https://zhuarv2.github.io/portfolio/](https://zhuarv2.github.io/portfolio/)

Personal portfolio presenting **Farouq Hafizhuddin** as an aspiring machine learning researcher and software developer, designed with a clean, modern **Editorial AI Research Lab** aesthetic.

---

## 🌟 Highlights & Featured Work

### 🔬 Machine Learning Research Projects (TEKNOFEST AI in Health)
The portfolio showcases deep scientific briefs and original competition reports for 4 machine learning studies:

1. **Polyp Segmentation via ResUNet++**
   - *Benchmark:* CVC-ClinicDB | *Result:* **90.27% Validation IoU**
   - ResNet-based encoder with Squeeze-and-Excitation units, Atrous Spatial Pyramid Pooling (ASPP), and spatial attention units for constrained biomedical datasets.
2. **Cardiothoracic Ratio (CTR) Estimation via CNN Regression**
   - *Architecture:* MobileNetV2 landmark regression on chest radiographs with Smooth L1 Loss.
   - Real-time cardiomegaly screening through automated cardiac and thoracic boundary delineation.
3. **12-Lead ECG Classification Architecture**
   - *Benchmark:* PTB-XL | *Result:* **81.70% Test Macro F1**
   - Dual-branch 1D-CNN + Temporal Convolutional Network (TCN) with multi-head temporal attention pooling for multi-label cardiac arrhythmia detection.
4. **5-Class ECG Diagnostic Detail Report**
   - *Evaluation:* Stratified 5-fold cross-validation on 5,000 balanced records.
   - Butterworth bandpass filtering, 81.25% Test Macro F1, and gradient saliency interpretability for clinical auditability.

*Each project includes an interactive 11-section research modal with scientific summaries, hyperparameters, architecture breakdowns, evaluation tables, and direct access to original reports.*

### 💻 Featured Software Engineering: Trainer App
- **Live PWA:** [trainerapp.driveme.id](https://trainerapp.driveme.id)
- **Architecture:** Vanilla JavaScript (ES6+), semantic HTML5 & CSS3, Service Worker offline caching, FastAPI REST backend, JWT Bearer authentication, Nginx reverse proxy on Ubuntu Linux.
- **Interactive Preview:** Integrated browser frame showcasing Routine, Weekly Planner, and History.

---

## 🛠️ Tech Stack

- **Frontend:** [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** `Inter` (UI prose) & `JetBrains Mono` (code & data readouts)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/zhuarv2/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The output will be bundled into the `dist/` folder, ready for deployment.

---

## 📁 Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg               # Monogram favicon
│   └── research-papers/          # Original TEKNOFEST competition report PDFs
│       ├── research1.pdf
│       ├── research2.pdf
│       ├── research3.pdf
│       └── research4.pdf
├── src/
│   ├── components/
│   │   ├── Nav.tsx               # Header with mobile drawer & quick links
│   │   ├── Hero.tsx              # Headline, quick stats, NeuralViz graphic
│   │   ├── NeuralViz.tsx         # Interactive neural net architecture diagram
│   │   ├── About.tsx             # Student journey, education & 3 research pillars
│   │   ├── Research.tsx          # 2x2 grid of ML studies with URL hash routing
│   │   ├── ResearchChart.tsx     # Scientific data visualizations (IoU, CTR, F1)
│   │   ├── ResearchModal.tsx     # 11-part academic brief with PDF viewing/download
│   │   ├── Projects.tsx          # Trainer App featured case study
│   │   ├── Skills.tsx            # Grouped technical foundations
│   │   ├── Education.tsx         # School & TDV scholarship cards
│   │   ├── Contact.tsx           # Contact channels & profile links
│   │   └── Footer.tsx            # Minimalist copyright & colophon
│   ├── data/
│   │   └── content.ts            # Centralized content store (all text, projects & data)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html                    # SEO meta tags, OpenGraph, font preloads
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚢 Continuous Deployment (GitHub Pages)

This repository includes a native GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that automatically builds and deploys the site to GitHub Pages whenever changes are pushed to `main`.

To enable it:
1. Go to repository **Settings** &rarr; **Pages**.
2. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.

---

## 📬 Contact & Connect

- **GitHub:** [@zhuarv2](https://github.com/zhuarv2)
- **LinkedIn:** [Farouq Hafizhuddin](https://www.linkedin.com/in/farouq-hafizhuddin-4ba223279/)
- **Email:** [hafizhuddinfarouq@gmail.com](mailto:hafizhuddinfarouq@gmail.com)
