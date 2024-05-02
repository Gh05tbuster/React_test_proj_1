import './App.css';
import CardBox from './components/CardBox/CardBox';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(6, 1);

  }, []);

  async function fetchData(limit, page) {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit * (page - 1)}`);
    const json = await res.json();
    setData(json.products);
  }

  return (
    <div className="App">
      <CardBox products={data} />
    </div>
  );
}

export default App;
