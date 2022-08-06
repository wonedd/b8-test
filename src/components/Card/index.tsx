import { Button } from "../Button";
import { Container, DescriptionBox, Image, ImageBox } from "./styles";

interface CardProps {
  product: {
    id: string;
    title: string;
    price: number;
    oldPrice: number;
    imageUrl: string;
    favorite: boolean;
  };
}

const format = (item: number) => {
  const value = item.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return value;
};
export function Card({ product }: CardProps) {
  return (
    <Container>
      <ImageBox>
        <Image src={product.imageUrl} alt={product.title} />
      </ImageBox>
      <DescriptionBox>
        <h2>{product.title}</h2>
        <div>
          <h4>{format(product.oldPrice)}</h4>
          <h3>{format(product.price)}</h3>
          <p>
            em até <strong>10x de{format(product.price / 10)}</strong> sem juros
          </p>
        </div>
      </DescriptionBox>
      <Button id={product.id} favorite={product.favorite} />
    </Container>
  );
}
