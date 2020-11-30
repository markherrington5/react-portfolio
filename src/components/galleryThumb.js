import React from 'react';
import "../styles/galleryThumb.scss"

const GalleryThumb = props => (
    <div className='galleryThumbnail'>
        <a href='#'>
            <img src={props.value.src} alt={props.value.src} />
        </a>
    </div>
);

export default GalleryThumb;