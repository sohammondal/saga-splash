import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dispatchLoadImages } from '../../store/dispatchers';
import { selectImages, selectIsLoading, selectStats } from '../../store/selectors';
import Button from '../Button';
import Stats from '../Stats';

import './styles.css';

const ImageGrid = () => {
    const images = useSelector(selectImages);
    const loading = useSelector(selectIsLoading);
    const stats = useSelector(selectStats);

    useEffect(() => {
        dispatchLoadImages();
    }, []);

    const imageElems = images.length
        ? images.map((image) => (
              <div
                  key={image.id}
                  className={`item item-${Math.ceil(
                      image.height / image.width,
                  )}`}
              > 
                <Stats stats={stats[image.id]}/>
                  <img src={image.urls.small} alt={image.user.username} />
              </div>
          ))
        : null;

    return (
        <div className="content">
            <section className="grid">{imageElems}</section>
            <Button loading={loading} onClick={dispatchLoadImages}>
                more images
            </Button>
        </div>
    );
};

export default ImageGrid;
