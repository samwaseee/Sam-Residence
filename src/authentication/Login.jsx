import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from './useAuth';
import { useState } from 'react';

const Login = () => {

    const { signIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });



    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);


        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })

        setFormValues({
            email: "",
            password: ""
        });
    }

    return (
        <div className="hero">
            <div className="">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-10">Login account</h1></div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                value={formValues.email}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, email: e.target.value })
                                }
                                required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                value={formValues.password}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, password: e.target.value })
                                }
                                required name='password' placeholder="password" className="input input-bordered" />
                            <label className="label"></label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline">Login</button>
                        </div>

                    </form>
                    <p className='mb-2 text-xl flex justify-center items-center gap-2'> <span> <hr className='w-20' /> </span> <span> Or </span> <hr className='w-20' /> </p>
                    <SocialLogin></SocialLogin>
                    <p className='mx-auto pb-5'>Don't have an account <Link to={'/Register'} className='font-bold'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;