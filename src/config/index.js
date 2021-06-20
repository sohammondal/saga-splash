const { REACT_APP_UNSPLASH_ACCESS_KEY } = process.env

export const config = Object.freeze({
    unsplash: {
        baseUrl: 'https://api.unsplash.com',
        accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
    }
})