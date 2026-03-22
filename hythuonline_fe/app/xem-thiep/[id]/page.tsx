"use client";

import Template1 from "@/components/wedding-templates/Template1";
import Template2 from "@/components/wedding-templates/Template2";
import Template3 from "@/components/wedding-templates/Template3";
import Template4 from "@/components/wedding-templates/Template4";
import Template5 from "@/components/wedding-templates/Template5";
import Template6 from "@/components/wedding-templates/Template6";
import Template7 from "@/components/wedding-templates/Template7";
import api from "@/lib/axios";
import { Spin } from "antd";
import { useEffect, useMemo, useState } from "react";

import Template10 from "@/components/wedding-templates/Template10_old";
import Template11 from "@/components/wedding-templates/Template11";
import Template12 from "@/components/wedding-templates/Template12";
import Template8 from "@/components/wedding-templates/Template8";
import Template9 from "@/components/wedding-templates/Template9";

// Move static data outside to prevent unnecessary re-renders
const DEFAULT_WEDDING_DATA = {
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
  countdown: {
    days: 30,
    hours: 23,
    minutes: 33,
  },
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
  gallery: {
    title: "Captured Moments",
    subtitle: "Our memories",
  },
  map: {
    title: "The Location",
    button: "Get Directions",
  },
  giftBox: {
    title: "Gift Box",
    groomTab: "Groom",
    brideTab: "Bride",
    copyButton: "Copy Number",
  },
  guestBook: {
    title: "Guest Book",
    inputLabel: "Leave a note",
    submitButton: "Post Message",
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

const getTemplateComponent = (code: string) => {
  switch (code) {
    case "template2":
      return Template2;
    case "template3":
      return Template3;
    case "template4":
      return Template4;
    case "template5":
      return Template5;
    case "template6":
      return Template6;
    case "template7":
      return Template7;
    case "template8":
      return Template8;
    case "template9":
      return Template9;
    case "template10":
      return Template10;
    case "template11":
      return Template11;
    case "template12":
      return Template12;
    default:
      return Template1;
  }
};

const deepMerge = (target: any, source: any): any => {
  const result = { ...target };
  if (!source) return result;

  Object.keys(source).forEach((key) => {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });
  return result;
};

export default function XemThiepPage({ params }: { params: { id: string } }) {
  const id = params?.id;
  const [templateData, setTemplateData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplate = async () => {
      if (!id) return;

      try {
        const response = await api.get(`/templates/${id}`);
        setTemplateData(response.data);
      } catch (error) {
        console.error("Error fetching template:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.margin = "";
      document.body.style.padding = "";
      if (header) {
        header.style.display = "";
      }
    };
  }, []);

  const finalData = useMemo(() => {
    if (!templateData) return DEFAULT_WEDDING_DATA;
    return deepMerge(DEFAULT_WEDDING_DATA, templateData.defaultData || {});
  }, [templateData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Spin size="large">
          <div className="p-12" />
        </Spin>
      </div>
    );
  }

  if (!templateData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500">Không tìm thấy mẫu thiệp</p>
      </div>
    );
  }

  const SelectedTemplate = getTemplateComponent(templateData.code);
  return <SelectedTemplate weddingData={finalData} />;
}
