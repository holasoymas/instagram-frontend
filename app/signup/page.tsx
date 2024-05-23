"use client";
import { Signup } from "../ui/form/signup";
import { ProfilePic } from "../ui/form/profilePic";
import { PasswordInputField } from "../ui/form/password";
import { useState } from "react";
import { UserProfile } from "../lib/definations";
import { createUser } from "../api/userRoute";
import Notifications from "../ui/Notifications";

export default function Signin() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState<boolean>(false);
  const [msg, setMsg] = useState("");
  // let severity;

  const [formData, setFormData] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    birthday: "",
    profilePic: "",
    password: "",
    repeatPassword: "",
  });

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitStep1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add validation logic here if needed
    setStep(2);
  };

  const handleSubmitStep2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add validation logic here if needed
    setStep(3);
  };

  const handleSubmitFinalStep = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.profilePic === "") {
        formData.profilePic = "https://res.cloudinary.com/dbkltjz6j/image/upload/v1713110781/my-account-icon_pdmjw8.svg";
      }
      const res = await createUser(formData);
      console.log(res);
      // severity = res.success ? "success" : "error";
      localStorage.setItem("token", res.token);
      setMsg(res.msg);
      setOpen(true);
      // Add form submission logic to the server
      console.log("Form data submitted:", formData);
    } catch (err) {
      console.error("Error while uplaoding data ", err);
    }
  };

  const handleProfilePictureName = (fileName: string) => {
    setFormData({ ...formData, profilePic: fileName });
  };

  return (
    <>
      <Notifications open={open} message={msg} severity="error" handleClose={handleClose} />
      {step === 1 && (
        <Signup formData={formData} handleChange={handleChange} handleSubmit={handleSubmitStep1} />
      )}
      {step === 2 && (
        <ProfilePic
          handleChange={handleChange}
          handleSubmit={handleSubmitStep2}
          handleProfilePictureName={handleProfilePictureName}
        />
      )}
      {step === 3 && (
        <PasswordInputField
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmitFinalStep}
        />
      )}
    </>
  );
}
