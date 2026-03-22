'use client'

import { Row, Col } from 'antd'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#8B2635] text-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <Row gutter={[24, 24]} justify="space-between" align="top">
          {/* Left Section - Logo and Description */}
          <Col xs={24} sm={24} md={6} lg={6}>
            <div className="text-center md:text-left">
              {/* Logo */}
              <div className="mb-3">
                <span className="text-3xl font-bold text-white block" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Hỷ Thư
                </span>
                <span className="text-base text-white mt-1 block">Thiệp Cưới Online</span>
              </div>

              {/* Description */}
              <p className="text-white text-base leading-relaxed mb-4">
                Thiệp cưới online - Trao gửi yêu thương, vẹn tròn hạnh phúc trong từng khoảnh khắc.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3 justify-center md:justify-start">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="pi pi-globe text-white text-sm"></i>
                </a>
                <a href="https://www.facebook.com/hythuonline" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="pi pi-facebook text-white text-sm"></i>
                </a>
                <a href="https://www.tiktok.com/@hythuonline" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="pi pi-comments text-white text-sm"></i>
                </a>
                <a href="https://www.youtube.com/@hythuonline?si=Sn-GPVTE87J58EZc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="pi pi-video text-white text-sm"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Liên kết */}
          <Col xs={12} sm={12} md={5} lg={4}>
            <h4 className="font-bold mb-3 text-lg text-white text-center md:text-left">
              Liên kết
            </h4>
            <ul className="space-y-1.5 text-base text-white">
              <li className="text-center md:text-left">
                <Link href="/" className="text-white hover:text-white/80 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/thiep-cuoi-online" className="text-white hover:text-white/80 transition-colors">
                  Thiệp cưới online
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/slide-cuoi" className="text-white hover:text-white/80 transition-colors">
                  Slide cưới
                </Link>
              </li>
            </ul>
          </Col>

          {/* Mạng xã hội */}
          <Col xs={12} sm={12} md={5} lg={4}>
            <h4 className="font-bold mb-3 text-lg text-white text-center md:text-left">
              Mạng xã hội
            </h4>
            <ul className="space-y-1.5 text-base text-white">
              <li className="text-center md:text-left">
                <Link href="https://www.facebook.com/hythuonline" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  Facebook
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="https://www.youtube.com/@hythuonline?si=Sn-GPVTE87J58EZc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  Youtube
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="https://www.tiktok.com/@hythuonline" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  Tiktok
                </Link>
              </li>
            </ul>
          </Col>

          {/* Liên hệ */}
          <Col xs={24} sm={24} md={8} lg={4}>
            <h4 className="font-bold mb-3 text-lg text-white text-center md:text-left">
              Liên hệ
            </h4>
            <ul className="space-y-1.5 text-base text-white">
              <li className="text-center md:text-left">
                <Link href="https://www.facebook.com/hythuonline" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  Facebook
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  Zalo
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  Gmail
                </Link>
              </li>
            </ul>
          </Col>
        </Row>


      </div>
    </footer>
  )
}
