# Samuel Laki - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light theme, smooth animations, and showcase of web development projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Project Showcase**: Detailed portfolio section with live demos and source code
- **Contact Integration**: Easy contact form and social links
- **Performance Optimized**: Built with Next.js for fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Framer Motion animations
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SamuelLaki/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Fork this repository** to your GitHub account

2. **Sign up/Login to Vercel**: Go to [vercel.com](https://vercel.com) and sign up with GitHub

3. **Import Project**: 
   - Click "New Project"
   - Import your forked repository
   - Vercel will auto-detect Next.js settings

4. **Deploy**: Click "Deploy" and wait for the build to complete

5. **Custom Domain** (Optional): Add your custom domain in Project Settings

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Use `npm run build` and deploy the `out` folder
- **Railway**: Import from GitHub and deploy

## ✏️ Customization

### Personal Information
Update your details in:
- `app/_components/HeroSection.tsx` - Name, location, bio
- `app/_components/Footer.tsx` - Contact email and links
- `app/layout.tsx` - Meta title and description

### Projects
Edit your portfolio projects in:
- `app/_lib/constants.ts` - Update the `portfolioProjects` array

### Resume
Replace `public/resume/samuel_laki_resume.pdf` with your own resume

### Testimonials
Update client testimonials in:
- `app/_lib/constants.ts` - Modify `testimonialItems` and `tooltipItems`

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── _components/      # Reusable components
│   ├── _lib/            # Constants and utilities
│   ├── _styles/         # Global styles
│   └── work/            # Individual project pages
├── public/              # Static assets
└── ...config files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

Samuel Laki - [samuel.laki@example.com](mailto:samuel.laki@example.com)

Project Link: [https://github.com/SamuelLaki/portfolio-website](https://github.com/SamuelLaki/portfolio-website)

---

⭐ If you found this helpful, please give it a star!
