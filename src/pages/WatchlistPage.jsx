import { useEffect, useState } from 'react'
import Seo from '_components/Organisms/Seo/Seo'
import MaterialSymbolsSadTabOutlineRounded from '~icons/material-symbols/sad-tab-outline-rounded'

import {
  MovieCard,
  MovieModal,
  SerieModal,
  TvSeriesCard
} from '_components/Molecules'
import { Layout, Navbar } from '_components/Organisms'

export const WatchlistPage = ({}) => {
  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [favoriteSeries, setFavoriteSeries] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serieModal, setSerieModal] = useState([])
  const [isModalMoviesOpen, setIsModalMoviesOpen] = useState(false)
  const [modalFilm, setModalFilm] = useState([])

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || []
    setFavoriteMovies(favoritesFromStorage)

    const favoriteSeriesFromStorage =
      JSON.parse(localStorage.getItem('favoriteSeries')) || []
    setFavoriteSeries(favoriteSeriesFromStorage)
  }, [])




  // remove films
  const handleRemoveFavoriteFilms = (title) => {
    const updatedFavorites = favoriteMovies.filter(
      (movie) => movie.title !== title
    )
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavoriteMovies(updatedFavorites)
  }

  // remove series
  const handleRemoveFromFavoriteSeries = (coiso) => {
    const updatedFavoritesSeries = favoriteSeries.filter(
      (serie) => serie.name !== coiso
    )
    localStorage.setItem(
      'favoritesSeries',
      JSON.stringify(updatedFavoritesSeries)
    )
    setFavoriteSeries(updatedFavoritesSeries)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsModalMoviesOpen(false)
  }

  return (
    <>
      <Seo
        title='WatchFlix | Watchlist'
        description='Manage your personal watchlist on WatchFlix. Add your favorite movies and TV shows to your watchlist and keep track of what you want to watch. Never miss a show with WatchFlix!'
      />

      <Layout>
        <Navbar />

        <section className='flex flex-col min-h-screen bg-primary-900'>
          <div className='flex-grow p-4 md:p-16'>
            <div>
              <h1>Watchlist</h1>
              <h3 className='mt-2 md:mt-4 text-base md:text-lg'>Movies</h3>
              {favoriteMovies.length > 0 ? (
                <div className='grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 mt-2 md:mt-4 gap-4 md:gap-8'>
                  {favoriteMovies.map((movie, index) => (
                    <MovieCard
                      id={movie.id}
                      key={`${movie.imgUrl}-${index}`}
                      imgUrl={movie.imgUrl}
                      title={movie.title}
                      rating={movie.rating}
                      voteCount={movie.voteCount}
                      onRemoveFromFavorites={handleRemoveFavoriteFilms}
                      setModalFilm={setModalFilm}
                      setIsModalOpen={setIsModalMoviesOpen}
                      isModalOpen={isModalMoviesOpen}
                    />
                  ))}
                </div>
              ) : (
                <div className='flex mt-8 items-center text-white space-x-4'>
                  <MaterialSymbolsSadTabOutlineRounded className='w-8 md:w-10 h-8 md:h-10' />
                  <p className='text-sm md:text-lg'>
                    No movies added to favorites.
                  </p>
                </div>
              )}
            </div>
            <div className='mt-6 md:mt-12'>
              <h3 className='text-base md:text-lg'>Series</h3>
              {favoriteSeries.length > 0 ? (
                <div className='grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 mt-2 md:mt-4 pb-4 md:pb-12 gap-4 md:gap-8'>
                  {favoriteSeries.map((serie, index) => (
                    <TvSeriesCard
                      key={index}
                      series={serie}
                      setSerieModal={setSerieModal}
                      setIsModalOpen={setIsModalOpen}
                      isModalOpen={isModalOpen}
                      onRemoveFromFavorites={handleRemoveFromFavoriteSeries}
                    />
                  ))}
                </div>
              ) : (
                <div className='flex mt-4 md:mt-8 items-center text-white space-x-4'>
                  <MaterialSymbolsSadTabOutlineRounded className='w-8 md:w-10 h-8 md:h-10' />
                  <p className='text-sm md:text-lg'>
                    No series added to favorites.
                  </p>
                </div>
              )}
            </div>
          </div>
          {isModalOpen && (
            <SerieModal
              tvSeries={serieModal}
              closeModal={closeModal}
              setIsModalOpen={false}
            />
          )}
          {isModalMoviesOpen && (
            <MovieModal
              closeModal={closeModal}
              film={modalFilm}
            />
          )}
        </section>
      </Layout>
    </>
  )
}
