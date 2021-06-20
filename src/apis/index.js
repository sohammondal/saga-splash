import { config } from '../config';

export const unsplash = {
    getPhotos: async (page = 1, resultsPerPage = 28) => {
        const { baseUrl, accessKey } = config.unsplash;
        
        const url = new URL('/photos', baseUrl);
        url.searchParams.append('client_id', accessKey);
        url.searchParams.append('per_page', resultsPerPage);
        url.searchParams.append('page', page);
        
        const resp = await fetch(url)
        
        if(resp.status >= 400) throw new Error('Api call failed')

        return await resp.json()

    },
};
