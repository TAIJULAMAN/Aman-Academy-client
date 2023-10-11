import ab1 from '../../assets/extra/1.jpg'
import ab2 from '../../assets/extra/2.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero mt-0 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={ab1} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={ab2}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field.
            </h1>
            <p className="py-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore facere ea perferendis vel? Recusandae aperiam corporis cupiditate maxime quisquam hic ratione nobis doloribus! Sunt, ex in libero ullam veritatis accusantium dolores, maiores ab, aliquid error omnis illo sequi vero nesciunt perspiciatis! Consectetur porro corporis explicabo illo corrupti maiores natus?
            </p>
            <p className="py-6">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut assumenda explicabo error iure tenetur totam doloribus? Labore at, dignissimos, numquam porro voluptatum alias voluptate placeat molestiae culpa eius ullam sed repellendus? Aut ducimus animi officia nihil ipsam dignissimos voluptatum, autem mollitia nobis culpa quas amet soluta! Aspernatur inventore ullam nulla.
            </p>
            <Link
                  to="allblogs"
                >
                  {" "}
                  <button className="btn border-orange-600 btn-outline border-0 border-b-4 mt-4">
                    See More
                  </button>
                </Link>
          </div>
        </div>
      </div>
    );
};

export default About;