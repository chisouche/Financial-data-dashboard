import React, { createContext, useState, useEffect } from 'react';
import { fetchRealTimeData, fetchHistoricalData } from '../api/apiService';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [realTimeData, setRealTimeData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  useEffect(() => {
    const getRealTimeData = async () => {
      const data = await fetchRealTimeData('AAPL');
      setRealTimeData(data);
    };
    getRealTimeData();

    const getHistoricalData = async () => {
      const data = await fetchHistoricalData('AAPL', '2023-01-01', '2023-08-01');
      setHistoricalData(data);
    };
    getHistoricalData();
  }, []);

  return (
    <DataContext.Provider value={{ realTimeData, historicalData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
