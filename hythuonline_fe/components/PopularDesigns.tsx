'use client'

import { useState, useEffect } from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import api from '@/lib/axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface Template {
  _id: string;
  name: string;
  code: string;
  thumbnail: string;
  description: string;
  defaultData: any;
  isActive: boolean;
  type: string; 
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  badgeColor?: string;
}

export default function PopularDesigns() {
  const [designs, setDesigns] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await api.get('/templates');
        setDesigns(response.data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const displayDesigns = designs.length > 0 ? (() => {
    let result = [...designs];
    while (result.length < 15) {
      result = [...result, ...designs];
    }
    return result;
  })() : [];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-14 md:mb-16">
          {/* Main Title - Stylized with Gradient */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
              <span
                className="bg-gradient-to-r from-[#8B2635] via-[#A03D4A] to-[#8B2635] bg-clip-text text-transparent drop-shadow-sm"
                style={{
                  textShadow: '0 2px 4px rgba(139, 38, 53, 0.1)'
                }}
              >
                ✿ Thư Mời Online ✿
              </span>
            </h2>

            {/* Subtitle */}
            <div className="mb-4">
              <p className="text-base md:text-lg lg:text-xl font-semibold">
                <span
                  className="bg-gradient-to-r from-[#862934] via-[#9a2f3f] to-[#862934] bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 2px 4px rgba(134, 41, 52, 0.1)'
                  }}
                >
                  Khám phá bộ sưu tập thiết kế đa dạng, từ cổ điển đến hiện đại
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container using Swiper */}
        <div className="relative mb-12">
          <style jsx global>{`
            .swiper-pagination-bullet-active {
              background-color: #c85d6a !important;
            }
            .custom-nav-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-100%);
              width: 48px;
              height: 48px;
              background: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #c85d6a;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
              z-index: 50;
              cursor: pointer;
              transition: all 0.3s ease;
              border: 1px solid rgba(200, 93, 106, 0.1);
            }
            .custom-nav-btn:hover {
              background: #c85d6a;
              color: white;
              box-shadow: 0 20px 25px -5px rgba(200, 93, 106, 0.2);
              transform: translateY(-100%) scale(1.1);
            }
            .custom-nav-btn.swiper-button-disabled {
              opacity: 0.3;
              cursor: not-allowed;
              pointer-events: none;
            }
            .prev-btn { left: -10px; }
            .next-btn { right: -10px; }
            
            /* Hide default swiper buttons */
            .swiper-button-next, .swiper-button-prev {
              display: none !important;
            }

            @media (max-width: 768px) {
              .custom-nav-btn {
                width: 36px;
                height: 36px;
                transform: translateY(-140%);
              }
              .custom-nav-btn:hover {
                transform: translateY(-140%) scale(1.1);
              }
              .prev-btn { left: 5px; }
              .next-btn { right: 5px; }
            }

            /* Focal Point Effect */
            .swiper-slide {
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              transform: scale(0.9);
              opacity: 0.7;
            }
            .swiper-slide-active {
              transform: scale(1.08) translateY(-10px);
              opacity: 1;
              z-index: 10;
            }
          `}</style>
          
          {/* Custom Navigation Buttons */}
          <div className="custom-nav-btn prev-btn shadow-lg">
            <i className="pi pi-chevron-left text-sm md:text-base"></i>
          </div>
          <div className="custom-nav-btn next-btn shadow-lg">
            <i className="pi pi-chevron-right text-sm md:text-base"></i>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
                centeredSlides: true,
              },
            }}
            className="pb-12 !overflow-visible px-10"
          >
            {/* Duplicate slides if needed to ensure seamless looping without warnings. Triple if very small. */}
            {displayDesigns.map((design, index) => (
              <SwiperSlide key={`${design._id}-${index}`} className="py-6 px-3">
                <div className="group relative w-full h-[450px] rounded-[24px] overflow-hidden bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100/50">
                  
                  {/* Main Image with Hover Zoom */}
                  <Link href={`/xem-thiep/${design._id}`} className="absolute inset-0 z-0 block overflow-hidden">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                        backgroundImage: `url('${design.thumbnail || '/abc.webp'}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                        }}
                    ></div>
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </Link>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {design.type === 'PREMIUM' && (
                        <span className="bg-[#D4AF37] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full shadow-lg border border-white/20 uppercase">
                            Premium
                        </span>
                    )}
                    {design.type === 'BASIC' && (
                        <span className="bg-white/90 backdrop-blur-sm text-gray-600 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full shadow-lg border border-white/20 uppercase">
                            Free
                        </span>
                    )}
                  </div>

                  {/* Like Button */}
                  <button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all duration-300">
                     <i className="pi pi-heart text-sm"></i>
                  </button>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-serif text-2xl font-bold mb-1 leading-tight drop-shadow-md line-clamp-2">
                        {design.name}
                    </h3>
                    <p className="text-white/80 text-xs font-medium tracking-wide mb-4 line-clamp-1">
                        {design.description || 'Thiết kế hiện đại, sang trọng'}
                    </p>

                    <div className="flex items-center justify-between gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                         {/* View Details Button */}
                        <Link href={`/xem-thiep/${design._id}`} className="flex-1">
                            <button className="w-full py-2.5 bg-white/10 hover:bg-white backdrop-blur-md border border-white/40 rounded-xl text-white hover:text-[#c85d6a] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                                <i className="pi pi-eye"></i> Xem mẫu
                            </button>
                        </Link>
                         
                         {/* Stats */}
                        <div className="flex items-center gap-2 text-white/90 text-xs bg-black/20 px-3 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                            <i className="pi pi-heart-fill text-[10px]"></i> 85
                        </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-6">
          <Link href="/thiep-cuoi-online">
            <Button
              type="primary"
              size="large"
              className="bg-gradient-to-r from-[#c85d6a] to-[#b84d5a] hover:from-[#b84d5a] hover:to-[#a03d4a] border-0 h-12 px-10 text-base font-semibold shadow-xl rounded-full hover:shadow-2xl transition-all"
            >
              <i className="pi pi-arrow-right mr-2"></i>
              Xem thêm mẫu thiết kế
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
