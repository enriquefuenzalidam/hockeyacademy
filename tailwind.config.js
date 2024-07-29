const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                Cabin: ['Cabin', ...defaultTheme.fontFamily.sans]
            },
            screens: {
              'sm': '640px',
              'md': '870px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1536px',
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        addDynamicIconSelectors(),]
};
