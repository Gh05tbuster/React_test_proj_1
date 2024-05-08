import './App.css';
import CardBox from './components/CardBox/CardBox';
import Pagination from './components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { fetchData } from './utils/helpers';

function App() {
  const itemsPerPage = 6;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData(limit, page) {
    const json = await fetchData(`products?limit=${limit}&skip=${limit * (page - 1)}`);
    setData(json.products);
    setTotalPages(Math.ceil(json.total / limit));
  }

  function onPageChange(page) {
    setCurrentPage(page);
    getData(itemsPerPage, page);
  }

  return (
    <div className="App">
      <CardBox products={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
