"use client";

import { useState } from "react";
import style from "@/styles/addTopic.module.scss";
import style2 from "@/styles/button.module.scss";
import axios from "axios";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill the all field");
    }

    try {
      const res = await axios.post("http://localhost:3000/api/topics", {
        title: title,
        description: description,
      });
      if (res.status === 201) {
        alert("Data inserted successfully");
        console.log(res);
      } else {
        throw new Error("Error inserting data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputDiv}>
          <h1>Add Blog</h1>
          <h3>Title</h3>
          <input
            type="text"
            value={title}
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <h3>Description</h3>
          <textarea
            name=""
            id=""
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="detail"
          ></textarea>
          <button type="submit" className={style2.btn}>
            Add Topic
          </button>
        </div>
      </form>
    </div>
  );
}
