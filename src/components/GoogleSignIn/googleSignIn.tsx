import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../../../lib/firebase';
import { FaGoogle } from "react-icons/fa";

export default function GoogleSignIn(){
    const handleSignIn = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
        }catch(exception){
            console.error(exception);
        }
    }

    return(
        <button onClick={ handleSignIn }><FaGoogle className="mr-3"/>SignIn with Google</button>
    )
}