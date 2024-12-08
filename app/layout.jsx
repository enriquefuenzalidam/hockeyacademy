
import '../styles/globals.css';
import { Navigation } from '../components/navigation';
import AOSInitializer from '../components/AOSInitializer';

export const metadata = {
    title: {
        template: '%s | Hockey Academy',
        default: 'Hockey Academy'
    }
};

export default function RootLayout({ children }) {
    return (

        <html lang="es" className={` scroll-smooth `}>

            <head>

                <meta name="description" content="Proveedores. Desarrollo de aplicaciones móviles. Diseño de páginas web. Base de datos. Venta y suscripción de software. E-commerce." />
                <meta name="keywords" content="Hockey Academy, Hockey, Campus, Campus Identity" />
                <meta charSet="UTF-8" />

                <meta property="og:title" content="Hockey Academy" />
                <meta property="og:description" content="Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey." />
                <meta property="og:image" content="/hockeyacademycamp/hockeyacademycamp_ogimage.png" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Hockey Academy" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hockey Academy" />
                <meta name="twitter:description" content="Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey." />
                <meta name="twitter:image" content="/hockeyacademycamp/hockeyacademycamp_ogimage.png" />

                <link rel="apple-touch-icon" sizes="230x230" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/hockeyacademy_h_logo_16x16.png" />
                <link rel="icon" type="image/png" sizes="34x34" href="/images/hockeyacademy_h_logo_34x34.png" />
                <link rel="icon" type="image/png" sizes="85x85" href="/images/hockeyacademy_h_logo_85x85.png" />
                <link rel="icon" type="image/png" sizes="230x230" href="/images/hockeyacademy_h_logo_230x230.png" />

            </head>

            <body className={` antialiased text-black bg-[#12214d] font-Cabin `}>
                <AOSInitializer />
                {children}
                <Navigation />
            </body>

        </html>

    );
}
