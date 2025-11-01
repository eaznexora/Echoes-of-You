module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#E8E8E8", // gray-200
        secondary: "#A0A0A0", // gray-400
        accent: "#00D4FF", // cyan-400
        
        // Background Colors
        background: "#0A0A0A", // gray-950
        surface: "#1A1A1A", // gray-900
        
        // Text Colors
        'text-primary': "#FFFFFF", // white
        'text-secondary': "#CCCCCC", // gray-300
        
        // State Colors
        success: "#00FF88", // emerald-400
        warning: "#FFD700", // yellow-400
        error: "#FF4444", // red-500
        
        // Emotional Pulse Colors
        calm: "#00D4FF", // cyan-400
        anxiety: "#FFD700", // yellow-400
        rage: "#FF4444", // red-500
        sadness: "#A855F7", // purple-500
        
        // Extended Gray Scale for Void Aesthetic
        void: {
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#111827", // gray-900
          950: "#030712", // gray-950
        }
      },
      fontFamily: {
        // Headings: Inter for modern geometric clarity
        'heading': ['Inter', 'sans-serif'],
        // Body: Source Sans 3 for exceptional readability
        'body': ['Source Sans 3', 'sans-serif'],
        // Captions: JetBrains Mono for system messages
        'caption': ['JetBrains Mono', 'monospace'],
        // Data: Roboto Mono for technical elements
        'data': ['Roboto Mono', 'monospace'],
        // Default sans override
        'sans': ['Source Sans 3', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'digital': '4px',
      },
      boxShadow: {
        'void': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.05)',
        'glow-calm': '0 0 20px rgba(0, 212, 255, 0.1)',
        'glow-anxiety': '0 0 20px rgba(255, 215, 0, 0.1)',
        'glow-rage': '0 0 20px rgba(255, 68, 68, 0.1)',
        'glow-sadness': '0 0 20px rgba(168, 85, 247, 0.1)',
      },
      animation: {
        'micro-glitch': 'micro-glitch 200ms ease-in-out',
        'breathe-calm': 'breathe-calm 3s ease-in-out infinite alternate',
        'breathe-anxiety': 'breathe-anxiety 3s ease-in-out infinite alternate',
        'breathe-rage': 'breathe-rage 3s ease-in-out infinite alternate',
        'breathe-sadness': 'breathe-sadness 3s ease-in-out infinite alternate',
        'typing': 'typing 2s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      letterSpacing: {
        'adaptive-calm': '0.025em',
        'adaptive-anxiety': '0.05em',
        'adaptive-rage': '0.1em',
        'adaptive-sadness': '0.075em',
      },
      lineHeight: {
        'adaptive-calm': '1.6',
        'adaptive-anxiety': '1.7',
        'adaptive-rage': '1.8',
        'adaptive-sadness': '1.75',
      },
    },
  },
  plugins: [],
}