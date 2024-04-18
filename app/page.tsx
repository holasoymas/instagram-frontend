"use client";
import React, { useEffect, useState } from "react";
import { LoginForm } from "./ui/form/loginform";
import Feed from "./feed/page";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return <>{isLoggedIn ? <Feed /> : <LoginForm />}</>;
}
