import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import "../assets/styles/globals.scss"


export const metadata: Metadata = {
  title: "Vacancy management",
  description: "Gestion de vacantes y compañias- Shirly Mejia",
};

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600']});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={poppins.className}>
        {children}
    </body>
</html>
  );
}
