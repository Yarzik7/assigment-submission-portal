import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        bgBtn: 'var(--bg-button)',
        hovBtn: 'var(--hover-button)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        secondaryLight: 'var(--secondary-light)',
        error: 'var(--error)',
        success: 'var(--success)',
        info: 'var(--info)',
      },
      borderRadius: {
        radius: 'var(--border-radius)',
      },
      transitionTimingFunction: {
        function: 'var(--timing-function)',
      },
      transitionDuration: {
        duration: 'var(--transition-duration)',
      },
    },
  },
  plugins: [],
} satisfies Config;
