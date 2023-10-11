import { Link } from "react-router-dom";
import img1 from "../../assets/extra/1.jpg";
import img2 from "../../assets/extra/2.jpg";
const AllBlogs = () => {
  return (
    <div>
      <div className="hero  lg:h-[300px] ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Latest Achivement!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="">
              <button className="btn border-orange-600 btn-outline border-0 border-b-4 mt-4">See more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero  lg:h-[300px] ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Latest Achivement!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="">
              <button className="btn border-orange-600 btn-outline border-0 border-b-4 mt-4">See more</button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center text-orange-500 font-semibold text-3xl lg:text-4xl pb-10">
        ............................More blogs is comming soon!!!!!
      </h1>
    </div>
  );
};

export default AllBlogs;
