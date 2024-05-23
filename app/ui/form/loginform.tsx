"use client";

import "../../styles/login.css";
import Link from "next/link";

import { OAuthSeperator } from "./OAuthSeperator";
import { useState } from "react";
import { loginUser } from "@/app/api/userRoute";
import { useRouter } from "next/navigation";

interface LoginData {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const [data, setData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData: LoginData = {
        username: data.username,
        password: data.password,
      };
      const res = await loginUser(userData);
      const { token, user } = res;
      localStorage.setItem("token", token);
      router.replace(`/profile/${user.username}`, { scroll: false });
    } catch (err) {
      console.error("Something wrong with the server", err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="heading">Instagram</div>
        <form className="login-form" method="post" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username or email"
              onChange={(e) => setData({ ...data, username: e.target.value })}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="login-button" title="login">
            Log In
          </button>
        </form>
        <OAuthSeperator text="Login" />
        <div>
          <Link className="forgot-password" href="#">
            Forgot password?
          </Link>
        </div>
        <div>
          <p>
            Don't have an account? <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
