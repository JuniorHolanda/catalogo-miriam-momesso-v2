export interface GalleryItem {
  _id: string;
  img: string;
  altImg: string;
}

export interface Product {
  _id: string;
  thumbnail: string;
  altThumbnail: string;
  title: string;
  smallText: string;
  text: string;
  category: string[];
  measure: string[];
  gallery: GalleryItem[];
  like: number;
}
