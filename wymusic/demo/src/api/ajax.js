import axios from 'axios'

export default function ajax (url,data){
    axios.defaults.baseURL='http://localhost:3000/'
    return axios.get(url,{params:data})
}