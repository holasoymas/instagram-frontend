import { ProfileImageProp } from "@/app/lib/definations";
import Image from "next/image";
import React from "react";

const ProfileImage: React.FC<ProfileImageProp> = ({ img }) => {
  return (
    <>
      <div className="profile-image">
        {/*   <img */}
        {/*     // src="https://res.cloudinary.com/dbkltjz6j/image/upload/v1713114973/dlrau2fax3w2b2d2nyx3.png" */}
        {/*     src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" */}
        {/*     alt="profileImg" */}
        {/*   /> */}
        {/* </div> */}
        <img
          // src="https://res.cloudinary.com/dbkltjz6j/image/upload/v1713114973/dlrau2fax3w2b2d2nyx3.png"
          src={img}
          alt="profileImg"
        />
      </div>
      {/* <div className="profile-image"> */}
      {/*   <Image */}
      {/*     style={{ borderRadius: "50%", overflow: "hidden" }} */}
      {/*     src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" */}
      {/*     alt={"profile picture"} */}
      {/*     width={160} */}
      {/*     height={160} */}
      {/*     // layout="fill" */}
      {/*     objectFit="cover" */}
      {/*   /> */}
      {/* </div> */}
    </>
  );
};

export default ProfileImage;
