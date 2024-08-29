import React, { useState, useEffect } from 'react';
import { fetchRealTimeData } from '../api/apiService';

const RealTimeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const realTimeData = await fetchRealTimeData('AAPL');
      setData(realTimeData);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Real-Time Data</h2>
      {/* Render your real-time data here */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default RealTimeData;
