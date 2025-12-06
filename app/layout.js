import { Outfit, Ovo, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio - Aayush",
  description: "Backend Developer & AI Engineer - Building intelligent systems with FastAPI, Django, and modern AI tools",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${inter.className} antialiased leading-8 overflow-x-hidden bg-gray-bg text-primary dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
