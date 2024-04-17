import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "./useAuth";

const SocialLogin = () => {

    const {GoogleLogin,GithubLogin} = useAuth();

    return (
        <div className='mx-auto flex justify-center gap-5 mb-5'>
            <button onClick={()=> GoogleLogin()} className='btn btn-outline h-16'>
                <FcGoogle size={40} />
            </button>
            <button onClick={() => GithubLogin()} className='btn btn-outline h-16'>
                <FaGithub size={40} />
            </button>
        </div>
    );
};

export default SocialLogin;