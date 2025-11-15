/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'iran-sans': [
  				'IRANSansXFaNum',
  				'Tahoma',
  				'Arial',
  				'sans-serif'
  			],
  			sans: [
  				'IRANSansXFaNum',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: 'hsl(var(--card))',
  			'card-foreground': 'hsl(var(--card-foreground))',
  			popover: 'hsl(var(--popover))',
  			'popover-foreground': 'hsl(var(--popover-foreground))',
  			muted: 'hsl(var(--muted))',
  			'muted-foreground': 'hsl(var(--muted-foreground))',
  			accent: 'hsl(var(--accent))',
  			'accent-foreground': 'hsl(var(--accent-foreground))',
  			destructive: 'hsl(var(--destructive))',
  			'destructive-foreground': 'hsl(var(--destructive-foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			black: 'hsl(var(--black))',
  			white: 'hsl(var(--white))',
  			'neutral-cold': {
  				'25': 'hsl(var(--neutral-cold-25))',
  				'50': 'hsl(var(--neutral-cold-50))',
  				'100': 'hsl(var(--neutral-cold-100))',
  				'200': 'hsl(var(--neutral-cold-200))',
  				'300': 'hsl(var(--neutral-cold-300))',
  				'400': 'hsl(var(--neutral-cold-400))',
  				'500': 'hsl(var(--neutral-cold-500))',
  				'600': 'hsl(var(--neutral-cold-600))',
  				'700': 'hsl(var(--neutral-cold-700))',
  				'800': 'hsl(var(--neutral-cold-800))',
  				'900': 'hsl(var(--neutral-cold-900))',
  				'1000': 'hsl(var(--neutral-cold-1000))'
  			},
  			'peach-orange': {
  				'25': 'hsl(var(--peach-orange-25))',
  				'50': 'hsl(var(--peach-orange-50))',
  				'100': 'hsl(var(--peach-orange-100))',
  				'200': 'hsl(var(--peach-orange-200))',
  				'300': 'hsl(var(--peach-orange-300))',
  				'400': 'hsl(var(--peach-orange-400))',
  				'500': 'hsl(var(--peach-orange-500))',
  				'600': 'hsl(var(--peach-orange-600))',
  				'700': 'hsl(var(--peach-orange-700))',
  				'800': 'hsl(var(--peach-orange-800))',
  				'900': 'hsl(var(--peach-orange-900))',
  				'1000': 'hsl(var(--peach-orange-1000))'
  			},
  			error: {
  				'25': 'hsl(var(--error-25))',
  				'50': 'hsl(var(--error-50))',
  				'100': 'hsl(var(--error-100))',
  				'200': 'hsl(var(--error-200))',
  				'300': 'hsl(var(--error-300))',
  				'400': 'hsl(var(--error-400))',
  				'500': 'hsl(var(--error-500))',
  				'600': 'hsl(var(--error-600))',
  				'700': 'hsl(var(--error-700))',
  				'800': 'hsl(var(--error-800))',
  				'900': 'hsl(var(--error-900))',
  				'1000': 'hsl(var(--error-1000))'
  			},
  			success: {
  				'25': 'hsl(var(--success-25))',
  				'50': 'hsl(var(--success-50))',
  				'100': 'hsl(var(--success-100))',
  				'200': 'hsl(var(--success-200))',
  				'300': 'hsl(var(--success-300))',
  				'400': 'hsl(var(--success-400))',
  				'500': 'hsl(var(--success-500))',
  				'600': 'hsl(var(--success-600))',
  				'700': 'hsl(var(--success-700))',
  				'800': 'hsl(var(--success-800))',
  				'900': 'hsl(var(--success-900))',
  				'1000': 'hsl(var(--success-1000))'
  			},
  			primary: {
  				'25': 'hsl(var(--primary-25))',
  				'50': 'hsl(var(--primary-50))',
  				'100': 'hsl(var(--primary-100))',
  				'200': 'hsl(var(--primary-200))',
  				'300': 'hsl(var(--primary-300))',
  				'400': 'hsl(var(--primary-400))',
  				'500': 'hsl(var(--primary-500))',
  				'600': 'hsl(var(--primary-600))',
  				'700': 'hsl(var(--primary-700))',
  				'800': 'hsl(var(--primary-800))',
  				'900': 'hsl(var(--primary-900))',
  				'1000': 'hsl(var(--primary-1000))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}