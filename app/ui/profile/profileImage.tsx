import Image from "next/image";

export default function ProfileImage() {
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
        <Image
          style={{ borderRadius: "50%", overflow: "hidden" }}
          src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
          alt={"profile picture"}
          width={160}
          height={160}
          // layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
