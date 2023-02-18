import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
};
