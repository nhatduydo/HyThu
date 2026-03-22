"use client";

import Template9 from "@/components/wedding-templates/Template9";
import { useEffect } from "react";

const MOCK_WEDDING_DATA = {
  brideName: "Yến Nhi",
  groomName: "Nguyễn Minh Quân",
  brideFullName: "Lê Thị Ánh Dương",
  eventType: "Lễ Vu Quy",
  eventType2: "Lễ Thành Hôn",
  date: {
    day: "Thứ Bảy",
    month: "Tháng 2",
    dayNumber: "28",
    year: "2026",
    time: "12:00",
    time2: "10H45",
    day2: "CHỦ NHẬT",
    lunar: "Tức ngày 20 tháng 01 năm Bính Ngọ",
    dayName: "Thứ Bảy",
  },
  location: {
    type: "TẠI TƯ GIA NHÀ GÁI",
    type2: "TẠI TƯ GIA NHÀ TRAI",
    address: "Mai Dịch - Hà Nội",
    address2: "15 Lạch Tray, Lê Lợi, Ngô Quyền, Hải Phòng",
  },
  groomInfo: {
    name: "Nguyễn Minh Quân",
    dob: "27.01.2000",
    city: "TP. Hải Phòng",
    quote:
      "Người đàn ông đã độc thân rất lâu và cuối cùng cũng chịu ký vào hợp đồng hôn nhân trọn đời.",
  },
  brideInfo: {
    name: "Lê Thị Ánh Dương",
    dob: "15.08.2002",
    city: "TP. Hà Nội",
    quote:
      "Cô gái xinh đẹp, dịu dàng và là lý do chú rể tự nguyện bỏ cuộc sống độc thân",
  },
  coupleImage: "/dam1.jpeg",
  groomImage: "/dam1.jpeg",
  brideImage: "/dam1.jpeg",
  galleryImages: [
    "/dam1.jpeg",
    "/dam1.jpeg",
    "/dam1.jpeg",
    "/dam1.jpeg",
    "/dam1.jpeg",
  ],
  countdown: { days: 30, hours: 23, minutes: 33 },
  intro: {
    title1: "We are",
    title2: "getting",
    title3: "married",
    description:
      "Gặp nhau là duyên, đi cùng nhau là nợ. Cảm ơn cuộc đời đã mang chúng ta đến bên nhau để cùng viết nên câu chuyện tình yêu này.",
  },
  ceremony: {
    label: "The Ceremony",
    timeLabel: "Thời gian",
    locationLabel: "Địa điểm",
    mapButton: "View Map",
  },
  gallery: { title: "Captured Moments", subtitle: "Our memories" },
  map: { title: "The Location", button: "Get Directions" },
  giftBox: {
    title: "Gift Box",
    groomTab: "Chú rể",
    brideTab: "Cô dâu",
    copyButton: "Copy số tài khoản",
  },
  guestBook: {
    title: "Guest Book",
    inputLabel: "Gửi lời chúc đến cặp đôi...",
    submitButton: "Gửi lời chúc",
  },
  weddingType: "bride",
  bankInfo: {
    groom: {
      bankName: "MB Bank",
      bankId: "MB",
      accountNumber: "0334806461",
      accountName: "NGUYEN MINH QUAN",
      template: "print",
    },
    bride: {
      bankName: "Vietcombank",
      bankId: "VCB",
      accountNumber: "1040856024",
      accountName: "LE THI ANH DUONG",
      template: "print",
    },
  },
};

export default function PreviewPage() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    const header = document.querySelector("header");
    if (header) header.style.display = "none";
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.margin = "";
      document.body.style.padding = "";
      if (header) header.style.display = "";
    };
  }, []);

  return <Template9 weddingData={MOCK_WEDDING_DATA} />;
}
