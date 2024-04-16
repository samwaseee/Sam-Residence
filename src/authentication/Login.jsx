import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

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
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link><p href="#" className="label-text-alt link link-hover">Forgot password?</p></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Login</button>
                        </div>
                    </form>
                    <p className='mx-auto pb-5'>Don't have an account <Link to={'/Register'} className='font-bold'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;