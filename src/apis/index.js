import { config } from '../config';

const { baseUrl, accessKey } = config.unsplash;

export const unsplash = {
    getPhotos: async (page = 1, resultsPerPage = 28) => {

        const url = new URL('/photos', baseUrl);
        url.searchParams.append('client_id', accessKey);
        url.searchParams.append('per_page', resultsPerPage);
        url.searchParams.append('page', page);
        
        const resp = await fetch(url)
        
        if(resp.status >= 400) {
            const err = await resp.text()
            throw new Error(err)
        }

        return await resp.json()

    },
    getPhotoStats: async (imageId) => {
        
        const url = new URL(`/photos/${imageId}/statistics`, baseUrl);
        url.searchParams.append('client_id', accessKey);
        
        const resp = await fetch(url)
        
        if(resp.status >= 400) {
            const err = await resp.text()
            throw new Error(err)
        }

        return await resp.json()

    }
};
