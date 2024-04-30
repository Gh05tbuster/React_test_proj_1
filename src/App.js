import logo from './logo.svg';
import './App.css';
import CardBox from './components/CardBox/CardBox';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);

  async function fetchData() {
    const res = await fetch('https://dummyjson.com/products?limit=6');
    const json = await res.json();
    setData(json.products);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <CardBox products={data} />
    </div>
  );
}

export default App;
