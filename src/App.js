//import logo from './logo.svg';
import './App.css';
import background from "./186984205_1116806818830150_8166379831712192046_n.jpg";

function App() {
  return (
    <div  style={{
        backgroundImage: `url(${background})`,
        height: '800px'
      }} 
      className="App">
        <h1>
          Avaran uskon foorumi
        </h1>
        <ul>
          <a href="https://facebook.com">
            <img src="facebook-logo3.png" className="logo" alt="facebook logo"/>
          </a>
          <a href="https://facebook.com">
            <img src="facebook-logo3.png" className="logo" alt="facebook logo"/>
          </a>
          <a href="https://facebook.com">
            <img src="facebook-logo3.png" className="logo" alt="facebook logo"/>
          </a>
        </ul>
    </div>
  );
}

export default App;
