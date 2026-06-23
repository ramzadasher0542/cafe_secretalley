import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-outfit)', 'var(--font-jakarta)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-bungee)', 'var(--font-outfit)', 'system-ui'],
  			chalk: ['var(--font-kalam)', 'cursive'],
  			marker: ['var(--font-permanent)', 'cursive'],
  			script: ['var(--font-caveat)', 'cursive'],
  		},
  		colors: {
  			/* ── Brand Colors (exact spec) ── */
  			cyan: {
  				DEFAULT: '#28C4D9',
  				deep: '#1EA8BC',
  				glow: '#6EDCE9',
  				light: '#B4EEF4',
  			},
  			sun: {
  				DEFAULT: '#FFD500',
  				deep: '#E6BF00',
  				glow: '#FFEC80',
  			},
  			mint: '#83E3B3',
  			espresso: {
  				DEFAULT: '#1A120B',
  				2: '#2C2218',
  				3: '#3D3024',
  			},
  			cream: {
  				DEFAULT: '#F9F6F0',
  				2: '#FBF8F2',
  			},
  			wood: {
  				DEFAULT: '#8B5A2B',
  				light: '#C8975F',
  			},

  			/* ── Shadcn semantic tokens ── */
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'float-slow': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-8px)' },
  			},
  			'float-medium': {
  				'0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
  				'50%': { transform: 'translateY(-12px) rotate(-2deg)' },
  			},
  			marquee: {
  				from: { transform: 'translateX(0)' },
  				to: { transform: 'translateX(-50%)' },
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' },
  			},
  		},
  		animation: {
  			'float-slow': 'float-slow 6s ease-in-out infinite',
  			'float-medium': 'float-medium 5s ease-in-out infinite',
  			marquee: 'marquee 32s linear infinite',
  			shimmer: 'shimmer 3s ease-in-out infinite',
  		},
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
