import { Container, Content } from "../../shared/pages/home.styles";
import { Card } from "../components/Card";
import { products } from "../utils/Products";

export default function Home() {
  return (
    <Container>
      <Content>
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
}
