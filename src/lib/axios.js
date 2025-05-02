import axios from 'axios'
const axiosInstance=axios.create({
    baseUrl: "http://localhost:5001",
    withCredentials:true,
})
export default axiosInstance