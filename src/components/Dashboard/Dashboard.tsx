import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import MetricCard from '../UI/MetricCard';
import Button from '../UI/Button';
import SimpleChart from '../Charts/SimpleChart';

// Mock data for demonstration
const mockMetrics = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 45231.89,
    previousValue: 42150.32,
    format: 'currency' as const,
    trend: 'up' as const,
    changePercentage: 7.3,
  },
  {
    id: 'users',
    title: 'Active Users',
    value: 2350,
    previousValue: 2180,
    format: 'number' as const,
    trend: 'up' as const,
    changePercentage: 7.8,
  },
  {
    id: 'conversion',
    title: 'Conversion Rate',
    value: 3.24,
    previousValue: 2.98,
    format: 'percentage' as const,
    trend: 'up' as const,
    changePercentage: 8.7,
  },
  {
    id: 'session',
    title: 'Avg Session Duration',
    value: 245,
    previousValue: 238,
    format: 'duration' as const,
    trend: 'up' as const,
    changePercentage: 2.9,
  },
];

// Mock chart data
const revenueData = [
  { label: 'Jan', value: 35000 },
  { label: 'Feb', value: 42000 },
  { label: 'Mar', value: 38000 },
  { label: 'Apr', value: 45000 },
  { label: 'May', value: 52000 },
  { label: 'Jun', value: 48000 },
  { label: 'Jul', value: 55000 },
];

const userActivityData = [
  { label: 'Mon', value: 1200 },
  { label: 'Tue', value: 1800 },
  { label: 'Wed', value: 2100 },
  { label: 'Thu', value: 2350 },
  { label: 'Fri', value: 2800 },
  { label: 'Sat', value: 1900 },
  { label: 'Sun', value: 1400 },
];

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container-dashboard py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                <BarChart3 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Analytics Dashboard Pro
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Real-time insights and performance metrics
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {isDark ? '☀️' : '🌙'}
              </Button>
              <Button variant="primary" size="sm">
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-dashboard py-8">
        {/* Metrics Grid */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Key Performance Metrics
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Live Data
            </div>
          </div>
          
          <div className="grid-metrics">
            {mockMetrics.map((metric) => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={metric.value}
                previousValue={metric.previousValue}
                format={metric.format}
                trend={metric.trend}
                changePercentage={metric.changePercentage}
                loading={loading}
              />
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Analytics Overview
          </h2>
          
          <div className="grid-charts">
            {/* Revenue Chart */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-slate-900 dark:text-slate-100">
                  Revenue Trend
                </h3>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm text-emerald-600 dark:text-emerald-400">
                    +12.5%
                  </span>
                </div>
              </div>
              
              {loading ? (
                <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
              ) : (
                <SimpleChart
                  data={revenueData}
                  type="line"
                  height={250}
                  color="#14b8a6"
                />
              )}
            </div>

            {/* User Activity Chart */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-slate-900 dark:text-slate-100">
                  User Activity
                </h3>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    2,350 active
                  </span>
                </div>
              </div>
              
              {loading ? (
                <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
              ) : (
                <SimpleChart
                  data={userActivityData}
                  type="bar"
                  height={250}
                  color="#3b82f6"
                />
              )}
            </div>
          </div>
        </section>

        {/* Performance Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Performance Summary
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Conversion Funnel */}
            <div className="card p-6">
              <h3 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-4">
                Conversion Funnel
              </h3>
              <div className="space-y-3">
                {[
                  { stage: 'Visitors', value: 10000, percentage: 100 },
                  { stage: 'Leads', value: 2500, percentage: 25 },
                  { stage: 'Prospects', value: 750, percentage: 7.5 },
                  { stage: 'Customers', value: 324, percentage: 3.24 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {item.stage}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100 w-16 text-right">
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Channels */}
            <div className="card p-6">
              <h3 className="text-base font-medium text-slate-900 dark:text-slate-100 mb-4">
                Top Traffic Channels
              </h3>
              <div className="space-y-3">
                {[
                  { channel: 'Organic Search', value: 45, color: 'bg-emerald-500' },
                  { channel: 'Direct', value: 25, color: 'bg-blue-500' },
                  { channel: 'Social Media', value: 18, color: 'bg-purple-500' },
                  { channel: 'Email', value: 12, color: 'bg-amber-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {item.channel}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="secondary" className="p-4 h-auto flex-col gap-2">
              <DollarSign className="h-6 w-6" />
              <span>Generate Revenue Report</span>
            </Button>
            
            <Button variant="secondary" className="p-4 h-auto flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>User Analytics</span>
            </Button>
            
            <Button variant="secondary" className="p-4 h-auto flex-col gap-2">
              <Clock className="h-6 w-6" />
              <span>Performance Metrics</span>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard; 