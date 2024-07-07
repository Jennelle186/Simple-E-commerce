import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "BookNook Haven",
  description: "Your cozy corner for discovering new adventures and timeless classics. Dive into our carefully curated collection of books and find your next favorite read today!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main 
          // className="min-h-screen flex flex-col items-center"
          >
          {children}
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
