import React from 'react';

const PrivateRoute = () => {
    return (
        <div>
            <h1>this is private route</h1>
        </div>
    );
};

export default PrivateRoute;

// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../Components/Providers/Authproviders";

// const PrivateRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   // const {user ,loading}=useContext(AuthContext)
//   const location = useLocation();

//   // if(loading){
//   //     return <progress className="progress w-56"></progress>
//   // }
//   if (user) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default PrivateRoute;