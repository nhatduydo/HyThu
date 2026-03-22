'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqItems = [
  {
    id: 1,
    question: 'Hỷ Thư là gì?',
    answer: 'Hỷ Thư là nền tảng thiệp cưới online hiện đại, giúp bạn tạo và chia sẻ thiệp cưới đẹp mắt chỉ trong vài phút. Chúng tôi cung cấp hơn 200+ mẫu thiết kế đa dạng từ cổ điển đến hiện đại, cho phép bạn tùy chỉnh hoàn toàn theo phong cách riêng.',
  },
  {
    id: 2,
    question: 'Tôi phải trả bao nhiêu tiền để tạo thiệp cưới?',
    answer: 'Hỷ Thư cung cấp cả gói miễn phí và gói trả phí. Gói miễn phí cho phép bạn tạo thiệp với các tính năng cơ bản. Gói trả phí mở khóa toàn bộ mẫu thiết kế premium, nhạc nền, và các tính năng nâng cao khác với chi phí chỉ từ 500\u00A0đồng/thiệp. Bạn có thể xem chi tiết bảng giá trên trang Dịch vụ.',
  },
  {
    id: 3,
    question: 'Làm thế nào để tùy chỉnh thiệp?',
    answer: 'Rất đơn giản! Sau khi chọn mẫu thiết kế, bạn có thể tùy chỉnh: thông tin cưới (tên cô dâu chú rể, ngày giờ, địa điểm), màu sắc, phông chữ, hình ảnh, và nhạc nền. Giao diện thân thiện, không cần kỹ năng thiết kế.',
  },
  {
    id: 4,
    question: 'Tôi có thể chia sẻ thiệp như thế nào?',
    answer: 'Bạn có thể chia sẻ thiệp qua nhiều cách: gửi link trực tiếp qua Zalo, Facebook, Messenger, hoặc email. Hỷ Thư cũng hỗ trợ gửi hàng loạt đến danh sách khách mời của bạn chỉ trong vài giây.',
  },
  {
    id: 5,
    question: 'Thiệp có hoạt động trên mọi thiết bị không?',
    answer: 'Có! Thiệp cưới từ Hỷ Thư được tối ưu hóa để hoạt động hoàn hảo trên mọi thiết bị: điện thoại, tablet, và máy tính. Giao diện tự động điều chỉnh để đảm bảo trải nghiệm tốt nhất trên mọi màn hình.',
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]) // No items open by default

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="relative bg-white overflow-hidden py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B2635] text-center mb-10 md:mb-12"
        >
          Câu hỏi thường gặp
        </motion.h2>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(item.id)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-semibold text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    <i
                      className={`pi ${isOpen ? 'pi-minus' : 'pi-plus'
                        } text-gray-600 text-lg md:text-xl transition-transform duration-300`}
                    ></i>
                  </div>
                </button>

                {/* Answer - Collapsible */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

