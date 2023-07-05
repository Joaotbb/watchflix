import { useEffect, useState } from 'react'
import { getMovie } from '_api/openMovie'
import MdiAccountArrowUp from '~icons/mdi/account-arrow-up'
import MaterialSymbolsStar from '~icons/material-symbols/star'
import MaterialSymbolsBookmarkAdd from '~icons/material-symbols/bookmark-add'
import MaterialSymbolsBookmarkRemove from '~icons/material-symbols/bookmark-remove'


const MovieCard = ({
  id,
  imgUrl,
  title,
  rating,
  voteCount,
  onRemoveFromFavorites,
  isModalOpen,
  setIsModalOpen,
  setModalFilm
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Check if the movie is in favorites
    const localStorageFavorites =
      JSON.parse(localStorage.getItem('favorites')) || []
    const isMovieInFavorites = localStorageFavorites.some(
      (movie) => movie.title === title
    )
    setIsFavorite(isMovieInFavorites)
  }, [])

  // ADD and Remove fn
  const handleBookmarkClick = () => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || []
    const isMovieInFavorites = favoritesFromStorage.some(
      (movie) => movie.title === title
    )

    if (isMovieInFavorites) {
      // Remove
      const updatedFavorites = favoritesFromStorage.filter(
        (movie) => movie.title !== title
      )
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setIsFavorite(false)
      onRemoveFromFavorites(title)
    } else {
      // Add
      const newMovie = { title, imgUrl, rating, voteCount, id }
      const updatedFavorites = [...favoritesFromStorage, newMovie]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setIsFavorite(true)
    }
  }

  // Open modal Movie
  const handleCardClick = async (id) => {
    const data = await getMovie(id)
    if (data) {
      setModalFilm(data)
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <div className='relative rounded-2xl shadow-xl bg-primary-900/90 border-primary-400 border-2'>
      <button
        className='absolute right-2 top-2 text-secondary-700/70 hover:text-secondary-500'
        onClick={handleBookmarkClick}
        title={isFavorite ? 'Remove' : 'Add to Watchlist'}
      >
        {isFavorite ? (
          <MaterialSymbolsBookmarkRemove className='text-2xl ' />
        ) : (
          <MaterialSymbolsBookmarkAdd className='text-2xl' />
        )}
      </button>

      <button onClick={() => handleCardClick(id)}>
        <div className='h-full'>
          <img
            src={imgUrl}
            alt='movie-image'
            className='rounded-lg w-full'
          />
          <div className='flex flex-col mt-2 '>
            <h4 className='h-14 text-md text-center uppercase font-light text-secondary-500 '>
              {title}
            </h4>

            <div className='flex justify-between mt-8 mx-2'>
              <div className='flex'>
                <MaterialSymbolsStar className=' w-6 h-auto text-yellow-300' />
                <p className='text-sm justify-center p-2 text-secondary-300'>
                  {rating}
                </p>
              </div>

              <div className='flex text-primary-200'>
                <MdiAccountArrowUp className=' w-6 h-auto ' />
                <p className='text-sm justify-center text-secondary-300 p-2'>
                  {' '}
                  {voteCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
export default MovieCard
