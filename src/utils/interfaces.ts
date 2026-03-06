export interface GalleryItem {
  _id: string;
  img: string;
  altimg: string;
}

export interface Category {
  main: string[];
  holiday: string[];
  imported: string[];
}

export interface Product {
  _id: string;
  thumbnail: string;
  altthumbnail: string;
  title: string;
  smalltext: string;
  text: string;
  category: Category;
  code: string;
  measure: string[];
  gallery: GalleryItem[];
  like: number;
  slug: string;
}

export interface HolidayGalleryItem {
  img: string;
  altImg: string;
}

export interface Holiday {
  id: number;
  category: string;
  icon: string;
  altIcon: string;
  slug: string;
  start: string;
  end: string;
  gallery: HolidayGalleryItem[];
  description: string;
}