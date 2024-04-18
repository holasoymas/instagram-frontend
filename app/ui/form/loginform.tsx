"use client";

import "../../styles/login.css";
import Link from "next/link";

import { OAuthSeperator } from "./OAuthSeperator";

export const LoginForm = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="heading">Instagram</div>
        <form className="login-form">
          <div className="field">
            <label htmlFor="username"></label>
            <input
              id="username"
              type="name"
              name="username"
              placeholder="username or email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password"></label>
            <input id="password" type="password" name="password" placeholder="password" required />
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
