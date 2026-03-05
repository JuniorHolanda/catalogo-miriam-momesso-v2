import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export function generateCategoryMetadata(slug?: string): Metadata {

  const categoryName = slug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, l => l.toUpperCase()) || "";

  return {
    title: `Brindes personalizados ${categoryName} | Momesso`,
    description: `Confira os brindes personalizados da categoria ${categoryName}.`,

    openGraph: {
      title: `Brindes personalizados ${categoryName}`,
      description: `Confira os brindes personalizados da categoria ${categoryName}.`,
      url: `https://miriammomesso.com.br/categoria/${slug}`,
      siteName: "Catálogo Momesso Brindes",
      images: [
        {
          url: "https://res.cloudinary.com/dnr3wfqyy/image/upload/v1772716380/thumb_ynbeiw.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Brindes personalizados ${categoryName}`,
      description: `Confira os brindes personalizados da categoria ${categoryName}.`,
      images: ["https://res.cloudinary.com/dnr3wfqyy/image/upload/v1772716380/thumb_ynbeiw.jpg"],
    },
  };
}