import PhotoCardWhite from "@/components/molecules/photoCardWhite/PhotoCardWhite";
import { StaticImageData } from "next/image";
import styles from "./PhotoCardWhiteGrid.module.scss";
import React from "react";

const PhotoCardWhiteGrid = ({
  state,
  picture_item,
}: {
  state: "white" | "black" | "";
  picture_item: StaticImageData[];
}) => {
  return (
    <div className={state === "white" ? styles.first_layout : styles.none_display}>
      {picture_item.map((item, index) => {
        return (
          <div className={styles.item_wrap} key={index}>
            <PhotoCardWhite item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoCardWhiteGrid;
