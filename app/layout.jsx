import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Navigation } from '../components/navigation';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <head>
            </head>
            <body className="antialiased text-black bg-white">
                <Navigation />
                {children}
            </body>
        </html>
    );
}
