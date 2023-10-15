import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../CustomHooks/useCart";
import Swal from "sweetalert2";

const UserCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(total);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Aman Academy | My Cart</title>
      </Helmet>
      <button onClick={()=>refetch()}>refetch</button>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="food image" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCart;
