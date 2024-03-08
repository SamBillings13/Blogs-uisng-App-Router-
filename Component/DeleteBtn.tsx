"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
export const DeleteBtn = ({ id }: any) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("are you confirm");
    try {
      if (confirmed) {
        const res: any = await axios.delete(
          `http://localhost:3000/api/topics/?id=${id}`
        );
        
          router.refresh();
     
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <RiDeleteBin6Line onClick={removeTopic} color="red" size={20} />
    </div>
  );
};
