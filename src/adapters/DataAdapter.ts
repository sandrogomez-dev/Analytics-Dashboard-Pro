import type {
  DataAdapter,
  DataSourceType,
  QueryParams,
  NormalizedData,
  DataSchema,
  Metric,
  TimeSeriesData,
} from '@/types';

// Abstract base adapter
abstract class BaseDataAdapter implements DataAdapter {
  public readonly source: DataSourceType;

  constructor(source: DataSourceType) {
    this.source = source;
  }

  abstract fetchData(params: QueryParams): Promise<NormalizedData>;
  abstract validateConnection(): Promise<boolean>;
  abstract getSchema(): Promise<DataSchema>;

  protected generateTimeSeriesData(
    startDate: string,
    endDate: string,
    baseValue: number = 1000,
    variance: number = 0.2
  ): TimeSeriesData[] {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const data: TimeSeriesData[] = [];
    
    const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const interval = daysDiff <= 7 ? 1 : daysDiff <= 30 ? 1 : Math.ceil(daysDiff / 30);

    for (let i = 0; i < daysDiff; i += interval) {
      const date = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
      const randomVariance = (Math.random() - 0.5) * variance;
      const trendFactor = 1 + (i / daysDiff) * 0.1; // Slight upward trend
      
      data.push({
        timestamp: date.toISOString(),
        value: Math.round(baseValue * (1 + randomVariance) * trendFactor),
      });
    }

    return data;
  }

  protected calculateTrend(current: number, previous?: number): 'up' | 'down' | 'neutral' {
    if (!previous) return 'neutral';
    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'neutral';
  }

  protected calculateChangePercentage(current: number, previous?: number): number {
    if (!previous || previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  }
}

// Mock Data Adapter for development
export class MockDataAdapter extends BaseDataAdapter {
  constructor() {
    super('mock');
  }

  async fetchData(params: QueryParams): Promise<NormalizedData> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 700));

    const timeSeries = this.generateTimeSeriesData(
      params.startDate,
      params.endDate,
      1000,
      0.3
    );

    const currentValue = timeSeries[timeSeries.length - 1]?.value || 0;
    const previousValue = timeSeries[timeSeries.length - 2]?.value || 0;

    const metrics: Metric[] = [
      {
        id: 'total_revenue',
        name: 'Total Revenue',
        value: currentValue * 15.99,
        previousValue: previousValue * 15.99,
        unit: 'USD',
        trend: this.calculateTrend(currentValue, previousValue),
        changePercentage: this.calculateChangePercentage(currentValue, previousValue),
        format: 'currency',
      },
      {
        id: 'active_users',
        name: 'Active Users',
        value: currentValue,
        previousValue: previousValue,
        unit: 'users',
        trend: this.calculateTrend(currentValue, previousValue),
        changePercentage: this.calculateChangePercentage(currentValue, previousValue),
        format: 'number',
      },
      {
        id: 'conversion_rate',
        name: 'Conversion Rate',
        value: 2.4 + Math.random() * 1.2,
        previousValue: 2.3 + Math.random() * 1.1,
        unit: '%',
        trend: 'up',
        changePercentage: 5.2,
        format: 'percentage',
      },
      {
        id: 'avg_session_duration',
        name: 'Avg Session Duration',
        value: 245 + Math.random() * 60,
        previousValue: 238 + Math.random() * 55,
        unit: 'seconds',
        trend: 'up',
        changePercentage: 3.1,
        format: 'duration',
      },
    ];

    return {
      metrics,
      timeSeries,
      metadata: {
        totalRecords: timeSeries.length,
        processingTime: Math.random() * 100 + 50,
        lastUpdated: new Date().toISOString(),
      },
    };
  }

  async validateConnection(): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return true;
  }

  async getSchema(): Promise<DataSchema> {
    return {
      metrics: [
        {
          id: 'total_revenue',
          name: 'Total Revenue',
          type: 'currency',
          description: 'Total revenue generated',
        },
        {
          id: 'active_users',
          name: 'Active Users',
          type: 'number',
          description: 'Number of active users',
        },
        {
          id: 'conversion_rate',
          name: 'Conversion Rate',
          type: 'percentage',
          description: 'Percentage of users who converted',
        },
      ],
      dimensions: [
        {
          id: 'date',
          name: 'Date',
          type: 'date',
        },
        {
          id: 'channel',
          name: 'Channel',
          type: 'string',
          values: ['organic', 'paid', 'social', 'email', 'direct'],
        },
      ],
    };
  }
}

// Google Analytics Adapter (placeholder)
export class GoogleAnalyticsAdapter extends BaseDataAdapter {
  constructor() {
    super('google-analytics');
  }

  async fetchData(_params: QueryParams): Promise<NormalizedData> {
    // In a real implementation, this would use the Google Analytics API
    throw new Error('Google Analytics adapter not implemented yet');
  }

  async validateConnection(): Promise<boolean> {
    return false;
  }

  async getSchema(): Promise<DataSchema> {
    throw new Error('Google Analytics schema not implemented yet');
  }
}

// Salesforce Adapter (placeholder)
export class SalesforceAdapter extends BaseDataAdapter {
  constructor() {
    super('salesforce');
  }

  async fetchData(_params: QueryParams): Promise<NormalizedData> {
    // In a real implementation, this would use the Salesforce API
    throw new Error('Salesforce adapter not implemented yet');
  }

  async validateConnection(): Promise<boolean> {
    return false;
  }

  async getSchema(): Promise<DataSchema> {
    throw new Error('Salesforce schema not implemented yet');
  }
}

// Adapter Factory
export class AdapterFactory {
  private static adapters: Map<DataSourceType, BaseDataAdapter> = new Map();

  static getAdapter(source: DataSourceType): BaseDataAdapter {
    if (!this.adapters.has(source)) {
      switch (source) {
        case 'mock':
          this.adapters.set(source, new MockDataAdapter());
          break;
        case 'google-analytics':
          this.adapters.set(source, new GoogleAnalyticsAdapter());
          break;
        case 'salesforce':
          this.adapters.set(source, new SalesforceAdapter());
          break;
        default:
          throw new Error(`Unsupported data source: ${source}`);
      }
    }

    const adapter = this.adapters.get(source);
    if (!adapter) {
      throw new Error(`Failed to create adapter for source: ${source}`);
    }

    return adapter;
  }

  static getAllAdapters(): BaseDataAdapter[] {
    return Array.from(this.adapters.values());
  }

  static clearCache(): void {
    this.adapters.clear();
  }
} 