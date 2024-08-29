import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RealTimeData from "./components/RealTimeData";
import HistoricalData from "./components/HistoricalData";
import PredictiveAnalytics from "./components/PredictiveAnalytics"
import Footer from "./components/Footer";
import DataProvider from "./context/DataContext"
const App = () => (
<>
    <Header />
    <Sidebar />
    <main>
      <Routes>
        <Route path="/" element={<RealTimeData />} />
        <Route path="/historical" element={<HistoricalData />} />
        <Route path="/predictive" element={<PredictiveAnalytics />} />
      </Routes>
    </main>
    <Footer/>
    <DataProvider/>
  
</>
);

export default App;
