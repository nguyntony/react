import React from 'react'
import LikeButton from './components/Like-Btn'
import HookButton from './components/Hook-Btn'

function PhotoCard({title, url, description, likes}) {
    // destructuring props so that you don't have to litter the place with it
    // const {title, url, description, likes} = props
    return (
        <figure className="card-frame">
            <img src={url} alt={title} title={title}/>
            <figcaption>{description}</figcaption>
            <LikeButton likes={likes}/>
            <HookButton likes={likes}/>
        </figure>
    );
}

export default PhotoCard;