import { useEffect, useState } from 'react'
import { getSeries } from '_api/getSeries'
import Seo from '_components/Organisms/Seo/Seo'
import { SearchBar } from '_components/Atoms'
import { TvSeriesCard, SerieModal, Pagination } from '_components/Molecules'
import { Navbar, Layout } from '_components/Organisms'
import OnScroll from '_components/Atoms/OnScrollReveal/OnScrollReveal'

export const SeriesPage = () => {
  const [tvSeries, setTvSeries] = useState([])
  const [favoriteSeries, setFavoriteSeries] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serieModal, setSerieModal] = useState([])
  const [filteredSeries, setFilteredSeries] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenreId, setSelectGenreid] = useState()
  const [seriesPageNumber, setSeriesPageNumber] = useState(1)

  // API
  useEffect(() => {
    const fetchData = async () => {
      const { tvSeries, genres } = await getSeries(seriesPageNumber)

      setTvSeries(tvSeries)
      setGenres(genres)
    }

    fetchData()
  }, [seriesPageNumber])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // remove series
  const handleRemoveFromFavoritesSeries = (coiso) => {
    const updatedFavoritesSeries = favoriteSeries.filter(
      (serie) => serie.name !== coiso
    )
    localStorage.setItem(
      'favoritesSeries',
      JSON.stringify(updatedFavoritesSeries)
    )
    setFavoriteSeries(updatedFavoritesSeries)
  }

  const getFilteredSeries = (inputValue) => {
    const seriesToRender = tvSeries.filter((serie) => {
      if (inputValue === '') {
        return serie
      } else if (serie.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return serie
      }
    })
    setFilteredSeries(seriesToRender)
  }

  // Filter Genres
  const getFilteredSeriesByCategorie = async (genreId) => {
    setSelectGenreid(genreId)

    if (selectedGenreId === genreId) {
      setFilteredSeries(tvSeries)
      setSelectGenreid('')
    } else {
      const filteredSeries = tvSeries.filter((serie) =>
        serie.genre_ids.some((id) => id === Number(genreId))
      )

      setFilteredSeries(filteredSeries)
    }
  }

  const finalSeries = filteredSeries.length === 0 ? tvSeries : filteredSeries

  return (
    <>
      <Seo
        title='WatchFlix | Series'
        description='Explore an extensive library of TV series on WatchFlix. Browse popular TV shows, explore different genres, and discover new episodes. Get ready to binge-watch your favorite series!'
      />

      <Layout>
        <Navbar />
        <section className='bg-primary-900'>
          <div className='p-16'>
            <div className='flex justify-between'>
              <h1>TV Series</h1>
            </div>
            <SearchBar getFilteredSeries={getFilteredSeries} />

            <div className='flex flex-wrap md:justify-between items-center gap-3 my-8'>
              {genres.slice(0, 12).map((categorie) => {
                return (
                  <button
                    onClick={(e) => {
                      getFilteredSeriesByCategorie(e.target.value)
                    }}
                    className={`px-4 py-2 bg-secondary-500 hover:bg-secondary-700 text-white rounded-xl ${
                      categorie.id == selectedGenreId && 'bg-secondary-900'
                    }`}
                    key={categorie.id}
                    value={categorie.id}
                  >
                    {categorie.name}
                  </button>
                )
              })}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-8'>
              {finalSeries.map((serie, index) => (
                <div key={serie.id}>
                  <OnScroll delay={index * 0.1}>
                    <TvSeriesCard
                      key={serie.id}
                      series={serie}
                      setSerieModal={setSerieModal}
                      setIsModalOpen={setIsModalOpen}
                      isModalOpen={isModalOpen}
                      onRemoveFromFavorites={handleRemoveFromFavoritesSeries}
                    />
                  </OnScroll>
                </div>
              ))}
            </div>

            {isModalOpen && (
              <SerieModal
                tvSeries={serieModal}
                closeModal={closeModal}
                setIsModalOpen={false}
              />
            )}
          </div>
        </section>
        <Pagination
          seriesPageNumber={seriesPageNumber}
          setSeriesPageNumber={setSeriesPageNumber}
        />
      </Layout>
    </>
  )
}
