import { useState, useEffect, useCallback } from 'react';
import { AdapterFactory } from '@/adapters/DataAdapter';
import type { NormalizedData, QueryParams, DataSourceType } from '@/types';

interface UseAnalyticsOptions {
  dataSource?: DataSourceType;
  refreshInterval?: number;
  autoRefresh?: boolean;
}

interface UseAnalyticsReturn {
  data: NormalizedData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdated: Date | null;
}

export const useAnalytics = (
  queryParams: QueryParams,
  options: UseAnalyticsOptions = {}
): UseAnalyticsReturn => {
  const {
    dataSource = 'mock',
    refreshInterval = 30000, // 30 seconds
    autoRefresh = false,
  } = options;

  const [data, setData] = useState<NormalizedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const adapter = AdapterFactory.getAdapter(dataSource);
      const result = await adapter.fetchData(queryParams);

      setData(result);
      setLastUpdated(new Date());
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      console.error('Analytics data fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [dataSource, queryParams]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh || refreshInterval <= 0) return;

    const interval = setInterval(() => {
      fetchData();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
    lastUpdated,
  };
};

// Hook for real-time updates
export const useRealTimeAnalytics = (
  queryParams: QueryParams,
  options: UseAnalyticsOptions = {}
) => {
  const analytics = useAnalytics(queryParams, {
    ...options,
    autoRefresh: true,
    refreshInterval: options.refreshInterval || 5000, // 5 seconds for real-time
  });

  return analytics;
};

// Hook for performance monitoring
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    // Measure initial load time
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const entry = navigationEntries[0];
        if (entry) {
          setMetrics(prev => ({
            ...prev,
            loadTime: entry.loadEventEnd - entry.loadEventStart,
          }));
        }
      }
    }

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      if (memoryInfo) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memoryInfo.usedJSHeapSize / 1024 / 1024, // MB
        }));
      }
    }

    // Measure render time
    const startTime = performance.now();
    
    const measureRenderTime = () => {
      const endTime = performance.now();
      setMetrics(prev => ({
        ...prev,
        renderTime: endTime - startTime,
      }));
    };

    // Use requestAnimationFrame to measure after render
    requestAnimationFrame(measureRenderTime);
  }, []);

  return metrics;
}; 