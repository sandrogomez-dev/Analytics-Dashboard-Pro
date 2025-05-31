import React from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface SimpleChartProps {
  data: DataPoint[];
  type?: 'line' | 'bar';
  height?: number;
  color?: string;
  className?: string;
}

const SimpleChart: React.FC<SimpleChartProps> = ({
  data,
  type = 'line',
  height = 200,
  color = '#14b8a6',
  className = '',
}) => {
  if (!data || data.length === 0) {
    return (
      <div 
        className={`flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded ${className}`}
        style={{ height }}
      >
        <p className="text-slate-500 dark:text-slate-400">No data available</p>
      </div>
    );
  }

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const width = 400;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const getX = (index: number) => padding + (index * chartWidth) / (data.length - 1);
  const getY = (value: number) => padding + chartHeight - ((value - minValue) / range) * chartHeight;

  if (type === 'line') {
    const pathData = data
      .map((point, index) => {
        const x = getX(index);
        const y = getY(point.value);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

    return (
      <div className={`relative ${className}`}>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-200 dark:text-slate-700"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Chart line */}
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((point, index) => (
            <circle
              key={index}
              cx={getX(index)}
              cy={getY(point.value)}
              r="4"
              fill={color}
              className="hover:r-6 transition-all duration-200"
            />
          ))}

          {/* Y-axis labels */}
          <text
            x={padding - 10}
            y={padding}
            textAnchor="end"
            className="text-xs fill-slate-600 dark:fill-slate-400"
          >
            {maxValue.toLocaleString()}
          </text>
          <text
            x={padding - 10}
            y={height - padding}
            textAnchor="end"
            className="text-xs fill-slate-600 dark:fill-slate-400"
          >
            {minValue.toLocaleString()}
          </text>
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2 px-10">
          {data.map((point, index) => (
            <span
              key={index}
              className="text-xs text-slate-600 dark:text-slate-400"
            >
              {point.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Bar chart
  const barWidth = chartWidth / data.length * 0.8;
  const barSpacing = chartWidth / data.length * 0.2;

  return (
    <div className={`relative ${className}`}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        <defs>
          <pattern id="grid-bar" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-slate-200 dark:text-slate-700"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-bar)" />

        {/* Bars */}
        {data.map((point, index) => {
          const barHeight = ((point.value - minValue) / range) * chartHeight;
          const x = padding + index * (barWidth + barSpacing);
          const y = height - padding - barHeight;

          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={color}
              className="hover:opacity-80 transition-opacity duration-200"
              rx="2"
            />
          );
        })}

        {/* Y-axis labels */}
        <text
          x={padding - 10}
          y={padding}
          textAnchor="end"
          className="text-xs fill-slate-600 dark:fill-slate-400"
        >
          {maxValue.toLocaleString()}
        </text>
        <text
          x={padding - 10}
          y={height - padding}
          textAnchor="end"
          className="text-xs fill-slate-600 dark:fill-slate-400"
        >
          {minValue.toLocaleString()}
        </text>
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 px-10">
        {data.map((point, index) => (
          <span
            key={index}
            className="text-xs text-slate-600 dark:text-slate-400"
          >
            {point.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleChart; 