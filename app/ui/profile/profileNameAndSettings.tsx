import { ProfileNameAndSettingProps } from "@/app/lib/definations";
import Link from "next/link";

// Use the props type in the component definition
const ProfileNameAndSetting: React.FC<ProfileNameAndSettingProps> = ({ username, owner }) => {
  return (
    <>
      <div className="profile-user-settings">
        <h2 className="profile-user-name">{username}</h2>

        {owner && <button className="btn profile-edit-btn">Add Post</button>}
        {owner && <button className="btn profile-edit-btn"> <Link href={`/profile/${username}/post`} >Add Post</Link></button>}

        <button className="btn profile-settings-btn" aria-label="profile settings">
          <i className="fas fa-cog" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default ProfileNameAndSetting;
