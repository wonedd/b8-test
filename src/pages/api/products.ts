import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../utils/Products";
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
