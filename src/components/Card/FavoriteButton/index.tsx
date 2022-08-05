import { useState } from "react";
import { IoHeart, IoHeartOutline, IoManOutline } from "react-icons/io5";
import { api } from "../../../services/api";
import { Container } from "./styles";


interface FavoriteButtonProps {
  id: number;
}
export function FavoriteButton({id}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);


  const handleFavorite = async () => {
    try {
     const response = await api.post(`favorites?id=${id}`);

      console.log(response)

      setIsFavorite(!isFavorite);

    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`products?id=${id}`);

      setIsFavorite(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {isFavorite ? (
        <IoHeart onClick={handleFavorite} color="red" />
      ) : (
        <IoHeartOutline onClick={handleFavorite}  color="red" />
      )}  
    </Container>
  );
}