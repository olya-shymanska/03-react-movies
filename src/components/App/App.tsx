import { useState } from "react";
import type { Movie } from "../../types/movie";
import fetchMovies from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid";
import css from './App.module.css'

export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async (searchTopic: string) => {
        setMovies([]);
        const newMovies = await fetchMovies(searchTopic);
        if (newMovies.length === 0) {
            toast.error('No movies found for your request.')
        } else {
            setMovies(newMovies);
        }
        console.log(newMovies);
    }
    return (
        <div className={css.app}>
            <SearchBar onSubmit={handleSearch} />
            <Toaster />
            <MovieGrid items={movies}/>
        </div>
    )
}