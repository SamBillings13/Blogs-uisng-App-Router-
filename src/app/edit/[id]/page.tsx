"use client";

import { useState } from "react";
import axios from "axios";
import style from "@/styles/addTopic.module.scss";
import style2 from "@/styles/button.module.scss";

export default function EditPage({ params }: any) {
  const { id } = params;
  console.log(id);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  return (
    <form>
      <div className={style.main}>
        <div className={style.inputDiv}>
          <h1>Edit Blog</h1>
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
          <button className={style2.btn}>Edit Topic</button>
        </div>
      </div>
    </form>
  );
}
