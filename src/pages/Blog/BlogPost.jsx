
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialMediaIcons from "../../hooks/socialMediaIcon";



const BlogPost = () => {
const {register,handleSubmit, reset} = useForm();
const axiosPublic = useAxiosPublic();

const onSubmit = async (data) => {
    console.log(data); 
    try{
        const blogData = {
            ...data,
            createAt: new Date(),
        }
        const response = await axiosPublic.post('/blogs', blogData);
        if(response.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Blog Posted Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            reset();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to post blog. Please try again!',
            })
        } 
    }catch(error){
            console.error('Error posting blog:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to post blog. Please try again!',
            })
        }
    }


    return (
        <div className="mt-10 p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full sm:w-3/4 lg:w-1/2 mx-auto"
          >
            {/* Blog Title */}
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Blog Title
            </label>
            <input
              id="title"
              {...register("title", { required: "Blog title is required" })} // Use react-hook-form's register
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your blog title"
            />
            {/* Author Name */}
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Author Name
            </label>
            <input
              id="title"
              {...register("author", { required: "Blog title is required" })} // Use react-hook-form's register
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
            />
    
            {/* Blog Content */}
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mt-4 mb-2"
            >
              Blog Content
            </label>
            <textarea
              id="content"
              {...register("content", { required: "Blog content is required" })} // Use react-hook-form's register
              className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog content here..."
              rows="10"
            ></textarea>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post
            </button>
          </form>
          <SocialMediaIcons></SocialMediaIcons>
        </div>
      );
    };
    
    export default BlogPost;
