import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { Container } from "./styles";

export function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <Container>
      {isFavorite ? (
        <IoHeart color="red" onClick={() => setIsFavorite(false)} />
      ) : (
        <IoHeartOutline color="red" onClick={() => setIsFavorite(true)} />
      )}
    </Container>
  );
}
