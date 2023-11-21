import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import swal from "sweetalert";

const SignUp = () => {
    const {signUpwithEmailPass,updateUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo.value;
        console.log( email, password,name,photo_url);

        //password validation
        if (password.length < 6) {
            setRegisterError("Password should have atleast 6 characters");
            swal("invalid Password!","Your Password should have atleast 6 characters","error");
            // console.log(loginError);
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError("Password must have one uppercase");
            swal("invalid Password","Password must have one uppercase","error");
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            setRegisterError("Pasword must have one special character");
            swal("invalid Password","Pasword must have one special character","error");
            return;
        }

        //create user
        signUpwithEmailPass(email, password)
        .then(res => {
            console.log(res.user);
            updateUser(name,photo_url) 
              .then((res) => {
                // Profile updated!
                // ...
                console.log("update profile");
              }).catch((error) => {
                // An error occurred
                // ...
                console.log(error);
              });
            swal('Congress!', "Your account created successfully!","success");
            navigate(location?.state ? location.state : '/');

        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <div>
                        {
                            registerError && <p className="my-2 text-red-600 font-medium">{registerError}</p>
                        }
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Picture Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div>
                            <Link to="/login">Have an account? Here <span className="font-bold">Log In</span> </Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;