import instance from './config'



const getTopCollections = async () => {
  const topCollectionData = await instance.get('movie/top_rated', {})

  return topCollectionData.data.results
}

const getPopular = async ({ successCallback }) => {
  const popularsData = await instance.get('movie/popular', {})

  successCallback(popularsData.data.results)
}

const getUpcoming = async () => {
  const upcomingData = await instance.get('movie/upcoming', {})

  return upcomingData.data.results
}

const getVideos = async (movieId) => {
  const videosData = await instance.get(`movie/${movieId}`, {
    params: {
      append_to_response: 'videos,credits,images'
    }
  })

  return videosData.data
}

export { getTopCollections, getPopular, getUpcoming, getVideos }


