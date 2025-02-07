import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialMediaIcons from "../../hooks/socialMediaIcon";

const BlogDetails = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosPublic.get(`/blogs/${title}`);
        // const blogData = response.data.find(
        //     (b) =>b.title.replaceAll("-", " ").toLowerCase() === title
        // );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [title, axiosPublic]);

  return (
    <div>
      <div className="container mx-auto mt-12 p-8">
        {loading ? (
          <div className="flex justify-center">
            <button className="btn btn-primary loading">Loading...</button>
          </div>
        ) : blog ? (
          <div className="card bg-base-100 shadow-xl border border-gray-200">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <p className="text-sm text-gray-500">
                Author: {blog.author || "Unknown"}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Blog not found.</p>
        )}
      </div>
      <div className="flex justify-center items-center p-4">
        <Link
          to="/blogs"
          className="btn btn-primary flex items-center justify-center mx-auto p-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-md px-6 py-2 hover:from-violet-600 hover:to-blue-600 transition duration-200"
        >
          Back to Blogs
        </Link>
      </div>
      <SocialMediaIcons></SocialMediaIcons>
    </div>
  );
};

export default BlogDetails;
