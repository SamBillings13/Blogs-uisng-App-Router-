"use client";

import Link from "next/link";
import style from "../Component/login.module.scss";
import { useState } from "react";

export const Login = () => {
  interface login {
    email: string;
    password: string;
  }
  const initialLogin: login = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState<login>(initialLogin);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <h3>login</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>

      <Link href={"/signup"}> Signup</Link>
    </div>
  );
};
