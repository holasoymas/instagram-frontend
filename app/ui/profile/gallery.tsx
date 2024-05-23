import { PostsProp } from "@/app/lib/definations";
import React from "react";

const Gallery: React.FC<PostsProp> = ({ posts }) => {
  return (
    <>
      <main>
        <div className="container">
          <div className="gallery">
            {posts.map((post, index) => {
              return (
                <div key={index} className="gallery-item" tabIndex={0}>
                  <img
                    src={post.image}
                    // src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                    className="gallery-image"
                    alt="post"
                  />

                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span>
                    <i className="fas fa-clone" aria-hidden="true"></i>
                  </div>

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true"></i> 42
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true"></i> 1
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          {/* End of gallery */}
        </div>
        {/* End of container  */}
      </main>
    </>
  );
};

export default Gallery;
