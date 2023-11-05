import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export const getReferenceDirectoriesList = async () => {
  const response = await axios.get("/referenceDirectoriesList");
  return response.data;
};
