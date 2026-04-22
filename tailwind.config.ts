import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ─── Light-mode global surfaces (backwards-compat names) ───────────
        base:     '#F7F8FA',   // platinum page background
        surface:  '#FFFFFF',   // white card background
        elevated: '#EEF0F7',   // navy-100 tinted elevated surface
        hover:    '#EEF0F7',   // hover fill (navy-100)

        // ─── Text scale (backwards-compat) ─────────────────────────────────
        'text-primary':   '#1C1F2A',  // ink
        'text-secondary': '#5A5F6E',  // ink-muted
        'text-muted':     '#9095A6',  // light muted

        // ─── Brand system (new namespace) ──────────────────────────────────
        brand: {
          navy: {
            DEFAULT: '#1A1F4C',
            900:     '#0D1128',
            800:     '#141836',
            700:     '#2A3068',
            500:     '#3A4285',
            100:     '#EEF0F7',
          },
          silver: {
            DEFAULT: '#B8BCC4',
            400:     '#D4D7DE',
            300:     '#E5E7EC',
          },
          copper: {
            DEFAULT: '#B08A5B',
            light:   '#C79C6B',
            deep:    '#8F6E45',
          },
          platinum: '#F7F8FA',
          ink: {
            DEFAULT: '#1C1F2A',
            muted:   '#5A5F6E',
          },
        },

        // ─── Legacy accent aliases (remapped to new brand values) ──────────
        blue: {
          DEFAULT: '#1A1F4C',  // brand navy (was electric blue)
          light:   '#2A3068',  // navy-700
          dark:    '#0D1128',  // navy-900
        },
        silver: {
          DEFAULT: '#B8BCC4',  // new silver (was blue-silver)
          light:   '#D4D7DE',  // silver-400
          dark:    '#8A8E9A',
        },
        copper: {
          DEFAULT: '#B08A5B',  // new warm copper (was brighter)
          light:   '#C79C6B',
          dark:    '#8F6E45',  // copper-deep
        },
      },
      borderColor: {
        DEFAULT: '#D4D7DE',   // silver-400 for light-mode borders
        subtle:  '#E5E7EC',   // silver-300 dividers
        blue:    '#1A1F4C',
        silver:  '#B8BCC4',
        copper:  '#B08A5B',
      },
      animation: {
        'fade-up':     'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':     'fadeIn 0.6s ease forwards',
        'scroll-left': 'scrollLeft 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      letterSpacing: {
        display:   '-0.03em',
        heading:   '-0.02em',
        'wide-sm': '0.08em',
        'wide-md': '0.15em',
        'wide-lg': '0.2em',
      },
      lineHeight: {
        display: '1.05',
        heading: '1.2',
        body:    '1.75',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22,1,0.36,1)',
      },
      boxShadow: {
        'navy-sm': '0 2px 12px rgba(26,31,76,0.08)',
        'navy-md': '0 4px 24px rgba(26,31,76,0.12)',
        'navy-lg': '0 8px 48px rgba(26,31,76,0.16)',
        card:      '0 1px 3px rgba(26,31,76,0.08), 0 4px 16px rgba(26,31,76,0.06)',
        'card-hover': '0 4px 24px rgba(26,31,76,0.14), 0 1px 3px rgba(26,31,76,0.08)',
        'copper-glow': '0 4px 20px rgba(176,138,91,0.25)',
      },
    },
  },
  plugins: [],
}

export default config