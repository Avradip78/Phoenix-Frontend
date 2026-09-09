/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Distinctive Premium AI & Intelligence Palette
        dark: {
          950: '#040912',
          900: '#07111F', // Primary Dark
          850: '#0A1626',
          800: '#0D1B2A', // Deep Slate
          700: '#14253B',
          600: '#1E3553',
          500: '#2C496E',
        },
        // Backwards compatibility alias for navy
        navy: {
          950: '#040912',
          900: '#07111F',
          850: '#0A1626',
          800: '#0D1B2A',
          700: '#14253B',
          600: '#1E3553',
          500: '#2C496E',
        },
        teal: {
          500: '#14B8A6', // Electric Teal (AI / Intelligence / Active Flow)
          400: '#2DD4BF',
          300: '#5EEAD4',
          200: '#99F6E4',
          100: '#CCFBF1',
          50: '#F0FDFA',
        },
        cyan: {
          500: '#06B6D4',
          400: '#22D3EE', // Cyan
          300: '#67E8F9',
          50: '#ECFEFF',
        },
        blue: {
          600: '#2563EB',
          500: '#3B82F6', // Electric Blue (Data / Systems / Technology)
          400: '#60A5FA',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        violet: {
          600: '#7C3AED',
          500: '#8B5CF6', // Violet (Agents / Orchestration / GenAI)
          400: '#A78BFA',
          100: '#EDE9FE',
          50: '#F5F3FF',
        },
        // Backwards compatibility alias for purple
        purple: {
          600: '#7C3AED',
          500: '#8B5CF6',
          400: '#A78BFA',
          100: '#EDE9FE',
          50: '#F5F3FF',
        },
        amber: {
          500: '#F59E0B', // Warm Amber (Human Approval / Governance / Control)
          400: '#FBBF24',
          300: '#FCD34D',
          100: '#FEF3C7',
          50: '#FFFBEB',
        },
        coral: {
          500: '#E8798A',
          400: '#F497A5',
          100: '#FDE8EB',
          50: '#FFF5F6',
        },
        surface: {
          light: '#F5F7FA', // Soft Off-White
          white: '#FFFFFF',
          card: '#FFFFFF',
          darkCard: '#0D1B2A',
          darkBorder: '#1E3553',
        },
        textPrimary: '#111827',
        textSecondary: '#64748B',
        borderMuted: '#CBD5E1',
        body: '#64748B',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
