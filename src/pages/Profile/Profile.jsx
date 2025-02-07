import SocialMediaIcons from "../../hooks/socialMediaIcon";
import useImages from "../../hooks/useImages";
import UserDetails from "../Profile/userDetails";
import UploadImage from "./UploadImage";
import ProfileImages from "./profileImages";

const Profile = () => {
  const [images, refetch] = useImages();

  return (
    <div className=" px-4 sm:px-8 md:px-12 lg:px-16">
      {/* User Details Section */}
      <UserDetails />

      {/* Upload Image & Profile Images Section */}
      <div className="mx-auto  max-w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <UploadImage refetch={refetch} />
        <ProfileImages images={images} />
      </div>
      <SocialMediaIcons></SocialMediaIcons>
    </div>
  );
};

export default Profile;
