import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Identity from './components/Identity'

export default function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Hello/>
          <Identity
                name={'Luigi'}
                bio={'lorem ipsum dolor sit amet, consector blablabla'}
                />
        </header>
      </div>
  );
}

