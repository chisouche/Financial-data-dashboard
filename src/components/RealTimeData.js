import React from 'react';
// import { fetchRealTimeData } from '../api/apiService';
import "../styles/css/realtimedata.css";
import "../styles/css/layout-css-one.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



const RealTimeData = () => {
  
  return (
    <div className='realt-css'>

            <div className="dashboard-container"> 

                <div className="summary-section">

                {/* Portfolio Snapshot */}

                <div className='Portfolio-Value-layout'>
                        <h2>Portfolio Snapshot</h2>

                        <div className='value-container'>

                          <div className='total-value-row'>
                            <span>Portfolio Value<i className="fas fa-eye"></i>
                            </span>

                            <span>Transaction History <i className="icon-button fas fa-chevron-right"></i> </span>

                          </div>
                            
                              <span class="currency">
                                <span class="dollar-sign"></span>
                                <span class="amount">15,500</span>
                                <span class="decimal">.68</span>
                              </span>

                            <div className="transaction-row">
                              <div className='performance-metrics'>

                                <div>
                                  <span>Daily Change</span>
                                  <span>+1.5%</span>
                                </div>

                                <div>
                                  <span>Weekly Change</span>
                                  <span>+3.2%</span>
                                </div>
  
                                <div>
                                  <span>Monthly Change</span>
                                  <span>-0.5%</span>
                                </div>
                              </div>

                                <div className='button-money'>

                                  <div className='btn-money'>
                                    <a href='/' className='add-money'><i className="fas fa-plus"></i></a>
                                    <span>Add money</span>
                                  </div>

                                  <div className='btn-money'>
                                    <a href='/' className='add-money'><i className="icon-button fas fa-exchange-alt transfer"></i></a>
                                    <span>Transfer</span>
                                  </div>

                                  <div className='btn-money'>
                                    <a href='/' className='add-money'><i className="icon-button fas fa-money-bill-wave withdraw"></i></a>
                                    <span>Withdraw</span>
                                  </div>
                              </div>


                          </div>

                        </div>
                          
                </div>
                      
                  <div className="portfolio-snapshot">
                    

                    {/* Asset Allocation */}
                    <div className="asset-allocation">
                      <h3>Asset Allocation</h3>
                      
                      {/* <!-- Placeholder for Pie/Doughnut Chart --> */}
                      <div className="chart-placeholder">Chart</div>
                    </div>

                    {/* Personalized Alerts */}
                    <div className="alerts">
                      <h3>Personalized Alerts</h3>
                      <ul>
                        <li>Stock ABC has increased by 5% today.</li>
                        <li>Cryptocurrency XYZ has dropped by 10%.</li>
                      </ul>
                    </div>

                  </div>

                  {/* Financial Health Score */}
                  <div className="financial-health">
                    <h2>Financial Health Score</h2>
                    <div className="health-score">
                      <span>Score:</span>
                      <span>85</span>
                    </div>
                    <div className="improvement-suggestions">
                      <h3>Suggestions</h3>
                      <p>Consider diversifying into commodities to reduce risk.</p>
                      <p>Review the performance of underperforming stocks.</p>
                    </div>
                  </div>

                </div>


                  {/* market overview section */}
                <div className="market-overview-section">
                  <div className="global-market">
                    <h2>Global Market Indices</h2>
                    <div className="market-updates">
                      <div className="index">
                        <span>S&P 500</span>
                        <span>4,500 (+0.5%)</span>
                      </div>
                      <div className="index">
                        <span>NASDAQ</span>
                        <span>13,500 (+1.2%)</span>
                      </div>

                      {/* <!-- Add more indices as needed --> */}
                    </div>
                    <div className="heatmap">
                      <h3>Market Heatmap</h3>
                      <div className="heatmap-placeholder">Heatmap</div>
                    </div>
                    <div className="world-map">
                      <h3>Interactive World Map</h3>
                      <div className="map-placeholder">World Map</div>
                    </div>
                  </div>

                  <div className="top-movers">
                    <h2>Top Movers</h2>
                    <div className="gainers-losers">
                      <h3>Top Gainers</h3>
                      <ul>
                        <li>Stock ABC: +10%</li>
                        <li>Crypto XYZ: +8%</li>
                      </ul>
                      <h3>Top Losers</h3>
                      <ul>
                        <li>Stock DEF: -7%</li>
                        <li>Crypto UVW: -5%</li>
                      </ul>
                    </div>
                    <div className="volume-leaders">
                      <h3>Volume Leaders</h3>
                      <ul>
                        <li>Stock GHI: 1.2M shares</li>
                        <li>Crypto RST: 800K coins</li>
                      </ul>
                    </div>
                    <div className="trending-assets">
                      <h3>Trending Assets</h3>
                      <ul>
                        <li>Crypto XYZ: Mentioned in 5,000 tweets</li>
                        <li>Stock JKL: Featured in 10 news articles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="sector-performance">
                    <h2>Sector Performance</h2>
                    <div className="sector-breakdown">
                      <div>
                        <span>Technology:</span>
                        <span>+2.5%</span>
                      </div>
                      <div>
                        <span>Healthcare:</span>
                        <span>-0.3%</span>
                      </div>
                      {/* <!-- Add more sectors as needed --> */}
                    </div>
                    <div className="comparative-analysis">
                      <h3>Comparative Analysis</h3>
                      <p>Compare sector performance over different time frames.</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Interactive Data Visualization Section --> */}
                  <div className="data-visualization-section">
                    <div className="customizable-charts">
                      <h2>Customizable Charts</h2>
                      <div className="chart-controls">
                        <label htmlFor="time-frame">Time Frame:</label>
                        <select id="time-frame">
                          <option value="1D">1D</option>
                          <option value="1W">1W</option>
                          <option value="1M">1M</option>
                          <option value="1Y">1Y</option>
                          <option value="All">All</option>
                        </select>
                        <label htmlFor="chart-type">Chart Type:</label>
                        <select id="chart-type">
                          <option value="line">Line</option>
                          <option value="bar">Bar</option>
                          <option value="candlestick">Candlestick</option>
                          <option value="area">Area</option>
                        </select>
                      </div>
                      <div className="chart-placeholder">Chart Placeholder</div>
                      <div className="overlay-indicators">
                        <h3>Overlay Indicators</h3>
                        <ul>
                          <li>Moving Averages</li>
                          <li>RSI</li>
                          <li>MACD</li>
                        </ul>
                      </div>
                    </div>

                    <div className="scenario-simulation">
                      <h2>Scenario Simulation</h2>
                      <div className="what-if-analysis">
                        <h3>What-If Analysis</h3>
                        <p>Simulate different investment scenarios and predict outcomes.</p>
                      </div>
                      <div className="risk-assessment-tools">
                        <h3>Risk Assessment Tools</h3>
                        <p>Evaluate the impact of various market conditions on your portfolio.</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Integrated News and Insights Section --> */}
                  <div className="news-insights-section">
                    <div className="real-time-news">
                      <h2>Real-Time News Feed</h2>
                      <div className="news-feed">
                        <ul>
                          <li>Curated Article 1: How XYZ is impacting the market</li>
                          <li>Curated Article 2: Analyst predictions for ABC</li>
                          {/* <!-- More articles --> */}
                        </ul>
                      </div>
                      <div className="sentiment-analysis">
                        <h3>Sentiment Analysis</h3>
                        <p>AI analysis of market sentiment from news and social media.</p>
                      </div>
                    </div>

                    <div className="expert-opinions">
                      <h2>Expert Opinions and Analysis</h2>
                      <div className="featured-analysts">
                        <h3>Featured Analysts</h3>
                        <p>Insights and forecasts from top market experts.</p>
                      </div>
                      <div className="community-forums">
                        <h3>Community Forums</h3>
                        <p>Discuss and share opinions with other users.</p>
                      </div>
                    </div>
                  </div>


                {/* <!-- Economic Calendar and Events Section --> */}
                <div className="economic-events-section">
                  <div className="upcoming-events">
                    <h2>Upcoming Events</h2>
                    <ul>
                      <li>Earnings Reports: XYZ Company - Oct 20</li>
                      <li>GDP Announcement: Q3 2024 - Oct 25</li>
                      <li>Interest Rate Decision: Federal Reserve - Nov 1</li>
                    </ul>
                    <div className="event-impact-predictions">
                      <h3>Event Impact Predictions</h3>
                      <p>Analysis of how these events may impact the market.</p>
                    </div>
                  </div>

                  <div className="historical-data-correlation">
                    <h2>Historical Data Correlation</h2>
                    <p>How past similar events have influenced market behavior.</p>
                  </div>
                </div>

                {/* <!-- User Engagement Features Section --> */}
                <div className="user-engagement-section">
                  <div className="custom-watchlists">
                    <h2>Custom Watchlists</h2>
                    <p>Create and manage multiple watchlists for different assets.</p>
                    <div className="notification-settings">
                      <h3>Notification Settings</h3>
                      <p>Set up custom alerts for price changes and market events.</p>
                    </div>
                  </div>

                  <div className="educational-resources">
                    <h2>Educational Resources</h2>
                    <p>Access tutorials, articles, and a glossary of financial terms.</p>
                  </div>
                </div>

                {/* <!-- Accessibility and UX Enhancements Section --> */}
                <div className="accessibility-ux-section">
                  <div className="responsive-design">
                    <h2>Responsive Design</h2>
                    <p>Fully functional across desktops, tablets, and smartphones.</p>
                  </div>

                  <div className="dark-light-modes">
                    <h2>Dark/Light Modes</h2>
                    <p>Switch between dark and light themes based on user preference.</p>
                  </div>

                  <div className="localization">
                    <h2>Localization</h2>
                    <p>Multi-language support and real-time currency conversion.</p>
                  </div>
                </div>

                {/* <!-- Security and Privacy Features Section --> */}
                <div className="security-privacy-section">
                  <div className="secure-data-handling">
                    <h2>Secure Data Handling</h2>
                    <p>Encryption and two-factor authentication to protect user data.</p>
                  </div>

                  <div className="privacy-controls">
                    <h2>Privacy Controls</h2>
                    <p>Manage data sharing preferences with transparent policies.</p>
                  </div>
                </div>

            </div>


    </div>
  );
};

export default RealTimeData;
