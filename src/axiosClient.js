import axios from "axios"

const axiosClient = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/'
})

export default axiosClient