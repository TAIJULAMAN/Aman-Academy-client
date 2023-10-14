import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useInstructor from "../../CustomHooks/useInstructor";
import InstructorCard from "../../Home/PopularInstructor/InstructorCard";
// import Instructor from "../../Home/PopularInstructor/Instructor";

const Instructors = () => {
  const [instructor] = useInstructor();
  return (
    <div className="bg-base-200">
      <Helmet>
        <title>Aman Academy | Login</title>
      </Helmet>
      <SectionTitle
        subHeading="Check it out"
        heading="our instructors"
      ></SectionTitle>
     
        <div className="max-w-7xl mx-auto bg-base-200 py-4">
          <div className=" grid md:grid-cols-3 gap-4">
            {instructor.map((item) => (
              <InstructorCard key={item._id} item={item}></InstructorCard>
            ))}
          </div>
        </div>
     
    </div>
  );
};

export default Instructors;
