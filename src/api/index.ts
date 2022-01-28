import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://frontend-take-home.fetchrewards.com",
});

export const getOccupationAndState = () => {
  return baseUrl.get("/form");
};
