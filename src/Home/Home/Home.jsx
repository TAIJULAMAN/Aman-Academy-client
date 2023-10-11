import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import ReviewSection from "../ReviewSection/ReviewSection";
import PopularInstructors from "../PopularInstructor/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Aman Academy | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Blogs></Blogs>
      <PopularInstructors></PopularInstructors>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;


// import Catagory from "../Catagory/Catagory";
// import ChefRecommands from "../ChefRecommands/ChefRecommands";
// import Featured from "../Featured/Featured";
// import PopularItem from "../PopularItem/PopularItem";

// const Home = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Sodium Cafe | Home</title>
//       </Helmet>
//       <Banner></Banner>
//       <Catagory></Catagory>
//       <PopularItem></PopularItem>
//       <About></About>
//       <PhnNumber></PhnNumber>
//       <ChefRecommands></ChefRecommands>
//       <Featured></Featured>
//       <ReviewSection></ReviewSection>
//     </div>
//   );
// };

// export default Home;
