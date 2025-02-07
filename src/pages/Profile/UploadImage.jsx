import axios from 'axios';
import Swal from 'sweetalert2';
import { useRef } from 'react';

const UploadImage = ({ refetch }) => {
  const fileInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('access-token'); // Retrieve token from storage
  
    if (!token) {
      console.error('No token found!');
      return;
    }
  
    const formData = new FormData();
    const files = fileInputRef.current.files; // Access the files from input
    for (const file of files) {
      formData.append('files', file); // Append each file with the name 'files'
    }
  
    try {
      const response = await axios.post('https://server-six-sigma-80.vercel.app/images', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      Swal.fire({
        icon: 'success',
        title: 'Images Uploaded Successfully',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        refetch();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      });
  
      console.log('Files uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error.response?.data || error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mb-10 p-4 border rounded-lg shadow-md bg-gray-100">
      <input
        className="file-input w-full sm:w-auto text-sm border border-blue-500 rounded-md p-2"
        type="file"
        name="files"
        multiple
        ref={fileInputRef}
      />
      <button
        type="submit"
        className="btn w-full sm:w-auto border border-blue-600 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-md p-3 hover:from-violet-600 hover:to-blue-600 transition duration-200"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadImage;
