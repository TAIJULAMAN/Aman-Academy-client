import { Link } from "react-router-dom";
import useClass from "../../CustomHooks/useClass";
import ClassItem from "../../Pages/Classes/ClassItem";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PopularClass = () => {
  const [classes] = useClass();
  const Popular = classes.filter((item) => item.category === "Popular");
  return (
    <section className="pb-20  bg-base-200">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR Classes"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {Popular.map((item) => (
          <ClassItem key={item._id} item={item}></ClassItem>
        ))}
      </div>
      <div className="text-center my-5">
      <Link to="classes" >
        <button className="btn  border-orange-600 btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
      </div>
    </section>
  );
};

export default PopularClass;
