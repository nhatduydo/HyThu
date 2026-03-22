'use client'

import { useState } from 'react'
import { Card, Button, Row, Col } from 'antd'

const customerInvitations = [
  { id: 1, name: 'Thiệp Cổ Điển', style: 'Cổ điển', icon: 'pi-heart', gradient: 'from-red-600 to-pink-600' },
  { id: 2, name: 'Thiệp Hiện Đại', style: 'Hiện đại', icon: 'pi-star', gradient: 'from-blue-600 to-purple-600' },
  { id: 3, name: 'Thiệp Lãng Mạn', style: 'Lãng mạn', icon: 'pi-heart-fill', gradient: 'from-pink-600 to-rose-600' },
  { id: 4, name: 'Thiệp Sang Trọng', style: 'Sang trọng', icon: 'pi-gem', gradient: 'from-yellow-600 to-orange-600' },
  { id: 5, name: 'Thiệp Tối Giản', style: 'Tối giản', icon: 'pi-circle', gradient: 'from-gray-600 to-gray-800' },
  { id: 6, name: 'Thiệp Hoa Văn', style: 'Hoa văn', icon: 'pi-sparkles', gradient: 'from-green-600 to-teal-600' },
]

export default function CustomerInvitations() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <i className="pi pi-users text-[#c85d6a] mr-3"></i>
            Thiệp từ khách hàng thực tế
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Xem những thiệp cưới đẹp mắt được tạo bởi các cặp đôi hạnh phúc
          </p>
        </div>
        
        <Row gutter={[24, 24]} className="mb-12">
          {customerInvitations.map((invitation) => (
            <Col key={invitation.id} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden"
                cover={
                  <div className={`h-80 bg-gradient-to-br ${invitation.gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center p-6">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto border-2 border-white/30">
                        <i className={`pi ${invitation.icon} text-white text-4xl`}></i>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{invitation.name}</h3>
                      <p className="text-white/90 text-sm mb-4">{invitation.style}</p>
                      <div className="flex items-center justify-center space-x-2 text-white/80 text-xs">
                        <i className="pi pi-check-circle"></i>
                        <span>WEDDING INVITATION</span>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="text-center pt-4">
                  <Button 
                    type="primary" 
                    block
                    className="bg-gradient-to-r from-[#c85d6a] to-[#b84d5a] hover:from-[#b84d5a] hover:to-[#a03d4a] border-0 rounded-full"
                  >
                    <i className="pi pi-eye mr-2"></i>
                    Xem chi tiết
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <Button 
            type="primary" 
            size="large"
            className="bg-gradient-to-r from-[#c85d6a] to-[#b84d5a] hover:from-[#b84d5a] hover:to-[#a03d4a] border-0 h-14 px-10 text-lg font-semibold shadow-xl rounded-full hover:shadow-2xl transition-all"
          >
            <i className="pi pi-arrow-right mr-2"></i>
            Xem thêm thiệp đã thực hiện
          </Button>
        </div>
      </div>
    </section>
  )
}

