import CustomCalendar from "@/components/templates/calendar/Calendar";
import React from "react";
import styles from "./page.module.scss";
import Description from "@/components/templates/description/Description";
import Image from "next/image";
import logo from "@/assets/alex_white_logo.png";
import Footer from "@/components/templates/footer/Footer";
import { Schedule } from "@/types";

const SchedulePage = async () => {
  // const response = await fetch(`${process.env.BASE_URL}/api/schedule`, {
  //   method: "GET",
  // });

  // // 응답 본문을 먼저 읽어들입니다.
  // const text = await response.text();

  // // 응답 상태를 확인합니다.
  // if (!response.ok) {
  //   console.error("API 요청 오류:", text);
  // }

  // // JSON 파싱을 진행합니다.
  // const { result: scheduleList }: { result: Schedule[] } = JSON.parse(text);
  const scheduleList: Schedule[] = [];

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <a href="/">
          <Image className={styles.logo} src={logo} width={100} height={50} alt="logo" />
        </a>
        <a href="/?state=white">Portfolio</a>
      </nav>
      <CustomCalendar schedule={scheduleList} />
      <Description />
      <Footer />
    </div>
  );
};

export default SchedulePage;
