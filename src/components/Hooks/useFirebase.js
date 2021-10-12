import { useEffect, useState } from "react"
import { getAuth,signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import intialAuthentication from "../../Firebase/firebase.config";

intialAuthentication();

const useFirebase = ()=>{
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();
    const singInWithGoogle = ()=>{
    return   signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
        })
    },[])
    const logOut = ()=>{
        signOut(auth)
        .then(result =>{
            setUser({})
        })
    }
    return {
        user, 
        singInWithGoogle,
        logOut

    }
}

export default useFirebase