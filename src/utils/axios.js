import axios from "axios";
import {BASE_URL} from '../constants/index'

export const instance=axios.create({
    baseURL:BASE_URL,
    timeout:1000,
})