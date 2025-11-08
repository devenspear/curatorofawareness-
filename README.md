# Curator of Awareness

A philosophical exploration of the simulation hypothesis through an immersive Next.js web experience.

## Overview

This website explores the question that has captivated physicists, philosophers, and mystics for millennia: Are we living in a simulation? From Plato's Cave to modern quantum physics, from ancient Hindu Maya to Silicon Valley's virtual realities, this portal curates the greatest minds grappling with the nature of reality.

## Features

- **Interactive Home Page**: Animated welcome experience with floating 3D particles
- **The Four Arguments**: Explore different philosophical approaches to the simulation hypothesis
- **Simulation Calculator**: Interactive tool to calculate your personal simulation probability
- **The Library**: Curated collection of 15 essential books spanning ancient wisdom to cutting-edge physics
- **Shadow-Makers**: Profiles of key thinkers from Nick Bostrom to Sadhguru
- **Conversations**: Embedded long-form YouTube interviews with philosophers and scientists

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with @react-three/fiber
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/devenspear/curatorofawareness-.git

# Navigate to the project directory
cd CreatorofAwareness

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
curator-of-awareness/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── arguments/          # Four Arguments page
│   │   ├── conversations/      # YouTube interviews page
│   │   ├── library/            # Books library page
│   │   ├── thinkers/           # Thinkers profiles page
│   │   ├── layout.js           # Root layout with navigation
│   │   ├── page.js             # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── FloatingParticles.jsx
│   │   └── SimulationCalculator.jsx
│   └── data/                   # Data files
│       ├── books.js
│       ├── interviews.js
│       └── thinkers.js
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Color Palette

- **Void**: `#0A0A1A` - Deep background
- **Ether**: `#4A90E2` - Primary accent
- **Deep**: `#2D1B69` - Secondary purple
- **Soft**: `#E5E7FF` - Light text

## Features by Page

### Home (`/`)
- Animated hero section
- Gradient text effects
- Floating scroll indicator
- Call-to-action buttons

### Arguments (`/arguments`)
- Simulation probability calculator with interactive sliders
- Four major philosophical arguments
- Animated card presentations

### Library (`/library`)
- 15 curated books from ancient texts to modern science
- Amazon affiliate links
- YouTube video links for each book

### Thinkers (`/thinkers`)
- 8 key figures in simulation theory
- Academic and spiritual perspectives
- Links to interviews and books

### Conversations (`/conversations`)
- Embedded YouTube interviews
- Categorized by type (Long-form, Ancient/Modern, Skeptics)
- Responsive video players

## Affiliate Links

Amazon links in the Library section use affiliate linking to support the portal. These links are clearly disclosed to users.

## License

This project is open source and available under the MIT License.

## Credits

Built with Claude Code - exploring the boundaries between human creativity and AI assistance.

---

*"You are the curator now. Question everything."*
