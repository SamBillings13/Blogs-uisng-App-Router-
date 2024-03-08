"use client";
import { useState } from "react";
import style from "@/styles/addTopic.module.scss";
import style2 from "@/styles/button.module.scss";
import { useRouter } from "next/navigation";
export const EditTopic = ({ id, title, description }: any) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.main}>
        <div className={style.inputDiv}>
          <h1>Edit Blog</h1>
          <h3>Title</h3>
          <input
            type="text"
            value={newTitle}
            onChange={(e: any) => {
              setNewTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <h3>Description</h3>    
          <textarea
            name=""
            id=""
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
            placeholder="detail"
          ></textarea>
          <button className={style2.btn}>Update Topic</button>
        </div>
      </div>
    </form>
  );
};
