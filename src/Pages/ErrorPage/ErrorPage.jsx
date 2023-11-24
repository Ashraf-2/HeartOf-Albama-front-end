import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/404-animation.json"

const ErrorPage = () => {
    return (
        <div className="max-w-5xl mx-auto h-screen ">
            <div className="flex flex-col justify-center items-center">

                <Lottie animationData={errorAnimation}></Lottie>
                <h2 className="text-6xl font-extrabold text-center">404! Page did not found</h2>
            </div>
            <div className="text-center my-5">
                <Link to="/">
                    <button className="btn btn-neutral outline-none border-none text-xl bg-red-500 text-white">Return Home Page</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;