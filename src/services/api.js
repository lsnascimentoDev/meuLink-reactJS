import axios from 'axios'

export const key = "92ea8667c82e6ec46ce383e0441f2d3e9a0fb14a"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}` 
    }
})

export default api;