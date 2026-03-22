'use client'

import { motion } from 'framer-motion'

export default function InvitationPreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-6 lg:gap-8">
      {/* Left Card - Chat Interface (Larger, behind) */}
      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
        className="relative w-[400px] h-[520px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
      >
        {/* Header */}
        <div className="bg-white px-6 py-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
            Cá nhân hoá tên từng khách mời
          </h3>
        </div>

        {/* Chat Interface */}
        <div className="h-[calc(100%-80px)] bg-gray-50 p-5 flex flex-col">
          {/* Chat area */}
          <div className="flex-1 flex items-center justify-center overflow-y-auto">
            <div className="w-full max-w-[340px]">
              {/* Profile picture and chat bubble */}
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex-shrink-0 shadow-md border-2 border-white"></div>
                <div className="flex-1">
                  {/* Chat bubble */}
                  <div className="bg-blue-100 rounded-2xl rounded-tl-none p-4 shadow-md">
                    {/* Wedding couple image */}
                    <div className="w-full h-52 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 rounded-xl mb-3 overflow-hidden relative border border-white/50">
                      {/* Placeholder for couple image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-pink-200 to-rose-200 mb-3 flex items-center justify-center shadow-lg border-4 border-white">
                            <i className="pi pi-heart-fill text-white text-4xl"></i>
                          </div>
                          <p className="text-sm text-gray-700 font-semibold">Tùng & Thuý</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Message text */}
                    <p className="text-sm text-gray-800 mb-2 leading-relaxed font-medium">
                      Thân mời <strong className="font-bold">Linh Anh</strong> tham dự đám cưới của <strong className="font-bold">Tùng & Thuý</strong> ❤️
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">
                      Sau hành trình yêu thương, chúng mình đã quyết định cùng nhau viết tiếp chuyện tình bằng một đám cưới trọn...
                    </p>
                    <p className="text-xs text-gray-500 font-medium">CineLove</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-full border border-gray-200 shadow-sm mt-4">
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
              <i className="pi pi-plus text-base"></i>
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
              <i className="pi pi-camera text-base"></i>
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
              <i className="pi pi-image text-base"></i>
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
              <i className="pi pi-microphone text-base"></i>
            </button>
            <div className="flex-1 text-sm text-gray-400 px-3">Aa</div>
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
              <i className="pi pi-smile text-base"></i>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Card - Wedding Invitation (Smaller, in front) */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
        className="relative w-[340px] h-[440px] bg-white rounded-3xl shadow-2xl overflow-hidden z-20 border border-gray-100"
      >
        {/* Decorative floral elements */}
        <div className="absolute top-6 left-6 text-[#c85d6a]/25 text-3xl">
          <i className="pi pi-heart"></i>
        </div>
        <div className="absolute bottom-6 right-6 text-[#c85d6a]/25 text-2xl">
          <i className="pi pi-heart"></i>
        </div>

        {/* Content */}
        <div className="h-full p-8 flex flex-col items-center justify-center">
          {/* Title */}
          <h3 className="text-xl font-serif text-gray-800 mb-8" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
            Wedding Invitation
          </h3>

          {/* Envelope with seal */}
          <div className="relative mb-8">
            {/* Envelope */}
            <div className="w-56 h-36 bg-gradient-to-br from-[#862934] via-[#9a2f3f] to-[#862934] rounded-xl shadow-xl relative overflow-hidden">
              {/* Envelope flap */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-[#9a2f3f] via-[#862934] to-[#9a2f3f] rounded-t-xl"></div>
              
              {/* Gold seal - prominent */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-full shadow-2xl border-2 border-amber-800/40 flex items-center justify-center z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-inner">
                  <i className="pi pi-heart text-amber-900 text-base"></i>
                </div>
              </div>

              {/* Couple image inside envelope */}
              <div className="absolute inset-3 mt-10 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-200 to-rose-200 mb-2 flex items-center justify-center shadow-md border-2 border-white">
                      <i className="pi pi-heart-fill text-white text-3xl"></i>
                    </div>
                    <p className="text-xs text-gray-600 font-semibold">Tùng & Thuý</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invitation text */}
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 text-center font-bold">
            TRÂN TRỌNG KÍNH MỜI
          </p>
          
          <p className="text-xl font-serif text-gray-900 mb-4 text-center" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
            Bạn Linh Anh
          </p>
          
          <p className="text-xs text-gray-600 text-center font-medium">
            ĐẾN DỰ BỮA TIỆC CHUNG VUI
          </p>
        </div>
      </motion.div>
    </div>
  )
}

