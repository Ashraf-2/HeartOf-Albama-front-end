import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="max-w-5xl mx-auto h-screen py-20">
            <h2 className="text-6xl font-extrabold text-center">404! Page did not found</h2>
            <div className="text-center my-10">
                <Link to="/">
                    <button className="btn btn-neutral outline-none border-none text-xl bg-red-500 text-white">Return Home Page</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;