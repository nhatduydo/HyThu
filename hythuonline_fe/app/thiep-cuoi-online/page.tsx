'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, Select, Skeleton } from 'antd'
import Footer from '@/components/Footer'
import api from '@/lib/axios'

const { Option } = Select


export default function ThiepCuoiOnlinePage() {
  const router = useRouter()
  const [selectedPackage, setSelectedPackage] = useState('all')
  const [templates, setTemplates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await api.get('/templates');
        setTemplates(response.data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const filteredTemplates = templates.filter(t => {
    // Filter by house type (assuming defaultData or type might carry this info in future, for now fallback to both)
    // You might want to update your schema to include houseType explicitly if needed.
    // For now, let's assume all fetched templates are 'both' or check t.type
    // If you need exact filtering from API, adjust accordingly.

    // Filter by package
    if (selectedPackage !== 'all') {
      if (selectedPackage === 'free' && t.type !== 'FREE') return false
      if (selectedPackage === 'basic' && t.type !== 'BASIC') return false
      if (selectedPackage === 'premium' && t.type !== 'PREMIUM') return false
    }

    return true
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Background */}
      <div className="relative py-12 md:py-16">
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
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto text-center">
          {/* Small tag */}
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#c85d6a]/10 text-[#8B2635] text-sm font-semibold rounded-full">
              Thiệp Cưới Online
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Mẫu thiệp online đẹp
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-8">
            Khám phá bộ sưu tập thiệp cưới online tinh tế, hiện đại.
          </p>


        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 md:py-12 max-w-7xl mx-auto">

        {/* Breadcrumb and Dropdown */}
        <div className="flex items-center justify-between mb-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#c85d6a] transition-colors flex items-center">
              <i className="pi pi-home mr-1"></i>
              <span>Trang chủ</span>
            </Link>
            <span>/</span>
            <span className="text-gray-900">Mẫu thiệp</span>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <Select
              value={selectedPackage}
              onChange={setSelectedPackage}
              className="w-[150px]"
              placeholder="Tất cả gói"
            >
              <Option value="all">Tất cả gói</Option>
              <Option value="free">Miễn Phí</Option>
              <Option value="basic">Basic</Option>
              <Option value="premium">Premium</Option>
            </Select>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 p-4">
                <Skeleton.Image active className="!w-full !h-[250px] mb-4" />
                <Skeleton active paragraph={{ rows: 2 }} />
              </div>
            ))
          ) : filteredTemplates.map((template) => (
            <div
              key={template._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Template Image */}
              <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${template.thumbnail || '/abc.webp'}')`,
                  }}
                >
                </div>
              </div>

              {/* Template Info */}
              <div className="p-5">
                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {template.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {template.description || 'Mẫu thiệp cưới đẹp, hiện đại'}
                </p>

                {/* Product Details - Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    Mã: {template.code}
                  </span>
                  <span className={`px-3 py-1 text-xs rounded-full ${template.type === 'PREMIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                    {template.type}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    Cả 2 nhà
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    type="primary"
                    onClick={() => router.push(`/xem-thiep/${template._id}`)}
                    className="flex-1 bg-[#c85d6a] hover:bg-[#b84d5a] border-0 h-10 flex items-center justify-center gap-2"
                  >
                    <i className="pi pi-eye text-white"></i>
                    <span>Xem thiệp</span>
                  </Button>
                  <Button
                    className="flex-1 border border-gray-300 text-gray-700 hover:border-[#c85d6a] hover:text-[#c85d6a] h-10 flex items-center justify-center gap-2 bg-white"
                  >
                    <i className="pi pi-shopping-cart"></i>
                    <span>Mua thiệp</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          {!loading && filteredTemplates.length === 0 && (
            <p className="text-gray-500 mb-4">Không tìm thấy mẫu thiệp phù hợp</p>
          )}
        </div>

        {/* ===== 12 LOCAL TEMPLATES ===== */}
        <div className="mt-16 mb-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#c85d6a] to-[#9a6bc0]" />
            <h2 className="text-lg font-bold text-gray-800">Tất cả mẫu thiệp</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">12 mẫu</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                onClick={() => router.push(`/xem-thiep/preview?t=${num}`)}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thumbnail placeholder */}
                <div
                  className="aspect-[3/4] flex flex-col items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, hsl(${(num - 1) * 30}, 40%, 94%) 0%, hsl(${(num - 1) * 30 + 20}, 35%, 88%) 100%)` }}
                >
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: `hsl(${(num - 1) * 30}, 50%, 55%)`, background: `hsl(${(num - 1) * 30}, 50%, 55%)22` }}
                  >
                    <span className="font-bold text-lg" style={{ color: `hsl(${(num - 1) * 30}, 50%, 40%)` }}>
                      {num}
                    </span>
                  </div>
                  <span className="text-xs tracking-widest uppercase font-medium" style={{ color: `hsl(${(num - 1) * 30}, 40%, 50%)` }}>
                    Template
                  </span>
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Xem mẫu
                    </span>
                  </div>
                </div>
                {/* Label */}
                <div className="p-3 text-center">
                  <p className="font-semibold text-gray-800 text-sm">Mẫu thiệp {num}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Template {num}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
