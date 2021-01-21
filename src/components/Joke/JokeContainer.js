import JokeButton from './JokeButton'
// import FetchJoke from './FetchJoke'
import {useState} from 'react'

export default function JokeContainer() {
    // this is where you would manage the state 
    const [jokeArray, setJoke] = useState([])

    // I am importing the fetchjoke fn., this would make use not need fn above ^ line4

    return (
        <>
        <section className="joke-container">
            <h2>Jokes will be here</h2>
            <div>
                <JokeButton getJokeFn={setJoke} jokeArray={jokeArray}/>
                {
                    jokeArray.map(j => (
                        <p>{j}</p>
                    ))
                }
            </div>
        </section>
        
        </>
    );

}

