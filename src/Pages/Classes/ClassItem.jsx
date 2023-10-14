import { Link } from "react-router-dom";

const ClassItem = ({item}) => {
    const {name, image, price,instructorName , availableSeat} =item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
            <h2 className="card-title">Name:{name}</h2>
              <h2 className="card-title">Instructor name:{instructorName}</h2>
              <h2 className="card-title">Available Seat:{availableSeat}</h2>
             
              {/* <p>Price:$ {service.price}</p> */}
        
              <div className="card-actions  flex flex-row justify-between">
              <p  className="text-red-700 font-bold">Price:$ {price}</p>
                <Link to="">
                {/* <Link to={`/checkout/${_id}`}> */}
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

export default ClassItem;


// import { Link } from "react-router-dom";

// const ServiceCard = ({ service }) => {
//   const {  _id , img, title, price } = service;

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure className="px-10 pt-10">
//         <img src={service.img} alt="Shoes" className="rounded-xl" />
//       </figure>
//       <div className="card-body ">
//         <h2 className="card-title">{service.title}</h2>
//         {/* <p>Price:$ {service.price}</p> */}

//         <div className="card-actions  flex flex-row justify-between">
//         <p  className="text-red-700 font-bold">Price:$ {service.price}</p>
//           <Link to={`/checkout/${_id}`}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 text-red-700"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;