"use client";
import "../../../styles/login.css";
import React, { FormEvent, MouseEventHandler, useState } from "react";
import { createPost } from "@/app/api/postRoute";
import { getLocalStorage } from "@/app/lib/utils";

const CreatePost = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setSelectedImg(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };
  // e: React.FormEvent<HTMLFormElement>
  const handleClick = async () => {
    // e.preventDefault();
    try {
      const formData = new FormData();
      if (caption && image && selectedImg) {
        formData.append("caption", caption);
        formData.append("image", selectedImg);

        const postData = createPost(formData, getLocalStorage("token"));
        console.log(postData);
      }
    } catch (err) {
      console.error("SOmething wrong with server", err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="heading">Add a post</div>
          <form
            className="login-form"
            encType="multipart/form-data"
            method="post"
            // onSubmit={handleClick}
          >
            <div className="field">
              <label htmlFor="caption"></label>
              <input
                id="caption"
                type="text"
                name="caption"
                placeholder="Add your feelings (caption)"
                onChange={handleCaption}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="image"></label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                id="image"
                name="image"
                required
              />
            </div>

            {image && (
              <div className="preview-container">
                <img src={image} alt="Preview" className="preview-image" />
              </div>
            )}
            <button type="button" onClick={handleClick} className="login-button" title="login">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
