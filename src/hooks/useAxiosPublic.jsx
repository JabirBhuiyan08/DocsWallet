import axios from 'axios';

const axiosPublic = axios.create({
    baseURL : 'https://server-six-sigma-80.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;