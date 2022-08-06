import { ButtonHTMLAttributes, useState } from "react";
import { Container } from "./styles";
import { IoCheckmark } from "react-icons/io5";
import { api } from "../../services/api";
import { FavoriteIcon } from "../FavoriteIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  favorite: boolean;
  id: string;
}
export function Button({ favorite, id, ...rest }: ButtonProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isFavoriteHovering, setIsFavoriteHovering] =
    useState<boolean>(isFavorite);
  const handleFavorite = async () => {
    try {
      await api.post(`favorites?id=${id}`);
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FavoriteIcon isHovering={isHovering} favorite={isFavorite} />
      <Container
        isFavorite={isFavorite}
        {...rest}
        onClick={handleFavorite}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isFavorite && <IoCheckmark />}
        {isFavorite ? "ADICIONADO" : "ADICIONAR"}
      </Container>
    </>
  );
}
