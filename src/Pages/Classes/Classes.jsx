import useClass from "../../CustomHooks/useClass";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ClassCatagory from "./ClassCatagory";

import cover1 from "../../assets/Cricket/2.jpg";
import cover2 from "../../assets/football/1.webp";
import cover3 from "../../assets/Badminton/1.jpg";
import cover4 from "../../assets/Ice Hockey/1.jpg";
import cover5 from "../../assets/golf/1.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Classes = () => {
  const [classes] = useClass();
  const Popular = classes.filter((item) => item.category === "Popular");
  const Football = classes.filter((item) => item.category === "Football");
  const Cricket = classes.filter((item) => item.category === "Cricket");
  const Hocky = classes.filter((item) => item.category === "Hocky");
  const Badminton = classes.filter((item) => item.category === "Badminton");
  const Golf = classes.filter((item) => item.category === "Golf");

  return (
    <div className="mb-10">
      <Helmet>
        <title>Aman Academy| classes</title>
      </Helmet>
   {/* classes starts */}
      <Cover
        img={cover1}
        title={"Our Classes"}
        detail={"Would you like to play?"}
      ></Cover>

      <SectionTitle
        subHeading={"don't miss"}
        heading={"most popular"}
      ></SectionTitle>
      <ClassCatagory   items={Popular} ></ClassCatagory>
 
      <ClassCatagory
        items={Football}
        title="Football"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={cover2}
      ></ClassCatagory>

      <ClassCatagory
        items={Cricket}
        title="Cricket"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={cover2}
      ></ClassCatagory>

      <ClassCatagory
        items={Hocky}
        title="Hocky"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={cover4}
      ></ClassCatagory>

      <ClassCatagory
        items={Badminton}
        title="Badminton"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={cover3}
      ></ClassCatagory>

      <ClassCatagory
        items={Golf}
        title="golf"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={cover5}
      ></ClassCatagory>
    </div>
  );
};

export default Classes;