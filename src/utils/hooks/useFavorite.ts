import { useQuery } from "react-query";
import { api } from "../../services/api";

export async function getFavorite(): Promise<{ favorite: boolean }> {
  const { data } = await api.get("products");

  return {
    favorite: data.favorite,
  };
}

export function useFavorite() {
  return useQuery(["products"], () => getFavorite(), {
    staleTime: 60000, // 1 minute
  });
}
