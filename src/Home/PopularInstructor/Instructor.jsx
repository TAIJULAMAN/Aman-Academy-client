import { Link } from "react-router-dom";
import InstructorCard from "./InstructorCard";

const Instructor = ({ item }) => {
  return (
    <div className=" card bg-base-200 shadow-xl">
     <div className="card-body">
     <InstructorCard key={item.id} item={item}></InstructorCard>
      <Link to="instructors">
        <button className="btn border-orange-600 btn-outline border-0 border-b-4 mt-4">
          see more
        </button>
      </Link>
     </div>
    </div>
  );
};

export default Instructor;
