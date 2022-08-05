import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { Container } from "./styles";
import { IoCheckmark } from "react-icons/io5";
export function Button({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isFavorite, setIsFavorite] = useState<boolean>();

  return (
    <Container isFavorite={isFavorite} {...rest}>
      {isFavorite && <IoCheckmark />}
      {isFavorite ? "ADICIONADO" : "ADICIONAR"}
    </Container>
  );
}
