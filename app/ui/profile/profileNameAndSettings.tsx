import { ProfileNameAndSettingProps } from "@/app/lib/definations";

// Use the props type in the component definition
const ProfileNameAndSetting: React.FC<ProfileNameAndSettingProps> = ({ firstName, owner }) => {
  return (
    <>
      <div className="profile-user-settings">
        <h1 className="profile-user-name">{firstName}</h1>

        {owner && <button className="btn profile-edit-btn">Edit Profile</button>}

        <button className="btn profile-settings-btn" aria-label="profile settings">
          <i className="fas fa-cog" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default ProfileNameAndSetting;
