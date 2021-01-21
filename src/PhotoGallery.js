import React from 'react'
import PhotoCard from './PhotoCard'
// you can import another component like so

const data = [
    {   
        title: 'minimoon',
        description: 'I am mini moon!',
        url: '/photo-cards/minimoon.gif',
        likes: null
    },
    {   
        title: 'sailor moon',
        description: 'I am sailor moon!',
        url: '/photo-cards/moon.gif',
        likes: 20
    },
    {   
        title: 'sailor mercury',
        description: 'I am sailor mercury!',
        url: '/photo-cards/mercury.png',
        likes: 15
    },
    {   
        title: 'sailor mars',
        description: 'I am sailor mars!',
        url: '/photo-cards/mars.jpg',
        likes: 23
    },
    {   
        title: 'sailor jupiter',
        description: 'I am sailor jupiter!',
        url: '/photo-cards/jupiter.jpg',
        likes: 1
    },
    {   
        title: 'sailor venus',
        description: 'I am sailor venus!',
        url: '/photo-cards/venus.jpg',
        likes: null
    },
]

// this is a functional component
function PhotoGallery() { 
    return (
        <>
            <h2>Kero Gallery</h2>
            <div className="gallery">
                <PhotoCard url="/photo-cards/kero-laugh.gif"/>
                <PhotoCard url="/photo-cards/kero-blush.gif"/>
                <PhotoCard url="/photo-cards/kero-eating.gif"/>
            </div>
            <h2>Sailor Scouts</h2>
            <div className="sailor-scouts">
                {data.map((photo, idx) => 
                    <PhotoCard url={photo.url} title={photo.title} key={idx} description={photo.description} likes={photo.likes}/>
                )}
            </div>
            {/* and we are using photocard component here */}
        </>
        // however you can only have one parent element, so you cannot have two elements that are same level.
    );
}

export default PhotoGallery;