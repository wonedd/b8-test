import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../utils/Products";
import { favorites } from "../../utils/Favorites";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(products);

    try {
      if (req.method === "POST") {
        const { id } = req.body;
        console.log(id);

        const product = products.find((product) => product.id === id);

        if (product) {
          product.favorite = true;

          favorites.push(product);

          res.status(200).json(product);
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      }
    } catch (err) {
      res.status(404).json({ message: "Product not found" });
    }

    try {
      if (req.method === "DELETE") {
        const { id } = req.body;

        const product = products.find((product) => product.id === id);

        if (product) {
          product.favorite = false;

          res.status(200).json(product);
        }
      }
    } catch (err) {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(404).json({ message: "Product not found" });
  }
};
