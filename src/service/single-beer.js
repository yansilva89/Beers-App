import { http } from './http';

export const fetchSingleBeer = id => http.get(`beers/${id}`);