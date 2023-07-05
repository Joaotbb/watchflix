import { Swiper, SwiperSlide } from 'swiper/react'
import { SWIPER_CONFIG } from '../../../utils/swiperConfig'
import { MovieCard } from '_components/Molecules'
import OnScroll from '_components/Atoms/OnScrollReveal/OnScrollReveal'

const TopCollections = ({
  movies,
  onRemoveFromFavorites,
  isModalOpen,
  setIsModalOpen,
  modalFilm,
  setModalFilm
}) => {
  return (
    <>
      <section className='bg-primary-900'>
        <div className='p-16'>
          <div className='flex justify-between'>
            <h2 className='mb-6 md:mb-12'>Top Collections</h2>
          </div>
          <Swiper
            className='mySwiper'
            {...SWIPER_CONFIG}
          >
            {movies != undefined &&
              movies.map((movie, index) => (
                <SwiperSlide key={movie.id}>
                  <OnScroll delay={index*0.1}>
                    <MovieCard
                      id={movie.id}
                      imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      title={movie.original_title}
                      rating={movie.vote_average}
                      onRemoveFromFavorites={onRemoveFromFavorites}
                      voteCount={movie.vote_count}
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      modalFilm={modalFilm}
                      setModalFilm={setModalFilm}
                    />
                  </OnScroll>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default TopCollections
