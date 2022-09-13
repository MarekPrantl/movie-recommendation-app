import config from '../../config'

export const getTMDBImage = (path) => `${config.tmdb.imageBaseUrl}/${path}`
