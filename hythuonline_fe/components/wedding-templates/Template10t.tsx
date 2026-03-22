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

export default function Template10t({ weddingData }: { weddingData: any }) {
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
        }}
      >
        {/* picture1 - hiển thị bình thường, full width */}
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src="/templates/template10/pic1.svg"
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
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.img
              src="/templates/template10/pic1_you_are_the_love.svg"
              alt="title"
              style={{ width: "80%", maxWidth: "350px" }}
            />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px, 8vw, 36px)",
                letterSpacing: "4px",
                color: "#7A1E1E",
                textAlign: "center",
                transform: `translateY(-170px) translateX(40px)`,
                width: "100%",
              }}
            >
              29.11.2025
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              transform: `translateY(-180px) translateX(20px)`,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(14px, 5vw, 20px)",
                fontStyle: "italic",
                letterSpacing: "2px",
                color: "#7A1E1E",
                textAlign: "center",
                lineHeight: "1.6",
                maxWidth: "90%",
              }}
            >
              It's been a long time, see you
              <br />
              at the wedding!
            </div>
          </div>
        </div>

        {/* picture2  - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "0px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "0",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontFamily: "'Playfair Display', serif",
                color: "#7A1E1E",
              }}
            >
              {/* BRIDE */}
              <div
                style={{
                  fontSize: "clamp(12px, 4vw, 16px)",
                  letterSpacing: "3px",
                  marginBottom: "10px",
                  marginLeft: "100px",
                }}
              >
                BRIDE
              </div>

              {/* TRUNG ĐỨC */}
              <div
                style={{
                  fontSize: "clamp(28px, 8vw, 44px)",
                  letterSpacing: "4px",
                  lineHeight: "1.2",
                  marginLeft: "-30px",
                }}
              >
                TRUNG ĐỨC
              </div>

              {/* NGỌC THẢO */}
              <div
                style={{
                  fontSize: "clamp(28px, 8vw, 44px)",
                  letterSpacing: "4px",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                  marginLeft: "40px",
                }}
              >
                NGỌC THẢO
              </div>

              {/* GROOM */}
              <div
                style={{
                  fontSize: "clamp(12px, 4vw, 16px)",
                  letterSpacing: "3px",
                  marginLeft: "-100px",
                }}
              >
                GROOM
              </div>
            </div>
          </div>
        </div>

        {/* picture3 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic3.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture4 - nối tiếp ngay dưới */}
        <div
          style={{ position: "relative", width: "100%", marginTop: "-70px" }}
        >
          <img
            src="/templates/template10/pic4.svg"
            alt="pic4-text"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture5 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(32px, 8vw, 48px)",
              color: "#7A1E1E",
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            Bạn Trang và anh Nam
          </div>
        </div>

        {/* picture6 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "90%",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(16px, 5vw, 22px)",
              letterSpacing: "2px",
              color: "#7A1E1E",
              textAlign: "center",
              lineHeight: "1.6",
              marginTop: "20px",
            }}
          >
            ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC
          </div>
        </div>

        {/* picture7 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic7.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "70%",
              height: "auto",
              marginTop: "0 auto",
              marginLeft: "15%",
            }}
          />
        </div>

        {/* picture8 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "30px" }}>
          <img
            src="/templates/template10/pic8.svg"
            alt="pic8-bg"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 3,
              width: "100%",
              padding: "0 16px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                width: "100%",
                color: "#F5EDED",
                flexWrap: "wrap",
              }}
            >
              {/* LEFT */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(20px, 6vw, 28px)",
                      fontFamily: "serif",
                    }}
                  >
                    16:00
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(10px, 3vw, 12px)",
                      letterSpacing: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    THỨ SÁU
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "clamp(12px, 3.5vw, 14px)",
                    fontStyle: "italic",
                    opacity: 0.8,
                  }}
                >
                  (Tức ngày 9 tháng 10 âm lịch)
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "clamp(14px, 4vw, 20px)",
                    letterSpacing: "1px",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: "1.3",
                    marginBottom: "8px",
                  }}
                >
                  NHÀ HÀNG
                  <br />
                  TRỐNG ĐỒNG
                </div>

                <div
                  style={{
                    fontSize: "clamp(12px, 3.5vw, 16px)",
                    lineHeight: "1.5",
                    opacity: 0.9,
                  }}
                >
                  Số 9 - ngách 2,
                  <br />
                  ngõ 33 đường
                  <br />
                  Hùng Vương,
                  <br />
                  Phường Vĩnh Yên,
                  <br />
                  Tỉnh Phú Thọ
                </div>
              </div>

              {/* RIGHT */}
              <div
                style={{
                  flex: "0 0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(80px, 15vw, 130px)",
                    lineHeight: "0.9",
                    fontFamily: "'Playfair Display', serif",
                    textAlign: "center",
                    marginLeft: "-30%",
                  }}
                >
                  27
                  <br />
                  10
                  <br />
                  26
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* picture9 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "25px",
            padding: "0 5%",
            gap: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(12px, 3.5vw, 16px)",
                letterSpacing: "2px",
                color: "#999",
                textAlign: "left",
              }}
            >
              Địa chỉ tổ chức
            </div>

            <button
              style={{
                backgroundColor: "#7A1E1E",
                color: "#F5EDED",
                border: "none",
                padding: "6px 12px",
                fontSize: "clamp(12px, 3.5vw, 14px)",
                letterSpacing: "1px",
                fontFamily: "'Playfair Display', serif",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Gọi ngay chú rể
            </button>
          </div>

          {/* RIGHT (map) */}
          <img
            src="/templates/template10/pic9_map.svg"
            alt="map"
            style={{
              width: "min(200px, 45%)",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>

        {/* picture10 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 5vw, 24px)",
              letterSpacing: "2px",
              color: "#7A1E1E",
              textAlign: "center",
              lineHeight: "1.6",
              maxWidth: "90%",
            }}
          >
            LỄ THÀNH HÔN ĐƯỢC TỔ CHỨC VÀO
          </div>
        </div>

        {/* picture11 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic10.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              textAlign: "center",
              marginTop: "-6%",
            }}
          >
            <div
              style={{
                fontFamily: "Roboto, serif",
                fontSize: "clamp(18px, 5vw, 28px)",
                color: "#7A1E1E",
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
                color: "#7A1E1E",
                letterSpacing: "1px",
                fontStyle: "italic",
              }}
            >
              (Tại gia đình nhà trai)
            </div>
          </div>
        </div>

        {/* picture12 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "40px" }}>
          <img
            src="/templates/template10/pic11.svg"
            alt="pic11-img"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
              marginLeft: "10%",
            }}
          />
        </div>

        {/* picture13 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "-40%" }}>
          <img
            src="/templates/template10/pic12.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "90%",
              height: "auto",
              marginLeft: "-2%",
            }}
          />
        </div>

        {/* 1 */}
        <div
          style={{
            maxWidth: "180px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "center",
            marginTop: "-10px",
            marginLeft: "300px",
            color: "#333",
          }}
        >
          {/* text1 */}
          <div
            style={{
              maxWidth: "320px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#000",
              letterSpacing: "1px",
              textAlign: "left",
              transform: "translateX(-50%) translateY(-10px)",
            }}
          >
            Gửi đến bạn tấm thiệp cưới đầy yêu thương. Những ai nhận được lời
            mời này đều là những người đặc biệt với bọn mình. Mong bạn và gia
            đình sẽ đến chung vui,
          </div>
        </div>
        {/* text2 */}
        <div
          style={{
            maxWidth: "180px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "center",
            marginTop: "20px",
            marginLeft: "80px",
            color: "#000",
          }}
        >
          <div
            style={{
              maxWidth: "320px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#000",
              letterSpacing: "1px",
              textAlign: "left",
              transform: "translateX(-30%) translateY(-10px)",
            }}
          >
            Cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa. Cảm ơn vì
            luôn bên cạnh và yêu thương. Bọn mình rất mong được gặp bạn trong
            ngày vui này!
          </div>
        </div>

        {/* picture14 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic14.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture2 again - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "0",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontFamily: "'Playfair Display', serif",
                color: "#7A1E1E",
              }}
            >
              {/* BRIDE */}
              <div
                style={{
                  fontSize: "clamp(12px, 4vw, 16px)",
                  letterSpacing: "3px",
                  marginBottom: "10px",
                  marginLeft: "100px",
                }}
              >
                BRIDE
              </div>

              {/* TRUNG ĐỨC */}
              <div
                style={{
                  fontSize: "clamp(28px, 8vw, 44px)",
                  letterSpacing: "4px",
                  lineHeight: "1.2",
                  marginLeft: "-30px",
                }}
              >
                TRUNG ĐỨC
              </div>

              {/* NGỌC THẢO */}
              <div
                style={{
                  fontSize: "clamp(28px, 8vw, 44px)",
                  letterSpacing: "4px",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                  marginLeft: "40px",
                }}
              >
                NGỌC THẢO
              </div>

              {/* GROOM */}
              <div
                style={{
                  fontSize: "clamp(12px, 4vw, 16px)",
                  letterSpacing: "3px",
                  marginLeft: "-100px",
                }}
              >
                GROOM
              </div>
            </div>
          </div>
        </div>

        {/* picture15 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "0 5%",
            fontFamily: "'Playfair Display', serif",
            color: "#7A1E1E",
            gap: "16px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                backgroundColor: "#7A1E1E",
                color: "#F5EDED",
                padding: "6px 0",
                letterSpacing: "2px",
                marginBottom: "10px",
                fontSize: "clamp(12px, 3.5vw, 14px)",
              }}
            >
              Nhà Trai
            </div>
            <div style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}>
              Bố: Nguyễn Viết Cường
            </div>
            <div style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}>
              Mẹ: Trần Thị Mơ
            </div>
            <div
              style={{
                marginTop: "6px",
                fontStyle: "italic",
                fontSize: "clamp(11px, 3vw, 13px)",
              }}
            >
              (Hồng Sơn, Hà Nội)
            </div>
          </div>

          <div style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                backgroundColor: "#7A1E1E",
                color: "#F5EDED",
                padding: "6px 0",
                letterSpacing: "2px",
                marginBottom: "10px",
                fontSize: "clamp(12px, 3.5vw, 14px)",
              }}
            >
              Nhà Gái
            </div>
            <div style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}>
              Bố: Nguyễn Viết Cường
            </div>
            <div style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}>
              Mẹ: Trần Thị Mơ
            </div>
            <div
              style={{
                marginTop: "6px",
                fontStyle: "italic",
                fontSize: "clamp(11px, 3vw, 13px)",
              }}
            >
              (Vĩnh Yên, Phú Thọ)
            </div>
          </div>
        </div>

        {/* picture16 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "30px" }}>
          <img
            src="/templates/template10/pic15.svg"
            alt="pic16-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
              position: "relative",
              zIndex: 2,
            }}
          />
        </div>

        {/* picture17 and text */}
        <div style={{ position: "relative", width: "100%", marginTop: "-80%" }}>
          <img
            src="/templates/template10/pic16.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
              marginTop: "0",
              marginLeft: "6%",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "420px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(14px, 4vw, 18px)",
              lineHeight: "1.8",
              color: "#666",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Mình chẳng có những buổi hẹn hò cầu kỳ, chỉ là cùng nhau ăn một bữa
            cơm, đi dạo quanh phố, kể chuyện linh tinh đến khuya. Nhưng hóa ra,
            hạnh phúc đôi khi chỉ giản dị vậy thôi
          </div>
        </div>

        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic17.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "60%",
              height: "auto",
              marginTop: "0",
              marginLeft: "20%",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "-30%",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "420px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(14px, 4vw, 18px)",
              lineHeight: "1.8",
              color: "#666",
              letterSpacing: "1px",
              textAlign: "center",
              transform: "translateY(-270%)",
            }}
          >
            Ba tháng sau, chúng mình chẳng cần lý do gì lớn lao, chỉ biết là
            muốn cùng nhau đi hết đoạn đường còn lại. Và thế là, một đám cưới ra
            đời - tròn tám tháng kể từ ngày bắt đầu yêu.
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "420px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(14px, 4vw, 18px)",
              lineHeight: "1.8",
              color: "#666",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Thương một, để sau mỗi năm lại thương lên mười. Em có anh ở trong
            đời, anh có em, là được rồi
          </div>
        </div>

        {/* picture18 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic18.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture19 - nối tiếp ngay dưới */}
        <div
          style={{ position: "relative", width: "100%", marginTop: "-100px" }}
        >
          <img
            src="/templates/template10/pic19.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
              marginTop: "0",
              marginLeft: "3%",
            }}
          />
        </div>

        {/* picture20 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#7A1E1E",
            fontFamily: "'Playfair Display', serif",
            marginTop: "20px",
            padding: "0 16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: "clamp(18px, 5vw, 24px)",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            14:00 THỨ BẢY
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(12px, 4vw, 22px)",
              fontSize: "clamp(20px, 6vw, 28px)",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span
              style={{
                backgroundColor: "#7A1E1E",
                color: "#fff",
                borderRadius: "50%",
                width: "clamp(45px, 12vw, 60px)",
                height: "clamp(45px, 12vw, 60px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(20px, 6vw, 28px)",
              }}
            >
              13
            </span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
          </div>

          <div
            style={{
              fontSize: "clamp(12px, 3.5vw, 16px)",
              opacity: 0.8,
              letterSpacing: "1px",
            }}
          >
            Âm lịch 14:00 10/10/2026
          </div>
        </div>

        {/* picture21 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic21.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "30%",
              height: "auto",
              marginTop: "0",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "320px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(14px, 4vw, 18px)",
              lineHeight: "1.8",
              color: "#000",
              letterSpacing: "1px",
              textAlign: "center",
              transform: "translateY(-250%)",
            }}
          >
            Mình chẳng có những buổi hẹn hò cầu kỳ, chỉ là cùng nhau ăn một bữa
            cơm, đi dạo quanh phố, kể chuyện linh tinh đến khuya. Nhưng hóa ra,
            hạnh phúc đôi khi chỉ giản dị vậy thôi
          </div>
        </div>

        {/* picture22 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic22.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "80%",
              height: "auto",
              marginTop: "0",
              marginLeft: "15%",
            }}
          />
        </div>

        {/* picture23 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "-90%" }}>
          <img
            src="/templates/template10/pic23.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "90%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        <div style={{ position: "relative", width: "100%", marginTop: "0" }}>
          <img
            src="/templates/template10/pic24.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "2%",
              height: "auto",
              marginTop: "0",
              marginLeft: "45%",
              transform: "translateX(10%) translateY(60px)",
            }}
          />
        </div>

        {/* text1 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            transform: "translateY(60px) translateX(10%)",
          }}
        >
          <div
            style={{
              maxWidth: "420px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#666",
              letterSpacing: "1px",
              textAlign: "center",
              transform: "translateY(-300px) translateX(-10%)",
            }}
          >
            Tụi mình đã cùng nhau chọn từng bông hoa, từng bộ trang phục cho
            ngày ấy. Mỗi chi tiết nhỏ đều mang trong đó một chút hồi hộp, một
            chút háo hức, và rất nhiều yêu thương.
          </div>
        </div>

        {/* text 2 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "-25%",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "420px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(16px, 4.5vw, 20px)",
              lineHeight: "1.8",
              color: "#666",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Ngày mình chính thức gọi nhau là vợ chồng, là ngày câu chuyện nhỏ
            của hai đứa viết sang một chương mới. Cảm ơn vì đã tìm thấy nhau, và
            chọn ở lại - mãi mãi.
          </div>
        </div>

        {/* picture25 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic25.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture26 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>
          <img
            src="/templates/template10/pic26.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture27 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginTop: "40px",
              fontSize: "clamp(24px, 6vw, 32px)",
              letterSpacing: "2px",
              color: "#7A1E1E",
            }}
          >
            XÁC NHẬN THAM DỰ
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(20px, 5vw, 26px)",
              marginTop: "8px",
            }}
          >
            Bạn sẽ tham dự chứ?
          </p>
        </div>

        {/* combobox chọn tham dự */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <select
            defaultValue="yes"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "16px",
              fontStyle: "italic",
              color: "#5A5A5A",
              padding: "8px 28px 8px 16px",
              border: "1px solid #999",
              borderRadius: "6px",
              backgroundColor: "transparent",
              outline: "none",
              appearance: "none",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <option value="yes">Có tham dự</option>
            <option value="no">Không tham dự</option>
          </select>
        </div>

        {/* picture28 - nối tiếp ngay dưới */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            letterSpacing: "4px",
            color: "#5A5A5A",
            transform: "translateX(2%) translateY(10px)",
          }}
        >
          Bạn sẽ tham dự chứ?
        </div>

        {/* combox chọn số lượng người */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
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
                padding: "8px 28px 8px 16px",
                border: "1px solid #999",
                borderRadius: "6px",
                backgroundColor: "transparent",
                outline: "none",
                appearance: "none",
                cursor: "pointer",
                width: "150px",
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

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#7a0f1b",
              color: "#fff",
              padding: "8px 40px",
              border: "none",
              borderRadius: "4px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(14px, 4vw, 18px)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Xác nhận
          </button>
        </div>

        {/* picture30 - nối tiếp ngay dưới */}
        <div style={{ position: "relative", width: "100%", marginTop: "30px" }}>
          <img
            src="/templates/template10/pic27.svg"
            alt="pic3-img"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              marginTop: "0",
            }}
          />
        </div>

        {/* picture31 - nối tiếp ngay dưới */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          <img
            src="/templates/template10/pic28.svg"
            alt="pic28-img"
            style={{
              display: "block",
              width: "50%",
              height: "auto",
              marginTop: "0",
              marginLeft: "20%",
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
