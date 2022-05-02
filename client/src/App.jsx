import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/api/recipes" target="_blank"><button>Access to Data</button></a>
        <div>
          <p>Connect the API to your project :</p>
          <code>https://thermomix-recipes-api.vercel.app/api/recipes</code>
        </div>
      </header>
    </div>
  );
}

export default App;
