'use client'

import { motion } from 'framer-motion'
import { Button } from 'antd'
import Image from 'next/image'

const steps = [
  {
    number: '1',
    title: 'Chọn mẫu giao diện',
    description: 'Chọn mẫu yêu thích từ kho giao diện có sẵn.',
    image: '/step1.png',
  },
  {
    number: '2',
    title: 'Chỉnh sửa nội dung',
    description: 'Tùy chỉnh thông tin cưới và hình ảnh của bạn.',
    image: '/step2.png',
  },
  {
    number: '3',
    title: 'Tạo thiệp mời',
    description: 'Tạo thiệp mời & Quản lý danh sách khách mời.',
    image: '/step3.png',
  },
  {
    number: '4',
    title: 'Chia sẻ & Gửi thiệp',
    description: 'Chia sẻ website cưới và gửi thiệp mời cho từng khách.',
    image: '/step4.png',
  },
]

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#F5F3EF', backgroundImage: 'url(/vintage-bg.png)', backgroundRepeat: 'repeat', backgroundSize: '400px 400px' }}>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8B2635]"
          >
            4 bước đơn giản để tạo Thiệp cưới online của riêng bạn
          </motion.h2>
        </div>

        {/* Steps Grid - 4 Cards with Image Background */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-0 md:gap-4 lg:gap-5 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Card Frame Image - Bigger size */}
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <Image
                  src={step.image}
                  alt={`Bước ${step.number}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 45vw, 25vw"
                />

                {/* Text Content Overlay - Positioned between stamp and number */}
                <div className="absolute inset-x-0 top-[20%] bottom-[20%] flex flex-col items-center justify-center px-3 md:px-5">
                  {/* Title */}
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#8B2635] mb-1 md:mb-2 text-center leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8B2635] mb-4"
          >
            Bắt đầu tạo thiệp cưới với Hỷ Thư
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-900 mb-6 md:mb-8"
          >
            Đã có hơn <span className="font-bold text-[#8B2635]">100,000</span> cặp đôi tin dùng, bạn còn chần chừ gì nữa?
          </motion.p>

          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              className="bg-[#8B2635] hover:bg-[#a03d4a] border-0 h-12 md:h-14 px-10 md:px-16 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-lg text-white uppercase"
            >
              BẮT ĐẦU TẠO THIỆP
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
