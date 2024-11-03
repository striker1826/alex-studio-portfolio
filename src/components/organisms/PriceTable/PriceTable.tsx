import React from "react";
import styles from "./PriceTable.module.scss";

const PriceTable = () => {
  return (
    <>
      <table className={styles.price_table}>
        <thead>
          <tr>
            <th>패키지</th>
            <th>정상가</th>
            <th>할인가</th>
            <th>포함 내역</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>개인 스냅</td>
            <td className={styles.line_through}>160,000원</td>
            <td className={styles.bold}>100,000원</td>
            <td>원본(전체), 셀렉 보정본, 정밀 보정본 8장</td>
          </tr>
          <tr>
            <td>커플/우정 스냅</td>
            <td className={styles.line_through}>320,000원</td>
            <td className={styles.bold}>180,000원</td>
            <td>원본(전체), 셀렉 보정본, 정밀 보정본 10장</td>
          </tr>
          <tr>
            <td>프로필/컨셉 촬영</td>
            <td className={styles.line_through}>350,000원</td>
            <td className={styles.bold}>200,000원</td>
            <td>원본(전체), 셀렉 보정본, 정밀 보정본 8장</td>
          </tr>
          <tr>
            <td>웨딩 스냅</td>
            <td className={styles.line_through}>450,000원</td>
            <td className={styles.bold}>350,000원</td>
            <td>원본(전체), 셀렉 보정본, 정밀 보정본 10장</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.price_table_mobile}>
        <thead>
          <tr>
            <th>패키지</th>
            <th>정상가</th>
            <th>할인가</th>
            <th>포함 내역</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>개인 스냅</td>
            <td className={styles.line_through}>160,000원</td>
            <td className={styles.bold}>100,000원</td>
            <td>
              원본(전체), 셀렉 보정본, <br />
              정밀 보정본 8장
            </td>
          </tr>
          <tr>
            <td>커플/우정 스냅</td>
            <td className={styles.line_through}>320,000원</td>
            <td className={styles.bold}>180,000원</td>
            <td>
              원본(전체), 셀렉 보정본, <br />
              정밀 보정본 10장
            </td>
          </tr>
          <tr>
            <td>프로필/컨셉 촬영</td>
            <td className={styles.line_through}>350,000원</td>
            <td className={styles.bold}>200,000원</td>
            <td>
              원본(전체), 셀렉 보정본, <br />
              정밀 보정본 8장
            </td>
          </tr>
          <tr>
            <td>웨딩 스냅</td>
            <td className={styles.line_through}>450,000원</td>
            <td className={styles.bold}>350,000원</td>
            <td>
              원본(전체), 셀렉 보정본, <br />
              정밀 보정본 10장
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PriceTable;
