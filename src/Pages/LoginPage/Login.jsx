import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import swal from "sweetalert";

const Login = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setloginError] = useState("");
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form, email, password);

        if (password.length < 6) {
            setloginError("Password should have atleast 6 characters");
            swal("invalid Password!", "Your Password should have atleast 6 characters", "error");
            // console.log(loginError);
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setloginError("Password must have one uppercase");
            swal("invalid Password", "Password must have one uppercase", "error");
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setloginError("Pasword must have one special character");
            swal("invalid Password", "Pasword must have one special character", "error");
            return;
        }

        //sign in with email and password
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                swal("Congratulations!", "Login successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-red-50">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div>
                            <Link to="/signUp">Do not have account? Here <span className="font-bold">Sign Up</span> </Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <p className="text-center">or</p>
                        <div onClick={handleGoogleSignIn} className="flex justify-center">
                            <button className="flex justify-center items-center text-2xl text-red-600 btn btn-circle"><FcGoogle /> </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;