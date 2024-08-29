import axios from 'axios';

const API_KEY = 'UM7AKGRRWN8TJ043';

export const fetchRealTimeData = async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
        try {
            const response = await axios.get(url);
                return response.data['Time Series (5min)'];
                } catch (error) {
                console.error("Error fetching real-time data:", error);
                return null;
            }
        };

        export const fetchHistoricalData = async (symbol, startDate, endDate) => {
            const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
            try {
            const response = await axios.get(url);
            const data = response.data['Time Series (Daily)'];
            return Object.entries(data).filter(([date]) => date >= startDate && date <= endDate);
        } catch (error) {
        console.error("Error fetching historical data:", error);
        return null;
    }
};
