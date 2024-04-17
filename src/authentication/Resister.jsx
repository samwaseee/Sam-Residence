import { Link } from "react-router-dom";
import useAuth from "./useAuth";

const Resister = () => {

    const {createUser} = useAuth();

    const handleReg = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');

        console.log(name,email,password);

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
        <div className="hero">
            <div className="">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-10">Register now!</h1></div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleReg} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" required name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" required name='email' placeholder="Your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="link" required name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered"/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Register</button>
                        </div>
                    </form>
                    <p className='mx-auto pb-5'>Already have an account <Link to={'/login'} className='font-bold'>Log In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Resister;