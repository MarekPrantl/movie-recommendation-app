import config from '../../config'

export const getTMDBImage = (path) => {
    if (!path) return null

    return `${config.tmdb.imageBaseUrl}/${path}`
}
