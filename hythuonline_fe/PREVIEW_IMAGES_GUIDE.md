# Hướng dẫn thêm ảnh Preview cho Templates

## Ảnh hiện tại

Hiện tại hệ thống đang sử dụng các ảnh có sẵn:

- **Template 1 (Truyền thống)**: `/dam1.jpeg`
- **Template 2 (Hiện đại)**: `/abc.webp`
- **Template 3 (Tối giản)**: `/hero-invitations-grid.jpg`

## Cách thêm ảnh preview tùy chỉnh

### Bước 1: Chuẩn bị ảnh

Tạo 3 ảnh preview cho mỗi template với các yêu cầu sau:

#### Template 1 - Truyền thống
- **Nội dung**: Phong bì xanh lá với thiệp trắng, hoa trang trí
- **Phong cách**: Truyền thống, trang trọng, màu xanh lá (#3f695d)
- **Kích thước đề xuất**: 600x800px (tỷ lệ 3:4)
- **Format**: JPG hoặc PNG

#### Template 2 - Hiện đại
- **Nội dung**: Thiệp với gradient hồng-tím, hiệu ứng glassmorphism
- **Phong cách**: Hiện đại, trẻ trung, màu hồng-tím gradient
- **Kích thước đề xuất**: 600x800px (tỷ lệ 3:4)
- **Format**: JPG hoặc PNG

#### Template 3 - Tối giản
- **Nội dung**: Typography đẹp, ảnh đen trắng/grayscale
- **Phong cách**: Minimalist, tinh tế, đơn giản
- **Kích thước đề xuất**: 600x800px (tỷ lệ 3:4)
- **Format**: JPG hoặc PNG

### Bước 2: Đặt tên file

Đặt tên file theo quy ước:
- `template-preview-1.jpg` - Mẫu truyền thống
- `template-preview-2.jpg` - Mẫu hiện đại
- `template-preview-3.jpg` - Mẫu tối giản

### Bước 3: Upload ảnh

Copy các file ảnh vào thư mục:
```
hythuonline_fe/public/
```

### Bước 4: Cập nhật code

Mở file `app/thiep-cuoi-online/page.tsx` và cập nhật:

```typescript
const templates = [
  {
    id: 1,
    // ...
    image: '/template-preview-1.jpg', // Thay đổi từ '/dam1.jpeg'
    // ...
  },
  {
    id: 2,
    // ...
    image: '/template-preview-2.jpg', // Thay đổi từ '/abc.webp'
    // ...
  },
  {
    id: 3,
    // ...
    image: '/template-preview-3.jpg', // Thay đổi từ '/hero-invitations-grid.jpg'
    // ...
  },
]
```

## Tạo ảnh preview bằng Screenshot

Nếu bạn muốn sử dụng screenshot từ chính template:

### Cách 1: Screenshot thủ công

1. Truy cập từng template:
   - `http://localhost:3000/xem-thiep/1` (Truyền thống)
   - `http://localhost:3000/xem-thiep/2` (Hiện đại)
   - `http://localhost:3000/xem-thiep/3` (Tối giản)

2. Mở DevTools (F12) và chuyển sang chế độ mobile (375x667px)

3. Chụp screenshot phần đầu của thiệp (hero section)

4. Crop và resize về 600x800px

5. Lưu với tên tương ứng

### Cách 2: Sử dụng công cụ design

Bạn có thể sử dụng:
- **Canva**: Tạo mockup thiệp cưới
- **Figma**: Design preview card
- **Photoshop**: Tạo composite từ các elements

## Gợi ý thiết kế

### Template 1 - Preview
```
┌─────────────────┐
│   🌸        🌸  │
│                 │
│   ┌─────────┐   │
│   │ Phong   │   │
│   │  bì     │   │
│   │ xanh lá │   │
│   │         │   │
│   │  [Card] │   │
│   └─────────┘   │
│                 │
│   🌸        🌸  │
└─────────────────┘
```

### Template 2 - Preview
```
┌─────────────────┐
│ ✨ Gradient ✨  │
│                 │
│   💕 💕 💕     │
│                 │
│  We're Getting  │
│    Married      │
│                 │
│  [Couple Img]   │
│                 │
│   28 • 2 • 26   │
└─────────────────┘
```

### Template 3 - Preview
```
┌─────────────────┐
│      ─────      │
│                 │
│   Yến Nhi       │
│       &         │
│  Minh Quân      │
│                 │
│ ARE GETTING     │
│   MARRIED       │
│                 │
│  28.02.2026     │
│      ─────      │
└─────────────────┘
```

## Lưu ý

- Ảnh preview nên thể hiện rõ phong cách của template
- Kích thước file không nên quá 200KB để tải nhanh
- Sử dụng format WebP để tối ưu hơn (nếu có thể)
- Đảm bảo ảnh sắc nét, không bị mờ
- Màu sắc phải đúng với theme của template
