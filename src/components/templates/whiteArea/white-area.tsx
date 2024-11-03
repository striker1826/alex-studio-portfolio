import React from "react";
import styles from "./white-area.module.scss";
import Image, { StaticImageData } from "next/image";
import PhotoCardWhiteGrid from "@/components/organisms/PhotoCardWhiteGrid/PhotoCardWhiteGrid";

interface Props {
  state: "white" | "black" | "";
  picture_item: StaticImageData[];
  handleChangeState: (state: "white" | "black", e: React.MouseEvent) => void;
}

const WhiteArea = ({ state, picture_item, handleChangeState }: Props) => {
  return (
    <>
      <p className={state === "" ? styles.portfolio : styles.none_display}>Portfolio</p>
      <p className={state === "white" ? styles.nav_portfolio : styles.none_display}>Portfolio</p>
      <a className={state === "white" ? styles.black_nav : styles.none_display} href="/schedule-contact">
        <p>Scheduale & Contact</p>
      </a>

      <PhotoCardWhiteGrid state={state} picture_item={picture_item} />

      <button
        className={state === "white" ? styles.right_button : styles.none_display}
        onClick={(e) => {
          handleChangeState("black", e);
        }}
      >
        <Image
          src="https://alex-diptyque.netlify.app/public/images/right_arrow.svg"
          width={50}
          height={50}
          alt="arrow_button"
        />
      </button>
    </>
  );
};

export default WhiteArea;
