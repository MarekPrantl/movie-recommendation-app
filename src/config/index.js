const MOVIES_API_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGES_BASE_PATH = 'https://image.tmdb.org/t/p/original/'

export default {
    devTools: true,
    batchNotify: true,
    history: {
        basename: '/',
    },
    api: {
        movies: {
            trending: {
                uri: `${MOVIES_API_BASE_URL}/trending/:media_type/:time_window`,
                method: 'GET',
            },
            discover: {
                uri: `${MOVIES_API_BASE_URL}/discover/movie`,
                method: 'GET',
            },
            movie: {
                uri: `${MOVIES_API_BASE_URL}/movie/:id`,
                method: 'GET',
            },
            genres: {
                uri: `${MOVIES_API_BASE_URL}/genre/movie/list`,
                method: 'GET',
            },
        },
    },
    tmdb: {
        imageBaseUrl: TMDB_IMAGES_BASE_PATH,
    },
}
