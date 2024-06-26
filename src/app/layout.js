import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js | Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "#",
    image: "#",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <p>Header</p>
        </header>
        <nav>
          <Link className="nav" href="/">
            Home
          </Link>
          <Link className="nav" href="/about">
            About
          </Link>
          <Link className="nav" href="/posts">
            Posts
          </Link>
        </nav>
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
