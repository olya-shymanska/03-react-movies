import type { Movie } from "../../types/movie"
import css from './MovieGrid.module.css'

interface MovieGridProps {
    items: Movie[];
    onSelect: (movie: Movie) => void;
}

export default function MovieGrid( {items, onSelect} : MovieGridProps) {
    return (
        <ul className={css.grid}>
            {items.map((item) => (
                <li key={item.id}>
                    <div className={css.card} onClick={() => onSelect(item)}>
                  <img 
                        className={css.image} 
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt= {item.title}
                        loading="lazy" 
                      />
                        <h2 className={css.title}>{item.title}</h2>
                </div>
                </li>
            ))}
</ul>
    )
}