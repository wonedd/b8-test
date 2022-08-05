import { GetServerSideProps } from "next";
import { Container, Content } from "../../shared/pages/home.styles";
import { Card } from "../components/Card";
import { api } from "../services/api";

interface HomeProps {
  products: [
    {
      id: string;
      title: string;
      price: number;
      oldPrice: string;
      imageUrl: string;
      favorite: boolean;
    }
  ];
}
export default function Home({ products }: HomeProps) {
  return (
    <Container>
      <Content>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await api.get("products");

  return {
    props: {
      products: products.data,
    },
  };
};
