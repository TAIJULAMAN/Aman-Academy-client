
// import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";


import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./config.firebase";

import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authproviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    const facebookSignIn = () => {
      setLoading(true);
       return getRedirectResult(auth,facebookProvider )
      // return signInWithPopup(auth, facebookProvider);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        // console.log("current user", currentUser);
        
  // get and set token
         if(currentUser){
             axios.post('http://localhost:5000/jwt', {email: currentUser.email})
             .then(data =>{
                //  console.log(data.data.token)
                 localStorage.setItem('access-token', data.data.token)
                 setLoading(false);
             })
         }
       
  
      });
      return () => {
        return unsubscribe();
      };
    }, []);


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    facebookSignIn,
    logOut,
    updateUserProfile,
  };

    return (
        <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Authproviders;


// const Authproviders = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const googleProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       // console.log("current user", currentUser);
      
// // get and set token
//        if(currentUser){
//            axios.post('http://localhost:5000/jwt', {email: currentUser.email})
//            .then(data =>{
//               //  console.log(data.data.token)
//                localStorage.setItem('access-token', data.data.token)
//                setLoading(false);
//            })
//        }
//       //  else{
//       //      localStorage.removeItem('access-token')
//       //  }

//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     googleSignIn,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default Authproviders;

// // get and set token
// //        if(currentUser){
// //            axios.post('https://bistro-boss-server-fawn.vercel.app/jwt', {email: currentUser.email})
// //            .then(data =>{
// //                // console.log(data.data.token)
// //                localStorage.setItem('access-token', data.data.token)
// //                setLoading(false);
// //            })
// //        }
// //        else{
// //            localStorage.removeItem('access-token')
// //        }
