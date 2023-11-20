import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Navbar/Navbar";
import Footer from "./src/Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;