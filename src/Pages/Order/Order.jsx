

import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "./OrderTab";
import img from "../../assets/extra/3.jpg";
import useClass from "../../CustomHooks/useClass";
const Order = () => {

  const categories = ["Football", "Cricket", "Hocky", "Badminton", "Golf"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [classes] = useClass();
  const Football = classes.filter((item) => item.category === "Football");
  const Cricket = classes.filter((item) => item.category === "Cricket");
  const Hocky = classes.filter((item) => item.category === "Hocky");
  const Badminton = classes.filter((item) => item.category === "Badminton");
  const Golf = classes.filter((item) => item.category === "Golf");


    return (
        <div>
             <Helmet>
               <title>Aman Academy|Order</title>
             </Helmet>
        
             <Cover
               img={img}
               title={"Added Class?"}
               detail={"Would you like to add?"}
             ></Cover>
        
             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <TabList className="text-center bg-slate-500 mb-5">
                 <Tab>Football</Tab>
                 <Tab>Cricket</Tab>
                 <Tab>Hocky</Tab>
                 <Tab>Badminton</Tab>
                 <Tab>Golf</Tab>
               </TabList>
               <TabPanel>
                 <OrderTab items={Football}></OrderTab>
               </TabPanel>
               <TabPanel>
                 <OrderTab items={Cricket}></OrderTab>
               </TabPanel>
               <TabPanel>
                 <OrderTab items={Hocky}></OrderTab>
               </TabPanel>
               <TabPanel>
                 <OrderTab items={Badminton}></OrderTab>
               </TabPanel>
               <TabPanel>
                 <OrderTab items={Golf}></OrderTab>
               </TabPanel>
             </Tabs>
           </div>
    );
};

export default Order;
