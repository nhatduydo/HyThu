'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Layout, Menu, Button, Avatar, Dropdown, message, Space } from 'antd'
import type { MenuProps } from 'antd'
import { useAuthStore } from '@/store/authStore'
import api from '@/lib/axios'

const { Header: AntHeader } = Layout

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout', {})
      logout()
      message.success('Đăng xuất thành công')
      window.location.href = '/'
    } catch (error) {
      console.error('Logout failed:', error)
      // Still logout on frontend even if backend fails
      logout()
      message.success('Đăng xuất thành công')
      window.location.href = '/'
    }
  }

  const userMenu: MenuProps['items'] = [
    {
      key: 'profile',
      label: (
        <div className="py-2">
          <div className="font-semibold text-[#8B2635]">{user?.name}</div>
          <div className="text-xs text-gray-500">{user?.email}</div>
        </div>
      ),
    },
    {
      type: 'divider',
    },
    ...(user?.role === 'admin' ? [{
      key: 'dashboard',
      label: <Link href="/admin/quan-ly-thiep">Quản lý thiệp</Link>,
    }] : [{
      key: 'my-wedding-cards',
      label: <Link href="/thiep-cua-toi">Thiệp của tôi</Link>,
    }]),
    {
      key: 'account',
      label: <Link href="/tai-khoan">Thông tin tài khoản</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: <span onClick={handleLogout} className="text-red-500">Đăng xuất</span>,
    },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link href="/">Trang chủ</Link>,
    },
    {
      key: 'invitations',
      label: <Link href="/thiep-cuoi-online">Thiệp cưới online</Link>,
    },
    {
      key: 'blog',
      label: <Link href="/blog">Blog</Link>,
    },
    {
      key: 'pricing',
      label: <Link href="/bang-gia">Bảng giá</Link>,
    },
    {
      key: 'contact',
      label: <Link href="/lien-he">Liên hệ</Link>,
    },
  ]

  return (
    <AntHeader
      className={`sticky top-0 z-50 px-0 h-auto transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md border-b border-gray-200/50'
        : 'bg-transparent'
        }`}
      style={!isScrolled ? { background: 'transparent !important' } : { background: '#ffffff' }}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Handwritten style pink */}
          <Link href="/" className="flex items-center flex-shrink-0 z-10">
            <span className="text-3xl md:text-4xl font-bold text-[#c85d6a] drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Hỷ Thư
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 z-20">
            <Menu
              mode="horizontal"
              items={menuItems}
              className={`border-0 bg-transparent ${isScrolled ? 'custom-menu-plum' : 'custom-menu-plum'}`}
              style={{ lineHeight: '64px', backgroundColor: 'transparent', zIndex: 20 }}
              theme="light"
            />
          </div>

          {/* Auth Buttons / User Menu - Right */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0 z-10">
            {isAuthenticated && user ? (
              <Dropdown menu={{ items: userMenu }} trigger={['click']} placement="bottomRight">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 py-1 px-2 rounded-full transition-all">
                  <Avatar
                    style={{ backgroundColor: '#c85d6a', verticalAlign: 'middle' }}
                    size="large"
                  >
                    {user.name?.charAt(0).toUpperCase()}
                  </Avatar>
                  <span className={`font-semibold ${isScrolled ? 'text-[#8B2635]' : 'text-[#8B2635]'}`}>
                    {user.name}
                  </span>
                </div>
              </Dropdown>
            ) : (
              <>
                <Link href="/dang-nhap">
                  <Button
                    type="default"
                    size="large"
                    className="h-11 px-7 text-base font-semibold rounded-lg transition-all border-[#8B2635] text-[#8B2635] hover:bg-[#8B2635] hover:text-white hover:border-[#8B2635]"
                  >
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/dang-ky">
                  <Button
                    type="primary"
                    size="large"
                    className="bg-[#c85d6a] hover:bg-[#b84d5a] border-0 h-11 px-7 text-base font-semibold rounded-lg transition-all text-white"
                  >
                    Đăng ký
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#8B2635] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`pi ${isMenuOpen ? 'pi-times' : 'pi-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 w-72 max-w-[80vw] bg-white shadow-2xl z-50 lg:hidden animate-slide-in-right">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <span className="text-xl font-bold text-[#c85d6a]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Hỷ Thư
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#8B2635]"
                >
                  <i className="pi pi-times text-lg"></i>
                </button>
              </div>

              {/* Menu Items */}
              <div className="px-3 py-4 overflow-y-auto max-h-[calc(100vh-160px)]">
                <div className="space-y-0.5">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-[#8B2635] font-medium hover:bg-[#c85d6a]/10 hover:text-[#c85d6a] transition-all duration-200 text-base"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    href="/thiep-cuoi-online"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-[#8B2635] font-medium hover:bg-[#c85d6a]/10 hover:text-[#c85d6a] transition-all duration-200 text-base"
                  >
                    Thiệp cưới online
                  </Link>
                  <Link
                    href="/slide-cuoi"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-[#8B2635] font-medium hover:bg-[#c85d6a]/10 hover:text-[#c85d6a] transition-all duration-200 text-base"
                  >
                    Slide cưới
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-[#8B2635] font-medium hover:bg-[#c85d6a]/10 hover:text-[#c85d6a] transition-all duration-200 text-base"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/bang-gia"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-[#8B2635] font-medium hover:bg-[#c85d6a]/10 hover:text-[#c85d6a] transition-all duration-200 text-base"
                  >
                    Bảng giá
                  </Link>
                  <Link
                    href="/lien-he"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-[#8B2635] font-medium hover:bg-[#c85d6a]/10 hover:text-[#c85d6a] transition-all duration-200 text-base"
                  >
                    Liên hệ
                  </Link>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 bg-white space-y-2">
                {isAuthenticated && user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg">
                      <Avatar
                        style={{ backgroundColor: '#c85d6a', verticalAlign: 'middle' }}
                        size="large"
                      >
                        {user.name?.charAt(0).toUpperCase()}
                      </Avatar>
                      <div>
                        <div className="font-semibold text-[#8B2635]">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                    <Button
                      block
                      size="large"
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                      className="border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 h-11 font-semibold rounded-lg text-base"
                    >
                      Đăng xuất
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link href="/dang-nhap" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        type="default"
                        block
                        size="large"
                        className="border-[#8B2635] text-[#8B2635] hover:bg-[#8B2635] hover:text-white hover:border-[#8B2635] h-11 font-semibold rounded-lg text-base"
                      >
                        Đăng nhập
                      </Button>
                    </Link>
                    <Link href="/dang-ky" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        type="primary"
                        block
                        size="large"
                        className="bg-[#c85d6a] hover:bg-[#b84d5a] border-0 h-11 font-semibold rounded-lg text-white shadow-lg text-base"
                      >
                        Đăng ký
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </AntHeader>
  )
}
