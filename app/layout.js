import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "700"] });

export const metadata = {
  title: "Nishank Dawar — Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years building distributed systems, high-throughput data platforms and AI infrastructure. Portfolio, live projects and resume.",
  openGraph: {
    title: "Nishank Dawar — Senior Software Engineer",
    description: "Distributed systems, data platforms and AI infrastructure. See my work and live projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
