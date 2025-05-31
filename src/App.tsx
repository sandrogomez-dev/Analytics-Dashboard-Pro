import { useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.duration);
          }
        });
      });
      
      try {
        observer.observe({ type: 'navigation', buffered: true });
        return () => observer.disconnect();
      } catch (e) {
        // Fallback for browsers that don't support this
        console.log('Performance observer not supported');
        return undefined;
      }
    }
    
    return undefined;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Dashboard />
    </div>
  );
}

export default App; 