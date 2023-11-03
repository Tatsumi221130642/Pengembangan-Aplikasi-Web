import {Routes, Route } from "react-router-dom"
import Login from "./Dashboard/Login"
import DashboardLayout from "./Dashboard/DashboardLayout";
import User from "./Dashboard/User";
import Post from "./Dashboard/Post";
import NotFound from "./Dashboard/NotFound";


const M05App = () => {
    return (
        <Routes>
            <Route path="/" element = {<Login/>} />
            <Route path="/dashboard/" element = {<DashboardLayout/>}>
                <Route path="user" element={<User/>}/>
                <Route path="post" element={<Post/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default M05App;