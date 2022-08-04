import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "../services/api";

interface HomeProps {
  products: [
    {
      id: string;
      title: string;
      price: string;
      oldPrice: string;
      imageUrl: string;
      favorite: boolean;
    }
  ];
}
export default function Home({ products }: HomeProps) {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p
              style={{
                textDecoration: "line-through",
              }}
            >
              {product.oldPrice}
            </p>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.favorite}</p>
          </li>
        ))}
      </ul>
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
