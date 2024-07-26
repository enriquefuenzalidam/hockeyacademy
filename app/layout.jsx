import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Navigation } from '../components/navigation';

export const metadata = {
    title: {
        template: '%s | Identity',
        default: 'Identity'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <head>
            </head>
            <body className="antialiased text-black bg-[#12214d] font-Cabin ">
                {children}
                <Navigation />
            </body>
        </html>
    );
}
