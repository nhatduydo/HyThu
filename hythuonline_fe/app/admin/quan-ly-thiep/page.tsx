'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Table, Button, Tag, Space, Card, Typography, Modal, Input, App } from 'antd'
import { EditOutlined, SyncOutlined } from '@ant-design/icons'
import api from '@/lib/axios'
import { useAuthStore } from '@/store/authStore'

const { Title } = Typography
const { TextArea } = Input

export default function AdminTemplates() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const { message } = App.useApp() // Use message from App context
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState<any>(null)
  const [jsonContent, setJsonContent] = useState('')

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await api.get('/templates')
      setData(res.data)
    } catch (error) {
      console.error(error)
      message.error('Lỗi tải danh sách template')
    } finally {
      setLoading(false)
    }
  }, [message])

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      message.error('Bạn không có quyền truy cập trang này')
      router.push('/')
      return
    }
    fetchData()
  }, [isAuthenticated, user, router, message, fetchData])

  const handleSeed = async () => {
    try {
        await api.post('/templates/seed')
        message.success('Đã đồng bộ dữ liệu mẫu thiệp thành công')
        fetchData()
    } catch (error) {
        message.error('Lỗi khi đồng bộ')
    }
  }

  const handleEdit = (record: any) => {
      setEditingTemplate(record)
      setJsonContent(JSON.stringify(record.defaultData, null, 2))
      setIsModalOpen(true)
  }

  const handleSave = async () => {
      try {
          const parsedData = JSON.parse(jsonContent)
          
          await api.put(`/templates/${editingTemplate._id}`, {
              defaultData: parsedData
          })
          
          message.success('Cập nhật mẫu thiệp thành công')
          setIsModalOpen(false)
          fetchData()
      } catch (error) {
          message.error('Lỗi JSON không hợp lệ hoặc lỗi Server')
      }
  }

  const columns = [
    {
      title: 'Tên Mẫu',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span className="font-bold">{text}</span>,
    },
    {
      title: 'Mã',
      dataIndex: 'code',
      key: 'code',
      align: 'center' as const,
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center' as const,
      render: (active: boolean) => (
        <Tag color={active ? 'green' : 'red'}>
          {active ? 'Hiện' : 'Ẩn'}
        </Tag>
      ),
    },
    {
      title: 'Hành động',
      key: 'action',
      align: 'center' as const,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => router.push(`/admin/quan-ly-thiep/edit/${record._id}`)}
          >
            Sửa Trực Quan
          </Button>
        </Space>
      ),
    },
  ]

  if (!isAuthenticated || user?.role !== 'admin') return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 md:px-12 pb-12">
      <Card variant="borderless" className="shadow-sm rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <Title level={3} style={{ margin: 0 }}>Quản lý Mẫu Thiệp</Title>
          <Button 
             type="primary" 
             icon={<SyncOutlined />} 
             onClick={handleSeed}
          >
            Đồng bộ dữ liệu mẫu ban đầu
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey="_id"
          pagination={false}
        />
      </Card>

      <Modal
        title={`Chỉnh sửa: ${editingTemplate?.name}`}
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        width={800}
      >
          <div className="mb-4 text-gray-500 text-xs">
              Sửa dữ liệu JSON mặc định cho mẫu thiệp này. Hãy cẩn thận với cú pháp JSON.
          </div>
          <TextArea 
            rows={20} 
            value={jsonContent}
            onChange={(e) => setJsonContent(e.target.value)}
            className="font-mono text-xs"
          />
      </Modal>
    </div>
  )
}
