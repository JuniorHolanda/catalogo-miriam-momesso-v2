import type { Metadata } from "next";
import { Roboto, Changa_One } from "next/font/google";
import StyledComponentsRegistry from '@/lib/registry'
import { AppThemeProvider } from "@/contexts/ThemeContext";
import { ViewportProvider } from "@/contexts/ViewportContext";
import { Product } from "@/utils/interfaces";
import { getProducts } from "@/services/getProductMomesso";
import HeaderSwitcher from "@/components/Headers/HeaderSwitcher/HeaderSwitcher";
import { ProductsProvider } from "@/contexts/Product.context";
const changaOne = Changa_One({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catalogo.miriammomesso.com.br"),
  title: {
    default: "Catálogo Miriam Momesso",
    template: "%s | Miriam Momesso"
  },
  description: "Catálogo de produtos da Miriam Momesso. Aqui você encontra brindes corporativos, brindes personalizados, brindes costuráveis e muito mais.",
  keywords: [
    "brindes corporativos",
    "brindes personalizados",
    "brindes sp",
    "brindes para empresas",
    "brindes para colaboradores",
    "brindes para crianças",
    "brindes para eventos",
  ],
  authors: [{ name: "Miriam Momesso" }],
  creator: "Miriam Momesso",
  publisher: "Miriam Momesso",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://catalogo.miriammomesso.com.br",
    siteName: "Catálogo Miriam Momesso",
    title: "Miriam Momesso",
    description:
      "Catálogo de produtos da Miriam Momesso. Aqui você encontra brindes corporativos, brindes personalizados, brindes costuráveis e muito mais.",
    images: [
      {
        url: "https://res.cloudinary.com/dnr3wfqyy/image/upload/v1772807917/thumbnail-social-media_yyb133.jpg",
        width: 630,
        height: 630,
        alt: "Miriam Momesso",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Miriam Momesso",
    description:
      "Catálogo de produtos da Miriam Momesso. Aqui você encontra brindes corporativos, brindes personalizados, brindes costuráveis e muito mais.",
    images: ["https://res.cloudinary.com/dnr3wfqyy/image/upload/v1772807917/thumbnail-social-media_yyb133.jpg"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const listproducts: Product[] = await getProducts();

  return (
    <html lang="pt-br">
      <body className={`${changaOne.variable} ${roboto.variable}`}>
        <StyledComponentsRegistry>
          <AppThemeProvider>
            <ViewportProvider>
              <ProductsProvider products={listproducts}>
                <HeaderSwitcher/> 
                {children}
              </ProductsProvider>
            </ViewportProvider>
          </AppThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
