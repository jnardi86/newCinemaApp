import { tmdb_paths, tmdb } from "../../../core/apis/tmdb.api";

export const getPopularMovies = async () => {
    const { data } = await tmdb.get(tmdb_paths.movies.popular);

    return data.results;
}