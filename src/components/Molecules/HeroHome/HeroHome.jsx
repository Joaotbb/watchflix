import { useEffect, useState } from 'react'

import { AddBtn, PlayBtn } from '../../Atoms'
import { Navbar } from '../../Organisms'

// getting the biggest images and replace them
const getMaxWidthImage = (images) => {
  let maxWidth = -Infinity
  let maxWidthImage = null

  for (const image of images) {
    const width = image.width
    if (width > maxWidth) {
      maxWidth = width
      maxWidthImage = image
    }
  }

  return maxWidthImage
}

const HeroHome = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((currentIndex) => (currentIndex + 1) % videos.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [videos])

  return (
    <div className='relative'>
      {videos?.[currentVideoIndex] && (
        <div
          className='antialiased w-full min-h-screen'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/w500${
              getMaxWidthImage(videos[currentVideoIndex].images.backdrops)
                .file_path
            }')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div>
            <Navbar />
            <div className='p-4 md:p-8 lg:p-12 xl:p-16 space-y-8 lg:space-y-12 z-20'>
              <h1 className='max-w-2xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                {videos[currentVideoIndex].original_title}
              </h1>

              <div className='flex flex-wrap gap-2 text-md'>
                {videos[currentVideoIndex].genres.map((genre, index) => (
                  <h3
                    key={genre.id}
                    className='text-primary-200 text-sm md:text-md'
                  >
                    {genre.name}
                    {index !== videos[currentVideoIndex].genres.length - 1 && (
                      <span className='border-r border-primary-200 mx-2 h-4' />
                    )}
                  </h3>
                ))}
              </div>

              <div className='flex space-x-2'>
                <PlayBtn video={videos[currentVideoIndex]} />
                <AddBtn addMovie={videos[currentVideoIndex]} />
              </div>

              <h2
                className='text-primary-200 max-w-2xl text-sm md:text-base lg:text-lg xl:text-xl'
                
              >
                {videos[currentVideoIndex].overview}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroHome
