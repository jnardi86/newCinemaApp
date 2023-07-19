import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../core/auth/hooks/useAuth'
import { Helmet } from 'react-helmet-async';
import useSWR from "swr";
// import { getUsers } from "../services/jsonPlaceHolder.services"
import { getPopularMovies } from '../services/tmdb.service';
import { tmdb_paths } from '../../../core/apis/tmdb.api';




const HomeView = () => {

  const { user } = useAuth();
  const { data, error, isLoading } = useSWR('getPopularMovies', () => getPopularMovies());
  // console.log(data);



  return (
    <div>
      <Helmet>
        <title>Home | CinemApp</title>
        <meta name='description' content='Home | CinemApp' />
      </Helmet>
      <h2>Bienvenido {user?.email}</h2>
      <div>
        {data &&
          data?.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <div>
                <img
                  src={`${tmdb_paths.images.url}${tmdb_paths.images.sizes.original}${movie.backdrop_path}`}
                  alt={`Img de ${movie.title}`} />
              </div>
              <p>{movie.overview}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeView