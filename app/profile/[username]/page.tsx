"use client";

import { Suspense, useEffect, useState } from "react";
import "../../styles/profile.css";
import Gallery from "../../ui/profile/gallery";
import ProfileBio from "../../ui/profile/profileBio";
import ProfileImage from "../../ui/profile/profileImage";
import ProfileNameAndSetting from "../../ui/profile/profileNameAndSettings";
import ProfileStats from "../../ui/profile/profileStatus";
import { getUser } from "../../api/userRoute";
import { BackendUser } from "../../lib/definations";
import { usePathname } from "next/navigation";
import { ProfileDataSkeleton, ProfilePicSkeleton } from "@/app/ui/skeletons";
import { getLocalStorage } from "@/app/lib/utils";

export default function ProfilePage() {
  const [data, setData] = useState<BackendUser | null>(null);
  const [owner, setOwner] = useState<boolean>(false);
  const pathname = usePathname();

  //to get the username only from the url
  const userName = pathname.split("/").pop();

  console.log(userName);
  if (userName) {
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const user = await getUser(userName, getLocalStorage("token"));
          setData(user.user);
          setOwner(user.isOwner);
        } catch (err) {
          console.error("Error while fetching ", (err as Error).message);
        }
      };
      fetchUser();
    }, []);

    return (
      <>
        <header>
          <div className="container">
            <div className="profile">
              <Suspense fallback={<ProfilePicSkeleton />}>
                <ProfileImage />
              </Suspense>
              {data ? (
                <>
                  <Suspense fallback={<ProfileDataSkeleton />}>
                    <ProfileNameAndSetting firstName={data.username} owner={owner} />
                    <ProfileStats
                      posts={data.posts.length}
                      followers={data.followers.length}
                      following={data.following.length}
                    />
                    <ProfileBio />
                  </Suspense>
                </>
              ) : (
                "Loading........"
              )}
            </div>
            {/* End of profile section */}
          </div>
          {/* End of container  */}
        </header>

        <Gallery />
      </>
    );
  }
}
