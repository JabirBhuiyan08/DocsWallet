
import Swal from "sweetalert2";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import useHourDate from "../../hooks/useHourDate";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SocialMediaIcons from "../../hooks/socialMediaIcon";

const HoursDate = () => {
  const { hourDate, refetch, isLoading, isError } = useHourDate();
  const { isDarkTheme } = useTheme();
  const axiosSecure = useAxiosSecure();
  console.log('This is hour date',hourDate);


  const deleteHourDate =  (id) => {
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
        axiosSecure.delete(`/works/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            console.log('This is id', id);
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }});
  }
  return (
    <div
      className={`container mx-auto mt-8 p-8 ${
        isDarkTheme ? "bg-purple-950 text-white" : "bg-purple-50 text-black"
      }`}
    >
      {isError ? (
        <div className="text-red-500">Failed to load data. Please try again.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead className="bg-gray-50">
              <tr>
                <th>SL</th>
                <th>Job Title</th>
                <th>Hours</th>
                <th>Rate Per Hour</th>
                <th>Total</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="8">Loading...</td>
                </tr>
              ) : hourDate.length === 0 ? (
                <tr>
                  <td colSpan="8">No data found</td>
                </tr>
              ) : (
                hourDate.map((work, index) => (
                  <tr key={work._id}>
                    <td>{index + 1}</td>
                    <td>{work.jobTitle}</td>
                    <td>{work.hours}</td>
                    <td>{work.PerHourRate}</td>
                    <td>{work.hours * work.PerHourRate}</td>
                    <td>{new Date(work.date).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-error" onClick={() => deleteHourDate(work._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
              
            </tbody>
          </table>
        </div>
      )}
      <SocialMediaIcons></SocialMediaIcons>
    </div>
  );
};

export default HoursDate;
