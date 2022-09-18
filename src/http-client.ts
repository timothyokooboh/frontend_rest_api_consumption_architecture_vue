import axios from "axios";

export default axios.create({
  baseURL: "https://restcountries.com", // base url of your app
  headers: {
    "content-type": "application/json"
  }
});
