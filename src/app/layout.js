import localFont from "next/font/local";
import "./globals.css";
import AltNav from "@/components/navBar/AltNav";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  function sum(a, b){
    return a + b
  }
  console.log(sum(2, 6))
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-80 overflow-x-hidden`}
      >
        <AltNav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
