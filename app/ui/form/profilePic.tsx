import "../../styles/profilepic.css";
import { useState } from "react";
import "../../styles/login.css";
import Image from "next/image";
import { ProfilePageProp } from "../../lib/definations";
import { createProfilePic } from "@/app/api/createProfilePic";

export const ProfilePic: React.FC<ProfilePageProp> = ({
  handleProfilePictureName,
  handleSubmit,
}) => {
  const defaultImg = "/my-account-icon.svg";
  const [previewImage, setPreviewImage] = useState<string>(defaultImg);

  const handleProfileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files && e.target.files[0];
      // console.log(file);
      if (file && handleProfilePictureName) {
        // Displaying an image on web page
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
          // console.log(reader.result);
        };
        reader.readAsDataURL(file);
        // api request to uplaod picture
        const res = await createProfilePic(file);
        // console.log(res);
        const profilePicUrl = res.url;
        // setting the image url to the database
        handleProfilePictureName(profilePicUrl);
      }
    } catch (err) {
      throw new Error("Error while uplaoding ", err as Error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="box profile-pic-container">
          <form id="step2-form" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            <h2>Profile Picture</h2>
            <div className="preview-container">
              <label htmlFor="profile-picture">
                <Image
                  src={previewImage}
                  alt="Profile img"
                  width={200}
                  height={200}
                  className="profile-preview"
                />
              </label>
            </div>
            <div className="field">
              <label htmlFor="profile-picture"></label>
              <input
                type="file"
                id="profile-picture"
                onChange={handleProfileUpload}
                // defaultValue={previewImage}
                name="profile-picture"
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <button className="login-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
