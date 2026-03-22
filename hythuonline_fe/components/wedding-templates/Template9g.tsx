"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LavenderDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          height: "1px",
          width: "64px",
          background: "linear-gradient(to right, transparent, #b8a9c9)",
        }}
      />
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#9b8bb4",
        }}
      />
      <div
        style={{
          height: "1px",
          width: "64px",
          background: "linear-gradient(to left, transparent, #b8a9c9)",
        }}
      />
    </div>
  );
}

export default function Template9g({ weddingData }: { weddingData: any }) {
  const d = weddingData;

  const [countdown, setCountdown] = useState({
    days: d.countdown?.days || 0,
    hours: d.countdown?.hours || 0,
    minutes: d.countdown?.minutes || 0,
    seconds: 0,
  });
  useEffect(() => {
    const wd = new Date(
      `${d.date?.year || 2026}-${String(mn(d.date?.month)).padStart(2, "0")}-${String(d.date?.dayNumber || 1).padStart(2, "0")}T${(d.date?.time || "12:00").replace("H", ":")}:00`,
    );
    const t = setInterval(() => {
      const dist = wd.getTime() - Date.now();
      if (dist < 0) {
        clearInterval(t);
        return;
      }
      setCountdown({
        days: Math.floor(dist / 864e5),
        hours: Math.floor((dist % 864e5) / 36e5),
        minutes: Math.floor((dist % 36e5) / 6e4),
        seconds: Math.floor((dist % 6e4) / 1e3),
      });
    }, 1000);
    return () => clearInterval(t);
  }, [d.date]);

  const [giftTab, setGiftTab] = useState<"groom" | "bride">("groom");
  const [gName, setGName] = useState("");
  const [gMsg, setGMsg] = useState("");
  const [wishes, setWishes] = useState<{ name: string; message: string }[]>([]);
  const [lb, setLb] = useState<string | null>(null);

  const send = () => {
    if (gName.trim() && gMsg.trim()) {
      setWishes((p) => [{ name: gName, message: gMsg }, ...p]);
      setGName("");
      setGMsg("");
    }
  };

  // Colors
  const lavender = "#8b7aab";
  const lavenderLight = "#b8a9c9";
  const lavenderDark = "#5c4d73";
  const cream = "#f7f5f0";
  const gold = "#c4a85a";
  const textDark = "#3d3545";
  const textMuted = "#7a7085";

  // Monogram initials
  const groomInitial =
    (d.groomInfo?.name || d.groomName || "G")
      .split(" ")
      .pop()?.[0]
      ?.toUpperCase() || "G";
  const brideInitial =
    (d.brideInfo?.name || d.brideName || "B")
      .split(" ")
      .pop()?.[0]
      ?.toUpperCase() || "B";

  return (
    <div
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        background: cream,
        fontFamily: "'Playfair Display', Georgia, serif",
        color: textDark,
        width: "100%",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      {/* ==================== HERO ==================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          margin: "0 auto",
          overflowX: "hidden",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* picture1 */}
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src="/templates/template9/pic1_bg.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "45%",
              transform: "translate(-20%, 10%)",
              zIndex: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.img
              src="/templates/template9/pic1_flower.svg"
              alt="title"
              style={{ width: "80%", maxWidth: "350px" }}
            />
          </div>
        </div>
        {/* text 29.11.2025 */}
        <div
          style={{
            textAlign: "center",
            fontSize: "40px",
            letterSpacing: "8px",
            color: "#6b6b6b",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 400,
            marginTop: "50px",
            marginLeft: "-20px",
          }}
        >
          29.11.2025
        </div>
        {/* text "It's been a long time" */}
        <div
          style={{
            fontSize: "20px",
            textAlign: "center",
            fontStyle: "italic",
            letterSpacing: "2px",
            color: "#6b6b6b",
            fontFamily: "Cormorant Garamond, serif",
            maxWidth: "250px",
            marginLeft: "15%",
          }}
        >
          It's been a long time, see you at the wedding!
        </div>
        {/* picture2 - bg pink */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-30px",
            marginLeft: "50px",
          }}
        >
          <img
            src="/templates/template9/pic2_wire.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* picture2 - left right */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "-30px",
            marginLeft: "50px",
          }}
        >
          <img
            src="/templates/template9/pic2_left.svg"
            alt="pic1-bg"
            style={{
              width: "40%",
              height: "auto",
            }}
          />

          <img
            src="/templates/template9/pic2_right.svg"
            alt="pic1-bg"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
        </div>
        {/* text groom */}
        <div
          style={{
            textAlign: "left",
            color: "#5b6154",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "70px",
              lineHeight: 1.2,
            }}
          >
            Ngọc Thảo
          </div>

          <div
            style={{
              fontFamily: "serif",
              fontSize: "20px",
              letterSpacing: "2px",
              marginTop: "-10px",
              marginLeft: "10px",
            }}
          >
            BRIDE
          </div>
        </div>
        {/* text bride */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ textAlign: "right", color: "#5b6154" }}>
            <div
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "70px",
                lineHeight: 1.1,
              }}
            >
              Trung Đức
            </div>

            <div
              style={{
                fontFamily: "serif",
                fontSize: "20px",
                letterSpacing: "2px",
                marginTop: "-10px",
                marginRight: "10px",
              }}
            >
              GROOM
            </div>
          </div>
        </div>
        {/* picture0 - bg pink */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-60%",
            marginLeft: "20%",
          }}
        >
          <img
            src="/templates/template9/pic0_pg_pink.png"
            alt="pic1-bg"
            style={{
              width: "100%",
              height: "auto",

              transform: "rotate(30deg)",
              transformOrigin: "center",

              position: "absolute",
              top: "0",
              left: "0",
              zIndex: 0,
            }}
          />
        </div>
        {/* picture4 */}
        <div
          style={{
            position: "relative",
            width: "70%",
            marginTop: "70%",
            marginLeft: "15%",
          }}
        >
          <img
            src="/templates/template9/pic3.svg"
            alt="pic3"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* picture5 */}
        <div
          style={{
            position: "relative",
            width: "70%",
            marginTop: "-25%",
            marginLeft: "15%",
            transform: "scale(1.5)",
          }}
        >
          <img
            src="/templates/template9/pic4_1.png"
            alt="pic4"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* picture5 */}
        <div
          style={{
            position: "relative",
            width: "80%",
            marginTop: "30px",
            marginLeft: "70px",
          }}
        >
          <img
            src="/templates/template9/pic5.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* text thiệp mời */}
        <div style={{ position: "relative", marginBottom: "10px" }}>
          {/* picture0 - bg pink (nền) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 0,
              opacity: 0.4,
              pointerEvents: "none",
            }}
          >
            <img
              src="/templates/template9/pic_bg.png"
              alt="bg"
              style={{
                width: "50%",
                height: "auto",
                transform: "rotate(-90deg) translateX(-20%) translateY(-30%)",
                transformOrigin: "top left",
              }}
            />
          </div>

          {/* text thiệp mời */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#8c7b75",
              fontFamily: "serif",
              letterSpacing: "3px",
              lineHeight: 1.4,
              fontSize: "22px",
              maxWidth: "250px",
            }}
          >
            THIỆP MỜI CƯỚI CỦA CHÚNG MÌNH
          </div>
        </div>
        {/* text trân trọng */}
        <div
          style={{
            textAlign: "center",
            fontStyle: "italic",
            letterSpacing: "4px",
            color: "#6f6f6f",
            fontFamily: "serif",
            marginLeft: "-40%",
            fontSize: "18px",
          }}
        >
          Trân trọng kính mời
        </div>
        {/* bạn trang và anh nam */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
            marginLeft: "-10%",
          }}
        >
          <div
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(28px, 7vw, 42px)",
              color: "#7A1E1E",
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            Bạn Trang và anh Nam
          </div>
        </div>
        {/* picture6 */}
        <div
          style={{
            position: "relative",
            width: "70%",
            marginTop: "-53%",
            marginLeft: "45%",
          }}
        >
          <img
            src="/templates/template9/pic6.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* text dến dự buổi tiệc */}
        <div
          style={{
            color: "#8c7b75",
            fontFamily: "serif",
            letterSpacing: "3px",
            lineHeight: 1.6,
            fontSize: "24px",
            maxWidth: "270px",
            textAlign: "left",
            marginLeft: "10%",
            marginTop: "-50%",
          }}
        >
          ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC
        </div>
        {/* pic wire */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-11%",
            marginLeft: "50%",
          }}
        >
          <img
            src="/templates/template9/pic_wire2.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "60%",
              height: "auto",
            }}
          />
        </div>
        {/* text giờ */}
        <div
          style={{
            textAlign: "center",
            color: "#8c7b75",
            fontFamily: "serif",
            fontSize: "80px",
            letterSpacing: "4px",
            marginLeft: "-30%",
            marginTop: "-75%",
          }}
        >
          16:00
        </div>
        {/* text thứ ngày*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "-5%",
          }}
        >
          {/* text thứ */}
          <div
            style={{
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "4px",
              fontSize: "28px",
            }}
          >
            Thứ Sáu
          </div>

          {/* text ngày */}
          <div
            style={{
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "4px",
              fontSize: "32px",
            }}
          >
            27.10.2026
          </div>
        </div>
        {/*  text âm lịch*/}
        <div
          style={{
            textAlign: "center",
            color: "#6f6f6f",
            fontFamily: "serif",
            fontStyle: "italic",
            letterSpacing: "2px",
            fontSize: "20px",
          }}
        >
          (Tức ngày 9 tháng 10 âm lịch)
        </div>
        {/* text vị trí */}
        <div
          style={{
            textAlign: "center",
            color: "#5b6154",
            fontFamily: "serif",
            letterSpacing: "4px",
            fontSize: "20px",
            marginLeft: "25%",
            marginTop: "40%",
            zIndex: 2,
            position: "relative",
          }}
        >
          TƯ GIA NHÀ GÁI
        </div>
        {/* text vị trí chi tiết */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              textAlign: "right",
              color: "#333",
              fontFamily: "serif",
              letterSpacing: "3px",
              lineHeight: 1.6,
              fontSize: "20px",
              maxWidth: "210px",
              marginRight: "10%",
              marginTop: "5%",
            }}
          >
            Số 9 - ngách 2,
            <br />
            ngõ 33 đường Hùng Vương,
            <br />
            Phường Vĩnh Yên,
            <br />
            Tỉnh Phú Thọ
          </div>
        </div>
        {/* picture0 - bg pink (nền) */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.4,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(90deg) translateX(-80%) translateY(-80%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture7 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-210%",
            marginLeft: "-1%",
          }}
        >
          <img
            src="/templates/template9/pic7.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "60%",
              height: "auto",
            }}
          />
        </div>
        {/* picture8 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-60%",
            marginLeft: "45%",
          }}
        >
          <img
            src="/templates/template9/pic8.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "50%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "right",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "4px",
            fontSize: "26px",
            marginRight: "5%",
          }}
        >
          Địa chỉ tổ chức
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#6b7673",
              color: "#fff",
              border: "none",
              padding: "5px 15px",
              fontFamily: "serif",
              letterSpacing: "2px",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "13%",
            }}
          >
            Gọi ngay cô dâu
          </button>
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#5b6154",
            fontFamily: "serif",
            letterSpacing: "4px",
            fontSize: "22px",
            lineHeight: 1.4,
            marginTop: "10%",
            maxWidth: "300px",
            marginLeft: "15%",
          }}
        >
          LỄ THÀNH HÔN ĐƯỢC TỔ CHỨC VÀO
        </div>
        {/* picture9 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "10%",
            marginLeft: "0%",
          }}
        >
          <img
            src="/templates/template9/pic9.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* text thời gian */}
        <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(0%, -10%)",
            width: "100%",
            textAlign: "center",
            marginTop: "-6%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: "Roboto, serif",
              fontSize: "clamp(18px, 5vw, 28px)",
              color: "#333",
              letterSpacing: "1px",
              marginBottom: "8px",
            }}
          >
            8:00 | Thứ 7 Bảy | 29.11.2025
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(16px, 4vw, 24px)",
              color: "#333",
              letterSpacing: "1px",
              fontStyle: "italic",
              zIndex: 2,
              position: "relative",
            }}
          >
            (Tại gia đình nhà trai)
          </div>
        </div>
        {/* picture0 - bg pink (nền) */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(-90deg) translateX(-50%) translateY(-80%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture10 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-120%",
            marginLeft: "10%",
          }}
        >
          <img
            src="/templates/template9/pic10.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        {/* picture5 */}
        <div
          style={{
            position: "relative",
            width: "70%",
            marginTop: "-25%",
            marginLeft: "15%",
            transform: "scale(1.5)",
          }}
        >
          <img
            src="/templates/template9/pic4_1.png"
            alt="pic4"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* picture11 */}
        <div
          style={{
            position: "relative",
            width: "70%",
            marginTop: "25%",
            marginLeft: "25%",
            transform: "scale(1.5)",
          }}
        >
          <img
            src="/templates/template9/pic11.svg"
            alt="pic11"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.4,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(-90deg) translateX(10%) translateY(-80%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture12 - text */}
        <div
          style={{
            position: "relative",
            width: "80%",
            marginTop: "-270%",
            marginLeft: "10%",
            zIndex: 2,
          }}
        >
          <img
            src="/templates/template9/pic12.svg"
            alt="pic12"
            style={{
              display: "block",
              width: "60%",
              height: "auto",
            }}
          />
        </div>
        {/* text  Gửi đến bạn*/}
        <div
          style={{
            maxWidth: "260px",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "2px",
            lineHeight: 1.2,
            fontSize: "20px",
            textAlign: "left",
            marginLeft: "10%",
            marginTop: "-50%",
            zIndex: 2,
            position: "relative",
          }}
        >
          Gửi đến bạn tấm thiệp cưới đầy yêu thương. Những ai nhận được lời mời
          này đều là những người đặc biệt với bọn mình. Mong bạn và gia đình sẽ
          đến chung vui,
        </div>
        {/* text 2 Cùng chứng kiến  */}
        <div style={{ position: "relative" }}>
          {/* picture13 (cho xuống dưới) */}
          <div
            style={{
              position: "absolute",
              width: "70%",
              top: "0",
              left: "60%",
              zIndex: 0,
              opacity: 0.7,
              marginTop: "-40%",
            }}
          >
            <img
              src="/templates/template9/pic13.png"
              alt="pic4"
              style={{
                width: "60%",
                height: "auto",
              }}
            />
          </div>

          {/* text */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "260px",
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "2px",
              lineHeight: 1.2,
              fontSize: "20px",
              textAlign: "left",
              marginLeft: "10%",
              marginTop: "20%",
            }}
          >
            Cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa. Cảm ơn vì
            luôn bên cạnh và yêu thương. Bọn mình rất mong được gặp bạn trong
            ngày vui này!
          </div>
        </div>
        {/* picture14 */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(90deg) translateX(-30%) translateY(-80%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture15 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-120%",
            marginLeft: "10%",
          }}
        >
          <img
            src="/templates/template9/pic15.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        {/* text name */}
        <div
          style={{
            maxWidth: "250px",
            margin: "0 auto",
            textAlign: "center",
            color: "#8c7b75",
            fontFamily: "'Times New Roman', serif",
            letterSpacing: "6px",
            fontSize: "50px",
            lineHeight: 1.1,
            wordBreak: "break-word",
            marginLeft: "0%",
            marginTop: "10%",
          }}
        >
          TRUNG ĐỨC
        </div>
        {/* picture16 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-20%",
            marginLeft: "50px",
          }}
        >
          <img
            src="/templates/template9/pic16.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        {/* text name */}
        <div
          style={{
            maxWidth: "250px",
            margin: "0 auto",
            textAlign: "center",
            color: "#8c7b75",
            fontFamily: "'Times New Roman', serif",
            letterSpacing: "6px",
            fontSize: "50px",
            lineHeight: 1.1,
            wordBreak: "break-word",
            marginLeft: "40%",
            marginTop: "-15%",
          }}
        >
          NGỌC THẢO
        </div>
        {/* picture17 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "0%",
            marginLeft: "-5%",
          }}
        >
          <img
            src="/templates/template9/pic17.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        {/* text nhà trai */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#5f6a68",
            color: "#ffffff",
            fontFamily: "serif",
            letterSpacing: "3px",
            fontSize: "20px",
            padding: "6px 40px",
            marginLeft: "43%",
            transform: "translateY(-1000%) translateX(0%)",
            marginBottom: "10px",
          }}
        >
          Nhà Gái
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "-70%",
            transform: "translateY(-90%)",
          }}
        >
          <div
            style={{
              maxWidth: "300px",
              textAlign: "left",
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "2px",
              lineHeight: 1.6,
              fontSize: "20px",
            }}
          >
            Bố: Nguyễn Viết Cường
            <br />
            Mẹ: Trần Thị Mơ
            <br />
            (Hồng Sơn, Hà Nội)
          </div>
        </div>
        {/* text nhà gái */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#5f6a68",
            color: "#ffffff",
            fontFamily: "serif",
            letterSpacing: "3px",
            fontSize: "20px",
            padding: "6px 40px",
            marginLeft: "43%",
            transform: "translateY(-100%) translateX(0%)",
          }}
        >
          Nhà Trai
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "40%",
            transform: "translateY(-190%)",
          }}
        >
          <div
            style={{
              maxWidth: "300px",
              textAlign: "left",
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "2px",
              lineHeight: 1.6,
              fontSize: "20px",
            }}
          >
            Bố: Nguyễn Viết Cường
            <br />
            Mẹ: Trần Thị Mơ
            <br />
            (Vĩnh yên, Phú Thọ)
          </div>
        </div>
        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(90deg) translateX(-30%) translateY(-80%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture18 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-150%",
            marginLeft: "0%",
          }}
        >
          <img
            src="/templates/template9/pic18.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        {/* text1 */}
        <div
          style={{
            maxWidth: "250px",
            marginLeft: "20px",
            textAlign: "left",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "2px",
            lineHeight: 1.8,
            fontSize: "20px",
            marginTop: "-90%",
            zIndex: 2,
            position: "relative",
          }}
        >
          Mình gặp nhau vào mùa nắng đẹp nhất của năm. Ngày 30 tháng 3 - bình
          yên như bao ngày khác, Chỉ là từ hôm đó, thế giới của hai đứa bỗng có
          thêm một người để chờ, để nhớ, để thương.
        </div>
        {/* text2 */}
        <div style={{ position: "relative", width: "100%" }}>
          {/* picture20 - ảnh nền nằm dưới */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: 0,
              left: "50%",
              transform: "translateX(5%) translateY(0%)",
              zIndex: 1,
            }}
          >
            <img
              src="/templates/template9/pic20.png"
              alt="pic1-bg"
              style={{
                display: "block",
                width: "50%",
                height: "auto",
              }}
            />
          </div>

          {/* text2 - nằm trên */}
          <div
            style={{
              position: "relative",
              maxWidth: "250px",
              marginLeft: "20px",
              textAlign: "left",
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "2px",
              lineHeight: 1.8,
              fontSize: "20px",
              marginTop: "20%",
              zIndex: 2,
            }}
          >
            Ba tháng sau, chúng mình chẳng cần lý do gì lớn lao, chỉ biết là
            muốn cùng nhau đi hết đoạn đường còn lại. Và thế là, một đám cưới ra
            đời tròn tám tháng kể từ ngày bắt đầu yêu.
          </div>
        </div>
        {/* picture19 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "-120%",
            marginLeft: "30%",
          }}
        >
          <img
            src="/templates/template9/pic19.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(-90deg) translateX(30%) translateY(-80%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture21 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "10%",
            marginTop: "-110%",
          }}
        >
          <img
            src="/templates/template9/pic21.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>

        {/* picture22 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "5%",
            marginTop: "10%",
          }}
        >
          <img
            src="/templates/template9/pic23.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>

        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(90deg) translateX(-80%) translateY(-90%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>

        {/* text24 */}
        <div
          style={{
            maxWidth: "350px",
            margin: "0 auto",
            textAlign: "center",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "2px",
            lineHeight: 1.8,
            fontSize: "20px",
            marginTop: "-130%",
          }}
        >
          Thương một, để sau mỗi năm lại thương lên mười Em có anh ở trong đời,
          anh có em, là được rồi
        </div>

        {/* picture24 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "5%",
            marginTop: "-10%",
          }}
        >
          <img
            src="/templates/template9/pic24.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>

        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
            position: "relative",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(-90deg) translateX(0%) translateY(-100%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>

        {/* Thứ */}
        <div
          style={{
            textAlign: "center",
            color: "#8c7b75",
            fontFamily: "serif",
            letterSpacing: "6px",
            fontSize: "40px",
            marginTop: "-210%",
          }}
        >
          THỨ BẢY
        </div>

        {/* text25 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            color: "#8c7b75",
            fontFamily: "serif",
            marginTop: "-5%",
            zIndex: 1,
            position: "relative",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{ borderTop: "1px solid #8c7b75", marginBottom: "5px" }}
            />
            <div style={{ letterSpacing: "3px", fontSize: "18px" }}>
              THÁNG 11
            </div>
            <div
              style={{ borderBottom: "1px solid #8c7b75", marginTop: "5px" }}
            />
          </div>

          <div style={{ fontSize: "80px", letterSpacing: "4px" }}>29</div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{ borderTop: "1px solid #8c7b75", marginBottom: "5px" }}
            />
            <div style={{ letterSpacing: "3px", fontSize: "18px" }}>
              NĂM 2026
            </div>
            <div
              style={{ borderBottom: "1px solid #8c7b75", marginTop: "5px" }}
            />
          </div>
        </div>

        {/* text 26 */}
        <div
          style={{
            textAlign: "center",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "3px",
            fontSize: "18px",
            marginTop: "-5%",
            zIndex: 1,
            position: "relative",
          }}
        >
          Âm lịch 14:00 10/10/2026
        </div>

        {/* picture26 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "50%",
            marginTop: "5%",
          }}
        >
          <img
            src="/templates/template9/pic26.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "1%",
              height: "50px",
            }}
          />
        </div>

        {/* text 27 */}
        <div
          style={{
            maxWidth: "350px",
            margin: "0 auto",
            textAlign: "center",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "2px",
            lineHeight: 1.8,
            fontSize: "18px",
            marginTop: "5%",
          }}
        >
          Mình chẳng có những buổi hẹn hò cầu kỳ, chỉ là cùng nhau ăn một bữa
          cơm, đi dạo quanh phố, kể chuyện linh tinh đến khuya. Nhưng hóa ra,
          hạnh phúc đôi khi chỉ giản dị vậy thôi
        </div>

        {/* picture27 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "10%",
            marginTop: "10%",
          }}
        >
          <img
            src="/templates/template9/pic27.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "0%",
            marginTop: "-28%",
          }}
        >
          <img
            src="/templates/template9/pic28_1.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "90%",
              height: "auto",
            }}
          />
        </div>

        {/* picture29 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 2,
            marginLeft: "-50%",
            marginTop: "0%",
            position: "relative",
          }}
        >
          <img
            src="/templates/template9/pic29.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
            }}
          />
        </div>

        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
            position: "relative",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(90deg) translateX(-80%) translateY(-100%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>

        <div
          style={{
            maxWidth: "350px",
            margin: "0 auto",
            textAlign: "center",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "2px",
            lineHeight: 1.8,
            fontSize: "18px",
            marginTop: "-120%",
          }}
        >
          Tụi mình đã cùng nhau chọn từng bông hoa, từng bộ trang phục cho ngày
          ấy. Mỗi chi tiết nhỏ đều mang trong đó một chút hồi hộp, một chút háo
          hức, và rất nhiều yêu thương.
        </div>

        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "50%",
            marginTop: "5%",
          }}
        >
          <img
            src="/templates/template9/pic26.svg"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "1%",
              height: "50px",
            }}
          />
        </div>

        {/* text 30 */}
        <div
          style={{
            maxWidth: "350px",
            margin: "0 auto",
            textAlign: "center",
            color: "#6f6f6f",
            fontFamily: "serif",
            letterSpacing: "2px",
            lineHeight: 1.8,
            fontSize: "18px",
            marginTop: "5%",
            zIndex: 2,
            position: "relative",
          }}
        >
          Ngày mình chính thức gọi nhau là vợ chồng, là ngày câu chuyện nhỏ của
          hai đứa viết sang một chương mới. Cảm ơn vì đã tìm thấy nhau, và chọn
          ở lại - mãi mãi.
        </div>

        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
            position: "relative",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(-90deg) translateX(-50%) translateY(-100%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>

        {/* picture30 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "0%",
            marginTop: "-130%",
          }}
        >
          <img
            src="/templates/template9/pic30.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* text 31 */}
        <div
          style={{
            textAlign: "left",
            color: "#5b6154",
            fontFamily: "serif",
            letterSpacing: "4px",
            lineHeight: 1.5,
            marginLeft: "10%",
            marginTop: "10%",
          }}
        >
          <div style={{ fontSize: "22px" }}>XÁC NHẬN THAM DỰ</div>
          <div
            style={{ fontSize: "18px", letterSpacing: "2px", marginTop: "8px" }}
          >
            Bạn sẽ tham dự chứ?
          </div>
        </div>

        {/* có tham dự */}
        {/* combobox chọn tham dự */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "left",
            marginTop: "10px",
            marginLeft: "10%",
          }}
        >
          <select
            defaultValue="yes"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "16px",
              fontStyle: "italic",
              color: "#5A5A5A",
              padding: "6px 32px 6px 32px",
              border: "1px solid #999",
              borderRadius: "6px",
              backgroundColor: "transparent",
              outline: "none",
              appearance: "none",
              textAlign: "center",
              cursor: "pointer",
              zIndex: 2,
              position: "relative",
            }}
          >
            <option value="yes">Có tham dự</option>
            <option value="no">Không tham dự</option>
          </select>
        </div>

        {/* text 31 */}
        <div
          style={{
            textAlign: "left",
            color: "#5b6154",
            fontFamily: "serif",
            letterSpacing: "4px",
            lineHeight: 1.5,
            marginLeft: "10%",
            marginTop: "0%",
            zIndex: 2,
            position: "relative",
          }}
        >
          <div
            style={{ fontSize: "18px", letterSpacing: "2px", marginTop: "8px" }}
          >
            Bạn sẽ tham dự chứ?
          </div>
        </div>

        {/* combox chọn số lượng người */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "left",
            marginLeft: "10%",
            marginTop: "10px",
            zIndex: 2,
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            <select
              defaultValue="1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "16px",
                fontStyle: "italic",
                color: "#5A5A5A",
                padding: "6px 32px 6px 32px",
                border: "1px solid #999",
                borderRadius: "6px",
                backgroundColor: "transparent",
                outline: "none",
                appearance: "none",
                cursor: "pointer",
                width: "180px",
              }}
            >
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
              <option value="more">Trên 3 người</option>
            </select>
            <span
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                fontSize: "12px",
              }}
            >
              ▼
            </span>
          </div>
        </div>

        <button
          style={{
            backgroundColor: "#8c7b75",
            color: "#ffffff",
            border: "none",
            padding: "10px 30px",
            fontFamily: "serif",
            letterSpacing: "4px",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "10%",
            marginTop: "20px",
          }}
        >
          XÁC NHẬN
        </button>

        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
            position: "relative",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(90deg) translateX(-80%) translateY(-100%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>

        {/* picture31 */}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 1,
            marginLeft: "0%",
            marginTop: "-150%",
          }}
        >
          <img
            src="/templates/template9/pic31.png"
            alt="pic1-bg"
            style={{
              display: "block",
              width: "90%",
              height: "auto",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "-20%",
            marginRight: "5%",
            transform: "translateY(-50%) translateX(-5%)",
          }}
        >
          <div
            style={{
              backgroundColor: "#8c7b75",
              color: "#ffffff",
              fontFamily: "serif",
              letterSpacing: "4px",
              fontSize: "18px",
              padding: "10px 10px",
            }}
          >
            HỘP MỪNG CƯỚI
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              maxWidth: "300px",
              textAlign: "right",
              color: "#6f6f6f",
              fontFamily: "serif",
              letterSpacing: "2px",
              lineHeight: 1.8,
              fontSize: "22px",
              transform: " translateX(-5%)",
            }}
          >
            Cảm ơn tình cảm của mọi người đã dành cho chúng mình.
          </div>
        </div>
        {/* bg_color */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
            position: "relative",
          }}
        >
          <img
            src="/templates/template9/pic_bg.png"
            alt="bg"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "50%",
              transform: "rotate(-90deg) translateX(-80%) translateY(-100%)",
              transformOrigin: "top left",
              marginLeft: "50%",
            }}
          />
        </div>
        {/* picture32 - hộp quà*/}
        <div
          style={{
            width: "100%",
            top: "0",
            left: "55%",
            zIndex: 2,
            marginLeft: "-13%",
            marginTop: "-130%",
            position: "relative",
            marginBottom: "30%",
          }}
        >
          <img
            src="/templates/template9/pic33.svg"
            alt="pic32-qua"
            style={{
              display: "block",
              width: "50%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function mn(m?: string): number {
  if (!m) return 1;
  const map: Record<string, number> = {
    "tháng 1": 1,
    "tháng 01": 1,
    "tháng 2": 2,
    "tháng 02": 2,
    "tháng 3": 3,
    "tháng 03": 3,
    "tháng 4": 4,
    "tháng 04": 4,
    "tháng 5": 5,
    "tháng 05": 5,
    "tháng 6": 6,
    "tháng 06": 6,
    "tháng 7": 7,
    "tháng 07": 7,
    "tháng 8": 8,
    "tháng 08": 8,
    "tháng 9": 9,
    "tháng 09": 9,
    "tháng 10": 10,
    "tháng 11": 11,
    "tháng 12": 12,
  };
  return map[m.toLowerCase()] || parseInt(m.replace(/\D/g, "")) || 1;
}
