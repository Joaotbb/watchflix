import instance from './config'

const getSeries = async (seriesPageNumber) => {
  const tvSeriesData = await instance.get('discover/tv', {
    params: {
      page: seriesPageNumber
    }
  })

  const tvSeriesGenres = await instance.get('genre/tv/list', {
    params: {
      language: 'en',
      page: 1
    }
  })

  if (tvSeriesData.status === 200) {
    return { tvSeries: tvSeriesData.data.results, genres: tvSeriesGenres.data.genres }
  }

  return { tvSeries: [], genres: [] }
}

export { getSeries }