import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Navbar/Navbar";
import Footer from "./src/Components/Footer/Footer";
import FeaturedFood from "./src/Components/FeaturedFood/FeaturedFood";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;