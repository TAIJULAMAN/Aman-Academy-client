import { Link } from "react-router-dom";
import img1 from "../../assets/extra/1.jpg";

const Blogs = () => {
  return (
    <div className=" bg-base-200">
      <h1 className="text-center text-orange-500 font-semibold text-3xl lg:text-7xl pt-10">
        Want To Know More!!!!{" "}
      </h1>

      <div className="hero  h-[500px] ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img1} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Latest Achivement!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="allblogs">
              <button className="btn border-orange-600 btn-outline border-0 border-b-4 mt-4">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
