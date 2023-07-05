import { useState, useEffect } from 'react'
import { getSerie } from '_api/openSerie'
import MaterialSymbolsBookmarkAdd from '~icons/material-symbols/bookmark-add'
import MaterialSymbolsBookmarkRemove from '~icons/material-symbols/bookmark-remove'
import MdiAccountArrowUp from '~icons/mdi/account-arrow-up'
import MaterialSymbolsStar from '~icons/material-symbols/star'


const TvSeriesCard = ({
  series,
  onRemoveFromFavorites,
  setIsModalOpen,
  isModalOpen,
  setSerieModal
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Check if the movie is in favorites
    const localStorageFavorites =
      JSON.parse(localStorage.getItem('favoriteSeries')) || []
    const isSerieInFavorites = localStorageFavorites.some(
      (favSeries) => favSeries.name === series.name
    )

    setIsFavorite(isSerieInFavorites)
  }, [isFavorite])

  // ADD and Remove fn
  const handleBookmarkClick = () => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favoriteSeries')) || []
    const isSeriesInFavorites = favoritesFromStorage.some(
      (favSeries) => favSeries.name === series.name
    )

    if (isSeriesInFavorites) {
      // Remove
      const updatedFavorites = favoritesFromStorage.filter(
        (favSeries) => favSeries.name !== series.name
      )
      localStorage.setItem('favoriteSeries', JSON.stringify(updatedFavorites))

      onRemoveFromFavorites(series.name)
      setIsFavorite(false)
    } else {
      // Add
      const newSeries = {
        name: series.name,
        poster_path: series.poster_path,
        vote_average: series.vote_average,
        id: series.id,
        vote_count: series.vote_count
      }
      const updatedFavorites = [...favoritesFromStorage, newSeries]
      localStorage.setItem('favoriteSeries', JSON.stringify(updatedFavorites))
      setIsFavorite(true)
    }
  }

  // Open modal serie
  const handleCardClick = async (id) => {
    const data = await getSerie(id)

    if (data) {
      setSerieModal(data)
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <div className='relative rounded-xl shadow-xl bg-primary-900/90 border-primary-400 border-2 flex flex-col h-full'>
      <button
        className='absolute right-2 top-2 text-secondary-700/70 hover:text-secondary-500'
        onClick={handleBookmarkClick}
        title={isFavorite ? 'Remove' : 'Add to Watchlist'}
      >
        {isFavorite ? (
          <MaterialSymbolsBookmarkRemove className='text-2xl' />
        ) : (
          <MaterialSymbolsBookmarkAdd className='text-2xl' />
        )}
      </button>

      <button
        onClick={() => handleCardClick(series.id)}
        className='flex-grow'
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            alt='series-image'
            className='rounded-lg object-cover'
          />
          <div className='flex flex-col mt-2'>
            <h4 className='h-14 text-md text-center uppercase font-light text-secondary-500'>
              {series.name}
            </h4>
          </div>

          <div className='flex justify-between mt-8 mx-2'>
            <div className='flex'>
              <MaterialSymbolsStar className='w-6 h-auto text-yellow-300' />
              <p className='text-sm justify-center p-2 text-secondary-300'>
                {series.vote_average}
              </p>
            </div>

            <div className='flex text-primary-200'>
              <MdiAccountArrowUp className='w-6 h-auto' />
              <p className='text-sm justify-center text-secondary-300 p-2'>
                {series.vote_count}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default TvSeriesCard
