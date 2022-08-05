import { VercelRequest, VercelResponse } from "@vercel/node";
import { products } from "../../utils/Products";
import { favorites } from "../../utils/Favorites";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    if(req.method === "GET") {
    res.status(200).json(products);

    }

      
    if(req.method === "POST") {
      const { id } = await req.body;

    
      const product = products.find(product => product.id === id);

      if (product) {
        product.favorite = true;

        favorites.push(product);



       res.status(200).json(product);
      } 

      
      res.status(200).json(product);
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