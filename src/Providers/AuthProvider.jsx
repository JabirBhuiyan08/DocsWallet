import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();


const createUser = (email, password) => {
    setLoading(true);	
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}


const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
}
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
         if(currentUser){
            //get token and store clinent
            const userInfo = {email: currentUser.email}
            axiosPublic.post('/jwt',userInfo) 
            .then(res=> {
                if(res.data){
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
            })
        }
        else{
            //TODO: remove token (if token stored in the client side:
            //local storafe,caching, in memory)

            localStorage.removeItem('access-token');
            setLoading(false);
        }   
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [axiosPublic])

const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut
}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
