"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";

const AlexAdmin = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const submitSchedule = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    if (!selectedDate || !name) {
      alert("빈 값이 없는지 확인해주세요.");
      return;
    }

    const response = await fetch(`${process.env.BASE_URL}/api/schedule`, {
      method: "POST",
      body: JSON.stringify({
        password,
        date: new Date(selectedDate),
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    setSelectedDate("");
    setName("");
    setPassword("");
  };

  return (
    <div className={styles.layout}>
      <form className={styles.schedule} onSubmit={submitSchedule}>
        <p>schedule</p>
        <input type="datetime-local" onChange={handleDateChange} value={selectedDate} />
        <input type="text" onChange={handleNameChange} value={name} placeholder="이름을 입력해 주세요." />
        <input type="text" onChange={handlePasswordChange} value={password} placeholder="비밀번호를 입력해 주세요." />
        <button className={styles.schedule_submit_btn} type="submit">
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AlexAdmin;
