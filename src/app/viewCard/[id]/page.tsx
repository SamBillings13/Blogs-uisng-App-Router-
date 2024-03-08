import style from "@/styles/card.module.scss";

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

const page = async ({ params }: any) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  console.log(id, "hjghjgj");
  return (
    <div>
      <div>
        {
          <div className={style.main} key={id}>
            <div>
             
                <h3>{title}</h3>
              

              <p>{description}</p>
            </div>
       
          </div>
        }
      </div>
    </div>
  );
};
export default page;
