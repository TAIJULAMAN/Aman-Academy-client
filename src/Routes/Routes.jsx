import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PhotoGallery from "../Pages/PhotoGallery/PhotoGallery";
import Order from "../Pages/Order/Order";
// import OurMenu from "../Components/MenuPage/OurMenu/OurMenu";
// import OrderPage from "../Components/OrderPage/OrderPage";
// import LogIn from "../Components/LogIn/LogIn";
// import Signup from "../Components/Signup/Signup";
// import DashBoard from "../Layout/DashBoard";
// import MyCart from "../Components/DashBoard/MyCart/MyCart";
// import UserHome from "../Components/DashBoard/UserHome/UserHome";
// import Reservation from "../Components/DashBoard/Reservation/Reservation";
// import Payment from "../Components/DashBoard/PaymentHistory/Payment";
// import AddReview from "../Components/DashBoard/AddReview/AddReview";
// import Bookings from "../Components/DashBoard/Booking/Bookings";
// import PrivateRoute from "./PrivateRoute";
// import AllUsers from "../Components/DashBoard/AllUsers/AllUsers";
// import AddItem from "../Components/DashBoard/AddItem/AddItem";
// import AdminRoute from "./AdminRoute";
// import ManageItem from "../Components/DashBoard/ManageItem/ManageItem";
// import AdminHome from "../Components/DashBoard/AdminHome/AdminHome";
// import Payment from "../Components/DashBoard/Payment/Payment";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "allblogs",
            element: <AllBlogs></AllBlogs>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <Signup></Signup>
        },
        {
            path: "instructors",
            element: <Instructors></Instructors>
        },
        {
            path: "classes",
            element:<Classes></Classes>
        },
        {
            path: "gallery",
            element:<PhotoGallery></PhotoGallery>
        },
        {
            path: "/order/:category",
            element:<Order></Order>
        }
   
      ]
    },

    // dashboard routes..............................................................................

    // {
    //   path: "dashboard",
    //   element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    //   children: [
    //     {
    //       path: "mycart",
    //       element:<MyCart></MyCart>,
    //     },
    //     {
    //       path: "userhome",
    //       element:<UserHome></UserHome>
    //     },
    //     {
    //       path: "reservation",
    //       element:<Reservation></Reservation>
    //     },
    //     {
    //       path: "payment",
    //       element:<Payment></Payment>
    //     },
    //     // {
    //     //   path: "reviews",
    //     //   element:<AddReview></AddReview>
    //     // },
    //     // {
    //     //   path: "bookings",
    //     //   element:<Bookings></Bookings>
    //     // },
    //     // ...................admin route.........................
    //     {
    //       path: "allusers",
    //       element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    //     },
    //     {
    //       path: "addItem",
    //       element:<AdminRoute><AddItem></AddItem></AdminRoute>
    //     },
    //     {
    //       path: "manageitem",
    //       element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
    //     },
    //     {
    //       path: "adminhome",
    //       element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
    //     },
    //   ]
    // }
  ]);
 