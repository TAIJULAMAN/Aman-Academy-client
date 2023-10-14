import useInstructor from "../../CustomHooks/useInstructor";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Instructor from "./Instructor";

const PopularInstructors = () => {
  const [instructor] = useInstructor();
  const popular = instructor.filter((item) => item.category === "popular");
  return (
    <section className="bg-base-200">
    <div className="max-w-7xl mx-auto">
    <SectionTitle
        subHeading="Check it out"
        heading="OUR HEROES"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        {popular.map((item) => (
          <Instructor key={item._id} item={item}></Instructor>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PopularInstructors;
