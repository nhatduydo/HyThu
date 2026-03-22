'use client'

import { useState, useEffect } from 'react'
import { Form, Input, Button, Card, Divider, message } from 'antd'
import { motion } from 'framer-motion'
import api from '@/lib/axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'
import { useAuthStore } from '@/store/authStore'

export default function DangKyPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setAuth, isAuthenticated } = useAuthStore()

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const { fullName, email, password, phone } = values;
      const response = await api.post('/auth/register', {
        name: fullName,
        email,
        password,
        phone,
      });
      
      const { tokens } = response.data;
      
      // Decode token and save to Zustand store
      setAuth(tokens.accessToken);
      
      message.success('Đăng ký thành công!');
      // Auto-login after registration
      router.push('/');
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message || 'Đăng ký thất bại, vui lòng thử lại.';
      message.error(msg);
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
              Đăng Ký
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Tạo tài khoản để bắt đầu tạo thiệp cưới online đẹp mắt
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
                name="register"
                onFinish={onFinish}
                layout="vertical"
                size="large"
                className="mt-0"
              >
                <Form.Item
                  name="fullName"
                  label="Họ và tên"
                  rules={[
                    { required: true, message: 'Vui lòng nhập họ và tên!' },
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <Input 
                    placeholder="Nhập họ và tên"
                    prefix={<i className="pi pi-user text-gray-400"></i>}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email!' },
                    { type: 'email', message: 'Email không hợp lệ!' },
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <Input 
                    placeholder="Nhập email"
                    prefix={<i className="pi pi-envelope text-gray-400"></i>}
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại!' },
                    { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' },
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <Input 
                    placeholder="Nhập số điện thoại"
                    prefix={<i className="pi pi-phone text-gray-400"></i>}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  rules={[
                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                    { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <Input.Password
                    placeholder="Nhập mật khẩu"
                    prefix={<i className="pi pi-lock text-gray-400"></i>}
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="Xác nhận mật khẩu"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'))
                      },
                    }),
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <Input.Password
                    placeholder="Nhập lại mật khẩu"
                    prefix={<i className="pi pi-lock text-gray-400"></i>}
                  />
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Vui lòng đồng ý với điều khoản!')),
                    },
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-600">
                      Tôi đồng ý với{' '}
                      <Link href="/dieu-khoan" className="text-[#c85d6a] hover:text-[#b84d5a]">
                        Điều khoản sử dụng
                      </Link>
                      {' '}và{' '}
                      <Link href="/chinh-sach" className="text-[#c85d6a] hover:text-[#b84d5a]">
                        Chính sách bảo mật
                      </Link>
                    </span>
                  </div>
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="w-full bg-[#c85d6a] hover:bg-[#b84d5a] border-0 h-12 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Đăng ký
                  </Button>
                </Form.Item>
              </Form>

              <Divider className="my-6">hoặc</Divider>

              <div className="mb-4">
                <Button
                  className="w-full h-11 border border-gray-300 hover:border-[#c85d6a] text-gray-700 hover:text-[#c85d6a] rounded-lg transition-all"
                  icon={<i className="pi pi-google text-lg"></i>}
                >
                  Đăng ký với Google
                </Button>
              </div>

              <div className="mt-6 text-center pb-2">
                <p className="text-gray-600 text-sm">
                  Đã có tài khoản?{' '}
                  <Link href="/dang-nhap" className="text-[#c85d6a] hover:text-[#b84d5a] font-semibold transition-colors">
                    Đăng nhập ngay
                  </Link>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


