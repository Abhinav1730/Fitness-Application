import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gym Busters",
  description:
    "A fully modern web application for fitness enthusiasts and gym goers , AI assistance will be provided and personalised workout schedules",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
        
        </header>
        
        {children}
      </body>
    </html>
    </ClerkProvider>
  
  );
}
