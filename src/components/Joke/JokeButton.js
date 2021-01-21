import React from 'react'
import FetchJoke from './FetchJoke'

export default function JokeButton({getJokeFn, jokeArray}) {
    return (
        <>
            <button onClick={() => {FetchJoke(getJokeFn, jokeArray)}}>Get Joke</button>
        </>
    )
}