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
// import AddReview from "../Components/DashBoard/AddReview/AddReview";
// import Bookings from "../Components/DashBoard/Booking/Bookings";
import PrivateRoute from "../Routes/PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import UserHome from "../DashBoard/UserHome/UserHome";
import Reservations from "../DashBoard/Reservations/Reservations";
import PaymentHistory from "../DashBoard/PaymentHistory/PaymentHistory";
import UserCart from "../DashBoard/UserCart/UserCart";
import AdminRoute from "../Routes/AdminRoute";
import AdminHome from "../DashBoard/AdminHome/AdminHome";
import AddItem from "../DashBoard/AddItem/AddItem";
import ManageItem from "../DashBoard/ManageItem/ManageItem";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import Payment from "../DashBoard/Payment/Payment";





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

    {
      path: "dashboard",
      element:<DashBoard></DashBoard>,
      // element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: "cart",
          element:<UserCart></UserCart>
        },
        {
          path: "userhome",
          element:<UserHome></UserHome>
        },
        {
          path: "reservations",
          element:<Reservations></Reservations>
        },
        {
          path: "history",
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path: "payment",
          element:<Payment></Payment>
        },
    //     // {
    //     //   path: "reviews",
    //     //   element:<AddReview></AddReview>
    //     // },
    //     // {
    //     //   path: "bookings",
    //     //   element:<Bookings></Bookings>
    //     // },
    //     // ...................admin route.........................
        {
          path: "allusers",
          element:<AllUsers></AllUsers>
          // element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "addItem",
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manageitem",
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path: "adminhome",
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: "managebookings",
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
      ]
    }
  ]);
 