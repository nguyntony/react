import './styles/Style.css';
import HelloReact from './HelloReact'
import PhotoGallery from './PhotoGallery';
// this is how you import another file into this file. 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello react</h1>
        <p id="msg">this is using js react</p>
        <HelloReact></HelloReact>
        <img src="/logo192.png" alt="react logo"/>
        {/* this is another way to do it <HelloReact/> */}
        <PhotoGallery/>
      </header>
    </div>
  );
}

export default App;
