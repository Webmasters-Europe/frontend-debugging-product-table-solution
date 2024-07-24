import { useState, useEffect } from 'react';
import { Product } from './lib/datatypes';

import Table from './components/Table';

function App() {
  const [salesData, setSalesData] = useState(null);

  const fetchSalesData = async () => {
    const response = await fetch('./src/lib/db/sales.json');
    const data = await response.json();

    // Filter out null entries and invalid data
    const filteredData = data.filter((entry: Product) => {
      if (entry) {
        const hasNullValue = Object.values(entry).some(
          (value) => value === null
        );
        return !hasNullValue;
      }
      return false;
    });

    setSalesData(filteredData);
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <main>
      <div className="wrapper">
        <div className="header-container">
          <div className="header-title-wrapper">
            <h1 className="title">Product Sales</h1>
            <p className="subtitle">
              A table of product sales data for the current month.
            </p>
          </div>
        </div>

        <div className="table-wrapper">
          <div className="table-container">
            <div className="table-box">
              {salesData && <Table salesData={salesData} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
