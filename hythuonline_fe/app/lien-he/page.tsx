'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function LienHePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7f7] via-white to-[#fef7f7]">
      {/* Header Section */}
      <div className="relative py-12 md:py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: `url('/abc.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Small tag */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-[#c85d6a]/10 text-[#8B2635] text-sm font-semibold rounded-full">
                Liên Hệ
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Chúng tôi luôn sẵn sàng hỗ trợ,<br />dù bạn ở bất cứ nơi đâu!
            </h1>

            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Để được hỗ trợ nhanh hơn, vui lòng liên hệ với chúng tôi qua Messenger hoặc Zalo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl pb-16 md:pb-20 mt-8 md:mt-12">
        {/* Contact Zalo Card - Compact & Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="bg-white rounded-[1.5rem] p-6 shadow-xl border border-pink-50">
            <div className="text-center mb-6">
              <h2 className="text-[#8B2635] font-bold text-xl md:text-2xl uppercase tracking-widest inline-block border-b-2 border-pink-100 pb-2">
                Liên hệ Zalo
              </h2>
            </div>

            <div className="relative border border-pink-100 rounded-2xl p-6 md:p-8 overflow-hidden group" style={{ backgroundImage: 'url(/vintage-bg.png)', backgroundRepeat: 'repeat', backgroundSize: '200px' }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/90 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Flex layout: QR Left - Info Right */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                  {/* QR Section */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="bg-white p-3 rounded-xl border border-pink-100 shadow-sm mb-3">
                      <div className="w-40 h-40 bg-gray-50 flex items-center justify-center overflow-hidden relative">
                        <Image src="/zalo.png" alt="QR Code Zalo" fill className="object-contain" unoptimized />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#0068FF]">
                      <div className="w-6 h-6 bg-[#0068FF] rounded-full flex items-center justify-center text-white text-[10px] font-bold font-serif shadow-sm">Z</div>
                      <span className="font-bold text-sm text-gray-700">Quét mã QR</span>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 text-center md:text-left pt-1 w-full">
                    <h3 className="font-bold text-[#8B2635] text-xl md:text-2xl uppercase mb-2">Đặt thiệp qua Zalo</h3>
                    <p className="text-sm text-gray-600 mb-5">Nhắn tin ngay để được tư vấn mẫu thiệp đẹp nhất!</p>

                    <div className="space-y-3">
                      {/* Phone */}
                      <div className="bg-white/80 border border-pink-100 rounded-lg px-4 py-3 flex items-center justify-between group/phone hover:bg-white hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-pink-50 text-[#8B2635] flex items-center justify-center">
                            <i className="pi pi-phone text-sm"></i>
                          </div>
                          <div className="text-left">
                            <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Số Zalo</div>
                            <div className="text-base font-bold text-gray-800 group-hover/phone:text-[#8B2635]">089 6868 145</div>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (typeof navigator !== 'undefined') navigator.clipboard.writeText('0896868145')
                          }}
                          className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:text-[#8B2635] hover:bg-pink-50 flex items-center justify-center transition-colors"
                          title="Copy"
                        >
                          <i className="pi pi-copy text-xs"></i>
                        </button>
                      </div>

                      {/* Name */}
                      <div className="bg-white/80 border border-gray-100 rounded-lg px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                            <i className="pi pi-user text-sm"></i>
                          </div>
                          <div className="text-left">
                            <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Tên Zalo</div>
                            <div className="text-base font-bold text-gray-800 uppercase">Hỷ Thư</div>
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        onClick={() => {
                          if (typeof navigator !== 'undefined') {
                            navigator.clipboard.writeText('0896868145');
                            alert('Đã copy số Zalo!');
                          }
                        }}
                        className="w-full bg-[#8B2635] hover:bg-[#7A222F] text-white text-sm font-bold py-3 rounded-lg uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all mt-2 flex items-center justify-center gap-2"
                      >
                        <i className="pi pi-copy"></i>
                        Copy Số Zalo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>

      <Footer />
    </div>
  )
}

