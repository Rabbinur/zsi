import type { Metadata } from "next";
import { Taviraj, Epilogue, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import Footer from "@/components/Home/Footer/Footer";
import ReduxProvider from "@/components/Redux/ReduxProvider";

const tavirajFont = Taviraj({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-tav",
});
const mulishFont = Mulish({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-mul",
});

const epilogueFont = Epilogue({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-ep",
});

export const metadata: Metadata = {
  title: "Rpclimo",
  description: "Its a simple web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tavirajFont.variable} ${epilogueFont.variable}  ${mulishFont.variable}  antialiased`}
      >
        <div className="relative">
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
