import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState, ThemeConfig } from '@/types';

interface AppStore extends AppState {
  // Theme actions
  setTheme: (theme: Partial<ThemeConfig>) => void;
  toggleTheme: () => void;
  
  // Sidebar actions
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  
  // Dashboard actions
  setCurrentDashboard: (dashboardId: string | null) => void;
  
  // Date range actions
  setDateRange: (range: AppState['dateRange']) => void;
  setDatePreset: (preset: AppState['dateRange']['preset']) => void;
  
  // Filter actions
  setFilters: (filters: Record<string, unknown>) => void;
  updateFilter: (key: string, value: unknown) => void;
  clearFilters: () => void;
  
  // Real-time actions
  toggleRealTime: () => void;
  setRealTimeEnabled: (enabled: boolean) => void;
}

const defaultTheme: ThemeConfig = {
  mode: 'system',
  primaryColor: '#14b8a6',
  fontFamily: 'Inter',
};

const defaultDateRange: AppState['dateRange'] = {
  start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  end: new Date().toISOString(),
  preset: '7d',
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // Initial state
      theme: defaultTheme,
      sidebarCollapsed: false,
      currentDashboard: null,
      dateRange: defaultDateRange,
      filters: {},
      realTimeEnabled: false,

      // Theme actions
      setTheme: (theme) =>
        set((state) => ({
          theme: { ...state.theme, ...theme },
        })),

      toggleTheme: () =>
        set((state) => ({
          theme: {
            ...state.theme,
            mode: state.theme.mode === 'light' ? 'dark' : 'light',
          },
        })),

      // Sidebar actions
      toggleSidebar: () =>
        set((state) => ({
          sidebarCollapsed: !state.sidebarCollapsed,
        })),

      setSidebarCollapsed: (collapsed) =>
        set({ sidebarCollapsed: collapsed }),

      // Dashboard actions
      setCurrentDashboard: (dashboardId) =>
        set({ currentDashboard: dashboardId }),

      // Date range actions
      setDateRange: (range) => set({ dateRange: range }),

      setDatePreset: (preset) => {
        const now = new Date();
        let start: Date;
        let end: Date = now;

        switch (preset) {
          case 'today':
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            break;
          case 'yesterday':
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            break;
          case '7d':
            start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            break;
          case '30d':
            start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            break;
          case '90d':
            start = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
            break;
          default:
            return;
        }

        set({
          dateRange: {
            start: start.toISOString(),
            end: end.toISOString(),
            preset,
          },
        });
      },

      // Filter actions
      setFilters: (filters) => set({ filters }),

      updateFilter: (key, value) =>
        set((state) => ({
          filters: { ...state.filters, [key]: value },
        })),

      clearFilters: () => set({ filters: {} }),

      // Real-time actions
      toggleRealTime: () =>
        set((state) => ({
          realTimeEnabled: !state.realTimeEnabled,
        })),

      setRealTimeEnabled: (enabled) =>
        set({ realTimeEnabled: enabled }),
    }),
    {
      name: 'analytics-dashboard-app-store',
      partialize: (state) => ({
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
        dateRange: state.dateRange,
        realTimeEnabled: state.realTimeEnabled,
      }),
    }
  )
); 