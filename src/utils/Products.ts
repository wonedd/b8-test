import { v4 as uuid } from "uuid";

export const products = [
  {
    id: uuid(),
    title:
      "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    price: 2599,
    oldPrice: 2813.99,
    imageUrl: "/assets/tv.png",
    favorite: false,
  },
  {
    id: uuid(),
    title:
      "ACER Notebook Aspire 5 A515-56-32PG, Intel Core I3 11ª geração, 4GB, 256GB SDD, Windows11, Prata",
    price: 2924.73,
    oldPrice: 3249.7,
    imageUrl: "/assets/note.png",
    favorite: false,
  },
];
