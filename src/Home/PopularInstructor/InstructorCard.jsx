const InstructorCard = ({item}) => {
    const { name, image, email } = item;
    return (
       
<div>
 <div>
 <figure className=" rounded ">
    <img src={image} alt="instructor picture" className="rounded-xl" />
  </figure>
  <div className="">
    <h2 className="card-title">{name}</h2>
    <p className="text-red-700 font-bold">Email: {email}</p>
  </div>
 </div>
</div>

    );
};

export default InstructorCard;
