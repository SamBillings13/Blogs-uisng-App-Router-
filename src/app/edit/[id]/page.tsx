import React from "react";
import { EditTopic } from "../../../../Component/EditTopic";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function EditPage({ params }: any) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div>
      <EditTopic id={id} title={title} description={description} />
    </div>
  );
}
