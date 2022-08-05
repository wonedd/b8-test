import { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { api } from "../../../services/api";
import { Container } from "./styles";

export function FavoriteButton(id: { id: string }) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = async () => {
    try {
      await api.post("products", id);

      setIsFavorite(true);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     await api.delete("products", id);

  //     setIsFavorite(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      {isFavorite ? (
        <IoHeart color="red" />
      ) : (
        <IoHeartOutline onClick={handleFavorite} color="red" />
      )}
    </Container>
  );
}
