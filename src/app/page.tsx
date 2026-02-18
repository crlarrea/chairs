"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import { outfit } from "./fonts/fonts";
import { FaPlus, FaStar, FaTruckMoving } from "react-icons/fa6";
import Product from "./components/product";

type MenuType = "overview" | "description" | "measurement";

type ProductData = {
  product_name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
};

type ProductState = {
  productName: string;
  description: string;
  rating: number;
  price: number;
};

export default function Home() {
  const data: ProductData[] = [
    {
      product_name: "EKENÄSET",
      image: "/chair_1.avif",
      price: 179,
      rating: 4.3,
      description:
        "EKENÄSET armchair adds a stylish retro vibe to the room that’s inspired by 1950s Scandinavian design. The classic look goes anywhere in the home – and gives you sturdy and robust seating for many years.",
    },
    {
      product_name: "VEDBO",
      image: "/chair_2.avif",
      price: 279,
      rating: 4.8,
      description:
        "Soft but distinct lines create an elegant profile. Perfect when you want your own space in an open environment, yet still socialise with others. The cover in brown-pink adds warmth and energy.",
    },
    {
      product_name: "DYVLINGE",
      image: "/chair_3.avif",
      price: 199,
      rating: 4.5,
      description:
        'MILA swivel easy chair was presented as the "anti-stress armchair" in our 1967 catalogue. A big success designed by Gillis Lundgren – now given new life with the name DYVLINGE in the Nytillverkad collection.',
    },
    {
      product_name: "STRANDMON",
      image: "/chair_4.avif",
      price: 250,
      rating: 4.7,
      description:
        "Bringing new life to an old favourite. We first introduced this chair in the 1950’s. Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!",
    },
    {
      product_name: "TOSSBERG",
      image: "/chair_5.avif",
      price: 125,
      rating: 4.8,
      description:
        "A stable chair made for those lovely dinners with family and friends. Covered with durable leather where the soft padding and lumbar support make you sit comfortably – for long periods.",
    },
  ];

  const [activeMenu, setActiveMenu] = useState<MenuType>("overview");

  const [productState, setProductState] = useState<ProductState>({
    productName: "",
    description: "",
    rating: 0,
    price: 0,
  });

  const updateProduct = (
    productName: string,
    description: string,
    rating: number,
    price: number,
  ) => {
    setProductState({
      productName,
      description,
      rating,
      price,
    });
  };

  const showText = (ev: React.MouseEvent<HTMLLIElement>) => {
    const key = ev.currentTarget.dataset.key as MenuType;
    setActiveMenu(key);
  };

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <p className={styles.brandName}>møbel</p>
      </section>

      <section className={styles.hero}>
        <div className={styles.pricing}>
          <p className={styles.price}>£{productState.price}</p>
          <p className={styles.cta}>
            <FaPlus />
          </p>
        </div>

        {data.map((entry) => (
          <Product
            key={entry.product_name}
            productName={entry.product_name}
            description={entry.description}
            price={entry.price}
            rating={entry.rating}
            image={entry.image}
            updateProduct={updateProduct}
          />
        ))}
      </section>

      <section className={styles.footer}>
        <ul className={styles.menu}>
          <li
            onClick={showText}
            data-key="overview"
            className={
              activeMenu === "overview" ? styles.active : styles.inactive
            }
          >
            overview
          </li>

          <li
            onClick={showText}
            data-key="description"
            className={
              activeMenu === "description" ? styles.active : styles.inactive
            }
          >
            description
          </li>

          <li
            onClick={showText}
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
            {productState.productName}
            <span>
              {productState.rating}
              <FaStar />
            </span>
          </h2>

          <p>{productState.description}</p>

          <span className={styles.delivery}>
            <FaTruckMoving /> free delivery
          </span>
        </article>
      </section>
    </main>
  );
}
