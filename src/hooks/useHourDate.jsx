import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHourDate = () => {
  const axiosSecure = useAxiosSecure();

  const { data: hourDate = [], refetch, isLoading, isError } = useQuery({
    queryKey: ["hourDate"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/works`); // Email is inferred from JWT
      return res.data.reverse();
    },
  });

  return { hourDate, refetch, isLoading, isError };
};


export default useHourDate;
