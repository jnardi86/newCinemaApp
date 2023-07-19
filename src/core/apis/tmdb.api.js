import axios from "axios";

export const tmdb_paths = {
    movies: {
        popular: "/movie/popular",
    },

    images: {
        url: "https://image.tmdb.org/t/p",
        sizes: {
            small: "/w300",
            medium: "/w500",
            large: "/w1280",
            original: "/original",
          },
    },

}

export const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
        language: "es-ES",
    },
});