import Link from "next/link";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
      href: "/",
    },
    {
      id: 2,
      link: "AddTopic",
      href: "/addTopic",
    },
  ];
  return (
    <div className={styles.main}>
      <nav>
        {links.map((data) => (
          <>
            <Link key={data.id} href={data.href}>
              {data.link}
            </Link>
          </>
        ))}
      </nav>
    </div>
  );
};
