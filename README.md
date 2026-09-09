# PhoenixInsights

> **Turn Business Workflows Into Intelligent AI Workforces**

PhoenixInsights is a modern enterprise web platform designed to showcase AI-driven workflow orchestration, specialized multi-agent architectures, decision intelligence, and enterprise-grade governance.

---

## 🚀 Features

- **Specialized AI Workforces & Solutions Hub**:
  - **HR Workforce**: Intelligent candidate screening, onboarding, and talent analytics.
  - **Sales Workforce**: Autonomous lead qualification, enrichment, and pipeline intelligence.
  - **Marketing Workforce**: Multi-channel campaign orchestration, content intelligence, and attribution.
  - **Finance Workforce**: Automated invoice reconciliation, spend anomaly detection, and cash flow forecasting.
  - **Support Workforce**: Tier-1/2 resolution, semantic ticket routing, and sentiment escalation.
  - **Operations Workforce**: Supply chain logistics monitoring, inventory forecasting, and vendor compliance.
- **Interactive Agent Studio**:
  - Live simulation of multi-agent collaboration graphs, task execution pipelines, and deterministic guardrail evaluations.
- **Data & Decision Intelligence**:
  - Unified data plane combining machine learning models, retrieval-augmented reasoning (RAG), and strategic recommendation engines.
- **Enterprise Governance & Safety**:
  - Built-in human-in-the-loop approval gates, audit trails, policy enforcement, and compliance telemetry.
- **4-Stage Paid POC Model**:
  - Transparent engagement framework covering Scoping, Agent Graph Prototyping, Pilot Deployment, and Production Scale.
- **Modern Design & Typography**:
  - Styled with Tailwind CSS, custom dark/light color palette, glassmorphism accents, and **Space Grotesk** typography.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

To verify your installation:
```bash
node -v
npm -v
```

---

## 🏃 Getting Started (Steps to Run)

### 1. Clone or Open the Repository
Navigate to the project root directory:
```bash
cd phoenixinsights
```

### 2. Install Dependencies
Install all required packages from `package.json`:
```bash
npm install
```

### 3. Start the Development Server
Run the local Vite development server:
```bash
npm run dev
```

Once started, open your browser and navigate to:
```
http://localhost:5173
```
*(or the port indicated in your terminal)*

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Bundles the production-optimized files into the `dist/` folder. |
| `npm run preview` | Locally previews the production build created in `dist/`. |

---

## 📁 Project Structure

```text
phoenixinsights/
├── public/                 # Static assets (favicons, logos, images)
├── src/
│   ├── assets/             # Images and local brand media
│   ├── components/         # Reusable React UI components
│   │   ├── home/           # Homepage feature sections & preview modules
│   │   ├── layout/         # Navigation bar and Footer
│   │   └── ui/             # Reusable UI primitives (Button, Card, Badge, etc.)
│   ├── context/            # React Contexts (RouterContext for client navigation)
│   ├── data/               # Domain data, mock agent graphs, and solutions schema
│   ├── pages/              # Top-level view pages
│   │   ├── solutions/      # Dedicated solutions pages (HR, Sales, Finance, etc.)
│   │   ├── AboutPage.jsx
│   │   ├── AgentStudioPage.jsx
│   │   ├── AiWorkforcePage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DataDecisionIntelligencePage.jsx
│   │   ├── GovernancePage.jsx
│   │   ├── HomePage.jsx
│   │   ├── HowItWorksPage.jsx
│   │   ├── PocPage.jsx
│   │   ├── SolutionsHubPage.jsx
│   │   └── TechnologyPage.jsx
│   ├── App.jsx             # Main router dispatcher and layout wrapper
│   ├── index.css           # Global Tailwind CSS imports & base typography styles
│   └── main.jsx            # React root mount
├── index.html              # HTML entry point with Space Grotesk Google Font
├── package.json            # Project dependencies and script commands
├── postcss.config.js       # PostCSS plugins configuration
├── tailwind.config.js      # Tailwind CSS theme configuration (colors, fonts, animations)
└── vite.config.js          # Vite build and plugin configuration
```

---

## 🎨 Customization

### Typography
The application uses **Space Grotesk** across headings and body text, with **JetBrains Mono** for technical telemetry and code badges:
- Configured in [tailwind.config.js](tailwind.config.js) under `theme.extend.fontFamily.sans`.
- Included in [index.html](index.html) and [src/index.css](src/index.css).

### Color Palette
Custom brand tokens are defined in [tailwind.config.js](tailwind.config.js):
- `navy`: Primary enterprise dark tones (`#071224`, `#0B1F3A`, `#13294B`, etc.)
- `purple`: Vibrant accent purple (`#7C3AED`, `#8B5CF6`, `#A78BFA`)
- `coral`: Warm highlight accent (`#E8798A`)
- `surface`: Background and card tones (`#F8F7F4`, `#FFFFFF`, `#11223D`)

---

## 📄 License

This project is private and proprietary. All rights reserved.
