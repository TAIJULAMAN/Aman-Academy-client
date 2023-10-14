
// import Card from "./Card";
// const OrderTab = ({ items }) => {
//   return (
//     <div className="grid md:grid-cols-3 ml-10">
//       {items.map((item) => (
//         <Card key={item._id} item={item}></Card>
//       ))}
//     </div>
//   );
// };
// export default OrderTab;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from "./Card";


const OrderTab = ({items}) => {
    const pagination = {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            };
    return (
        <div >

                   <Swiper
                       pagination={pagination}
                       modules={[Pagination]}
                       className="mySwiper"
                   >
                       <SwiperSlide>
                           <div className='grid md:grid-cols-3  ml-10'>
                               {
                                   items.map(item => <Card
                                       key={item._id}
                                       item={item}
                                   ></Card>)
                               }
                           </div>
        
                       </SwiperSlide>
        
                   </Swiper>
               </div>
    );
};

export default OrderTab;