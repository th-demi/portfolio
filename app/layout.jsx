import './globals.css';
import { ThemeProvider } from '../components/ThemeContext';

export const metadata = {
  title: 'Harris Johnsen - Portfolio',
  description: 'Harris Johnsen portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&family=Rubik:wght@300..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <div id="root">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
