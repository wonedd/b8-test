import axios from "axios";

export const api = axios.create({
  baseURL: "https://b8-api-test.herokuapp.com/",
}); 