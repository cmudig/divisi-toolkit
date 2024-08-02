import lineClamp from '@tailwindcss/line-clamp';
export default {
  plugins: [lineClamp],
  theme: {
    extend: {},
  },
  content: ['./index.html', './src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'class', // or 'media' or false
  safelist: [
    'bg-blue-200',
    'bg-violet-200',
    'bg-fuchsia-200',
    'bg-emerald-200',
    'bg-cyan-200',
    'bg-emerald-200',
    'bg-lime-200',
    'bg-amber-200',
    'bg-red-200',
    'bg-blue-400',
    'bg-violet-400',
    'bg-fuchsia-400',
    'bg-emerald-400',
    'bg-cyan-400',
    'bg-emerald-400',
    'bg-lime-400',
    'bg-amber-400',
    'bg-red-400',
    'bg-blue-600',
    'bg-violet-600',
    'bg-fuchsia-600',
    'bg-emerald-600',
    'bg-cyan-600',
    'bg-emerald-600',
    'bg-lime-600',
    'bg-amber-600',
    'bg-red-600',
    'bg-blue-800',
    'bg-violet-800',
    'bg-fuchsia-800',
    'bg-emerald-800',
    'bg-cyan-800',
    'bg-emerald-800',
    'bg-lime-800',
    'bg-amber-800',
    'bg-red-800',
    'text-blue-200',
    'text-violet-200',
    'text-fuchsia-200',
    'text-emerald-200',
    'text-cyan-200',
    'text-emerald-200',
    'text-lime-200',
    'text-amber-200',
    'text-red-200',
    'text-blue-400',
    'text-violet-400',
    'text-fuchsia-400',
    'text-emerald-400',
    'text-cyan-400',
    'text-emerald-400',
    'text-lime-400',
    'text-amber-400',
    'text-red-400',
    'text-blue-600',
    'text-violet-600',
    'text-fuchsia-600',
    'text-emerald-600',
    'text-cyan-600',
    'text-emerald-600',
    'text-lime-600',
    'text-amber-600',
    'text-red-600',
    'text-blue-800',
    'text-violet-800',
    'text-fuchsia-800',
    'text-emerald-800',
    'text-cyan-800',
    'text-emerald-800',
    'text-lime-800',
    'text-amber-800',
    'text-red-800',
  ],
};
