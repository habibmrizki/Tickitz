import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MoviePopular = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = import.meta.env.VITE_API_KEY;
        const movieUrl = import.meta.env.VITE_MOVIE_URL;
        const genreUrl = import.meta.env.VITE_GENRE_URL;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const [movieResponse, genreResponse] = await Promise.all([
          fetch(movieUrl, options),
          fetch(genreUrl, options),
        ]);

        if (!movieResponse.ok) {
          throw new Error(
            `HTTP error! status: ${movieResponse.status} from movie API`
          );
        }
        if (!genreResponse.ok) {
          throw new Error(
            `HTTP error! status: ${genreResponse.status} from genre API`
          );
        }

        const movieData = await movieResponse.json();
        const genreData = await genreResponse.json();

        const genresMapped = new Map(
          genreData.genres.map((genre) => [genre.id, genre.name])
        );
        setGenres(genresMapped);

        const moviesWithGenreNames = movieData.results.map((movie) => {
          const genreNames = movie.genre_ids
            ? movie.genre_ids.map(
                (genreId) => genresMapped.get(genreId) || "Unknown Genre"
              )
            : [];
          return { ...movie, genre_names: genreNames };
        });

        // const moviesWithGenreNames = movieData.results.map((movie)=>{
        //   const genre_names = movie.genre_ids
        // })

        setMovies(moviesWithGenreNames);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-10 md:p-12 lg:p-16 xl:p-20 flex flex-col gap-5">
        <div className="text-3xl font-bold text-violet-950 text-center md:text-center ">
          Popular Movies
        </div>
        <div className="text-3xl font-bold text-violet-950 text-center md:text-center ">
          Exciting Movies That Should Be Watched Today
        </div>
        <div className="flex flex-row gap-[20px] items-start overflow-x-auto pb-4 lg:justify-center md:overflow-x-scroll ">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col items-center justify-center gap-4 flex-shrink-0"
            >
              <div className="relative w-[250px] recomended group">
                <div className="relative">
                  <img
                    src={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${movie.poster_path}`
                        : "placeholder.jpg"
                    }
                    alt={movie.title}
                    className="w-full rounded-[10px]"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-[10px]"></div>

                  <Link
                    to={`/MovieDesktop`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70px] hidden group-hover:flex justify-center items-center z-10"
                  >
                    <button className="bg-transparent text-amber-400 border border-solid border-amber-400 block text-[0.8rem] w-[9rem] h-[2.5rem] rounded-full cursor-pointer hover:bg-amber-400 hover:text-white transition-colors duration-200">
                      Detail
                    </button>
                  </Link>

                  <Link
                    to={`/BuyTicket`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20px] hidden group-hover:flex justify-center items-center z-10"
                  >
                    <button className="bg-transparent text-amber-400 border border-solid border-amber-400 block text-[0.8rem] w-[9rem] h-[2.5rem] rounded-full cursor-pointer hover:bg-amber-400 hover:text-white transition-colors duration-200">
                      Buy Ticket
                    </button>
                  </Link>
                </div>
              </div>

              <div className="title text-lg font-semibold text-amber-600 text-center">
                {movie.title}
              </div>
              <div className="flex gap-5 text-sm text-gray-400 text-center">
                {movie.genre_ids.map((id) => (
                  <div
                    key={id}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {genres.get(id)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviePopular;
