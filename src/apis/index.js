import { config } from "../config"


export const unsplash = {
    getPhotos: (resultsPerPage = 28) => {
        const { baseUrl, accessKey } = config.unsplash
        const url = new URL('/photos', baseUrl)
        url.searchParams.append('client_id', accessKey)
        url.searchParams.append('per_page', resultsPerPage)
        return fetch(url).then(res => res.json())
    }
}