'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Table, Button, Tag, Space, message, Card, Typography, Empty } from 'antd'
import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import api from '@/lib/axios'
import { useAuthStore } from '@/store/authStore'

const { Title } = Typography

export default function MyWeddingCards() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/dang-nhap')
      return
    }
    fetchData()
  }, [isAuthenticated, router])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await api.get('/wedding-cards')
      setData(res.data)
    } catch (error) {
      console.error(error)
      message.error('Lỗi tải danh sách thiệp')
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    {
      title: 'Mẫu Thiệp',
      dataIndex: 'templateId',
      key: 'templateId',
      render: (text: string) => <Tag color="pink">{text}</Tag>,
    },
    {
      title: 'Cô dâu & Chú rể',
      key: 'couple',
      render: (_: any, record: any) => (
        <div className="flex flex-col">
           <span className="font-bold text-pink-500">{record.brideName}</span>
           <span className="text-gray-400 text-xs">&</span>
           <span className="font-bold text-blue-500">{record.groomName}</span>
        </div>
      ),
    },
    {
      title: 'Ngày cưới',
      dataIndex: 'weddingDate',
      key: 'weddingDate',
      render: (date: string) => new Date(date).toLocaleDateString('vi-VN'),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button 
            type="primary"
            classNames={{ icon: 'align-middle' }}
            icon={<EyeOutlined />} 
            onClick={() => window.open(`/xem-thiep/${record._id}`, '_blank')}
          >
            Xem
          </Button>
          <Button 
            icon={<EditOutlined />} 
            onClick={() => message.info('Tính năng chỉnh sửa đang phát triển')}
          >
            Sửa
          </Button>
        </Space>
      ),
    },
  ]

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 md:px-12 pb-12">
      <Card bordered={false} className="shadow-sm rounded-xl max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Title level={3} style={{ margin: 0 }}>Thiệp Cưới Của Tôi</Title>
          <Button 
             type="primary" 
             size="large" 
             icon={<PlusOutlined />}
             className="bg-pink-500 hover:bg-pink-600"
             onClick={() => router.push('/thiep-cuoi-online')}
          >
            Tạo thiệp mới
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          rowKey="_id"
          loading={loading}
          locale={{ emptyText: <Empty description="Bạn chưa tạo thiệp nào" /> }}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 600 }}
        />
      </Card>
    </div>
  )
}
