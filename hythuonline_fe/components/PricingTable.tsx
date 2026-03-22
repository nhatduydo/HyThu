'use client'

import { motion } from 'framer-motion'

export default function PricingTable() {
    return (
        <section className="py-10 md:py-16" style={{ backgroundImage: 'url(/vintage-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}>
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
                {/* Price Table - Compact & Elegant Design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
                        <div className="relative z-10">
                            <div className="overflow-x-auto scrollbar-hide">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#8B2635] text-white">
                                            <th className="py-1.5 md:py-3 px-1 md:px-6 text-center font-bold text-xs md:text-base w-[45%]">GÓI THIỆP</th>
                                            <th className="py-1.5 md:py-3 px-0.5 md:px-2 text-center font-bold text-[10px] md:text-xs w-[27.5%] uppercase tracking-tight md:tracking-wider border-l border-white/20">CHỈNH TRÊN MẪU</th>
                                            <th className="py-1.5 md:py-3 px-0.5 md:px-2 text-center font-bold text-[10px] md:text-xs w-[27.5%] uppercase tracking-tight md:tracking-wider border-l border-white/20">LÀM THỦ CÔNG</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white/80">
                                        {/* Gói 1 */}
                                        <tr className="border-b border-gray-100 hover:bg-pink-50/50 transition-colors">
                                            <td className="py-2 md:py-4 px-2 md:px-6">
                                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-24">
                                                    <span className="font-bold text-[#8B2635] text-sm md:text-base shrink-0">GÓI 1</span>
                                                    <span className="text-xs md:text-sm text-gray-700">1 thiệp Nhà Trai hoặc Nhà Gái</span>
                                                </div>
                                            </td>
                                            <td className="py-2 md:py-4 px-1 md:px-2 text-center font-bold text-[#8B2635] text-sm md:text-lg border-l border-dashed border-pink-100/60">
                                                149k
                                            </td>
                                            <td className="py-2 md:py-4 px-1 md:px-2 text-center font-bold text-[#8B2635] text-sm md:text-lg border-l border-dashed border-pink-100/60">
                                                + 99k
                                            </td>
                                        </tr>

                                        {/* Gói 2 */}
                                        <tr className="border-b border-gray-100 hover:bg-pink-50/50 transition-colors">
                                            <td className="py-2 md:py-4 px-2 md:px-6">
                                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-24">
                                                    <span className="font-bold text-[#8B2635] text-sm md:text-base shrink-0">GÓI 2</span>
                                                    <div className="flex flex-col text-xs md:text-sm text-gray-700">
                                                        <span>1 thiệp dùng chung cho</span>
                                                        <span>Nhà Trai & Nhà Gái</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2 md:py-4 px-1 md:px-2 text-center font-bold text-[#8B2635] text-sm md:text-lg border-l border-dashed border-pink-100/60">
                                                219k
                                            </td>
                                            <td className="py-2 md:py-4 px-1 md:px-2 text-center font-bold text-[#8B2635] text-sm md:text-lg border-l border-dashed border-pink-100/60">
                                                + 99k
                                            </td>
                                        </tr>

                                        {/* Gói 3 */}
                                        <tr className="hover:bg-pink-50/50 transition-colors">
                                            <td className="py-2 md:py-4 px-2 md:px-6">
                                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-24">
                                                    <span className="font-bold text-[#8B2635] text-sm md:text-base shrink-0">GÓI 3</span>
                                                    <div className="flex flex-col text-xs md:text-sm text-gray-700">
                                                        <span>Combo 2 thiệp chung mẫu</span>
                                                        <span>(1 Nhà Trai + 1 Nhà Gái)</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2 md:py-4 px-1 md:px-2 text-center font-bold text-[#8B2635] text-sm md:text-lg border-l border-dashed border-pink-100/60">
                                                249k
                                            </td>
                                            <td className="py-2 md:py-4 px-1 md:px-2 text-center font-bold text-[#8B2635] text-sm md:text-lg border-l border-dashed border-pink-100/60">
                                                + 99k
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Note Section - Full Text */}
                            <div className="px-6 py-5 text-center border-t border-pink-200/50 bg-white/60 backdrop-blur-sm">
                                <h3 className="text-[#8B2635] font-bold text-sm md:text-base mb-3 uppercase tracking-wider flex items-center justify-center gap-2">
                                    <i className="pi pi-info-circle"></i> Note
                                </h3>
                                <div className="text-left space-y-2 text-sm text-gray-800 font-medium max-w-2xl mx-auto">
                                    <p>
                                        <span className="font-bold text-[#8B2635]">(*) Chỉnh trên mẫu:</span> Là cô dâu chú rể lựa chọn mẫu có sẵn và tự chỉnh thông tin trên mẫu đó
                                    </p>
                                    <p>
                                        <span className="font-bold text-[#8B2635]">(*) Làm thủ công:</span> Cô dâu chú rể liên hệ admin để chọn mẫu và gửi ảnh kèm thông tin để admin trực tiếp sửa
                                    </p>
                                    <p>
                                        <span className="font-bold text-[#8B2635]">(*) Lưu ý:</span> Thiệp nhà trai và nhà gái nên dùng riêng khi cô dâu chú rể tổ chức tại nhà riêng. Và nên chọn thiệp chung khi cô dâu chú rể tổ chức lễ thành hôn tại nhà hàng/khách sạn/địa điểm tổ chức sự kiện
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
