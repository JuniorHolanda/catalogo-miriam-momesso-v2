import type { Metadata } from "next";
import { Roboto, Changa_One } from "next/font/google";
import StyledComponentsRegistry from '@/lib/registry'
import { AppThemeProvider } from "@/contexts/ThemeContext";
import HeaderDesktop from "@/components/HeaderDesktop";


const changaOne = Changa_One({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-common",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catálogo Miriam Momesso",
  description: "Catálogo de produtos da Miriam Momesso. Aqui você enconra brindes corporativos, brindes personalizados, brindes costuraveis e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${changaOne.variable} ${roboto.variable}`}>
        <StyledComponentsRegistry>
          <AppThemeProvider>
            <HeaderDesktop />
            {children}
          </AppThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
