import './App.css';
import HelloReact from './HelloReact'
// this is how you import another file into this file. 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello react</h1>
        <p id="msg">this is using js react</p>
        <HelloReact/>
        {/* you may see it like this */}
        {/* <HelloReact></HelloReact> */}
      </header>
    </div>
  );
}

export default App;
