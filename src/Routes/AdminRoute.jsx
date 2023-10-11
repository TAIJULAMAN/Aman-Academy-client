import React from 'react';

const AdminRoute = () => {
    return (
        <div>
            <h1>this is admin route</h1>
        </div>
    );
};

export default AdminRoute;


// import { Navigate, useLocation } from "react-router";
// import useAuth from "../Components/CustomHook/useAuth";
// import useAdmin from "../Components/CustomHook/useAdmin";



// const AdminRoute = ({ children }) => {
//     const { user, loading } = useAuth();
//     const [isAdmin, isAdminLoading] = useAdmin();
//     const location = useLocation();

//     if(loading || isAdminLoading){
//         return <progress className="progress w-56"></progress>
//     }

//     if (user && isAdmin) {
//         return children;
//     }
//     return <Navigate to="/" state={{from: location}} replace></Navigate>
// };

// export default AdminRoute;