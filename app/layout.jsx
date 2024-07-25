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
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-black bg-white">
                <Navigation />
                <div className="grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
