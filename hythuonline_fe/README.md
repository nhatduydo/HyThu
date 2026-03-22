# Hỷ Thư - Thiệp Cưới Online, Slide Cưới

Dự án frontend được xây dựng với Next.js 14, TypeScript và Tailwind CSS.

## Màu sắc chủ đạo
- Primary: `#862934` (Đỏ đậm)
- Background: `#FFFFFF` (Trắng)

## Cấu trúc dự án

```
hythuonline_fe/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Root layout với Header
│   ├── page.tsx           # Trang chủ
│   └── globals.css        # Global styles với Tailwind
├── components/            # React components
│   ├── Header.tsx        # Header với navigation
│   ├── Hero.tsx          # Hero section
│   ├── PopularDesigns.tsx # Section mẫu thiết kế phổ biến
│   ├── Features.tsx      # Section tính năng
│   ├── CustomerInvitations.tsx # Section thiệp khách hàng
│   ├── Footer.tsx        # Footer
│   └── ui/               # UI components
│       └── Button.tsx    # Button component
├── lib/                  # Utility functions
│   ├── api.ts           # API helpers
│   └── utils.ts         # Common utilities
├── public/              # Static assets
├── .eslintrc.json       # ESLint config
├── .gitignore          # Git ignore rules
├── next.config.js       # Next.js config
├── tailwind.config.js   # Tailwind CSS config
├── postcss.config.js    # PostCSS config
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

## Cài đặt

```bash
npm install
```

## Chạy dự án

```bash
# Development mode
npm run dev

# Build production
npm run build

# Start production server
npm start
```

## Công nghệ sử dụng

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **ESLint** - Code linting

## Môi trường

Tạo file `.env.local` và thêm các biến môi trường cần thiết:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

