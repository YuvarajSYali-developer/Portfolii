# Yuvaraj S Yali - Portfolio Website

A production-ready, SEO-optimized portfolio website built with React, Vite, Tailwind CSS, and Express.js.

## 🚀 Features

- **Modern Stack**: React with Vite, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark/light theme toggle
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema, sitemap.xml
- **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation
- **Google Analytics**: Integrated GA4 tracking
- **Performance**: Optimized builds and lazy loading
- **Contact Form**: Serverless form with validation

## 📋 Pages

- **Home**: Hero section, featured projects, skills snapshot, endorsements
- **About**: Professional profile, skills by category, certifications
- **Projects**: Filterable project showcase with tech stacks and KPIs
- **Resume**: Interactive timeline + downloadable PDF
- **Blog**: Placeholder for future articles
- **Contact**: Form with validation + social links

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Wouter (routing)
- React Hook Form + Zod validation
- TanStack Query
- Lucide React (icons)

### Backend
- Express.js
- Node.js
- Zod validation

### Tools
- Vite
- Google Analytics 4
- ESLint

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/YuvarajSYali-developer/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
```

4. Run development server
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy
```bash
vercel
```

3. Follow the prompts to configure your deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Click "Import Project"

4. Select your repository

5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Add Environment Variables:
   - `VITE_GA_MEASUREMENT_ID`: Your Google Analytics Measurement ID

7. Click "Deploy"

### Option 3: Deploy via GitHub Integration

1. Connect your GitHub repository to Vercel

2. Vercel will automatically:
   - Deploy on every push to main branch
   - Create preview deployments for pull requests
   - Use the configuration from `vercel.json`

## 🔧 Build Configuration

The project includes a `vercel.json` file with optimized settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/$1"
    }
  ]
}
```

## 📝 Environment Variables

Required environment variables:

- `VITE_GA_MEASUREMENT_ID`: Google Analytics 4 Measurement ID (starts with "G-")

To get your Google Analytics Measurement ID:
1. Go to Google Analytics
2. Navigate to Admin → Property → Data Streams → Web
3. Select or create a web stream
4. Copy the Measurement ID

## 🎨 Customization

### Update Personal Information

Edit `client/src/data/portfolio-data.ts`:
- Personal info (name, email, phone, etc.)
- Projects
- Skills
- Work experience
- Certifications

### Update Resume PDF

Replace the file at `client/public/resume.pdf` with your own resume.

### Modify Theme Colors

Colors are configured in `client/src/index.css` using CSS variables for both light and dark modes.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Yuvaraj S Yali**
- GitHub: [@YuvarajSYali-developer](https://github.com/YuvarajSYali-developer)
- Email: yuvarajyali@gmail.com
- Phone: +91 8310755424

## 🙏 Acknowledgments

- Built with modern web technologies
- Endorsed by Shivamogga Smart City Ltd (Govt. of India)
- Icons by Lucide React
- UI components by shadcn/ui
