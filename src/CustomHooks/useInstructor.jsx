
import { useQuery } from "@tanstack/react-query";
const useInstructor = () => {

  const {data: instructor = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })

return [instructor,loading , refetch]
};

export default useInstructor;




// import { useQuery } from "@tanstack/react-query";

// const useMenu =()=>{
//   const {data: menu = [], isLoading: loading, refetch} = useQuery({
//         queryKey: ['menu'],
//         queryFn: async() => {
//             const res = await fetch('http://localhost:5000/menues');
//             return res.json();
//         }
//     })

//     return [menu,loading , refetch]
// }
// export default useMenu;
