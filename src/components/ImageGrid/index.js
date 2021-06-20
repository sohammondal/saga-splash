import React, { useEffect, useState } from 'react';
import { unsplash } from '../../apis';
import { config } from '../../config';

import './styles.css';

const ImageGrid = () => {
    const [images, setImages] = useState([])

    useEffect(() => {

        (async () => {
            const images = await unsplash.getPhotos()
            setImages([...images])
        })()

    }, [])

    const imageElems = images.length ? images.map(image => (
        <div
            key={image.id}
            className={`item item-${Math.ceil(
                image.height / image.width,
            )}`}
        >
            <img
                src={image.urls.small}
                alt={image.user.username}
            />
        </div>
    )) : null

    return (
        <div className="content">
            <section className="grid">
                {imageElems}
            </section>
        </div>
    );
}

export default ImageGrid;
