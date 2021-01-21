async function FetchJoke(setJoke, jokeArray) {
    console.log(setJoke)
    const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'}
    })
    const response = await jokePromise;
    const jokeData = await response.json()
    console.log(jokeData.joke);
    setJoke([
        ...jokeArray,
        jokeData.joke])
}

export default FetchJoke