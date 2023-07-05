import { useState } from "react";

const AddBtn = ({ addMovie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBookmarkClick = () => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const isMovieInFavorites = favoritesFromStorage.some(
      (movie) => movie.title === addMovie.title
    );

    if (isMovieInFavorites) {
      // Remove from favorites
      const updatedFavorites = favoritesFromStorage.filter(
        (movie) => movie.title !== addMovie.title
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      setIsFavorite(false);
    } else {
      // Add to favorites
      const newMovie = {
        title: addMovie.original_title,
        imgUrl: `https://image.tmdb.org/t/p/w500/${addMovie.poster_path}`,
        rating: addMovie.vote_average,
        duration: addMovie.runtime,
      };
      const updatedFavorites = [...favoritesFromStorage, newMovie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={handleBookmarkClick}
      type="button"
      className="flex justify-center items-center bg-secondary-700 hover:bg-secondary-300 text-white/70 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none w-20 h-12 rounded-md "
    >
      {isFavorite ? (
        // Render "-" icon when movie is in favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 13H5v-2h14v2Z"
          />
        </svg>
      ) : (
        // Render default icon when movie is not in favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"
          />
        </svg>
      )}
    </button>
  );
};

export default AddBtn;
