import React from 'react'

function PhotoCard(props) {
    // console.log(props)
    return (
        <figure className="card-frame">
            <img src={props.url} alt={props.title} title={props.title}/>
            <figcaption>{props.description}</figcaption>
        </figure>
    );
}

export default PhotoCard;