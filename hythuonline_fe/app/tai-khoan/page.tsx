'use client'

import { useState, useEffect, useCallback } from 'react'
import { Form, Input, Button, Card, Avatar, Upload, Divider, App } from 'antd'
import { UserOutlined, PhoneOutlined, MailOutlined, LockOutlined, EditOutlined } from '@ant-design/icons'
import Footer from '@/components/Footer'

import api from '@/lib/axios'
import { useRouter } from 'next/navigation'
import type { UploadFile } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';
import { useAuthStore } from '@/store/authStore'

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

function AccountPageContent() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState<string>();
  const { isAuthenticated, updateUser } = useAuthStore()
  const { message } = App.useApp()

  const fetchProfile = useCallback(async () => {
    try {
      if (!isAuthenticated) {
        router.push('/dang-nhap');
        return;
      }

      const response = await api.get('/users/profile');
      
      setUser(response.data);
      form.setFieldsValue({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
      });
      if (response.data.avatar) {
        setImageUrl(response.data.avatar);
      }
    } catch (error: any) {
      console.error(error);
      
      // Handle 401 - redirect to login
      if (error.response?.status === 401) {
        message.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
        router.push('/dang-nhap');
        return;
      }
      
      message.error('Không thể tải thông tin tài khoản');
    }
  }, [isAuthenticated, router, form, message])

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile])

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      if (values.phone) formData.append('phone', values.phone);
      if (values.password) formData.append('password', values.password);
      
      // Handle avatar upload separately/together
      // In this specialized setup, if I want to update avatar I usually use the upload component directly 
      // or append the file from a state. 
      // Ant Design Upload component handles file selection.
      
      // Let's assume the user just submits the form and we check if there's a new file?
      // With Ant Design Upload, we usually handle onChange.
      // But for a profile form, it's better to verify all at once or handle avatar separately.
      // Let's check `fileList` from Upload component if we can. 
      // Or simpler: The Upload component below helps select a file.
      
      // Actually, constructing FormData with file:
      if (fileList.length > 0) {
        // @ts-ignore
        formData.append('avatar', fileList[0].originFileObj);
      }

      const response = await api.put('/users/profile', formData);

      message.success('Cập nhật thông tin thành công!');
      setUser(response.data);
      
      // Update Zustand store with new user info
      updateUser({
        name: response.data.name,
        email: response.data.email,
      });
      
      // Clear password field if set
      if (values.password) {
        form.setFieldValue('password', '');
        form.setFieldValue('confirmPassword', '');
      }
      
      // Update image url if changed
      if (response.data.avatar) {
        setImageUrl(response.data.avatar);
      }
      setFileList([]); // Clear file list after upload

    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message || 'Cập nhật thất bại';
      message.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange = (info: UploadChangeParam) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1); // Limit to 1 file
    setFileList(newFileList);
    
    // Preview
    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const url = URL.createObjectURL(newFileList[0].originFileObj as Blob);
      setImageUrl(url);
    }
  };

  return (
    <div className="min-h-screen bg-[#fef7f7] flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#8B2635] mb-8 text-center uppercase">
            Thông tin tài khoản
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Avatar & Basic Info Display */}
            <div className="md:col-span-1">
              <Card className="shadow-md border-0 rounded-2xl text-center h-full">
                <div className="mb-6 relative inline-block">
                  <div className="relative">
                    <Avatar 
                      size={120} 
                      src={imageUrl} 
                      icon={!imageUrl && <UserOutlined />}
                      className="border-4 border-white shadow-lg bg-[#c85d6a]"
                    />
                    
                    {/* Edit Button */}
                    <Upload
                      name="avatar"
                      fileList={fileList}
                      showUploadList={false}
                      beforeUpload={() => false}
                      onChange={handleChange}
                      accept="image/*"
                    >
                      <Button 
                        shape="circle" 
                        icon={<EditOutlined />} 
                        size="large"
                        className="absolute -bottom-2 -right-2 bg-[#c85d6a] border-0 text-white shadow-lg hover:bg-[#b84d5a] hover:shadow-xl transition-all duration-300 hover:scale-110"
                      />
                    </Upload>
                  </div>
                  
                  {/* Upload Hint */}
                  <p className="text-xs text-gray-400 mt-3 px-4">
                    Click vào nút <EditOutlined /> để thay đổi ảnh đại diện
                  </p>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-1">{user?.name}</h2>
                <p className="text-gray-500 mb-4">{user?.email}</p>
                
                <div className="flex justify-center">
                  <span className="bg-[#c85d6a]/10 text-[#c85d6a] px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    Thành viên
                  </span>
                </div>
              </Card>
            </div>

            {/* Right Column - Edit Form */}
            <div className="md:col-span-2">
              <Card className="shadow-md border-0 rounded-2xl" title="Cập nhật thông tin">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  size="large"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                      name="name"
                      label="Họ và tên"
                      rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                    >
                      <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Họ và tên" />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Số điện thoại"
                    >
                      <Input prefix={<PhoneOutlined className="text-gray-400" />} placeholder="Số điện thoại" />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="email"
                    label="Email"
                  >
                    <Input prefix={<MailOutlined className="text-gray-400" />} disabled className="bg-gray-50 text-gray-500" />
                  </Form.Item>

                  <Divider orientation="left" className="text-gray-500 text-sm font-normal">Đổi mật khẩu (Bỏ trống nếu không đổi)</Divider>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                      name="password"
                      label="Mật khẩu mới"
                      rules={[{ min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' }]}
                    >
                      <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Mật khẩu mới" />
                    </Form.Item>

                    <Form.Item
                      name="confirmPassword"
                      label="Xác nhận mật khẩu"
                      dependencies={['password']}
                      rules={[
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || !getFieldValue('password') || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('Mật khẩu không khớp!'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Nhập lại mật khẩu" />
                    </Form.Item>
                  </div>

                  <Form.Item className="mb-0 text-right mt-4">
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      loading={loading}
                      className="bg-[#c85d6a] hover:bg-[#b84d5a] border-0 px-8 h-10 font-semibold shadow-md"
                    >
                      Lưu thay đổi
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default function AccountPage() {
  return (
    <App>
      <AccountPageContent />
    </App>
  )
}
