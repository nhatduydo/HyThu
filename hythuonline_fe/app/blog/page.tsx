'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function BlogPage() {
    const featuredPosts = BLOG_POSTS.filter(post => post.featured)
    const regularPosts = BLOG_POSTS.filter(post => !post.featured)

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header Section */}
            <div className="relative bg-gradient-to-br from-[#fef7f7] via-white to-[#fef7f7] py-12 md:py-16 border-b border-gray-100">
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

                <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tin tức & xu hướng thiệp mời mới nhất
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Cập nhật xu hướng thiệp mời mới nhất, mẹo tổ chức tiệc cưới, sinh nhật và các<br className="hidden md:block" />
                            bài viết truyền cảm hứng từ blog của chúng mình.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl flex-1">
                {/* Featured Posts - 2 Column Grid */}
                {featuredPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {featuredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block relative rounded-2xl overflow-hidden h-80 shadow-md hover:shadow-xl transition-shadow">
                                    {/* Background Image */}
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Pink Tint Overlay */}
                                    <div className="absolute inset-0 bg-pink-100/40"></div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:underline">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm font-semibold opacity-90">
                                            {post.excerpt.substring(0, 60)}...
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Regular Posts - Horizontal Cards */}
                <div className="space-y-8">
                    {regularPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row gap-6 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border-2 border-gray-200 hover:border-[#c85d6a]">
                                {/* Image */}
                                <div className="relative w-full md:w-80 h-56 md:h-48 flex-shrink-0 overflow-hidden bg-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 320px"
                                    />
                                    {post.category && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded">
                                                {post.category}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 md:py-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#c85d6a] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="text-xs text-gray-400">
                                        {post.author} • {post.date}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}
