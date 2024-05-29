"use client";
import { useEffect, useState } from "react";
import Footer from "../ui/feed_page/footer";
import UserPost from "../ui/feed_page/post";
import Suggesstions from "../ui/feed_page/suggesstions";
import "../../style.css";
import { getPosts } from "../api/postRoute";

export default function Feed() {
  // const [users, setUsers] = useState<any>(null);

  // useEffect(() => {
  //   try {
  //     const data = getPosts();
  //     console.log(data);
  //     setUsers(data);
  //   } catch (err) {
  //     console.log("Error while fetching ", err);
  //   }
  // });

  return (
    <>
      <main className="main-container">
        <section className="content-container">
          <div className="content">
            <div className="posts">
              <UserPost />
            </div>
          </div>
          <section className="side-menu">
            <div className="side-menu__user-profile">
              <a
                href="https://github.com/leocosta1"
                target="_blank"
                className="side-menu__user-avatar"
              >
                <img src="assets/default-user.png" alt="User Picture" />
              </a>
              <div className="side-menu__user-info">
                <a href="https://github.com/leocosta1" target="_blank">
                  leocosta1
                </a>
                <span>Leonardo Costa</span>
              </div>
              <button className="side-menu__user-button">Switch</button>
            </div>
            <Suggesstions />
            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}
