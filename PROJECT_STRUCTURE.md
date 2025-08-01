# 📁 Project Structure Guide

This project follows Next.js 13+ App Router best practices with a clean, scalable architecture.

## 🗂️ Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group
│   │   └── signin/               # Sign-in page
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication APIs
│   │   ├── checkout/             # Checkout APIs
│   │   └── products/             # Product APIs
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── features/                 # Feature-specific components
│   │   ├── Home/                 # Home page components
│   │   ├── Shop/                 # Shop components
│   │   ├── Cart/                 # Cart components
│   │   ├── Checkout/             # Checkout components
│   │   ├── Blog/                 # Blog components
│   │   └── ...                   # Other features
│   ├── layout/                   # Layout components
│   │   ├── Header/               # Header component
│   │   ├── Footer/               # Footer component
│   │   └── AuthProvider.tsx      # Auth provider
│   └── ui/                       # Base UI components
│       └── Common/               # Common UI elements
├── hooks/                        # Custom hooks and contexts
│   └── context/                  # React contexts
├── lib/                          # External library configurations
│   ├── prisma.ts                 # Prisma client
│   └── stripe.ts                 # Stripe configuration
├── store/                        # Redux store
│   └── redux/                    # Redux logic
│       ├── features/             # Redux slices
│       ├── store.ts              # Store configuration
│       └── provider.tsx          # Redux provider
├── styles/                       # Styles and assets
│   ├── css/                      # CSS files
│   └── fonts/                    # Font files
├── types/                        # TypeScript type definitions
└── utils/                        # Utility functions
```

## 🎯 Import Patterns

### Using Path Aliases

```typescript
// Components
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui';
import Home from '@/components/features/Home';

// Hooks and contexts
import { useCartModalContext } from '@/hooks';

// Store
import { useAppSelector } from '@/store';

// Types
import type { Product, Category } from '@/types';

// Utils
import { formatCurrency, slugify } from '@/utils';

// Lib
import { prisma } from '@/lib/prisma';
```

## 📦 Component Organization

### Feature Components
- Located in `src/components/features/`
- Each feature has its own directory
- Contains all components related to a specific feature

### UI Components
- Located in `src/components/ui/`
- Reusable, generic components
- Should be feature-agnostic

### Layout Components
- Located in `src/components/layout/`
- Components that define the app structure
- Headers, footers, navigation, providers

## 🔧 Configuration Files

### Path Mapping
Configured in `tsconfig.json` for clean imports:

```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@/components/*": ["./src/components/*"],
    "@/hooks/*": ["./src/hooks/*"],
    "@/store/*": ["./src/store/*"],
    "@/types/*": ["./src/types/*"],
    "@/utils/*": ["./src/utils/*"]
  }
}
```

## 🚀 Best Practices

1. **Barrel Exports**: Use index.ts files for clean imports
2. **Type Safety**: Define types in the types directory
3. **Separation of Concerns**: Keep features, UI, and layout separate
4. **Path Aliases**: Use @ imports for better maintainability
5. **Context Organization**: Keep contexts in the hooks directory
6. **Utility Functions**: Centralize utilities for reusability

## 📋 Development Guidelines

1. Always use TypeScript for new files
2. Follow the component organization structure
3. Use barrel exports for cleaner imports
4. Keep components small and focused
5. Use proper path aliases
6. Document complex utilities and types
