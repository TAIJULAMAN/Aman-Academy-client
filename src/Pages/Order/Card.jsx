import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import useCart from "../../CustomHooks/useCart";

const Card = ({ item }) => {
    const { name, image, price, instructorName, _id } = item;

  // const [ refetch] = useCart();
  const { user } = useAuth()
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      console.log(cartItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            //  refetch cart to update the number of items in the cart
            // refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
       <figure>
         <img src={image} alt="Shoes" />
       </figure>
       <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
         ${price}
       </p>
       <div className="card-body flex flex-col items-center">
         <h2 className="card-title">{name}</h2>
         <p>Coach:{instructorName}</p>
         <div className="card-actions justify-end">
           <button
             onClick={() => handleAddToCart(item)}
             className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
           >
             Add Class
           </button>
         </div>
       </div>
     </div>
    );
};

export default Card;
