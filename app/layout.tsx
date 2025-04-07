import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import { cn } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Imagen ",
  description: "AI image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn("font-ibmPlexSans antialiased", ibmPlexSans.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
