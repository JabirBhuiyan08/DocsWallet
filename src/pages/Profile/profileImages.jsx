import { useState } from "react";
import Images from "../../hooks/useImages";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import Swal from "sweetalert2";
import { TrashIcon } from "@heroicons/react/16/solid";

const ProfileImages = () => {
  const [images, setImages] = Images();
  const { isDarkTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  const deleteImage = async (imageId) => {
    const token = localStorage.getItem("token"); // or from your state, depending on where it's stored

    try {
      const response = await fetch(`https://server-six-sigma-80.vercel.app/images/${imageId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(token)}`, // Add the token here
        },
      });

      if (response.ok) {
        setImages(images.filter((image) => image._id !== imageId));
      } else {
        console.error("Failed to delete image");
      }
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  const handleDelete = (imageId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      reverseButtons: true, // Swaps the positions of the buttons
    }).then((result) => {
      if (result.isConfirmed) {
        deleteImage(imageId);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      {/* Image Grid */}
      <div
        className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 ${
          isDarkTheme ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        {images.length > 0 ? (
          images.map((image) => (
            <div
              key={image._id}
              className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                isDarkTheme ? "bg-gray-800" : "bg-gray-100"
              }`}
              onClick={() => setSelectedImage(image.url)}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.filename}
                className="w-full h-auto object-cover max-w-[300px] rounded-md"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">Filename: {image.filename}</p>
              </div>

              {/* Delete Button with Font Awesome Trash Icon */}
              <button
                className="absolute top-2 right-2 "
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the modal from opening when clicking delete
                  handleDelete(image._id);
                }}
              >
                <button className="bg-white rounded">
                  <TrashIcon className="size-6 text-red-600 hover:text-red-700 "></TrashIcon>
                  </button>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No images found</p>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative max-w-4xl w-full p-6">
            <button
              className="absolute bg-white rounded-sm mt-4 top-2 text-8xl font-bold hover:text-red-500 text-red-400 transition duration-200"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-auto  justify-center h-auto max-w-[90%] max-h-[80vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImages;
