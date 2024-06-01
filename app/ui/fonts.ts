import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const lusitana = Lusitana({
    subsets: ['latin'],
    variable: '--font-lusitana',
    display: 'swap',
    weight: ['400', '700'],
});
