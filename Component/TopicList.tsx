import Link from "next/link";
import style from "./topic.module.scss";
import { DeleteBtn } from "./DeleteBtn";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
export const TopicList = async () => {
  const res: any = await axios.get("http://localhost:3000/api/topics");
  console.log(res.data.getTopics);
  return (
    <>
      {res.data.getTopics.map((r: any) => (
        <div className={style.main} key={r._id}>
          <div>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
          <div className={style.Btns}>
            <DeleteBtn id={r._id} />
            <Link href={`/edit/${r._id}`}>
              <FaEdit color="rgb(5, 49, 49)" size={20} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
