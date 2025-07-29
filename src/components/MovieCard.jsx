const MovieCard = ({ movie, genreMap }) => {
  return (
    <div className="card text-center flex flex-col gap-3">
      <div className="image-container relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto transition-opacity duration-300  hover:opacity-70"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-50">
          <a
            href={`/movie/${movie.id}`}
            className="btn-detail border border-white text-white px-4 py-2 rounded-lg hover:text-blue-800 transition duration-200"
          >
            Details
          </a>
          <button className="btn-buy bg-blue-800 text-white px-4 py-2 rounded-lg mt-2 hover:text-white-800 transition duration-200">
            Buy Ticket
          </button>
        </div>
      </div>
      <div className="title font-bold text-lg">{movie.title}</div>
      <div className="genre grid grid-cols-2 gap-4">
        {movie.genre_ids.map((id) => (
          <div
            key={id}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {genreMap.get(id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
