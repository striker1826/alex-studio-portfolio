import CustomCalendar from "@/components/templates/calendar/Calendar";
import React from "react";
import styles from "./page.module.scss";
import Description from "@/components/templates/description/Description";
import Image from "next/image";
import logo from "@/assets/alex_white_logo.png";
import Footer from "@/components/templates/footer/Footer";

const SchedulePage = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <a href="/">
          <Image className={styles.logo} src={logo} width={100} height={50} alt="logo" />
        </a>
        <a href="/?state=white">Portfoilo</a>
      </nav>
      <CustomCalendar />
      <Description />
      <Footer />
    </div>
  );
};

export default SchedulePage;
