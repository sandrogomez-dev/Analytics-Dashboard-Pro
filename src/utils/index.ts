import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Metric } from '@/types';

// Tailwind CSS class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatting utilities
export const formatters = {
  currency: (value: number, currency = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(value);
  },

  number: (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toLocaleString();
  },

  percentage: (value: number, decimals = 1): string => {
    return `${value.toFixed(decimals)}%`;
  },

  duration: (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  },

  date: (date: string | Date, format: 'short' | 'medium' | 'long' = 'medium'): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    
    const optionsMap: Record<string, Intl.DateTimeFormatOptions> = {
      short: { month: 'short', day: 'numeric' },
      medium: { month: 'short', day: 'numeric', year: 'numeric' },
      long: { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    };

    return d.toLocaleDateString('en-US', optionsMap[format]);
  },

  time: (date: string | Date): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  },
};

// Format metric values based on their type
export function formatMetricValue(metric: Metric): string {
  switch (metric.format) {
    case 'currency':
      return formatters.currency(metric.value);
    case 'percentage':
      return formatters.percentage(metric.value);
    case 'duration':
      return formatters.duration(metric.value);
    default:
      return formatters.number(metric.value);
  }
}

// Validation utilities
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  dateRange: (start: string, end: string): boolean => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate <= endDate && startDate <= new Date();
  },

  threshold: (value: number): boolean => {
    return !isNaN(value) && isFinite(value) && value >= 0;
  },
};

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Generate unique IDs
export function generateId(prefix = ''): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  return prefix ? `${prefix}_${timestamp}_${randomStr}` : `${timestamp}_${randomStr}`;
}

// Color utilities for charts
export const colorPalette = {
  primary: '#14b8a6',
  secondary: '#475569',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  chart: [
    '#14b8a6', // teal-500
    '#3b82f6', // blue-500
    '#f59e0b', // amber-500
    '#ef4444', // red-500
    '#10b981', // emerald-500
    '#8b5cf6', // violet-500
    '#f97316', // orange-500
    '#06b6d4', // cyan-500
    '#84cc16', // lime-500
    '#ec4899', // pink-500
  ],
};

export function getChartColor(index: number): string {
  return colorPalette.chart[index % colorPalette.chart.length] || colorPalette.primary;
}

// Local storage utilities with error handling
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set: (key: string, value: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  },

  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  },
};

// Performance measurement utilities
export class PerformanceMonitor {
  private static marks: Map<string, number> = new Map();

  static start(name: string): void {
    this.marks.set(name, performance.now());
  }

  static end(name: string): number {
    const startTime = this.marks.get(name);
    if (!startTime) {
      console.warn(`Performance mark "${name}" not found`);
      return 0;
    }

    const duration = performance.now() - startTime;
    this.marks.delete(name);
    
    if (duration > 100) {
      console.warn(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  static measure(name: string, fn: () => void): number {
    this.start(name);
    fn();
    return this.end(name);
  }

  static async measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.start(name);
    const result = await fn();
    this.end(name);
    return result;
  }
}

// Error handling utilities
export function createError(
  message: string,
  type: 'network' | 'validation' | 'runtime' | 'permission' = 'runtime',
  context?: Record<string, unknown>
) {
  return {
    id: generateId('error'),
    message,
    type,
    severity: 'medium' as const,
    timestamp: new Date().toISOString(),
    context,
  };
}

// Chart options helper
export function createChartOptions(
  type: 'line' | 'bar' | 'pie' | 'area' | 'donut',
  isDark = false
): Record<string, any> {
  const baseOptions = {
    theme: {
      mode: isDark ? 'dark' : 'light',
    },
    chart: {
      fontFamily: 'Inter, system-ui, sans-serif',
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    colors: colorPalette.chart,
    tooltip: {
      theme: isDark ? 'dark' : 'light',
    },
    legend: {
      labels: {
        colors: isDark ? '#e2e8f0' : '#475569',
      },
    },
    grid: {
      borderColor: isDark ? '#334155' : '#e2e8f0',
    },
    xaxis: {
      labels: {
        style: {
          colors: isDark ? '#94a3b8' : '#64748b',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? '#94a3b8' : '#64748b',
        },
      },
    },
  };

  switch (type) {
    case 'line':
    case 'area':
      return {
        ...baseOptions,
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        fill: {
          type: type === 'area' ? 'gradient' : 'solid',
        },
      };
    case 'bar':
      return {
        ...baseOptions,
        plotOptions: {
          bar: {
            borderRadius: 4,
            dataLabels: {
              position: 'top',
            },
          },
        },
      };
    case 'pie':
    case 'donut':
      return {
        ...baseOptions,
        plotOptions: {
          pie: {
            donut: {
              size: type === 'donut' ? '70%' : '0%',
            },
          },
        },
        legend: {
          position: 'bottom',
        },
      };
    default:
      return baseOptions;
  }
} 