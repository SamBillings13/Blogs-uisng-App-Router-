"use client";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";

export const Signup = () => {
  interface formData {
    name: string;
    email: string;
    password: string;
  }

  const router = useRouter();

  const initialData: formData = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<formData>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }); 
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      );
      console.log(response);

      setFormData(initialData);
      toast.success("Successfully submitted");
      
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred while signing up. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </>
  );
};
