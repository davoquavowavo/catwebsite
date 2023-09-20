import axios from "axios";

function getBreedsApi() {
  const baseURL =
    "https://api.thecatapi.com/v1/breeds?api_key=live_u4DpIUWiR1eHH1NzMhM6acrcZ4oOuB1jzuSgSjuygPXlpVmbBglhpfJmDogetVHV";

  const client = axios.create({
    baseURL: baseURL,
  });

  return client; 
}

export default getBreedsApi;