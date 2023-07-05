import { PlayBtn } from '../../Atoms'

const MovieModal = ({ closeModal, film }) => {
  const movieImageUrl = `https://image.tmdb.org/t/p/w500${film.poster_path}`

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-12'>
      <div
        className='fixed inset-0 bg-black opacity-75'
        onClick={closeModal}
      ></div>

      <div className='bg-primary-400 mx-auto rounded-xl shadow-lg z-50 p-6'>
        <div className='flex'>
          <div>
            <img
              src={movieImageUrl}
              alt='Movie Image'
              className='h-64 w-auto md:h-auto md:w-64 max-h-full rounded-xl'
            />
          </div>

          <div className='py-6 text-center items-center justify-center space-y-12 pl-6'>
            <h2 className='text-base md:text-2xl font-bold mb-2'>
              {film.title}
            </h2>

            <p className='text-xs md:text-lg text-gray-700 mb-4'>
              {film.tagline
                ? film.tagline
                : 'No tagline for this amazing movie :('}
            </p>

            <div className='flex items-center justify-center'>
              <PlayBtn video={film} />
            </div>
          </div>
        </div>

        {/* casting map */}
        <div className='md:px-6 mt-4'>
          <h3 className='font-bold text-xl text-secondary-4'>Casting</h3>
          <div className='flex justify-between md:pt-4 w-full'>
            {film.credits.cast.slice(0, 4).map((item) => (
              <div
                className='flex flex-col items-center justify-between my-2 md:my-4 mx-2'
                key={item.id}
              >
                <p className='text-xs text-center md:font-bold text-white'>
                  {item.name}
                </p>

                <div className='border-secondary-500 border-2 rounded-full h-12 w-12 md:h-24 md:w-24 mt-4'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    className='rounded-full h-full w-full object-cover'
                    alt='caster-image'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
