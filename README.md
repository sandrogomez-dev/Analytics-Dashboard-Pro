# Analytics Dashboard Pro

High-performance analytics dashboard with real-time data visualization, built with React, TypeScript, and modern web technologies.

## 🚀 Features

### Core Functionality
- **Real-time Data Visualization** - Interactive charts with live updates
- **Multi-Source Data Integration** - Support for Google Analytics, Salesforce, and custom APIs
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Dark/Light Mode** - Automatic theme switching with system preference detection
- **Performance Optimized** - Virtualized tables, memoized components, and lazy loading

### Technical Highlights
- **Zero TypeScript Warnings** - Strict type safety with no `any` types
- **Clean Architecture** - Feature-based modular structure with adapter pattern
- **Advanced State Management** - Zustand with persistence and middleware
- **Real-time Updates** - WebSockets with fallback to long polling
- **Export Capabilities** - PDF, CSV, Excel reports with custom templates

### Data Sources
- **Mock Data Adapter** - Development-ready with realistic data generation
- **Google Analytics** - (Ready for implementation)
- **Salesforce** - (Ready for implementation)
- **Custom APIs** - Extensible adapter pattern for any data source

## 🛠️ Tech Stack

### Frontend
- **React 18** - Latest features with concurrent rendering
- **TypeScript 5** - Strict type checking and latest language features
- **Vite** - Lightning-fast build tool with HMR
- **Tailwind CSS** - Utility-first styling with custom design system

### State & Data
- **Zustand** - Lightweight state management with persistence
- **TanStack Virtual** - Efficient virtualization for large datasets
- **Apollo Client** - GraphQL client with intelligent caching
- **Socket.IO** - Real-time communication

### UI & Visualization
- **ApexCharts** - Interactive, responsive charts
- **Framer Motion** - Smooth animations and micro-interactions
- **Lucide React** - Modern icon library
- **React Hot Toast** - Elegant notifications

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Playwright** - End-to-end testing
- **Vitest** - Unit testing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern browser with ES2020 support

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd analytics-dashboard-pro

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser to http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 🎯 Performance Metrics

The application is optimized to meet these performance targets:

- **Lighthouse Score**: ≥95 (Performance, SEO)
- **Initial Load Time**: <1 second
- **Bundle Size**: <100KB (gzipped)
- **TypeScript Warnings**: 0
- **Memory Usage**: Optimized with cleanup

## 🏗️ Project Structure

```
src/
├── adapters/          # Data source adapters
│   ├── DataAdapter.ts  # Base adapter and factory
│   └── ...
├── components/        # React components
│   ├── Dashboard/     # Dashboard-specific components
│   ├── Charts/        # Chart components
│   ├── UI/           # Reusable UI components
│   └── ...
├── hooks/            # Custom React hooks
├── stores/           # Zustand stores
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal (#14b8a6) - Modern, professional
- **Secondary**: Slate (#475569) - Neutral, readable
- **Accent Colors**: Blue, Amber, Red, Emerald for data visualization

### Typography
- **UI Font**: Inter - Clean, readable interface font
- **Data Font**: JetBrains Mono - Monospace for data display

### Components
All components follow consistent patterns:
- Responsive design with mobile-first approach
- Dark mode support with CSS variables
- Accessibility compliance (WCAG 2.1)
- Performance optimization with React.memo

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3001

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=your_measurement_id

# Feature Flags
VITE_ENABLE_REAL_TIME=true
VITE_ENABLE_EXPORT=true
```

### Data Source Configuration
Configure data sources in `src/adapters/`:

```typescript
// Example: Custom API adapter
export class CustomAPIAdapter extends BaseDataAdapter {
  constructor(apiUrl: string, apiKey: string) {
    super('custom-api');
    // Implementation details
  }
}
```

## 📊 Usage Examples

### Basic Dashboard Setup

```typescript
import { Dashboard } from './components/Dashboard';
import { MockDataAdapter } from './adapters/DataAdapter';

function App() {
  return (
    <Dashboard 
      dataSource="mock"
      refreshInterval={30000}
      realTimeEnabled={true}
    />
  );
}
```

### Custom Chart Configuration

```typescript
import { ChartWidget } from './components/Charts';

const chartConfig = {
  type: 'line',
  data: timeSeriesData,
  options: {
    chart: { height: 350 },
    stroke: { curve: 'smooth' },
    colors: ['#14b8a6']
  }
};
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🚀 Deployment

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

### Vercel/Netlify
The application is ready for deployment to modern hosting platforms:

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode (no `any` types)
- Write tests for new features
- Follow the existing code style
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ApexCharts](https://apexcharts.com/) for excellent charting library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Zustand](https://github.com/pmndrs/zustand) for simple state management
- [React](https://reactjs.org/) team for the amazing framework

## 🐛 Known Issues

- Google Analytics adapter requires implementation
- Salesforce adapter requires OAuth setup
- PDF export requires server-side rendering for complex charts

## 🗺️ Roadmap

- [ ] Complete Google Analytics integration
- [ ] Add Salesforce OAuth flow
- [ ] Implement advanced filtering
- [ ] Add drag-and-drop dashboard builder
- [ ] Mobile app with React Native
- [ ] Multi-tenant support

---

**Analytics Dashboard Pro** - Built with ❤️ for modern data visualization needs. 