import axios from "axios";
import {OrderPayload} from "./types";

const API_URL = 'https://thaisa-sds2.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload);
}