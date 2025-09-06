# Currency Swap Form

A modern, responsive currency swap form built with React, TypeScript, and TailwindCSS. This project demonstrates a clean, professional implementation similar to popular DEX interfaces like PancakeSwap and Uniswap.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Modern React with hooks and functional components
- 🏷️ **TypeScript** - Type safety and better development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework with custom design system
- 🔄 **Token Swapping** - Select from 200+ popular tokens with infinite scroll
- 💰 **Real-time Pricing** - Live price calculations and exchange rates
- 📱 **Responsive Design** - Mobile-first approach with touch-friendly interface
- 🛡️ **Validation System** - Comprehensive input validation and error handling
- 🎭 **Smooth Animations** - Beautiful transitions and loading states
- 🔍 **Search & Filter** - Advanced token search with infinite scroll pagination
- 🎯 **Price Impact** - Real-time price impact warnings and slippage controls
- 📊 **Transaction Details** - Detailed swap information with tooltips

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   └── ...
│   └── swap/               # Swap-specific components
│       ├── SwapForm.tsx
│       ├── TokenInput.tsx
│       ├── TokenSelector.tsx
│       └── ...
├── hooks/                  # Custom React hooks
│   ├── usePrices.ts
│   ├── useSwap.ts
│   └── useToast.ts
├── services/               # API and business logic
│   └── priceService.ts
├── utils/                  # Utility functions
│   ├── formatting.ts
│   ├── validation.ts
│   └── cn.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── constants/              # App constants
│   └── tokens.ts
└── assets/                 # Static assets
    └── tokens/             # Token icons
```

## 🎨 Component Architecture

### Core Components
- **SwapForm** - Main orchestrator managing form state and validation
- **TokenSelector** - Modal-based token selection with infinite scroll
- **TokenInput** - Comprehensive input with balance display and USD conversion
- **TransactionDetails** - Detailed swap information with interactive tooltips
- **PriceInfo** - Real-time exchange rates and price impact warnings

### UI Components
- **Button** - Reusable button with multiple variants and states
- **Input** - Form input with validation and icon support
- **Modal** - Responsive modal with backdrop and animations
- **Icon** - Centralized icon system with consistent styling
- **Toast** - Notification system with auto-dismiss functionality

## 🪝 Custom Hooks

- **useSwap** - Complete swap state management and transaction logic
- **usePrices** - Price data fetching, caching, and calculations
- **useToast** - Toast notification management with animations
- **useInfiniteScroll** - Infinite scroll pagination with intersection observer

## 🔧 Advanced Features

### Infinite Scroll Token Selection
- **200+ Tokens** - Extensive token library with popular cryptocurrencies
- **Smart Pagination** - Load tokens on-demand for optimal performance
- **Search Integration** - Real-time filtering with infinite scroll
- **Loading States** - Smooth loading animations and skeleton screens

### Real-time Price System
- **Live Calculations** - Dynamic exchange rate updates
- **Price Impact Analysis** - Real-time impact warnings and thresholds
- **USD Conversions** - Automatic fiat value calculations
- **Slippage Controls** - Configurable slippage tolerance settings

### Validation & Error Handling
- **Input Validation** - Real-time format and range validation
- **Balance Checking** - Token balance verification
- **Price Impact Warnings** - Visual warnings for high-impact trades
- **Toast Notifications** - User-friendly error and success messages

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Run unit tests
npm test

# Run tests with watch mode
npm test -- --watch

# Run tests once (no watch)
npm test -- --run

# Run tests with coverage report
npm test -- --coverage

# Run specific test file
npm test -- useToast.test.ts
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🧪 Testing

Project uses **Vitest** with **React Testing Library**.

```bash
# Run tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

**Test coverage**: Custom hooks, UI components, and component integration.

## 📖 Usage Guide

1. **Select From Token:** Click on the "From" token selector to choose the token you want to swap from
2. **Enter Amount:** Type the amount you want to swap
3. **Select To Token:** Choose the token you want to receive
4. **Review Details:** Check the exchange rate, price impact, and minimum received
5. **Execute Swap:** Click the "Swap" button to complete the transaction

## 🎨 Tailwind CSS Configuration

The project uses TailwindCSS with a custom design system:

### Design Tokens
- **Primary Colors:** Blue gradient (`from-primary-500 to-primary-600`)
- **Secondary Colors:** Purple gradient for accents
- **State Colors:** Success (green), Warning (yellow), Error (red)
- **Custom Shadows:** Soft and medium shadow variants
- **Animations:** Smooth transitions and hover effects


## 📦 Dependencies

### Production
- `react` - React 18 with modern hooks
- `react-dom` - React DOM rendering
- `typescript` - TypeScript compiler

### Development
- `@types/react` - React TypeScript definitions
- `@types/react-dom` - React DOM TypeScript definitions
- `@vitejs/plugin-react` - Vite React plugin
- `autoprefixer` - CSS autoprefixer
- `eslint` - Code linting and formatting
- `tailwindcss` - Utility-first CSS framework
- `vite` - Fast build tool and dev server

### Testing
- `vitest` - Fast unit test framework
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers for DOM
- `@testing-library/user-event` - User interaction simulation
- `jsdom` - DOM implementation for Node.js
- `@types/jest` - Jest TypeScript definitions

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with React plugin
- `vitest.config.ts` - Vitest test runner configuration
- `tsconfig.json` - TypeScript project configuration
- `tailwind.config.js` - TailwindCSS configuration with custom theme
- `eslint.config.js` - ESLint configuration for code quality

## ✅ Project Highlights

- ✅ **Modern Tech Stack** - React 18, TypeScript, Vite, TailwindCSS
- ✅ **Infinite Scroll** - 200+ tokens with smart pagination
- ✅ **Real-time Pricing** - Live calculations and price impact analysis
- ✅ **Responsive Design** - Mobile-first with touch-friendly interface
- ✅ **Component Architecture** - Modular, reusable components
- ✅ **Custom Hooks** - Efficient state management and business logic
- ✅ **Validation System** - Comprehensive input validation and error handling
- ✅ **Smooth Animations** - Beautiful transitions and loading states
- ✅ **Type Safety** - Full TypeScript coverage with strict typing
- ✅ **Performance Optimized** - Memoization, lazy loading, and efficient rendering

---

Built with ❤️ using React, TypeScript, and TailwindCSS