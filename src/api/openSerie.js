import instance from './config'
  
  // Open serie
  const getSerie = async (id) => {
    const response = await instance.get(
      `${import.meta.env.VITE_APP_MOVIE_API_URL}/tv/${id}`,
      {
        params: {
          api_key: import.meta.env.VITE_APP_MOVIE_API_KEY,
        }
      }
    )

    return response.data

  }

  export { getSerie }