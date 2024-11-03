"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import WhiteArea from "@/components/templates/whiteArea/white-area";
import DarkArea from "@/components/templates/darkArea/DarkArea";
import { useSearchParams } from "next/navigation";
import Sidebar from "@/components/templates/sidebar/Sidebar";
import white_1 from "@/assets/white/CH_01361-Edit.jpeg";
import white_2 from "@/assets/white/white_2.jpg";
import white_3 from "@/assets/white/white_3.jpg";
import white_4 from "@/assets/white/white_4.jpg";
import white_5 from "@/assets/white/white_5.jpg";
import white_6 from "@/assets/white/white_6.jpg";

import dark_1 from "@/assets/dark/dark_1.jpg";
import dark_2 from "@/assets/dark/dark-2.jpg";
import dark_3 from "@/assets/dark/dark_3.jpg";
import dark_4 from "@/assets/dark/dark_4.jpg";
import dark_5 from "@/assets/dark/dark_5.jpg";
import dark_6 from "@/assets/dark/dark_6.jpg";

const picture_darkArea = [dark_1, dark_2, dark_3, dark_4, dark_5, dark_6];

const picture_whiteArea = [white_1, white_2, white_3, white_4, white_5, white_6];

export default function Home() {
  const searchParams = useSearchParams();
  const paramState = searchParams.get("state") as "white" | "black" | null;

  const [openNav, setOpenNav] = useState<"open" | "close" | null>(null);
  const [state, setState] = useState<"white" | "black" | "">(paramState ? paramState : "");

  const handleMoveNav = (e: React.MouseEvent, state: "open" | "close" | null) => {
    e.stopPropagation();
    setOpenNav(state);
  };

  const handleChangeState = (state: "white" | "black", e: React.MouseEvent) => {
    e.stopPropagation();
    setState(state);
  };

  return (
    <div
      className={`${styles.layout} ${state === "white" ? styles.white : ""} ${state === "black" ? styles.black : ""}`}
    >
      <div className={styles.hamburger} onClick={(e) => handleMoveNav(e, "open")} />

      <Sidebar state={state} setState={setState} openNav={openNav} setOpenNav={setOpenNav} />
      <div className={state && "black" ? styles.none_display : styles.logo} />

      <div
        className={`${styles.left} ${styles.white}`}
        onClick={(e) => {
          handleChangeState("white", e);
        }}
      >
        <WhiteArea state={state} picture_item={picture_whiteArea} handleChangeState={handleChangeState} />
      </div>

      <div
        className={`${styles.right} ${styles.black}`}
        onClick={(e) => {
          handleChangeState("black", e);
        }}
      >
        <DarkArea state={state} picture_item={picture_darkArea} handleChangeState={handleChangeState} />
      </div>

      <a className={state === "" ? styles.nav : styles.none_display} href="/schedule-contact">
        <p>Scheduale & Contact</p>
      </a>
    </div>
  );
}
