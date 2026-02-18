"use client";
import styles from "@/app/page.module.scss";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

import Image from "next/image";
export default function Product({
  productName,
  image,
  description,
  updateProduct,
}) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.3,
    root: null,
    rootMargin: "0px",
  });
  useEffect(() => {
    if (entry?.isIntersecting) {
      updateProduct(productName, description);
    }
  }, [entry?.isIntersecting]);

  return (
    <article className={styles.item} ref={ref}>
      <Image
        src={image}
        fill
        sizes="(max-width:1024px) 300px"
        alt={productName}
        className={`${entry?.isIntersecting ? styles.imgAnimateIn : styles.imgAnimateOut}`}
      />
    </article>
  );
}
