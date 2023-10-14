

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
               
              </div>
            </div>
          </div>
    );
};

export default ClassItem;

