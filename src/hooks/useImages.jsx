import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useImages = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: images = [] } = useQuery({
    queryKey: ["images", user?.email],
    queryFn: async () => {
      if(!user?.email) return [];
      const res = await axiosSecure.get(`/images?email=${user.email}`); 
      return res.data;
    },
  });

  const reversedImages = [...images].reverse();

  return [reversedImages, refetch];
};

export default useImages;
