import React from 'react';

const Sidebar = () => {
    return (
        <aside>
            <nav>
            <ul>
                    <li><a href="/">Real-Time Data</a></li>
                    <li><a href="/historical">Historical Data</a></li>
                    <li><a href="/predictive">Predictive Analytics</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
