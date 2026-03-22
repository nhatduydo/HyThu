'use client'

import { Button } from 'antd'
import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'blur(3px)',
            transform: 'scale(1.1)',
          }}
        >
          <source src="/damcuoi2.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-center min-h-[100svh] sm:min-h-screen">
        <div className="max-w-5xl mx-auto text-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-24">
          {/* Quotation Mark Icon */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-9 sm:w-16 sm:h-12 md:w-20 md:h-16 lg:w-24 lg:h-20"
            >
              <path
                d="M15 45C15 38.5 17.5 33 22.5 28.5C27.5 24 33.5 21.5 40.5 21V15C31.5 15.5 23.5 19 17 25.5C10.5 32 7 40 7 49.5C7 53.5 8.5 57 11.5 60C14.5 63 18 64.5 22 64.5C26 64.5 29.5 63 32.5 60C35.5 57 37 53.5 37 49.5C37 45.5 35.5 42 32.5 39C29.5 36 26 34.5 22 34.5C19.5 34.5 17 35.5 15 37.5V45Z"
                fill="#fcfcfcff"
                transform="translate(-7, -15) scale(0.9)"
              />
              <path
                d="M55 45C55 38.5 57.5 33 62.5 28.5C67.5 24 73.5 21.5 80.5 21V15C71.5 15.5 63.5 19 57 25.5C50.5 32 47 40 47 49.5C47 53.5 48.5 57 51.5 60C54.5 63 58 64.5 62 64.5C66 64.5 69.5 63 72.5 60C75.5 57 77 53.5 77 49.5C77 45.5 75.5 42 72.5 39C69.5 36 66 34.5 62 34.5C59.5 34.5 57 35.5 55 37.5V45Z"
                fill="#ffffffff"
                transform="translate(-7, -15) scale(0.9)"
              />
            </svg>
          </div>

          {/* Main Title with elegant line breaks */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight drop-shadow-2xl font-serif px-2">
            <span className="block mb-1 sm:mb-2">Một bức thư - Một lời mời</span>
            <span className="block">Viết câu chuyện trăm năm, trọn đời</span>
          </h1>

          {/* Decorative Ornament */}
          <div className="flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
            <svg
              width="400"
              height="60"
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 sm:w-80 md:w-96 lg:w-[26rem] mx-auto"
            >
              {/* Left outer flourish spiral */}
              <path
                d="M 15 30 
                   C 20 20, 30 15, 40 20
                   C 50 25, 45 35, 35 35
                   C 25 35, 20 28, 28 24
                   C 34 21, 42 26, 38 32"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Left flowing vine */}
              <path
                d="M 40 28 
                   C 55 18, 75 38, 95 25
                   C 110 15, 125 35, 145 28"
                fill="none"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Left small leaf */}
              <path
                d="M 70 22 C 75 18, 80 22, 75 27 C 70 32, 65 27, 70 22"
                fill="white"
                opacity="0.6"
              />

              {/* Left inner curl */}
              <path
                d="M 145 28 
                   C 155 22, 165 28, 160 35
                   C 156 40, 148 38, 150 32"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Center heart with flourish */}
              <path
                d="M 200 22
                   C 200 14, 212 14, 212 22
                   C 212 30, 200 40, 200 40
                   C 200 40, 188 30, 188 22
                   C 188 14, 200 14, 200 22"
                fill="white"
                opacity="0.95"
              />

              {/* Small decorative dots around heart */}
              <circle cx="175" cy="30" r="2" fill="white" opacity="0.7" />
              <circle cx="225" cy="30" r="2" fill="white" opacity="0.7" />
              <circle cx="200" cy="48" r="1.5" fill="white" opacity="0.5" />

              {/* Right inner curl */}
              <path
                d="M 255 28 
                   C 245 22, 235 28, 240 35
                   C 244 40, 252 38, 250 32"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Right flowing vine */}
              <path
                d="M 255 28 
                   C 275 35, 290 15, 305 25
                   C 325 38, 345 18, 360 28"
                fill="none"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Right small leaf */}
              <path
                d="M 330 22 C 325 18, 320 22, 325 27 C 330 32, 335 27, 330 22"
                fill="white"
                opacity="0.6"
              />

              {/* Right outer flourish spiral */}
              <path
                d="M 385 30 
                   C 380 20, 370 15, 360 20
                   C 350 25, 355 35, 365 35
                   C 375 35, 380 28, 372 24
                   C 366 21, 358 26, 362 32"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Description */}
          <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light px-2">
            Nơi biến hóa câu chuyện tình yêu của bạn thành những lời mời cưới chân thành và ý nghĩa <br className="hidden sm:block" /> dễ dàng chia sẻ đến mọi người.
          </p>


          {/* CTA Buttons - Horizontal Layout */}
          <div className="mb-12 sm:mb-16 md:mb-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link href="/thiep-cuoi-online" className="w-full sm:w-auto">
              <Button
                type="primary"
                size="large"
                className="w-full bg-[#8B2635] hover:bg-[#6B1D28] border-0 h-11 sm:h-12 md:h-14 px-6 sm:px-8 md:px-12 text-sm md:text-base font-semibold shadow-xl hover:shadow-2xl transition-all rounded-lg hover:scale-105 text-white"
              >
                Xem mẫu thiệp cưới
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots - Bottom Center */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all ${currentSlide === index
              ? 'bg-white w-6 sm:w-8'
              : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}
