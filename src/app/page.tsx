"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import { outfit } from "./fonts/fonts";
export default function Home() {
  const data = [
    { image: "/chair_1.avif" },
    { image: "/chair_1.avif" },
    { image: "/chair_1.avif" },
    { image: "/chair_1.avif" },
    { image: "/chair_1.avif" },
    { image: "/chair_1.avif" },
  ];

  const [activeMenu, setActiveMenu] = useState("overview");
  const showText = (ev) => {
    const selectedMenu = ev.target.dataset.key;
    setActiveMenu(selectedMenu);
  };
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {data.map((entry, index) => {
          return (
            <article className={styles.item} key={index}>
              <Image
                src={entry.image}
                alt="chair"
                fill
                sizes="(max-width:1024px) 300px"
              />
            </article>
          );
        })}
      </section>
      <section className={styles.footer}>
        <ul className={styles.menu}>
          <li
            onClick={(ev) => showText(ev)}
            data-key="overview"
            className={
              activeMenu === "overview" ? styles.active : styles.inactive
            }
          >
            overview
          </li>
          <li
            onClick={(ev) => showText(ev)}
            data-key="description"
            className={
              activeMenu === "description" ? styles.active : styles.inactive
            }
          >
            description
          </li>
          <li
            onClick={(ev) => showText(ev)}
            data-key="measurement"
            className={
              activeMenu === "measurement" ? styles.active : styles.inactive
            }
          >
            measurements
          </li>
        </ul>
        <article className={`${styles.copy} ${outfit.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          perferendis aut a, in, sint quas ducimus labore similique quo dolorum
          inventore corrupti veniam voluptatibus vitae quia nihil! Illo, eius
          et.
        </article>
      </section>
    </main>
  );
}
