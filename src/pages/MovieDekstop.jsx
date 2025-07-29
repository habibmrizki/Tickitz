import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Search from "../../public/img/search.svg";
import imgBg from "../../public/img/bg-home.svg";

const Home2 = () => {
  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState(new Map());

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
        setGenreMap(genresMapped);

        const moviesWithGenreNames = movieData.results.map((movie) => {
          const genreNames = movie.genre_ids
            ? movie.genre_ids.map(
                (genreId) => genresMapped.get(genreId) || "Unknown Genre"
              )
            : [];
          return { ...movie, genre_names: genreNames };
        });

        setMovies(moviesWithGenreNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-8">
        <div
          className="bg-home bg-cover bg-center h-screen flex flex-col justify-center bg-no-repeat py-[50px] px-[10%]"
          style={{
            backgroundImage: `url(${imgBg})`,
          }}
        >
          <div className="text-white text-[18px] font-bold ">
            LIST MOVIE OF THE WEEK
          </div>
          <div className="text-white text-[24px] line-height-[30px] font-medium">
            Experience the Magic of Cinema: Book Your Tickets Today
          </div>
        </div>
        <div className="content-search px-[10%] py-[20px] md:flex-row gap-[20px] flex flex-col">
          <div className="search flex-1 min-w-[250px]">
            <label
              htmlFor="search"
              className="block text-gray-800 text-[16px] font-semibold mb-2"
            >
              Cari Event
            </label>
            <div className="input-search flex items-center border border-solid border-blue-800 rounded-lg overflow-hidden bg-white">
              <input
                type="text"
                id="search"
                placeholder="Enter Your Search"
                className="flex-1 p-3 outline-none border-none bg-transparent "
              />
              <button
                type="button"
                className="bg-none border-none p-[12px] cursor-pointer flex items-end justify-center order-2"
              >
                <img src={Search} alt="Search" className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
          <div className="filter flex-1 min-w-[250px]">
            <div className="text-gray-800 font-semibold mb-2">Filter</div>
            <div className="filter-buttons flex flex-wrap gap-2">
              <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-200">
                Thriller
              </button>
              <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-200">
                Horror
              </button>
              <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-200">
                Romantic
              </button>
              <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-200">
                Adventure
              </button>
              <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-200">
                Sci-fi
              </button>
            </div>
          </div>
        </div>
        <div className="movie-now px-[60px] py-[20px] flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} genreMap={genreMap} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home2;
