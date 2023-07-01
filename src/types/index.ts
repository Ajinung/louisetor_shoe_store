export type buttonData = {
  text: string;
  hoverBG: string;
  onclick?: () => Promise<void>;
  textCol: string;
  HovertextCol: string;
  border?: string;
  background: string;
  paddingX: string;
  paddingY: string;
  midScreen?: string;
};

export interface featuredCategoryData extends buttonData {
  caption: string;
  title: string;
  description: string;
  image: string;
}

export type singleProductData = {
  title: string;
  thumbnail: string;
  price: string;
  promo?: string;
};
