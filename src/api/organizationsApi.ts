import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export const getOrganizations = async () => {
  const response = await axios.get("/oraganizations");
  return response.data;
};
