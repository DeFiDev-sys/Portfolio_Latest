import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://res.cloudinary.com/dybqllv1r/image/upload/v1725848189/ksdb65xednhaxhu4oxlk.jpg"
  ),
  title: {
    default: "Juwon's Portfolio",
    template: "%s | Juwon",
  },
  description:
    "Fullstack developer portfolio showcasing projects, blog posts, and contact information. Built with Next.js and Tailwind CSS.",
  keywords: [
    "portfolio",
    "developer",
    "nextjs",
    "react",
    "typescript",
    "tailwindcss",
    "projects",
  ],
  authors: [
    {
      name: "Juwon",
      url:
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://res.cloudinary.com/dybqllv1r/image/upload/v1725848189/ksdb65xednhaxhu4oxlk.jpg",
    },
  ],
  creator: "Juwon",
  publisher: "Juwon",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    title: "Juwon's Portfolio",
    description:
      "Fullstack developer portfolio showcasing projects, blog posts, and contact information.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://res.cloudinary.com/dybqllv1r/image/upload/v1725848189/ksdb65xednhaxhu4oxlk.jpg",
    siteName: "Juwon's Portfolio",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL ||
          "https://res.cloudinary.com/dybqllv1r/image/upload/v1725848189/ksdb65xednhaxhu4oxlk.jpg"
        }/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Juwon's Portfolio — Open Graph image",
      },
      {
        url: "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juwon's Portfolio",
    description:
      "Fullstack developer portfolio showcasing projects and contact information.",
    creator: "@king_jay_I",
    images: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://res.cloudinary.com/dybqllv1r/image/upload/v1725848189/ksdb65xednhaxhu4oxlk.jpg"
      }/og-image.png`,
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
