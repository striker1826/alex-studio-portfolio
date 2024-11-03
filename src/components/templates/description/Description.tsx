import React from "react";
import styles from "./Description.module.scss";
import PriceTable from "@/components/organisms/PriceTable/PriceTable";
import Link from "next/link";
import kakao_icon from "@/assets/KakaoTalk_Photo_2024-11-02-14-51-43.png";
import Image from "next/image";
import insta_icon from "@/assets/instagram.png";

const Description = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.heading}>
        <p> ✨ 찰칵! 예쁜 사진, 합리적인 가격으로 담아드려요 ✨</p>
        <p>지금, 특별한 이벤트로 모든 패키지 할인 중!</p>
      </div>

      <div>
        <p>왜 Alex 작가를 선택해야 할까요?</p>
        <p>고퀄리티 사진: 셀렉, 색감 보정, 정밀 보정까지! 전문가의 손길로 완성되는 최고의 사진을 만나보세요.</p>
        <p>합리적인 가격: 할인된 가격으로 부담 없이 예쁜 사진을 남길 수 있어요.</p>
        <p>다양한 컨셉: 개인, 커플, 우정, 프로필, 웨딩까지! 어떤 컨셉이든 원하는대로 연출해 드려요.</p>
        <p>친절한 상담: 궁금한 점은 언제든지 편하게 문의하세요. 친절하게 답변해 드립니다.</p>
      </div>

      <PriceTable />

      <div>
        <p>** 추가 혜택**</p>
        <p>원본 무료 제공: 촬영한 모든 사진을 원본으로 드려요!</p>
        <p>무료 보정 1회: 추가적인 보정이 필요하다면 1회 무료로 진행해 드립니다.</p>
        <p>합리적인 추가금: 의상 체인지, 컨셉 추가, 정밀 보정본 추가 등은 합리적인 가격으로 이용 가능합니다.</p>
      </div>

      <div>
        <p>촬영 과정</p>
        <p>원하는 패키지를 선택하고 예약하세요.</p>
        <p>촬영 당일, 멋진 모습을 담아드립니다.</p>
        <p>원본 사진 중 마음에 드는 사진을 선택해주세요. (원본의 30% 이내)</p>
        <p>선택한 사진에 색감 보정을 진행합니다.</p>
        <p>보정된 사진 중 정밀 보정본을 선택해주세요.</p>
        <p>피부, 얼굴, 몸매 등을 세밀하게 보정하여 완벽한 사진을 드립니다.</p>
        <p>궁금한 점은 언제든지 문의하세요!</p>
      </div>

      <div className={styles.social_container}>
        <Link href="https://open.kakao.com/o/spWPBM8e">
          <Image src={kakao_icon} width={50} height={50} alt="오픈채팅방 링크" />
        </Link>

        <Link href="https://www.instagram.com/alexp._.hoto/profilecard/?igsh=aHRibHZqcmU0ZjU3">
          <Image src={insta_icon} width={50} height={50} alt="인스타그램 링크" />
        </Link>
      </div>

      <div>
        <p>✨ 지금 바로 예약하고, 특별한 순간을 아름다운 사진으로 남겨보세요! ✨</p>
      </div>
    </div>
  );
};

export default Description;
