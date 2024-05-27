import { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
// import Navbar from './Navbar';  // Adjust the path as necessary
// import Dashboard from './Dashboard';  // Adjust the path as necessary

function DashboardParent() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showList, setShowList] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleViewList = () => {
        setShowList(true);
        setSidebarOpen(false); // Close the sidebar after navigating
    };

    const handleGoBack = () => {
        setShowList(false);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} handleViewList={handleViewList} />
            <Dashboard showList={showList} handleGoBack={handleGoBack} />
        </div>
    );
}

export default DashboardParent;
