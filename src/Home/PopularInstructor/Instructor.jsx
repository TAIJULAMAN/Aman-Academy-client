import { Link } from "react-router-dom";

const Instructor = ({ item }) => {
  const { name, image, email } = item;
  console.log(item);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions  flex flex-row justify-between">
          <p className="text-red-700 font-bold">Email: {email}</p>
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

// const MenuItem = ({item}) => {
//     const {name, recipe, image, price} =item
//     return (
//         <div className="flex space-x-4">
//             <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
//             <div>
//                 <h1 className="uppercase">{name} ------------</h1>
//                 <p>{recipe}</p>
//             </div>
//             <p className="text-yellow-500 ">{price}</p>

//         </div>
//     );
// };

// export default MenuItem;
