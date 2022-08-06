import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { Container } from "./styles";

interface FavoriteButtonProps {
  favorite: boolean;
  isHovering: boolean;
}
export function FavoriteIcon({ isHovering, favorite }: FavoriteButtonProps) {
  return (
    <Container isFavorite={favorite} isHovering={isHovering}>
      {favorite ? <IoHeart /> : <IoHeartOutline />}
    </Container>
  );
}
