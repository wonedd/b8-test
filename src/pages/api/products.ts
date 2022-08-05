import { VercelRequest, VercelResponse } from "@vercel/node";
import { products } from "../../utils/Products";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {

    if(req.method === "GET") {
    res.status(200).json(products);

    }

    try {
      if (req.method === "DELETE") {
        const { id } = req.body;

        const product = products.find((product) => product.id === id);

        if (product) {
          product.favorite = false;

          return res.status(200).json(product);
        }
      }
    } catch (err) {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (err) {
    res.status(404).json({ message: "Product not found" });
  }
};