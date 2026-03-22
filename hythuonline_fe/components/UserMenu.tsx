'use client'

import { useAuthStore } from '@/store/authStore'
import { Avatar, Dropdown } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined, AppstoreOutlined, HeartOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import api from '@/lib/axios'
import type { MenuProps } from 'antd'

export default function UserMenu() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout', {})
      logout()
      router.push('/dang-nhap')
    } catch (error) {
      console.error('Logout failed:', error)
      // Still logout on frontend even if backend fails
      logout()
      router.push('/dang-nhap')
    }
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const items: MenuProps['items'] = [
    ...(user.role === 'admin' ? [{
      key: 'admin-wedding-cards',
      icon: <AppstoreOutlined />,
      label: 'Quản lý thiệp',
      onClick: () => router.push('/admin/quan-ly-thiep'),
    }] : [{
      key: 'my-wedding-cards',
      icon: <HeartOutlined />,
      label: 'Thiệp của tôi',
      onClick: () => router.push('/thiep-cua-toi'),
    }]),
    {
      type: 'divider',
    },
    {
      key: 'profile',
      icon: <SettingOutlined />,
      label: 'Tài khoản',
      onClick: () => router.push('/tai-khoan'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      onClick: handleLogout,
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <Avatar 
          size="default" 
          icon={<UserOutlined />}
          className="bg-[#c85d6a]"
        />
        <span className="hidden md:inline text-sm font-medium text-gray-700">
          {user.name}
        </span>
      </div>
    </Dropdown>
  )
}
