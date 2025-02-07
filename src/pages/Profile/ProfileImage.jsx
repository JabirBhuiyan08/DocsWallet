import md5 from "md5";

const ProfileImage = ({ email, photoURL }) => {
    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
        email.trim().toLowerCase()
    )}?d=identicon`;

    return (
        <img
            src={photoURL || gravatarUrl}
            alt="User Profile"
            className="rounded-full w-16 h-16"
        />
    );
};

export default ProfileImage;
