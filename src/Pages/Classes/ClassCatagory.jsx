import { Link } from "react-router-dom";
import ClassItem from "./ClassItem";
import Cover from "../../Shared/Cover/Cover";

const ClassCatagory = ({ img, title, items, detail,Category }) => {
    return (
        <div className="pt-8">
    {title && <Cover img={img} title={title} detail={detail}></Cover>}
    <div className="grid md:grid-cols-3 gap-10 my-16 ml-10">
      {items.map((item) => (
        <ClassItem key={item._id} item={item}></ClassItem>
      ))}
    </div>
    <div className="text-center my-5">
     <Link to={`/order/${Category}`}>
     <button className="btn border-orange-600 btn-outline border-0 border-b-4 mt-4">
       Add Now
      </button>
     </Link>
    </div>
  </div>
    );
};

export default ClassCatagory;


