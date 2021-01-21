import './styles/Style.css';
import {useEffect, useState} from 'react'
// import HelloReact from './HelloReact'
// import PhotoGallery from './PhotoGallery';
// import Translator from './components/Translator'
// this is how you import another file into this file. 

import {JokeHeader, JokeContainer} from './components/Joke'

function App() {
  
  // const [joke, setJoke] = useState('knock')
  // useEffect(() => {
    
  //   //   async function FetchJoke() {
  //     //     const jokePromise = fetch('https://icanhazdadjoke.com', {
  //       //         headers: {Accept: 'application/json'}
  //       //     })
  //       //     const response = await jokePromise;
  //       //     const jokeData = await response.json()
  //       //     console.log(jokeData.joke);
        
  //       //     // setJoke(jokeData.joke)
  //       // }
  //       //   FetchJoke()
  //       //   // setJoke(FetchJoke())
        
  //       FetchJoke(setJoke)
  //     }, []);
      
// console.log(`this is the joke in state ${joke}`)

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>hello react</h1>
        <p id="msg">this is using js react</p>
        <HelloReact></HelloReact>
        <img src="/logo192.png" alt="react logo"/> */}
        {/* this is another way to do it <HelloReact/> */}

        {/* <PhotoGallery/> */}
        {/* <Translator initialText='hi there'/> */}

        <JokeHeader/>
        <JokeContainer/>

      </header>
    </div>
  );
}

export default App;
