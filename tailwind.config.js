// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-45deg': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '8xl': '96rem',
      },
      colors: {
        'primary': '#0077E4',
        'primary-darker': '#0062bc',
        'secondary': '#28263F',
        'neutral-1': '#F6F8FB',
        'neutral-2': '#EEF2F4',
        'neutral-3': '#DAE4EA',
        'neutral-4': '#B5BFC6',
        'neutral-5': '#6F7D87',
        'neutral-6': '#28263F',
        'color-brand': '#0077E4',
        'color-brand-lighter': '#BAE3FF',
        'color-brand-lightest': '#E9F6FF',
        'color-warning': '#B07A29',
        'color-warning-lighter': '#FFE9B7',
        'color-warning-lightest': '#FFFAED',
        'color-danger': '#E23C39',
        'color-danger-lighter': '#FFB8B7',
        'color-danger-lightest': '#FFE9E9',
        'color-success': '#2A9C7B',
        'color-success-lighter': '#8FE4CA',
        'color-success-lightest': '#DFF6F2',

      },
    }
  },
  plugins: [

  ],
};
