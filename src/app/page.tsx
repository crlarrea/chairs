"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import { outfit } from "./fonts/fonts";
import { FaPlus, FaStar, FaTruckMoving } from "react-icons/fa6";

export default function Home() {
  const data = [
    { image: "/chair_1.avif" },
    {
      product_name: "VEDBO",
      image: "/chair_2.avif",
      description:
        "Soft but distinct lines create an elegant profile. Perfect when you want your own space in an open environment, yet still socialise with others. The cover in brown-pink adds warmth and energy.",
    },
    {
      product_name: "MILA",
      image: "/chair_3.avif",
      description:
        "Bringing new life to an old favourite. We first introduced this chair in the 1950’s. Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!",
    },
    {
      product_name: "STRANDMON",
      image: "/chair_4.avif",
      description:
        "Bringing new life to an old favourite. We first introduced this chair in the 1950’s. Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!",
    },

    {
      product_name: "TOSSBERG",
      image: "/chair_5.avif",
      description:
        "A stable chair made for those lovely dinners with family and friends. Covered with durable leather where the soft padding and lumbar support make you sit comfortably – for long periods.",
    },
  ];

  const [activeMenu, setActiveMenu] = useState("overview");
  const showText = (ev) => {
    const selectedMenu = ev.target.dataset.key;
    setActiveMenu(selectedMenu);
  };
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <p className={styles.brandName}>møbel</p>
      </section>
      <section className={styles.hero}>
        <div className={styles.pricing}>
          <p className={styles.price}>£199</p>
          <p className={styles.cta}>
            <FaPlus />
          </p>
        </div>
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
          <h2>
            DYVLINGE
            <span>
              4 .3
              <FaStar />
            </span>
          </h2>
          <p>
            MILA swivel easy chair was presented as the "anti-stress armchair"
            in our 1967 catalogue. A big success designed by Gillis Lundgren –
            now given new life with the name DYVLINGE in the Nytillverkad
            collection.
          </p>
          <span className={styles.delivery}>
            <FaTruckMoving /> free delivery
          </span>
        </article>
      </section>
    </main>
  );
}
