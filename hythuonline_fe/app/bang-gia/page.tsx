'use client'

import { Button, Row, Col } from 'antd'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function BangGiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('/abc.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small tag */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#c85d6a]/10 text-[#8B2635] text-sm font-semibold rounded-full">
                Bảng Giá
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Bảng Giá Dịch Vụ
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chi phí hợp lý, minh bạch cho ngày trọng đại của bạn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#f5f0e8] to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#8B2635] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">HT</span>
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B2635] mb-0.5">BẢNG GIÁ</h2>
                <p className="text-sm text-gray-600">THIỆP CƯỚI ONLINE HỶ THƯ</p>
              </div>
            </div>
          </motion.div>

          {/* Price Table - New Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[30px] p-4 md:p-6 bg-[#8B2635] shadow-2xl relative"
          >
            {/* Main Table Container */}
            <div className="bg-white rounded-lg overflow-hidden mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#EAEAEA]">
                    <th className="py-4 md:py-6 text-center text-[#222] font-bold text-xl md:text-2xl border-r border-white w-[50%]">GÓI THIỆP</th>
                    <th className="py-2 md:py-4 text-center text-[#333] font-bold text-xs md:text-sm border-r border-white w-[25%] uppercase">CHỈNH TRÊN MẪU</th>
                    <th className="py-2 md:py-4 text-center text-[#333] font-bold text-xs md:text-sm w-[25%] uppercase">LÀM THỦ CÔNG</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {/* Gói 1 */}
                  <tr className="bg-[#8B2635] border-t-2 border-white">
                    <td className="py-4 md:py-6 px-4 border-r-2 border-white">
                      <div className="flex items-center">
                        <span className="font-bold text-lg md:text-xl mr-3 md:mr-4 shrink-0">GÓI 1</span>
                        <span className="font-bold text-base md:text-lg">1 thiệp Nhà Trai hoặc Nhà Gái</span>
                      </div>
                    </td>
                    <td className="py-4 md:py-6 text-center border-r-2 border-white">
                      <span className="font-bold text-lg md:text-xl">149k</span>
                    </td>
                    <td className="py-4 md:py-6 text-center">
                      <span className="font-bold text-lg md:text-xl">+ 99k</span>
                    </td>
                  </tr>

                  {/* Gói 2 */}
                  <tr className="bg-[#8B2635] border-t-2 border-white">
                    <td className="py-4 md:py-6 px-4 border-r-2 border-white">
                      <div className="flex items-center">
                        <span className="font-bold text-lg md:text-xl mr-3 md:mr-4 shrink-0">GÓI 2</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-base md:text-lg">1 thiệp dùng chung cho</span>
                          <span className="font-bold text-base md:text-lg">Nhà Trai & Nhà Gái</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 md:py-6 text-center border-r-2 border-white">
                      <span className="font-bold text-lg md:text-xl">219k</span>
                    </td>
                    <td className="py-4 md:py-6 text-center">
                      <span className="font-bold text-lg md:text-xl">+ 99k</span>
                    </td>
                  </tr>

                  {/* Gói 3 */}
                  <tr className="bg-[#8B2635] border-t-2 border-white">
                    <td className="py-4 md:py-6 px-4 border-r-2 border-white">
                      <div className="flex items-center">
                        <span className="font-bold text-lg md:text-xl mr-3 md:mr-4 shrink-0">GÓI 3</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-base md:text-lg">Combo 2 thiệp</span>
                          <span className="font-bold text-base md:text-lg">(1 Nhà Trai + 1 Nhà Gái) chung mẫu</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 md:py-6 text-center border-r-2 border-white">
                      <span className="font-bold text-lg md:text-xl">249k</span>
                    </td>
                    <td className="py-4 md:py-6 text-center">
                      <span className="font-bold text-lg md:text-xl">+ 99k</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note Section */}
            <div className="bg-white rounded-[30px] p-6 text-center">
              <h3 className="text-[#8B2635] font-bold text-lg mb-2">Note:</h3>
              <div className="text-left md:text-center space-y-2 text-sm md:text-base text-gray-800">
                <p>
                  <span className="font-bold text-[#8B2635]">(*) Chỉnh trên mẫu:</span> Là cô dâu chú rể  lựa chọn mẫu có sẵn và tự chỉnh thông tin trên mẫu đó
                </p>
                <p>
                  <span className="font-bold text-[#8B2635]">(*) Làm thủ công:</span> Cô dâu chú rể liên hệ admin để chọn mẫu và gửi ảnh kèm thông tin để admin trực tiếp sửa
                </p>
                <p>
                  <span className="font-bold text-[#8B2635]">(*) Lưu ý:</span> Thiệp nhà trai và nhà gái nên dùng riêng khi cô dâu chú rể tổ chức tại nhà riêng. Và nên chọn thiệp chung khi cô dâu chú rể tổ chức lễ thành hôn tại nhà hàng/khách sạn/địa điểm tổ chức sự kiện
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Use Paid Package Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Vì sao nên sử dụng gói trả phí?
            </h2>
          </motion.div>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={8} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">💯</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Thiết kế độc quyền</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Truy cập các mẫu thiệp cao cấp, độc quyền chỉ có tại Hỷ Thư, được thiết kế bởi các chuyên gia
                </p>
              </motion.div>
            </Col>

            <Col xs={24} md={8} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="pi pi-video text-5xl text-gray-900"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Đa phương tiện</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Tích hợp video, album ảnh và âm nhạc cho thiệp cưới ấn tượng
                </p>
              </motion.div>
            </Col>

            <Col xs={24} md={8} lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="pi pi-cog text-5xl text-gray-900"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Tùy chỉnh hoàn toàn</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Điều chỉnh mọi chi tiết để phản ánh phong cách riêng của bạn
                </p>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 lg:py-12 mb-8 md:mb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#8B2635] via-[#a03d4a] to-[#c85d6a] rounded-2xl p-8 md:p-10 lg:p-12 text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Sẵn sàng tạo thiệp online ấn tượng?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Đăng ký ngay hôm nay và bắt đầu tạo website cưới, thiệp mời đặc biệt đẹp mắt cho ngày trọng đại của bạn
            </p>
            <Link href="/thiep-cuoi-online">
              <Button
                size="large"
                className="bg-white text-[#8B2635] hover:bg-gray-100 border-0 h-11 px-6 md:px-8 text-sm md:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Khám phá mẫu thiệp ngay ✨
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
