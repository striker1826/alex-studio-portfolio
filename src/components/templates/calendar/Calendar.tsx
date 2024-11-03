"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "./CustomCalendar.css";
import Image from "next/image";
import left_arrow from "@/assets/left_black_arrow.png";
import { Schedule } from "@/types";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  schedule: Schedule[] | [];
}

const CustomCalendar = ({ schedule }: Props) => {
  const [value, onChange] = useState<Value>(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const formatWeekday = (locale: string | undefined, date: Date) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[date.getDay()];
  };

  const formatDay = (locale: string | undefined, date: Date) => {
    return String(date.getDate());
  };

  // 이전 달로 이동하는 함수
  const handlePreviousMonth = () => {
    setActiveStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // 다음 달로 이동하는 함수
  const handleNextMonth = () => {
    setActiveStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const formatToName = (name: string): string => {
    const familyName = name.slice(0, 1);
    const result = familyName + "**";
    return result;
  };

  const joinToNameAndTime = (name: string, date: Date) => {
    const hour = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    if (Number(minutes) <= 0) {
      return (
        <div className="reservation_content">
          <p>{`${formatToName(name)}${hour}시`}</p>
        </div>
      );
    } else {
      return (
        <div className="reservation_content">
          <p>{name}</p>
          <p>{`${hour}시 ${minutes}분`}</p>
        </div>
      );
    }
  };

  return (
    <div className="layout">
      <button className="left_arrow" onClick={handlePreviousMonth}>
        <Image src={left_arrow} width={30} alt="left_arrow" />
      </button>

      <Calendar
        className="calendar-container"
        calendarType="gregory"
        view="month"
        prev2Label={null}
        next2Label={null}
        formatShortWeekday={formatWeekday}
        formatDay={formatDay}
        onChange={onChange}
        value={value}
        activeStartDate={activeStartDate}
        navigationLabel={({ date }) => (
          <div className="custom-navigation">
            <span className="month-label">{date.toLocaleString("en-US", { month: "numeric" })}</span>
            <span className="year-label">{date.getFullYear()}</span>
            <div className="mobile_left_arrow" onClick={handlePreviousMonth}>
              <Image src={left_arrow} width={20} alt="left_arrow" />
            </div>
            <div className="mobile_right_arrow" onClick={handleNextMonth}>
              <Image src={left_arrow} width={20} alt="left_arrow" />
            </div>
          </div>
        )}
        tileContent={({ date, view }) => {
          return schedule.map((schedule) => {
            return view === "month" && date.getDate() === new Date(schedule.date).getDate() ? (
              <div className="reservation">{joinToNameAndTime(schedule.name, schedule.date)}</div>
            ) : null;
          });
        }}
      />
      <button className="right_arrow" onClick={handleNextMonth}>
        <Image src={left_arrow} width={30} alt="left_arrow" />
      </button>
    </div>
  );
};

export default CustomCalendar;
