import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import { useTheme } from '../../components/ThemeContext/ThemeContext';
import SocialMediaIcons from '../../hooks/socialMediaIcon';
 

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isDarkTheme, toggleTheme } = useTheme(); 
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axiosPublic.get('/blogs');
                setBlogs(response.data.reverse());
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [axiosPublic]);

    return (
        <div className={`container mx-auto mt-8 p-8 ${isDarkTheme ? "bg-purple-950 text-white" : "bg-purple-50 text-black"}`}>
            <h2 className="text-3xl font-bold text-center my-6">Blogs</h2>

            {/* Dark Mode Toggle */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={toggleTheme}
                    className="btn btn-sm bg-blue-500 text-white rounded-md px-4 py-2"
                >
                    {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center">
                    <button className="btn btn-primary loading">Loading...</button>
                </div>
            ) : blogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map(blog => (
                        <div 
                            key={blog._id} 
                            className={`card bg-base-100 shadow-xl border ${isDarkTheme ? 'dark:bg-gray-800 dark:border-gray-700' : 'bg-white'}`}
                        >
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4 dark:text-gray-300">
                                    {blog.content.slice(0, 100)}...
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Author: {blog.author}
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/blog/${blog.title.replaceAll(' ', '-').toLowerCase()}`}>
                                        <button className="btn btn-primary btn-sm">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No blogs found.</p>
            )}
            <SocialMediaIcons></SocialMediaIcons>
        </div>
    );
};

export default Blogs;
