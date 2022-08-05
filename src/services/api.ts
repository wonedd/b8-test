import axios from "axios";

export const api = axios.create({
  baseURL: "https://b8one-test-six.vercel.app/api/",
});