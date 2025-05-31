import type { ApexOptions } from 'apexcharts';

// Core Data Types
export interface Metric {
  id: string;
  name: string;
  value: number;
  previousValue?: number;
  unit: string;
  trend: 'up' | 'down' | 'neutral';
  changePercentage?: number;
  format: 'number' | 'currency' | 'percentage' | 'duration';
}

export interface TimeSeriesData {
  timestamp: string;
  value: number;
  label?: string;
}

export interface ChartData {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'pie' | 'area' | 'donut' | 'heatmap';
  data: TimeSeriesData[] | Record<string, number>;
  options?: ApexOptions;
  loading?: boolean;
  error?: string;
}

// Data Source Types
export type DataSourceType = 'google-analytics' | 'salesforce' | 'custom-api' | 'mock';

export interface DataSourceConfig {
  id: string;
  type: DataSourceType;
  name: string;
  enabled: boolean;
  credentials?: Record<string, string>;
  refreshInterval: number;
  lastSync?: string;
}

export interface DataAdapter {
  source: DataSourceType;
  fetchData: (params: QueryParams) => Promise<NormalizedData>;
  validateConnection: () => Promise<boolean>;
  getSchema: () => Promise<DataSchema>;
}

export interface QueryParams {
  startDate: string;
  endDate: string;
  metrics: string[];
  dimensions?: string[];
  filters?: Record<string, unknown>;
  limit?: number;
  offset?: number;
}

export interface NormalizedData {
  metrics: Metric[];
  timeSeries: TimeSeriesData[];
  dimensions?: Record<string, unknown>;
  metadata: {
    totalRecords: number;
    processingTime: number;
    lastUpdated: string;
  };
}

export interface DataSchema {
  metrics: Array<{
    id: string;
    name: string;
    type: 'number' | 'currency' | 'percentage';
    description: string;
  }>;
  dimensions: Array<{
    id: string;
    name: string;
    type: 'string' | 'date' | 'number';
    values?: string[];
  }>;
}

// Dashboard Configuration
export interface DashboardWidget {
  id: string;
  type: 'metric' | 'chart' | 'table' | 'alert';
  title: string;
  dataSource: string;
  query: QueryParams;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  config?: Record<string, unknown>;
}

export interface DashboardLayout {
  id: string;
  name: string;
  widgets: DashboardWidget[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

// Alert System
export interface AlertRule {
  id: string;
  name: string;
  metric: string;
  condition: 'greater_than' | 'less_than' | 'equals' | 'not_equals';
  threshold: number;
  enabled: boolean;
  notifications: {
    email?: boolean;
    browser?: boolean;
    sound?: boolean;
  };
  frequency: 'real-time' | 'hourly' | 'daily';
}

export interface Alert {
  id: string;
  ruleId: string;
  message: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  timestamp: string;
  acknowledged: boolean;
  value: number;
  threshold: number;
}

// UI State Types
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  fontFamily: string;
}

export interface AppState {
  theme: ThemeConfig;
  sidebarCollapsed: boolean;
  currentDashboard: string | null;
  dateRange: {
    start: string;
    end: string;
    preset: 'today' | 'yesterday' | '7d' | '30d' | '90d' | 'custom';
  };
  filters: Record<string, unknown>;
  realTimeEnabled: boolean;
}

// Performance Types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  dataProcessingTime: number;
  cacheHitRate: number;
}

// Error Types
export interface AppError {
  id: string;
  message: string;
  stack?: string;
  timestamp: string;
  type: 'network' | 'validation' | 'runtime' | 'permission';
  severity: 'low' | 'medium' | 'high';
  context?: Record<string, unknown>;
}

// Export Types
export interface ExportConfig {
  format: 'pdf' | 'csv' | 'excel' | 'png';
  includeCharts: boolean;
  dateRange: {
    start: string;
    end: string;
  };
  widgets: string[];
  template?: string;
}

// Real-time Types
export interface WebSocketMessage {
  type: 'metric_update' | 'alert' | 'system_status' | 'heartbeat';
  payload: unknown;
  timestamp: string;
}

export interface RealtimeUpdate {
  metricId: string;
  value: number;
  timestamp: string;
  source: DataSourceType;
} 