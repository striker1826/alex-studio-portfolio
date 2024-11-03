"use client";

import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import close_icon from "@/assets/close.svg";

interface Props {
  state: "white" | "black" | "";
  openNav: "open" | "close" | null;
  setState: (state: "white" | "black" | "") => void;
  setOpenNav: (state: "open" | "close" | null) => void;
}

const Sidebar = ({ state, setState, openNav, setOpenNav }: Props) => {
  //   const [openNav, setOpenNav] = useState<"open" | "close" | null>(null);

  const handleMoveNav = (e: React.MouseEvent, state: "open" | "close" | null) => {
    e.stopPropagation();
    setOpenNav(state);
  };

  const handleToggleState = (state: "white" | "black" | "", e: React.MouseEvent) => {
    e.stopPropagation();

    if (state === "black") {
      setState("white");
      setOpenNav("close");
      return;
    }

    if (state === "white") {
      setState("black");
      setOpenNav("close");
      return;
    }

    if (state === "") {
      setState("white");
      setOpenNav("close");
    }
  };

  return (
    <div>
      <div
        className={`${styles.nav_bar} ${openNav === "open" && styles.open} ${openNav === "close" && styles.close}`}
        onClick={(e) => handleMoveNav(e, "close")}
      >
        <div className={styles.nav_menu}>
          <button className={styles.portfolio_btn} onClick={(e: React.MouseEvent) => handleToggleState(state, e)}>
            <p className={styles.sidebar_portfolio}>- Portfolio</p>
          </button>

          <a href="schedule-contact">
            <p className={styles.sidebar_schedule}>- Schedule & Contact</p>
          </a>
        </div>
        <button className={styles.nav_bar_close} onClick={(e) => handleMoveNav(e, "close")}>
          <Image src={close_icon} width={20} height={20} objectFit="cover" alt="close_button" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
