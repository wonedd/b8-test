import { products } from "../../utils/Products";
import { favorites } from "../../utils/Favorites";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => { 
      
      if(req.method === "POST") {
      const { id } = req.body;

    
      const product = products.find(product => product.id === id);

      if (product) {
        product.favorite = true;

        favorites.push(product);



       res.status(200).json(product);
      } 

      
      res.status(200).json(product);
      }     
}