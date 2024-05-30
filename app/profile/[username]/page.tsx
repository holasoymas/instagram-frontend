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
import { usePathname, useRouter } from "next/navigation";
import { ProfileDataSkeleton } from "@/app/ui/skeletons";
import { getLocalStorage } from "@/app/lib/utils";

export default function ProfilePage() {
  const [data, setData] = useState<BackendUser | null>(null);
  const [owner, setOwner] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();
  //to get the username only from the url
  const userName = pathname.split("/").pop();
  useEffect(() => {
    if (userName) {
      const fetchUser = async () => {
        try {
          const user = await getUser(userName, getLocalStorage("token"));
          if (user) {
            console.log(user);
            setData(user.user);
            setOwner(user.isOwner);
          } else {
            router.push("/");
          }
        } catch (err) {
          router.push("/");
        }
      };
      fetchUser();
    } else {
      router.push("/");
    }
  }, [userName, router]);

  return (
    <>
      <header>
        <div className="container">
          <div className="profile">
            {data ? (
              <>
                <ProfileImage img={data.profilePic} />
                <Suspense fallback={<ProfileDataSkeleton />}>
                  <ProfileNameAndSetting username={data.username} owner={owner} />
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

      {data && data.posts ? <Gallery posts={data.posts} /> : "Loading Posts......."}
    </>
  );
}
