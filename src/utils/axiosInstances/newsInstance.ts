import axios from "axios";

const newsInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/topstories/v2/",
});

export default newsInstance;
