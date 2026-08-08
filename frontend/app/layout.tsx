import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pyramid — Task Management",
  description: "Full-stack task management workspace built with Next.js and NestJS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
