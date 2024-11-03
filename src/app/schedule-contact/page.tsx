import CustomCalendar from "@/components/templates/calendar/Calendar";
import React from "react";
import styles from "./page.module.scss";
import Description from "@/components/templates/description/Description";
import Image from "next/image";
import logo from "@/assets/alex_white_logo.png";
import Footer from "@/components/templates/footer/Footer";
import { Schedule } from "@/types";

const SchedulePage = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/schedule`, {
    method: "GET",
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API 요청 오류:", errorText);
    console.log(`API 요청 실패: ${response.status}`);
  }

  const { result: scheduleList }: { result: Schedule[] } = await response.json();

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <a href="/">
          <Image className={styles.logo} src={logo} width={100} height={50} alt="logo" />
        </a>
        <a href="/?state=white">Portfoilo</a>
      </nav>
      <CustomCalendar schedule={scheduleList} />
      <Description />
      <Footer />
    </div>
  );
};

export default SchedulePage;
