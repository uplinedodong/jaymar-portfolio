# Jaymar Aranas — Portfolio Website

A modern, high-end, responsive portfolio website for **Jaymar Aranas** — Full-Stack & Mobile App Developer from the Philippines.

Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Plus Jakarta Sans (Google Fonts)

---

## 📁 Project Structure

```
jaymar-portfolio/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Main page assembling all sections
│   └── globals.css       # Global styles + Tailwind v4 @theme tokens
├── components/
│   ├── Navbar.tsx        # Sticky glassmorphism navbar
│   ├── Hero.tsx          # Hero section with typewriter
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Skills with animated bars
│   ├── Projects.tsx      # Filterable project cards
│   ├── Expertise.tsx     # Expertise areas
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to the project
cd jaymar-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

### Option 1: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project root
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: jaymar-portfolio
# - In which directory? ./
# - Want to override settings? N
```

Your site will be live at your Vercel domain (e.g., `jaymar-portfolio.vercel.app`).

### Option 2: Via Vercel Dashboard (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no extra configuration needed
5. Click **Deploy**
6. Your site is live! You can set a custom domain like `jaymar.vercel.app`

### Setting a Custom Domain (jaymar.vercel.app)

1. In your Vercel project dashboard → **Settings** → **Domains**
2. Enter `jaymar` as the subdomain under `vercel.app`
3. Vercel will assign `jaymar-portfolio.vercel.app` by default — you can rename the project to get `jaymar.vercel.app`

---

## ✨ Features

- 🌑 Dark mode by default
- ⚡ Smooth Framer Motion animations
- 💎 Glassmorphism UI cards
- 🎯 Typewriter hero animation
- 📊 Animated skill progress bars
- 🗂️ Filterable project cards
- 📬 Contact form with success state
- 📱 Fully mobile-responsive
- 🔍 SEO-optimized with Next.js Metadata API
- 🚀 Zero-config Vercel deployment

---

## 📝 License

© 2026 Jaymar Aranas. All rights reserved.
