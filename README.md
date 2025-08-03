# 🏗️ Construction Material Shop

A modern, full-featured e-commerce platform built with Next.js 15 for construction materials and supplies. Features a complete shopping experience with user authentication, payment processing, and comprehensive product management.

## 🚀 Features

### 🛍️ **E-commerce Functionality**
- **Product Catalog** - Browse construction materials with advanced filtering
- **Shopping Cart** - Add, remove, and manage items with persistent storage
- **Wishlist** - Save favorite products for later
- **Quick View** - Preview products without leaving the current page
- **Product Search** - Find specific materials quickly
- **Categories** - Organized product categorization

### 👤 **User Management**
- **Authentication** - Google OAuth integration via NextAuth.js
- **User Accounts** - Personal profiles and order history
- **Secure Sessions** - JWT-based authentication
- **Guest Checkout** - Purchase without account creation

### 💳 **Payment & Checkout**
- **Stripe Integration** - Secure payment processing
- **Multiple Payment Methods** - Credit cards, digital wallets
- **Order Management** - Track orders and order history
- **Checkout Flow** - Streamlined purchase process

### 📱 **User Experience**
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive UI** - Smooth animations and transitions
- **Product Reviews** - Customer feedback and ratings
- **Recently Viewed** - Track browsing history
- **Image Gallery** - High-quality product images with zoom

### 📝 **Content Management**
- **Blog System** - Construction tips and product guides
- **Contact Forms** - Customer support integration
- **SEO Optimized** - Meta tags and structured data

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15.4.5](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - State management
- **[Swiper](https://swiperjs.com/)** - Touch sliders and carousels

### **Backend & Database**
- **[Prisma](https://www.prisma.io/)** - Database ORM with Accelerate
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication
- **[PostgreSQL](https://www.postgresql.org/)** - Database (via Prisma Accelerate)

### **Payments & Services**
- **[Stripe](https://stripe.com/)** - Payment processing
- **[Google OAuth](https://developers.google.com/identity)** - Social authentication

### **Deployment**
- **[Vercel](https://vercel.com/)** - Hosting and deployment
- **[GitHub](https://github.com/)** - Version control and CI/CD

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- PostgreSQL database (or Prisma Accelerate)
- Google OAuth credentials
- Stripe account

### 1. Clone the Repository
```bash
git clone https://github.com/Dy-Rongrath/construction-material.git
cd construction-material-shop
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env
```

Configure the following environment variables:

```bash
# Database
DATABASE_URL="your_prisma_accelerate_url_here"

# Node Environment  
NODE_ENV="development"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# NextAuth
NEXTAUTH_SECRET="your_secure_random_string"
NEXTAUTH_URL="http://localhost:3000"

# App URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Stripe
STRIPE_PUBLIC_KEY="your_stripe_public_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

### 4. Database Setup
```bash
# Generate Prisma client
npm run prisma:generate

# Push schema to database
npm run prisma:push

# (Optional) Open Prisma Studio
npm run prisma:studio
```

### 5. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prisma:generate  # Generate Prisma client
npm run prisma:studio    # Open Prisma Studio
npm run prisma:push     # Push schema changes
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (blog)/            # Blog routes  
│   ├── (shop)/            # Shop routes
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── error/             # Error page
│   └── mail-success/      # Success pages
├── components/            # Reusable components
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── store/                 # Redux store
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🔧 Configuration

### Authentication Setup
1. **Google OAuth Console**:
   - Create a project at [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### Stripe Setup
1. **Stripe Dashboard**:
   - Create account at [Stripe](https://stripe.com/)
   - Get publishable and secret keys
   - Configure webhooks for order processing

### Database Setup
1. **Prisma Accelerate** (Recommended):
   - Sign up at [Prisma](https://www.prisma.io/accelerate)
   - Create a database project
   - Get connection string

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**:
   - Connect your GitHub repository
   - Configure environment variables
   - Deploy automatically

3. **Post-deployment**:
   - Update `NEXTAUTH_URL` with your Vercel domain
   - Update Google OAuth redirect URIs
   - Configure Stripe webhooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Prisma** for the excellent database toolkit
- **Stripe** for secure payment processing
- **Vercel** for seamless deployment

## 📞 Support

For support, email [dyrongrath@gmail.com] or create an issue in this repository.

---

**Built with ❤️ by [Dy-Rongrath](https://github.com/Dy-Rongrath)**
