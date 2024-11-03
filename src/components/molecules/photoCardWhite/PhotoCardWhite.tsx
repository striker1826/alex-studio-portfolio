"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./PhotoCardWhite.module.scss";
import React, { useState } from "react";

const PhotoCardWhite = ({ item }: { item: StaticImageData }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleChangeFlipped = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setFlipped((prevFlipped) => !prevFlipped);
  };

  const handleChangeClicked = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setClicked(true);
  };

  return (
    <>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : !clicked ? "" : styles.none_flipped}`}
        onClick={(e) => {
          handleChangeFlipped(e);
          handleChangeClicked(e);
        }}
      >
        <div className={styles.front}>Click!</div>
        <div className={styles.back}>
          <Image src={item} objectFit="cover" fill alt="picture" />
        </div>
      </div>
    </>
  );
};

export default PhotoCardWhite;
