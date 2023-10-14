import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {

  const { user, loading } = useAuth();
  console.log(user)
  //  const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

    return [cart, refetch];
};

export default useCart;
