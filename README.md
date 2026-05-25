# LeadGen - Next.js Lead Generation Platform v2.0

A modern, high-performance lead generation web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

### Core Functionality
- **Advanced Lead Search** - Search leads by Country, State, City, and Zip Code
- **SOCKS5 Proxy Support** - Optional proxy configuration for requests
- **Real-time Results** - Display lead information in an organized table format
- **Responsive Design** - Works seamlessly on desktop and mobile devices

### Technical Improvements (v2.0)
- ✅ **Next.js 14 App Router** - Modern routing with server and client components
- ✅ **TypeScript** - Full type safety and better IDE support
- ✅ **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- ✅ **Performance Optimization** - Image optimization, code splitting, and lazy loading
- ✅ **Security Headers** - Built-in security best practices
- ✅ **ESLint & Prettier** - Code quality and formatting standards
- ✅ **Modular Architecture** - Reusable components and utilities
- ✅ **API Client** - Centralized Axios-based API communication

## 📁 Project Structure

```
leadgen/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── LeadForm.tsx
│   │   ├── LeadResults.tsx
│   │   └── LeadSearchClient.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── globals.css
├── lib/
│   └── api/
│       └── leads.ts
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── .eslintrc.json
├── .prettierrc
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and navigate to the project:**
```bash
cd leadgen
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open browser:**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler
- `npm run format` - Format code with Prettier

## 📡 API Integration

The application communicates with a backend API (default: `http://localhost:3001`).

### API Endpoints Required

**POST `/api/leads`**
- Search for leads based on location parameters
- Request body:
  ```json
  {
    "country": "string",
    "state": "string",
    "city": "string",
    "zip": "string (optional)",
    "socks5": "string (optional)"
  }
  ```
- Response: Array of lead objects

**GET `/health`**
- Health check endpoint
- Response: `{ "status": "ok" }`

## 🎨 UI Components

### LeadForm
Form component for searching leads with input validation:
- Country, State, City (required fields)
- Zip Code (optional)
- SOCKS5 Proxy (optional)

### LeadResults
Results display component with:
- Results count
- Searchable table
- Contact information (email, phone as clickable links)
- Empty state handling

### Header & Footer
- Responsive navigation
- Mobile menu toggle
- Quick links and branding

## 🔐 Security Features

- XSS Protection headers
- Clickjacking prevention (X-Frame-Options)
- Content-Type enforcement
- Input validation on forms
- Secure TypeScript configuration

## 🚀 Performance Optimizations

- Code splitting with dynamic imports
- Image optimization
- CSS minification via Tailwind
- SWC minification
- Efficient caching strategies

## 📚 Technology Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **State Management:** Zustand (optional, for future features)
- **Code Quality:** ESLint, Prettier
- **Runtime:** Node.js 18+

## 🔄 Future Enhancements

- User authentication and session management
- Search history and saved searches
- Export functionality (CSV, PDF, Excel)
- Advanced filtering options
- Real-time data provider integration
- Dashboard with analytics
- Bulk operations support
- Data visualization charts

## 📝 Development Guidelines

1. **Component Structure:** Use functional components with hooks
2. **Type Safety:** Always define proper TypeScript interfaces
3. **Code Format:** Run Prettier before committing
4. **Linting:** Ensure ESLint passes
5. **Testing:** Write unit tests for utilities and components

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows established patterns
- TypeScript types are properly defined
- Components are documented
- Tests are included for new features

## 📄 License

ISC License

## 📧 Support

For issues, questions, or suggestions, please open a GitHub issue.

---

**Built with Next.js CMS Framework** | Lead Generation Platform v2.0 | High-Quality Production Ready Code
