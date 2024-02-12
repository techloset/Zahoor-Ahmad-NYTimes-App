import axios from "axios";

const newsInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/",
});

export default newsInstance;
