import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../utils/Products";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const favorites = products.filter((product) => product.favorite);

    res.status(200).json(favorites);
  } catch (err) {
    res.status(404).json({ message: "Product not found" });
  }
};
