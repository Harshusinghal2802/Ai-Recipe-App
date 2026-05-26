import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-recipe-app-t7ur.onrender.com",
});

export default API;