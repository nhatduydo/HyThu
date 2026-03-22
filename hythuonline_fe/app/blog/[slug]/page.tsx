'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { BLOG_POSTS } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'

// Extract headings from HTML content for TOC
function extractHeadings(htmlContent: string) {
    const headingRegex = /<h([23])[^>]*>(.*?)<\/h\1>/gi
    const headings: { level: number; text: string; id: string }[] = []
    let match

    while ((match = headingRegex.exec(htmlContent)) !== null) {
        const level = parseInt(match[1])
        const text = match[2].replace(/<[^>]*>/g, '') // Remove any nested HTML tags
        const id = text
            .toLowerCase()
            .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
            .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
            .replace(/[ìíịỉĩ]/g, 'i')
            .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
            .replace(/[ùúụủũưừứựửữ]/g, 'u')
            .replace(/[ỳýỵỷỹ]/g, 'y')
            .replace(/đ/g, 'd')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')

        headings.push({ level, text, id })
    }

    return headings
}

// Add IDs to headings in HTML content
function addIdsToHeadings(htmlContent: string) {
    return htmlContent.replace(/<h([23])[^>]*>(.*?)<\/h\1>/gi, (match, level, text) => {
        const cleanText = text.replace(/<[^>]*>/g, '')
        const id = cleanText
            .toLowerCase()
            .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
            .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
            .replace(/[ìíịỉĩ]/g, 'i')
            .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
            .replace(/[ùúụủũưừứựửữ]/g, 'u')
            .replace(/[ỳýỵỷỹ]/g, 'y')
            .replace(/đ/g, 'd')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')

        return `<h${level} id="${id}">${text}</h${level}>`
    })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug)
    const [activeId, setActiveId] = useState<string>('')

    if (!post) {
        notFound()
    }

    const headings = extractHeadings(post.content)
    const contentWithIds = addIdsToHeadings(post.content)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -80% 0px' }
        )

        headings.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [headings])

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.offsetTop - 100
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header Section - Title Left, Image Right */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Title and Meta */}
                        <div className="flex-1">
                            <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 text-sm font-medium transition-colors">
                                <i className="pi pi-arrow-left mr-2"></i> Quay lại Blog
                            </Link>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {post.title}
                                </h1>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                            </motion.div>
                        </div>

                        {/* Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-96 flex-shrink-0"
                        >
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 384px"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl flex-1">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Article Content */}
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex-1 max-w-3xl"
                    >
                        <div
                            className="prose prose-lg max-w-none
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:scroll-mt-24
                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:scroll-mt-24
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
                [&>ul>li]:text-gray-700 [&>ul>li]:leading-relaxed
                [&>p]:mb-6 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-base
                [&>strong]:text-gray-900 [&>strong]:font-semibold
                [&_img]:rounded-2xl [&_img]:shadow-lg [&_img]:w-full [&_img]:h-auto [&_img]:my-8"
                            dangerouslySetInnerHTML={{ __html: contentWithIds }}
                        />
                    </motion.article>

                    {/* Sidebar - Table of Contents */}
                    {headings.length > 0 && (
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="lg:w-80 flex-shrink-0"
                        >
                            <div className="lg:sticky lg:top-24">
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                                        <h3 className="font-bold text-gray-900 text-base">Mục lục</h3>
                                        <i className="pi pi-angle-up text-gray-400"></i>
                                    </div>

                                    <nav className="space-y-1">
                                        {headings.map((heading, index) => (
                                            <button
                                                key={index}
                                                onClick={() => scrollToHeading(heading.id)}
                                                className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-all ${heading.level === 2 ? 'font-semibold' : 'pl-5 font-normal'
                                                    } ${activeId === heading.id
                                                        ? 'bg-pink-50 text-pink-600 border-l-2 border-pink-600'
                                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {heading.level === 3 && <span className="text-pink-600 mr-2">▼</span>}
                                                {heading.text}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}
