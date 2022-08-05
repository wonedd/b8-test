import { GetServerSideProps } from "next";
import { Button } from "../components/Button";
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
    <div
      style={{
        width: "100vw",
        height: "100vh",

        marginTop: "100px",
        marginLeft: "100px",
      }}
    >
      <ul>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
      <Button />
    </div>
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
