import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/stores': path.resolve(__dirname, './src/stores'),
      '@/adapters': path.resolve(__dirname, './src/adapters'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  base: './',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['apexcharts', 'react-apexcharts'],
          ui: ['framer-motion', 'lucide-react'],
          utils: ['clsx', 'tailwind-merge', 'date-fns'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'zustand', 
      '@tanstack/react-virtual',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
  },
  server: {
    port: 3000,
    host: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    host: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
})) 