import React from "react";
import styles from "./DarkArea.module.scss";
import Image, { StaticImageData } from "next/image";
import left_arrow from "@/assets/left_arrow.png";
import PhotoCardDarkGrid from "@/components/organisms/PhotoCardDarkGrid/PhotoCardDarkGrid";

interface Props {
  state: "black" | "white" | "";
  picture_item: StaticImageData[];
  handleChangeState: (state: "black" | "white", e: React.MouseEvent) => void;
}

const DarkArea = ({ state, picture_item, handleChangeState }: Props) => {
  return (
    <>
      <p className={state === "" ? styles.portfolio : styles.none_display}>Portfolio</p>
      <p className={state === "black" ? styles.nav_portfolio : styles.none_display}>Portfolio</p>
      <a className={state === "black" ? styles.white_nav : styles.none_display} href="/schedule-contact">
        <p>Scheduale & Contact</p>
      </a>
      {state === "black" && <PhotoCardDarkGrid state={state} picture_item={picture_item} />}
      <button
        className={state === "black" ? styles.left_button : styles.none_display}
        onClick={(e) => {
          handleChangeState("white", e);
        }}
      >
        <Image src={left_arrow} width={50} height={50} alt="arrow_button" />
      </button>
    </>
  );
};

export default DarkArea;
