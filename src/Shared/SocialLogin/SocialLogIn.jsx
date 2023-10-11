
// import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/Authproviders";
// // import { Navigate } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";

const SocialLogIn = () => {

            // const { googleSignIn} = useAuth()
            const { googleSignIn , facebookSignIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
const handleGoogleSignIn = () => {
            googleSignIn()
            facebookSignIn()
                .then(result => {
                    const loggedInUser = result.user;
                    console.log(loggedInUser);
                    const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(() => {
                            navigate(from, { replace: true });
                        })
                })
        }

    return (
        <div>
                    <div className="divider"></div>
                    <div className="w-full text-center my-4">
                        <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline">
                            <FaGoogle></FaGoogle>
                        </button>
                        <button onClick={handleGoogleSignIn} className="btn  ml-2 btn-circle btn-outline">
                            <FaFacebook></FaFacebook>
                        </button>
                    </div>
                </div>
    );
};

export default SocialLogIn;



// import { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/Authproviders";
// // import { Navigate } from "react-router-dom";

// const SocialLogIn = () => {
//         const { googleSignIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";
// const handleGoogleSignIn = () => {
//             googleSignIn()
//                 .then(result => {
//                     const loggedInUser = result.user;
//                     console.log(loggedInUser);
//                     const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
//                     fetch('http://localhost:5000/users', {
//                         method: 'POST',
//                         headers: {
//                             'content-type': 'application/json'
//                         },
//                         body: JSON.stringify(saveUser)
//                     })
//                         .then(res => res.json())
//                         .then(() => {
//                             navigate(from, { replace: true });
//                         })
//                 })
//         }
//     return (
//         <div>
//             <div className="divider"></div>
//             <div className="w-full text-center my-4">
//                 <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
//                     <FaGoogle></FaGoogle>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SocialLogIn;