import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { IoCheckmark } from "react-icons/io5";
export function Button({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isFavorite, setIsFavorite] = useState<boolean>();

  useEffect(() => {
    const getFavorite = async () => {
      const response = await api.get("favorites");
      setIsFavorite(response.data.favorite);
    };
    getFavorite();
  }, []);

  return (
    <Container isFavorite={isFavorite} {...rest}>
      {isFavorite && <IoCheckmark />}
      {isFavorite ? "ADICIONADO" : "ADICIONAR"}
    </Container>
  );
}
