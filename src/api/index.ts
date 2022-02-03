import axios from "axios";

const BASE_URL = axios.create({baseURL: "https://frontend-take-home.fetchrewards.com"}) //prettier-ignore

export const getFormData = () => {
  return BASE_URL({
    method: "GET",
    url: "form",
  });
};

interface User {
  name: string;
  email: string;
  state: string;
  occupation: string;
  password: string;
}
export const addUser = ({ name, email, state, occupation, password }: User) => {
  return BASE_URL({
    method: "POST",
    url: "form",
    data: {
      name,
      email,
      state,
      occupation,
      password,
    },
  });
};
