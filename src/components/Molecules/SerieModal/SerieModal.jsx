import MaterialSymbolsLink from '~icons/material-symbols/link'

const SerieModal = ({ tvSeries, closeModal }) => {

  return (
    <div className='fixed inset-0 flex z-50 p-4 md:p-0 md:items-center md:justify-center my-20 md:my-0'>
      <div
        className='fixed inset-0 bg-black opacity-75'
        onClick={closeModal}
      ></div>

      <div className='bg-primary-400 mx-auto rounded shadow-lg z-50 p-4 max-w-3xl md:p-8'>
        <div className='flex flex-col md:flex-row'>
          <div className='max-w-full md:max-w-md'>
            <img
              src={
                tvSeries.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${tvSeries.backdrop_path}`
                  : 'https://cdn.pixabay.com/photo/2017/05/13/09/04/question-2309042_1280.jpg'
              }
              alt='Movie Image'
              className='w-full md:block hidden  p-4'
            />
          </div>

          <div className='p-4 md:w-3/4'>
            <h2 className='md:text-4xl  text-medium font-extrabold mb-2 text-white'>
              {tvSeries.name}
            </h2>

            <p className='text-xs md:text-md text-gray-700 mb-4'>
              {tvSeries.overview ? tvSeries.overview : 'No description :('}
            </p>

            <div className='flex items-center gap-2 hover:text-blue-600 text-secondary-400'>
              <MaterialSymbolsLink />
              <a
                className='hover:text-blue-600 text-secondary-400'
                target='_blank'
                href={tvSeries.homepage}
              >
                More info here
              </a>
            </div>
            <div>
              <div className='flex flex-wrap gap-2 text-md mt-4'>
                {tvSeries.genres.map((genre, index) => (
                  <h3
                    key={genre.id}
                    className='text-white text-sm md:text-md'
                  >
                    {genre.name}
                    {index !== tvSeries.genres.length - 1 && (
                      <span className='border-r border-primary-200 mx-2 h-4' />
                    )}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='px-6 flex text-center gap-6'>
          <div>
            <h3 className='text-white'>Seasons</h3>
            <p className='text-gray-700'>{tvSeries.number_of_seasons}</p>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-white'>Episodes</h3>
            <p className='text-gray-700'>{tvSeries.number_of_episodes}</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-white'>Language</h3>
            <p className='text-gray-700 uppercase'>{tvSeries.original_language}</p>
          </div>
        </div>

        {/* Creators map */}
        <div className='md:px-6 mt-4'>
          <h3 className='font-bold text-xl text-white'>Creators</h3>
          <div className='flex flex-wrap justify-center md:justify-start md:pt-4'>
            {tvSeries.created_by.map((item) => (
              <div
                className='flex flex-col items-center justify-between my-2 md:my-4 mx-2'
                key={item.id}
              >
                <p className='text-xs text-center md:font-bold text-secondary-400'>
                  {item.name ? item.name : 'Not available'}
                </p>

                <div className='border-secondary-500 border-2 rounded-full h-12 w-12 md:h-24 md:w-24 mt-4'>
                  <img
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                        : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
                    }
                    className='rounded-full h-full w-full object-cover'
                    alt='creator-image'
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

export default SerieModal
