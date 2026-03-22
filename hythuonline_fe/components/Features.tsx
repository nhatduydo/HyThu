'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="relative bg-white overflow-hidden py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-[0.4fr,0.6fr] gap-0 min-h-[500px]">
          {/* LEFT – IMAGE WITH OVERLAY */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] overflow-visible">
            {/* Background Image - Strong rounded corners on left side */}
            <div className="absolute inset-0 rounded-tl-[4rem] rounded-bl-[4rem] overflow-hidden">
              <Image
                src="/thiepmoi1.jpg"
                alt="Hỷ Thư - Thiệp cưới online"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Green Overlay Box - Bottom Left - Rounded and Extended */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-4 -left-2 bg-[#8B2635] rounded-2xl px-4 py-3 shadow-2xl z-20 border-2 border-white"
            >
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold leading-none mb-0.5">5</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold">NĂM KINH NGHIỆM</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT – CONTENT with subtle pattern background */}
          <div className="pr-2.5 pl-4 md:px-10 lg:px-12 xl:px-16 pt-6 md:pt-8 lg:pt-10 pb-10 md:pb-12 lg:pb-16 flex flex-col relative overflow-hidden text-right md:text-left" style={{ backgroundColor: '#FDF8F6' }}>
            {/* Subtle decorative pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 C30 2, 35 2, 35 5 C35 8, 30 12, 30 12 C30 12, 25 8, 25 5 C25 2, 30 2, 30 5\' fill=\'%238B2635\' /%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>

            {/* Corner decoration - bottom left */}
            <div className="absolute -bottom-8 -left-6 opacity-60">
              <Image
                src="/hythuicon-doan1.png"
                alt="Corner decoration"
                width={500}
                height={340}
                className="w-[350px] h-[250px] object-contain"
              />
            </div>

            {/* Right floral decoration */}
            <div className="absolute -bottom-4 right-0 z-0">
              <Image
                src="/hoacuoi.png"
                alt="Floral decoration"
                width={160}
                height={420}
                className="w-32 h-64 md:w-40 md:h-80 object-contain opacity-60"
              />
            </div>

            {/* Subtitle - Aligned with top of image */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#8B2635] text-xs md:text-sm uppercase tracking-wider font-semibold mb-3 md:mb-4 flex items-center gap-2 relative z-10 justify-end md:justify-start"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3 md:w-4 md:h-4">
                <path
                  d="M8 3 C8 1, 11 1, 11 3 C11 5, 8 8, 8 8 C8 8, 5 5, 5 3 C5 1, 8 1, 8 3"
                  fill="#8B2635"
                  opacity="0.8"
                />
              </svg>
              VỀ CHÚNG TÔI
              <svg width="16" height="16" viewBox="0 0 16 16" className="w-3 h-3 md:w-4 md:h-4">
                <path
                  d="M8 3 C8 1, 11 1, 11 3 C11 5, 8 8, 8 8 C8 8, 5 5, 5 3 C5 1, 8 1, 8 3"
                  fill="#8B2635"
                  opacity="0.8"
                />
              </svg>
            </motion.p>

            {/* Main Title - Modern Elegant Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-5 md:mb-6 relative z-10"
            >
              {/* Main titles - Clean modern style */}
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight flex items-center gap-2 flex-wrap">
                  <span className="text-[#8B2635] italic font-serif">
                    Thiệp cưới
                  </span>
                  <span className="text-[#8B2635] italic font-serif">
                    online
                  </span>
                  {/* Small heart */}
                  <svg width="22" height="22" viewBox="0 0 22 22" className="w-5 h-5 md:w-6 md:h-6 inline-block">
                    <path
                      d="M11 5 C11 2, 16 2, 16 5 C16 8, 11 13, 11 13 C11 13, 6 8, 6 5 C6 2, 11 2, 11 5"
                      fill="#8B2635"
                      opacity="0.85"
                    />
                    <path
                      d="M11 6 C11 4, 13 4, 13 6 C13 8, 11 10, 11 10 C11 10, 9 8, 9 6 C9 4, 11 4, 11 6"
                      fill="#fff"
                      opacity="0.3"
                    />
                  </svg>
                </h2>

                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight flex items-center gap-2 flex-wrap justify-end md:justify-start">
                  <span className="text-[#8B2635] italic font-serif">
                    Giải pháp
                  </span>
                  <span className="text-[#8B2635] italic font-serif">
                    hiện đại
                  </span>
                  {/* Cross/Plus sparkle */}
                  <svg width="18" height="18" viewBox="0 0 18 18" className="w-4 h-4 md:w-5 md:h-5">
                    <path d="M9 2 L9 16 M2 9 L16 9" stroke="#8B2635" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                    <circle cx="9" cy="9" r="2" fill="#8B2635" opacity="0.8" />
                  </svg>
                </h2>
              </div>


            </motion.div>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 relative z-10 pl-5 md:pr-16 lg:pr-20 text-right md:text-left"
            >
              Hỷ Thư là nền tảng thiệp cưới online được xây dựng trên công nghệ hiện đại, nơi mỗi thiết kế được chăm chút bởi đội ngũ sáng tạo chuyên nghiệp cùng kho mẫu phong phú, tinh tuyển. Chúng tôi mang đến các giải pháp thiệp cưới online, slide cưới với chất lượng cao, thẩm mỹ tinh tế và chi phí hợp lý, đáp ứng trọn vẹn mọi nhu cầu của các cặp đôi.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10 pl-5 md:pr-16 lg:pr-20 text-right md:text-left"
            >
              Chúng tôi liên tục cập nhật, áp dụng những giải pháp tối ưu trong thiết kế thiệp cưới online nhằm đảm bảo tiêu chuẩn chất lượng cao, giao diện sang trọng, khoa học và trải nghiệm người dùng mượt mà, dễ dàng nhưng không kém phần ấn tượng. Mỗi tấm thiệp không chỉ là một lời mời, mà còn là khởi đầu trang trọng cho ngày hạnh phúc.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
