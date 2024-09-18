import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import RealTimeData from "./components/RealTimeData";
import HistoricalData from "./components/HistoricalData";
import PredictiveAnalytics from "./components/PredictiveAnalytics";
import Footer from "./components/Footer";
import DataProvider from "./context/DataContext";
import Stocks from "./components/Stocks";
import Crypto from "./components/Crypto";
import CompanyPerformance from "./components/CompanyPerformance";

const App = () => (
  <>
    <DataProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<RealTimeData />} />
          <Route path="/historical" element={<HistoricalData />} />
          <Route path="/predictive" element={<PredictiveAnalytics />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/company-performance" element={<CompanyPerformance />} />
        </Routes>
      </main>
      <Footer />
      </DataProvider>
  </>
);

export default App;
