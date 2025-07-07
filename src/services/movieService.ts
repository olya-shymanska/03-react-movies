import axios from "axios";
import type { Movie } from "../types/movie";
const token = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesParams {
   query: string;
};

interface FetchMoviesResponse {
    results: Movie[];
};


export default async function fetchMovies(topic: string) {

    const myParams: { params: FetchMoviesParams; headers: {Authorization: string}} = {
        params: {
            query: topic,
        },
        headers: {
            Authorization: `Bearer ${token}`,
          }
    };

    const response = await axios.get<FetchMoviesResponse>('https://api.themoviedb.org/3/search/movie', myParams);
    const movies = response.data.results;
    return movies;
};