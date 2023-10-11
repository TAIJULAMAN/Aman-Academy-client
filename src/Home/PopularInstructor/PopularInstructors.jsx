import useInstructor from "../../CustomHooks/useInstructor";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Instructor from "./Instructor";

const PopularInstructors = () => {
  const [instructor] = useInstructor();
  const popular = instructor.filter((item) => item.category === "popular");
  return (
    // <section className=" max-w-7xl mx-auto">
    <section className="bg-base-200">
      <SectionTitle
        subHeading="Check it out"
        heading="OUR HEROES"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        {popular.map((item) => (
          <Instructor key={item._id} item={item}></Instructor>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;

// import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import useMenu from "../../CustomHook/useMenu";
// import MenuItem from "../../Shared/MenuItem/MenuItem";

// const PopularItem = () => {
//    const [menu] = useMenu()
//    const popular = menu.filter(item=>item.category==='popular')
//   return (
//     <section className="mb-20 max-w-7xl mx-auto">
//        <SectionTitle
//        subHeading="Check it out"
//        heading="FROM OUR MENU"
//        ></SectionTitle>
//      <div className="grid md:grid-cols-2 gap-4">
//          {
//              popular.map(item=><MenuItem
//              key={item._id}
//              item={item}
//              ></MenuItem>)
//          }
//        </div>
//       <div className="text-center my-5">
//       <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
//       </div>
//      </section>
//   );
// };

// export default PopularItem;
