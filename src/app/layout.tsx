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
  title: "Catálogo Miriam Momesso",
  description: "Catálogo de produtos da Miriam Momesso. Aqui você enconra brindes corporativos, brindes personalizados, brindes costuraveis e muito mais.",
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
