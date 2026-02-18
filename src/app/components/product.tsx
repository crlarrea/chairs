"use client";
import styles from "@/app/page.module.scss";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { ItemProps } from "../types/types";
import Image from "next/image";
export default function Product({
  productName,
  image,
  description,
  rating,
  price,
  updateProduct,
}: ItemProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });
  useEffect(() => {
    if (entry?.isIntersecting) {
      updateProduct(productName, description, rating,price );
    }
  }, [entry?.isIntersecting]);

  return (
    <article className={styles.item} ref={ref}>
      <Image
        src={image}
        fill
        sizes="(max-width:1024px) 300px"
        alt={productName}
        className={`${entry?.isIntersecting ? styles.imgAnimateIn : ""}`}
      />
    </article>
  );
}
