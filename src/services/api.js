import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URLA || 'https://avocado-projectt-api.herokuapp.com/'
})