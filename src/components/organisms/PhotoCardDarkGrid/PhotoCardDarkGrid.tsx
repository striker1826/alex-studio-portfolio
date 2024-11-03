import React from "react";
import styles from "./PhotoCardDarkGrid.module.scss";
import PhotoCardDark from "@/components/molecules/photoCardDark/PhotoCardDark";
import { StaticImageData } from "next/image";

interface Props {
  state: "black" | "white" | "";
  picture_item: StaticImageData[];
}

const PhotoCardDarkGrid = ({ state, picture_item }: Props) => {
  return (
    <div className={state === "black" ? styles.dark_layout : styles.none_display}>
      {picture_item.map((item, index) => {
        return (
          <div className={styles.item_wrap} key={index}>
            <PhotoCardDark item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoCardDarkGrid;
