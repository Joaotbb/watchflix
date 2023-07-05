import { Swiper, SwiperSlide } from 'swiper/react'
import { SWIPER_CONFIG } from '../../../utils/swiperConfig'

import { MovieCard } from '_components/Molecules'
import OnScroll from '_components/Atoms/OnScrollReveal/OnScrollReveal'

const Upcoming = ({
  onRemoveFromFavorites,
  upcomings,
  isModalOpen,
  setIsModalOpen,
  modalFilm,
  setModalFilm
}) => {
  return (
    <>
      <section className='bg-primary-900'>
        <div className='px-16 pt-16'>
          <div>
          <h1 className='mb-6 md:mb-12'>movies</h1>
            <h2 className='mb-6 md:mb-12'>upcoming</h2>
          </div>


          <Swiper
            className='mySwiper'
            {...SWIPER_CONFIG}
          >
            {upcomings != undefined &&
              upcomings.map((upcoming, index) => (
                <SwiperSlide key={upcoming.id}>
                  <OnScroll delay={index*0.1}>
                    <MovieCard
                      id={upcoming.id}
                      imgUrl={`https://image.tmdb.org/t/p/w500${upcoming.poster_path}`}
                      title={upcoming.original_title}
                      rating={upcoming.vote_average}
                      voteCount={upcoming.vote_count}
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      modalFilm={modalFilm}
                      setModalFilm={setModalFilm}
                      onRemoveFromFavorites={onRemoveFromFavorites}
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

export default Upcoming
