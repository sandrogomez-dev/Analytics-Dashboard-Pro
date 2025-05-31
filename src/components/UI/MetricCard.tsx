import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  previousValue?: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  changePercentage?: number;
  format?: 'number' | 'currency' | 'percentage' | 'duration';
  loading?: boolean;
}

const formatValue = (value: string | number, format: string = 'number'): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(numValue);
    case 'percentage':
      return `${numValue.toFixed(1)}%`;
    case 'duration':
      const hours = Math.floor(numValue / 3600);
      const minutes = Math.floor((numValue % 3600) / 60);
      if (hours > 0) return `${hours}h ${minutes}m`;
      return `${minutes}m`;
    default:
      if (numValue >= 1000000) return `${(numValue / 1000000).toFixed(1)}M`;
      if (numValue >= 1000) return `${(numValue / 1000).toFixed(1)}K`;
      return numValue.toLocaleString();
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="h-4 w-4" />;
    case 'down':
      return <TrendingDown className="h-4 w-4" />;
    default:
      return <Minus className="h-4 w-4" />;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up':
      return 'text-emerald-600 dark:text-emerald-400';
    case 'down':
      return 'text-red-600 dark:text-red-400';
    default:
      return 'text-slate-600 dark:text-slate-400';
  }
};

const MetricCard = React.memo<MetricCardProps>(({
  title,
  value,
  previousValue,
  unit,
  trend = 'neutral',
  changePercentage,
  format = 'number',
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="card p-6 space-y-2">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2 animate-pulse" />
      </div>
    );
  }

  const formattedValue = formatValue(value, format);
  const trendColor = getTrendColor(trend);
  const trendIcon = getTrendIcon(trend);

  return (
    <div className="card p-6 space-y-2 hover:shadow-card-hover transition-shadow duration-200">
      <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">
        {title}
      </h3>
      
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          {formattedValue}
          {unit && (
            <span className="ml-1 text-sm font-normal text-slate-500 dark:text-slate-400">
              {unit}
            </span>
          )}
        </p>
        
        {changePercentage !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
            {trendIcon}
            <span>
              {changePercentage > 0 ? '+' : ''}{changePercentage.toFixed(1)}%
            </span>
          </div>
        )}
      </div>
      
      {previousValue && (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          vs {formatValue(previousValue, format)} previous period
        </p>
      )}
    </div>
  );
});

MetricCard.displayName = 'MetricCard';

export default MetricCard; 