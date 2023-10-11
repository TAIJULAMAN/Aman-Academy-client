import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img1 from "../../assets/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../Shared/SocialLogin/SocialLogIn";
import { Helmet } from "react-helmet-async";
import useAuth from "../../CustomHooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {


  const { signIn } = useAuth
  const [disabled, setDisabled] = useState(true);
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };


    return (
           <div>
     <Helmet>
       <title>Aman Academy | Login</title>
     </Helmet>
     <h1 className="text-5xl text-center mt-10 font-bold text-orange-500">
       LogIn Now!
     </h1>
     <div className="hero min-h-screen">
       <div className="hero-content flex-col md:flex-row-reverse">
         <div className="text-center md:w-1/2 lg:text-left">
           
           <img src={img1} alt="" />
         </div>
         <div className="card md:w-1/2 max-w-sm shadow-2xl">
           <form onSubmit={handleLogin} className="card-body">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                 placeholder="email"
                 className="input input-bordered"
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input
                 type="password"
                 name="password"
                 placeholder="password"
                 className="input input-bordered"
               />
               <label className="label">
                 <a href="#" className="label-text-alt link link-hover">
                   Forgot password?
                 </a>
               </label>
             </div>
             <div className="form-control">
               <label className="label">
                 <LoadCanvasTemplate />
               </label>
               <input
                 onBlur={handleValidateCaptcha}
                 type="text"
                 name="captcha"
                 placeholder="type the captcha above"
                 className="input input-bordered"
               />
             </div>
             {/* TODO: make button disabled for captcha */}
             <div className="form-control mt-6">
               <input
                 disabled={false}
                 className="btn btn-primary"
                 type="submit"
                 value="Login"
               />
             </div>
           </form>
           <p className="text-center my-5 text-orange-500">
             <small>
               New Here? <Link to="/signup">Create an account</Link>{" "}
             </small>
           </p>
           <SocialLogIn></SocialLogIn>
         </div>
       </div>
     </div>
   </div>

    );
};

export default Login;




// import { useContext, useEffect } from "react";
// import { useState } from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import {
//  loadCaptchaEnginge,
//  LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import img1 from "../../assets/others/authentication1.png";
// import { AuthContext } from "../Providers/Authproviders";
// import Swal from "sweetalert2";
// import { useLocation, useNavigate } from 'react-router-dom';
// import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";

// const LogIn = () => {

//   const { signIn } = useContext(AuthContext);
//   const [disabled, setDisabled] = useState(true);
//  const navigate = useNavigate();
//  const location = useLocation();
//  const from = location.state?.from?.pathname || "/";


//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     // console.log(email, password);
//     signIn(email, password).then((result) => {
//       const user = result.user;
//       // console.log(user);
//       Swal.fire({
//         title: "User Login Successful.",
//         showClass: {
//           popup: "animate__animated animate__fadeInDown",
//         },
//         hideClass: {
//           popup: "animate__animated animate__fadeOutUp",
//         },
//       });
//       navigate(from, { replace: true });
//     });
//   };

//   const handleValidateCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Sodium Cafe | Login</title>
//       </Helmet>
//       <h1 className="text-5xl text-center mt-10 font-bold text-orange-500">
//         LogIn Now!
//       </h1>
//       <div className="hero min-h-screen">
//         <div className="hero-content flex-col md:flex-row-reverse">
//           <div className="text-center md:w-1/2 lg:text-left">
//             <img src={img1} alt="" />
//           </div>
//           <div className="card md:w-1/2 max-w-sm shadow-2xl">
//             <form onSubmit={handleLogin} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <LoadCanvasTemplate />
//                 </label>
//                 <input
//                   onBlur={handleValidateCaptcha}
//                   type="text"
//                   name="captcha"
//                   placeholder="type the captcha above"
//                   className="input input-bordered"
//                 />
//               </div>
//               {/* TODO: make button disabled for captcha */}
//               <div className="form-control mt-6">
//                 <input
//                   disabled={false}
//                   className="btn btn-primary"
//                   type="submit"
//                   value="Login"
//                 />
//               </div>
//             </form>
//             <p className="text-center my-5 text-orange-500">
//               <small>
//                 New Here? <Link to="/signup">Create an account</Link>{" "}
//               </small>
//             </p>
//             <SocialLogIn></SocialLogIn>
//           </div>
//         </div>
//       </div>
//       <h1 className="text-5xl text-center mb-10 font-bold text-orange-500">
//         Welcome to Sodium Cafe.
//       </h1>
//     </div>
//   );
// };

// export default LogIn;





