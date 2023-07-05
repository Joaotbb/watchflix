import { useEffect, useState } from 'react'

import {
  HeroHome,
  TopCollections,
  MovieModal,
  Popular,
  Upcomings
} from '_components/Molecules'
import { Layout } from '_components/Organisms'

import {
  getPopular,
  getTopCollections,
  getUpcoming,
  getVideos
} from '_api/getMovies'
import Seo from '_components/Organisms/Seo/Seo'

export const HomePage = () => {
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [populars, setPopulars] = useState([])
  const [videos, setVideos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalFilm, setModalFilm] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])




  // API's
  useEffect(() => {
    const fetchData = async () => {
      const topRated = await getTopCollections()
      setTopRated(topRated)

      getPopular({ successCallback: setPopulars })

      const upcomingData = await getUpcoming()
      setUpcoming(upcomingData)

      upcomingData.map((e) => {
        getVideos(e.id).then((videosData) => {
          setVideos((prevValue) => [...prevValue, videosData])
        })
      })
    }

    fetchData()
  }, [])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // remove films
  const handleRemoveFromFavoriteMovies = (title) => {
    const updatedFavorites = favoriteMovies.filter(
      (movie) => movie.title !== title
    )
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavoriteMovies(updatedFavorites)
  }

  return (
    <>
      <Seo
        title='WatchFlix | Home'
        description='Discover and explore a vast collection of movies and TV shows on WatchFlix. Find your favorite content, watch trailers, and stay up-to-date with the latest releases. Start streaming now!'
      />

      <Layout>
        <HeroHome videos={videos} />


        <Upcomings
          upcomings={upcoming}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalFilm={modalFilm}
          setModalFilm={setModalFilm}
          onRemoveFromFavorites={handleRemoveFromFavoriteMovies}
        />
        <Popular
          populars={populars}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalFilm={modalFilm}
          setModalFilm={setModalFilm}
          onRemoveFromFavorites={handleRemoveFromFavoriteMovies}
        />
        <TopCollections
          movies={topRated}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalFilm={modalFilm}
          setModalFilm={setModalFilm}
          onRemoveFromFavorites={handleRemoveFromFavoriteMovies}
        />

        {isModalOpen && (
          <MovieModal
            closeModal={closeModal}
            film={modalFilm}
          />
        )}
      </Layout>
    </>
  )
}
