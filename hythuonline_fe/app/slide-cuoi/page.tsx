'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from 'antd'
import Footer from '@/components/Footer'

export default function SlideCuoiPage() {
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
                                Slide Cưới
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            Trình Chiếu Slide Ảnh Cưới
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Tạo slide ảnh cưới chuyên nghiệp, ấn tượng cho ngày trọng đại
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-16 md:py-24 text-center">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="text-6xl md:text-8xl mb-6">📸</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tính năng đang phát triển</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Chúng tôi đang nỗ lực hoàn thiện tính năng tạo Slide Cưới để mang đến trải nghiệm tốt nhất cho bạn.
                            <br />
                            Vui lòng quay lại sau!
                        </p>
                        <Link href="/">
                            <Button type="primary" size="large" className="bg-[#8B2635] hover:bg-[#a03d4a] border-0">
                                Về trang chủ
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
