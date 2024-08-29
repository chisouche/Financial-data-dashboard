import React, { useState, useEffect } from 'react';
import { fetchHistoricalData } from '../api/apiService';

const HistoricalData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const historicalData = await fetchHistoricalData('AAPL', '2023-01-01', '2023-08-01');
      setData(historicalData);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Historical Data</h2>
      {/* Render your historical data here */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default HistoricalData;
