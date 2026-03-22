'use client'

import { useState } from 'react'
import { Form, Input, Button, Card, message } from 'antd'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import api from '@/lib/axios'

export default function QuenMatKhauPage() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      // API call to request password reset
      // Note: Backend endpoint needs to be implemented
       await api.post('/auth/forgot-password', {
         email: values.email,
       });

      message.success('Đã gửi email hướng dẫn đặt lại mật khẩu!');
      form.resetFields();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại sau.';
       // For now, since backend might not exist, we just show a message or simulated success if dev
       if (error.response?.status === 404) {
           message.warning('Chức năng đang được phát triển (Backend endpoint not found)');
       } else {
           message.error(msg);
       }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7f7] via-white to-[#fef7f7] flex flex-col">
      <div className="flex-1 flex items-center justify-center py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <Link href="/" className="inline-block mb-3">
              <span className="text-3xl md:text-4xl font-bold text-[#c85d6a] drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Hỷ Thư
              </span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Quên Mật Khẩu
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Nhập email để lấy lại mật khẩu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden" styles={{ body: { padding: '24px 28px' } }}>
              <Form
                form={form}
                name="forgot-password"
                onFinish={onFinish}
                layout="vertical"
                size="large"
                className="mt-0"
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email!' },
                    { type: 'email', message: 'Email không hợp lệ!' }
                  ]}
                  style={{ marginBottom: '20px' }}
                >
                  <Input 
                    placeholder="Nhập email của bạn"
                    prefix={<i className="pi pi-envelope text-gray-400"></i>}
                  />
                </Form.Item>

                <Form.Item className="mb-4">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="w-full bg-[#c85d6a] hover:bg-[#b84d5a] border-0 h-12 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Gửi yêu cầu
                  </Button>
                </Form.Item>

                <div className="text-center">
                  <Link href="/dang-nhap" className="text-gray-600 hover:text-[#c85d6a] text-sm transition-colors flex items-center justify-center gap-2">
                    <i className="pi pi-arrow-left text-xs"></i>
                    Quay lại đăng nhập
                  </Link>
                </div>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
