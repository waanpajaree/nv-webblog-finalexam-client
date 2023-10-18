import axios from 'axios'
import store from '@/store'
export default () => {
    return axios.create({
        baseURL: 'http://10.31.27.240:8081/',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}