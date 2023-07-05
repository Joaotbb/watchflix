import { Swiper, SwiperSlide } from 'swiper/react'
import { SWIPER_CONFIG } from '../../../utils/swiperConfig'
import { MovieCard } from '_components/Molecules'
import OnScroll from '_components/Atoms/OnScrollReveal/OnScrollReveal'

const Popular = ({
  populars,
  isModalOpen,
  onRemoveFromFavorites,
  setIsModalOpen,
  modalFilm,
  setModalFilm
}) => {
  return (
    <section className='bg-primary-900'>
      <div className='px-16 pt-16'>
        <div className='flex justify-between'>
          <h2 className='mb-6 md:mb-12'>Popular</h2>
        </div>

        <Swiper
          className='mySwiper'
          {...SWIPER_CONFIG}
        >
          {populars != undefined &&
            populars.map((popular, index) => (
              <SwiperSlide key={popular.id}>
                <OnScroll delay={index*0.1}>
                <MovieCard
                  id={popular.id}
                  imgUrl={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                  title={popular.original_title}
                  rating={popular.vote_average}
                  voteCount={popular.vote_count}
                  onRemoveFromFavorites={onRemoveFromFavorites}
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
  )
}

export default Popular
