// import { FaShoppingCart } from 'react-icons/fa';
// import useCart from "../../CustomHook/useCart";
// import useAdmin from "../../CustomHook/useAdmin";

import { Link } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // const [isAdmin] = useAdmin();
  // const [cart] = useCart();
  // console.log(cart)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="allblogs">Blogs</Link>
      </li>
      <li>
        <Link to="classes">Classes</Link>
      </li>
      <li>
        <Link to="gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/order/Hocky">Order</Link>
      </li>

     
      {/* {
             isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
             <li><Link to="/dashboard/userhome">Dashboard</Link></li>
         } */}
         {/* <li>
             <Link to="/dashboard/mycart">
             
                 <button className="btn gap-2">
                     <FaShoppingCart></FaShoppingCart>
                     <div className="badge badge-secondary">+{cart?.length || 0}</div>
                 </button>
             </Link>
         </li>  */}
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
          <small className="pb-2">  LogOut</small>
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" justify-between navbar h-20 z-10 bg-slate-800 text-white hover:text-orange-500">
      <div className="navbar-start">
        <div className="dropdown bg-slate-800">
          <label
            tabIndex={0}
            className="btn btn-neutral  bg-orange-500 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-4xl">Aman Academy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal mr-72 px-1">{navOptions}</ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


