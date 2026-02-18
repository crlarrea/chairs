type ItemProps = {
  productName: string;
  description: string;
  price: number;
  rating: number;
  image: string;

  updateProduct: (
    productName: string,
    description: string,
    price: number,
    rating: number
  ) => void;
};

export type { ItemProps };
