import { useState } from "react";
import { IoHeart, IoHeartOutline, IoManOutline } from "react-icons/io5";
import { api } from "../../../services/api";
import { Container } from "./styles";


interface FavoriteButtonProps {
  product: {
    id: string;
    title: string;
    price: number;
    oldPrice: number;
    imageUrl: string;
    favorite: boolean;
  };
}
export function FavoriteButton({product}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(product.favorite);


  const handleFavorite = async () => {
    try {

     const response = await api.post(`favorites?id=${product.id}`);

      console.log(response)

      setIsFavorite(!isFavorite);

    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`products?id=${product.id}`);

      setIsFavorite(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container onClick={handleFavorite}>
      {isFavorite ? (
        <IoHeart  color="red" />
      ) : (
        <IoHeartOutline  color="red" />
      )}  
    </Container>
  );
}