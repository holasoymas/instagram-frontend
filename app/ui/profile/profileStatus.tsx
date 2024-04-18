import { ProfileStatsProps } from "@/app/lib/definations";

const ProfileStats: React.FC<ProfileStatsProps> = ({ posts, followers, following }) => {
  return (
    <>
      <div className="profile-stats">
        <ul>
          <li>
            <span className="profile-stat-count">{posts}</span> posts
          </li>
          <li>
            <span className="profile-stat-count">{followers}</span> followers
          </li>
          <li>
            <span className="profile-stat-count">{following}</span> following
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileStats;
