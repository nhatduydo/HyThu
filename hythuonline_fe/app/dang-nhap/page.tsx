'use client'

import { useState, useEffect, Suspense } from 'react'
import { Form, Input, Button, Card, Divider, message, Spin } from 'antd'
import { motion } from 'framer-motion'
import api from '@/lib/axios'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer'
import { useAuthStore } from '@/store/authStore'

function LoginForm() {
  const [form] = Form.useForm()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const { setAuth, isAuthenticated } = useAuthStore()
  const [messageApi, contextHolder] = message.useMessage();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  // Handle Google Callback (Tokens via URL)
  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const error = searchParams.get('error');

    if (accessToken) {
      setGoogleLoading(true);
      try {
        setAuth(accessToken);
        messageApi.success('Đăng nhập Google thành công!');
        // Clean URL
        window.history.replaceState(null, '', '/dang-nhap');
        router.push('/');
      } catch (err) {
        console.error('Error setting auth:', err);
        messageApi.error('Đăng nhập thất bại');
      } finally {
        setGoogleLoading(false);
      }
    } else if (error) {
      messageApi.error('Đăng nhập Google thất bại');
      router.replace('/dang-nhap');
    }
  }, [searchParams, router, setAuth, messageApi]);

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const response = await api.post('/auth/login', {
        email: values.email,
        password: values.password,
      });

      const { tokens } = response.data;
      
      // Decode token and save to Zustand store
      setAuth(tokens.accessToken);

      messageApi.success('Đăng nhập thành công!');
      router.push('/');
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message || 'Đăng nhập thất bại, vui lòng kiểm tra lại thông tin.';
      messageApi.error(msg);
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const response = await api.get('/auth/google-url');
      const { url } = response.data;
      if (url) {
        window.location.href = url;
      } else {
        messageApi.error('Không thể khởi tạo đăng nhập Google');
      }
    } catch (error) {
      console.error('Get Google Auth URL error:', error);
      messageApi.error('Lỗi kết nối đến máy chủ');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7f7] via-white to-[#fef7f7] flex flex-col">
      {contextHolder}
      <Spin spinning={googleLoading} fullscreen tip="Đang xác thực với Google..." />
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
              Đăng Nhập
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Chào mừng bạn trở lại với Hỷ Thư
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
                name="login"
                onFinish={onFinish}
                layout="vertical"
                size="large"
                className="mt-0"
              >
                <Form.Item
                  name="email"
                  label="Email hoặc Số điện thoại"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email hoặc số điện thoại!' },
                  ]}
                  style={{ marginBottom: '8px' }}
                >
                  <Input 
                    placeholder="Nhập email hoặc số điện thoại"
                    prefix={<i className="pi pi-user text-gray-400"></i>}
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

                <Form.Item className="mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <input type="checkbox" />
                      </Form.Item>
                      <span className="text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                    </div>
                    <Link href="/quen-mat-khau" className="text-sm text-[#c85d6a] hover:text-[#b84d5a]">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="w-full bg-[#c85d6a] hover:bg-[#b84d5a] border-0 h-12 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>

              <Divider className="my-6">hoặc</Divider>

              <div className="mb-4 flex justifying-center items-center flex-col">
                  <Button
                  onClick={handleGoogleLogin}
                  className="w-full h-11 border border-gray-300 hover:border-[#c85d6a] text-gray-700 hover:text-[#c85d6a] rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <i className="pi pi-google text-lg"></i>
                  Đăng nhập với Google
                </Button>
              </div>

              <div className="mt-6 text-center pb-2">
                <p className="text-gray-600 text-sm">
                  Chưa có tài khoản?{' '}
                  <Link href="/dang-ky" className="text-[#c85d6a] hover:text-[#b84d5a] font-semibold transition-colors">
                    Đăng ký ngay
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

export default function DangNhapPage() {
  return (
    <Suspense fallback={<Spin fullscreen />}>
      <LoginForm />
    </Suspense>
  )
}


