'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    icon: 'pi-bolt',
    title: 'Thao tác nhanh chóng',
    desc: 'Chỉ cần vài thao tác đơn giản, dễ dàng chỉnh sửa thông tin bản có thể tạo và gửi thiệp cưới ngay lập tức mà không mất thời gian chờ đợi in ấn.',
  },
  {
    icon: 'pi-envelope',
    title: 'Tiện lợi',
    desc: 'Gửi thiệp mời qua email, mạng xã hội hoặc tin nhắn, phù hợp với những khách mời ở xa hoặc không thể gặp trực tiếp.',
  },
  {
    icon: 'pi-dollar',
    title: 'Tiết kiệm chi phí',
    desc: 'Không cần in ấn và vận chuyển, giúp giảm đáng kể chi phí so với thiệp cưới truyền thống.',
  },
  {
    icon: 'pi-list',
    title: 'Quản lý khách mời dễ dàng',
    desc: 'Theo dõi số lượng khách mời tham dự và lưu giữ lời chúc từ bạn bè, người thân.',
  },
  {
    icon: 'pi-gift',
    title: 'Linh hoạt cho khách mời',
    desc: 'Khách mời có thể gửi tiền mừng bất cứ lúc nào, kể cả khi không thể tham dự trực tiếp.',
  },
  {
    icon: 'pi-refresh',
    title: 'Thân thiện với môi trường',
    desc: 'Giảm thiểu việc sử dụng giấy và in ấn, góp phần bảo vệ môi trường.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white overflow-hidden py-10 md:py-14 lg:py-18">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B2635] text-center mb-10 md:mb-14"
        >
          Thiệp cưới online của Hỷ Thư có gì đặc biệt?
        </motion.h2>

        {/* Reasons Grid - 2 columns, 2 rows layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              {/* Icon Square - Main Color Background */}
              <div className="w-16 h-16 md:w-18 md:h-18 rounded-lg bg-[#8B2635] flex items-center justify-center flex-shrink-0 shadow-md">
                <i
                  className={`pi ${reason.icon} text-2xl md:text-3xl text-white`}
                ></i>
              </div>

              {/* Content - Right Side */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-900 text-base leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

