import { http } from './http';

export const fetchAllBeers = beers => http.get(`beers`) 