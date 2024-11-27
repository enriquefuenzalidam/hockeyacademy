const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            clipPath: {
              'triangle': 'polygon(0 0, calc(50% - 25px) 0, 50% 10%, calc(50% + 25px) 0, 100% 0, 100% 100%, 0 100%)',
            },
            backgroundImage: {
                'otoFondo': 'linear-gradient(to bottom, rgb(119, 172, 212), rgb(88, 119, 155), rgb(119, 172, 212), rgb(88, 119, 155), rgb(119, 172, 212), rgb(88, 119, 155), rgb(119, 172, 212), rgb(88, 119, 155))',
                'otoFondoDos': 'linear-gradient(to bottom, rgb(119, 172, 212), rgb(88, 119, 155))',
                'otoFondoRatioFondo': 'radial-gradient(ellipse at 0 0 , rgb(119, 172, 212), rgb(88, 119, 155))',
                'otoFondoRatioFondoHover': 'radial-gradient(ellipse at 0 0 , rgb(119, 172, 212), rgb(43, 59, 77))',
                'otoFondoCitasFondo': 'linear-gradient(240deg, rgb(119, 172, 212) 0%, rgb(88, 119, 155) 100%)',
                'otoFondoNosotrosGradient': 'linear-gradient(220deg, rgb(119, 172, 212) 44%, rgb(88, 119, 155) 100%)',

                'fucsiaAzulFondo': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulFondoDos': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulFondoTres': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126))',
                'transparentBlackFondo': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))',
                'blackTransparenteFondo': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                'whiteFadedFondo': 'linear-gradient(to bottom, rgba(225, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
                'dsfsd': 'linear-gradient(to bottom, rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77), rgb(211, 0, 126), rgb(18, 33, 77))',
                'fucsiaAzulRatioFondo': 'radial-gradient(ellipse at 0 0 , rgb(211, 0, 126), rgb(18, 33, 77))',
                'citasFondo': 'linear-gradient(240deg, rgb(246, 187, 14) 0%, rgb(242, 41, 91) 100%)',
                'nosotrosGradient': 'linear-gradient(220deg, rgb(18, 33, 77) 44%, rgb(242, 41, 91) 80%)',
                'contactoGradient': 'linear-gradient(230deg, #12214D 49%, #f2295b 95%)'
            },
            colors: {
                'fucsiaFundo': 'rgb(211, 0, 126)',
                'azulFundo': 'rgb(18, 33, 77)',
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                Cabin: ['Cabin', ...defaultTheme.fontFamily.sans],
                BebasNeue:  ['Bebas Neue', ...defaultTheme.fontFamily.sans],
                Roboto:  ['Roboto', ...defaultTheme.fontFamily.sans],
                RobotoCondensed:  ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
                NotoSerif:  ['Noto Serif', ...defaultTheme.fontFamily.sans]
            },
            screens: {
              'sm': '640px',
              'md': '870px',
              'lg': '1024px',
              'gx': '1160px',
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
        addDynamicIconSelectors(),
        function ({ addUtilities }) {
          const newUtilities = {
            '.no-scrollbar': {
              /* Hide scrollbar for WebKit browsers */
              '-webkit-overflow-scrolling': 'touch',
              'scrollbar-width': 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
            '.scroll-smooth': {
              'scroll-behavior': 'smooth',
            },
          };
          addUtilities(newUtilities, ['responsive']);
        },
    ]
};
