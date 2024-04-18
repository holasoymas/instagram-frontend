import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const ProfilePicSkeleton = () => {
  return (
    <>
      {/* <div className="profile-image"> */}
      {/*   <img */}
      {/*     // src="https://res.cloudinary.com/dbkltjz6j/image/upload/v1713114973/dlrau2fax3w2b2d2nyx3.png" */}
      {/*     src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" */}
      {/*     alt="profileImg" */}
      {/*   /> */}
      {/* </div> */}
      <div className="profile-image">
        <Skeleton variant="circular" height={140} width={100} />
      </div>
    </>
  );
};

export const ProfileDataSkeleton = () => {
  return (
<>
      {/* ProfileNameAndSetting  */}
      <div className="profile-user-settings">
        <h1 className="profile-user-name">
          <Skeleton />
        </h1>

        <button className="btn profile-edit-btn">
          <Skeleton />
        </button>

        <button className="btn profile-settings-btn" aria-label="profile settings">
          <i className="fas fa-cog" aria-hidden="true"></i>
        </button>
      </div>

      {/* profile bio */}
   <div className="profile-bio">
        <p>
        <Skeleton /> 
        </p>
      </div>

{/* profile status */}
   <div className="profile-stats">
      <Skeleton variant="rectangular" width={200} height={100} />
      </div>


</>
  );
};
