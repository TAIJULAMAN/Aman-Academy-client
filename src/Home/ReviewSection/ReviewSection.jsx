import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className=" bg-base-200">
      <SectionTitle
        subHeading="What Our Customers Say"
        heading=" customer reviews"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviews.rating}
                readOnly
              />

              <p className="py-8">{review.details}</p>
              <h1 className="text-2xl text-orange-400">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;

// import { useEffect, useState } from "react";
// import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import "@smastrom/react-rating/style.css";
// import { Rating } from "@smastrom/react-rating";

// const ReviewSection = () => {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/reviews")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);
//   return (
//     <section className="my-20">
//       <SectionTitle
//         subHeading="What Our Customers Say"
//         heading=" customer reviews"
//       ></SectionTitle>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         {reviews.map((review) => (
//           <SwiperSlide key={review._id}>
//             <div className="flex flex-col items-center mx-24 my-16">
//               <Rating
//                 style={{ maxWidth: 180 }}
//                 value={reviews.rating}
//                 readOnly
//               />
//               <p className="py-8">{review.details}</p>
//               <h1 className="text-2xl text-orange-400">{review.name}</h1>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ReviewSection;
