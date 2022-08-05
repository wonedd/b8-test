import { Button } from "../Button";
import { FavoriteButton } from "./FavoriteButton";
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
export function Card({ product }: CardProps) {
  return (
    <Container>
      <ImageBox>
        <FavoriteButton product={product}/>
        <Image src={product.imageUrl} alt={product.title} />
      </ImageBox>
      <DescriptionBox>
        <h2>{product.title}</h2>
        <div>
          <p>{product.price}</p>
        </div>
      </DescriptionBox>
      <Button />
    </Container>
  );
}
