
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/dashboard-style.css"

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <Sidebar>
                <div className="dashboard-contetnt">
                    <h2>Dashboard</h2>
                    <Outlet/>
                </div>
            </Sidebar>
        </div>
    );
};
export default DashboardLayout;