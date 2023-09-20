import axios from "axios"

function getBaseApi(){
const basedURL = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_u4DpIUWiR1eHH1NzMhM6acrcZ4oOuB1jzuSgSjuygPXlpVmbBglhpfJmDogetVHV"

const client = axios.create({
    baseURL: basedURL
})
return (client)
};

export default getBaseApi;