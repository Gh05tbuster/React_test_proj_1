import './App.css';
import CardBox from './components/CardBox/CardBox';
import Pagination from './components/Pagination/Pagination';
import { useState, useEffect } from 'react';

function App() {
  const itemsPerPage = 6;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData(limit, page) {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit * (page - 1)}`);
    const json = await res.json();
    setData(json.products);
    setTotalPages(Math.ceil(json.total / limit));
  }

  function onPageChange(page) {
    setCurrentPage(page);
    fetchData(itemsPerPage, page);
  }

  return (
    <div className="App">
      <CardBox products={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
