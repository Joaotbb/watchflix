import instance from './config'
  
  // Open movie
  const getMovie = async (id) => {
    const response = await instance.get(
      `${import.meta.env.VITE_APP_MOVIE_API_URL}/movie/${id}`,
      {
        params: {
          api_key: import.meta.env.VITE_APP_MOVIE_API_KEY,
          append_to_response: `videos,credits,images`
        }
      }
    )

    return response.data

  }

  export { getMovie }