export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Hướng dẫn tạo link thiệp mời gửi cho bạn bè',
    slug: 'huong-dan-tao-link-thiep-moi',
    excerpt: 'Tìm hiểu cách tạo và chia sẻ link thiệp mời online đến bạn bè, người thân một cách nhanh chóng và tiện lợi nhất.',
    content: `
      <p>Thiệp mời online đang ngày càng trở nên phổ biến nhờ tính tiện lợi và khả năng tùy chỉnh linh hoạt. Trong bài viết này, chúng tôi sẽ hướng dẫn bạn từng bước để tạo và chia sẻ link thiệp mời đến khách mời của mình.</p>
      
      <img src="/dam1.jpeg" alt="Thiệp cưới đẹp" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />
      
      <h2>Bước 1: Đăng ký tài khoản</h2>
      <p>Trước tiên, bạn cần đăng ký một tài khoản trên hệ thống. Điền đầy đủ thông tin cá nhân và email để kích hoạt tài khoản. Quá trình đăng ký chỉ mất vài phút và hoàn toàn miễn phí.</p>

      <h2>Bước 2: Chọn mẫu thiệp yêu thích</h2>
      <p>Hệ thống cung cấp hàng trăm mẫu thiệp đẹp mắt với nhiều phong cách khác nhau: truyền thống, hiện đại, tối giản, lãng mạn... Hãy chọn mẫu phù hợp với phong cách đám cưới của bạn.</p>

      <img src="/dam1.jpeg" alt="Các mẫu thiệp cưới" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Bước 3: Tùy chỉnh nội dung</h2>
      <p>Nhập thông tin cô dâu chú rể, thời gian, địa điểm tổ chức, và các thông tin quan trọng khác. Bạn cũng có thể thêm ảnh cưới, video, và chọn nhạc nền yêu thích để thiệp thêm sinh động.</p>

      <h2>Bước 4: Tạo link và chia sẻ</h2>
      <p>Sau khi hoàn tất, hệ thống sẽ tạo một link duy nhất cho thiệp của bạn. Copy link này và gửi qua Zalo, Facebook, Messenger, hoặc tin nhắn SMS cho khách mời. Khách mời chỉ cần click vào link là có thể xem thiệp ngay lập tức.</p>
      
      <h2>Lưu ý quan trọng</h2>
      <p>Hãy kiểm tra kỹ thông tin trước khi gửi. Bạn vẫn có thể chỉnh sửa nội dung sau khi đã tạo link - mọi thay đổi sẽ được cập nhật tự động cho khách mời.</p>

      <img src="/dam1.jpeg" alt="Chia sẻ thiệp online" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />
    `,
    author: 'Admin',
    date: '02/02/2026',
    image: '/dam1.jpeg',
    category: 'Hướng dẫn thiệp',
    featured: true
  },
  {
    id: 2,
    title: 'Hướng dẫn sử dụng các tính năng trong bản cao cấp',
    slug: 'huong-dan-su-dung-cao-cap',
    excerpt: 'Hướng dẫn chi tiết sử dụng các tính năng nâng cao trong hệ thống tạo thiệp cưới online cao cấp.',
    content: `
      <p>Gói cao cấp mang đến cho bạn nhiều tính năng đặc biệt để tạo thiệp cưới ấn tượng và chuyên nghiệp nhất. Hãy cùng khám phá những tính năng tuyệt vời này!</p>
      
      <img src="/dam1.jpeg" alt="Thiệp cưới cao cấp" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Tính năng 1: Tùy chỉnh giao diện hoàn toàn</h2>
      <p>Bạn có thể thay đổi màu sắc, font chữ, và bố cục theo ý muốn. Không bị giới hạn bởi template có sẵn - tạo thiệp thực sự độc nhất vô nhị cho ngày trọng đại của bạn.</p>

      <h2>Tính năng 2: Thêm video tình yêu</h2>
      <p>Khả năng tải lên video tình yêu của bạn để thiệp thêm sinh động. Video có thể là khoảnh khắc cầu hôn, pre-wedding, hoặc câu chuyện tình yêu của hai bạn.</p>

      <img src="/dam1.jpeg" alt="Video trong thiệp" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Tính năng 3: Không giới hạn khách mời</h2>
      <p>Gửi thiệp đến không giới hạn số lượng khách mời. Theo dõi ai đã xem thiệp, ai đã xác nhận tham dự - tất cả trong một hệ thống quản lý thông minh.</p>

      <h2>Tính năng 4: Thiết kế đa trang</h2>
      <p>Tạo thiệp nhiều trang với các section khác nhau: câu chuyện tình yêu, album ảnh, lịch trình sự kiện, bản đồ, và nhiều hơn nữa.</p>

      <h2>Tính năng 5: Hỗ trợ đa ngôn ngữ</h2>
      <p>Thiệp của bạn có thể hiển thị song ngữ Việt - Anh, hoàn hảo cho những đám cưới có khách quốc tế.</p>
    `,
    author: 'Hỷ Thư',
    date: '01/02/2026',
    image: '/dam1.jpeg',
    category: 'Hướng dẫn thiệp',
    featured: true
  },
  {
    id: 3,
    title: 'Các mẫu ảnh đẹp trong hướng thẻ thiệp trong tiệc cưới Việt Nam',
    slug: 'mau-anh-dep-thiep-cuoi-viet-nam',
    excerpt: 'Tổng hợp những mẫu ảnh thiệp cưới đẹp mắt, ấn tượng phù hợp với văn hóa Việt Nam.',
    content: `
      <p>Thiệp cưới Việt Nam thường mang đậm bản sắc văn hóa truyền thống. Dưới đây là những phong cách phổ biến và được yêu thích nhất hiện nay.</p>
      
      <img src="/dam1.jpeg" alt="Thiệp cưới truyền thống" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Phong cách truyền thống</h2>
      <p>Sử dụng màu đỏ, vàng kim, và hoa văn rồng phượng. Đây là phong cách mang đậm dấu ấn văn hóa Á Đông, thể hiện sự trang trọng và long trọng của ngày cưới.</p>

      <h3>Đặc điểm nổi bật:</h3>
      <ul>
        <li>Màu sắc chủ đạo: Đỏ, vàng gold, đỏ đô</li>
        <li>Họa tiết: Rồng phượng, hoa sen, hoa đào, mai</li>
        <li>Chất liệu: Giấy mỹ thuật cao cấp, in vàng nổi</li>
      </ul>

      <img src="/dam1.jpeg" alt="Thiệp cưới hiện đại" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Phong cách hiện đại</h2>
      <p>Kết hợp tông màu pastel nhẹ nhàng với họa tiết tối giản. Phong cách này phù hợp với các cặp đôi yêu thích sự tinh tế và sang trọng.</p>

      <h3>Đặc điểm nổi bật:</h3>
      <ul>
        <li>Màu sắc: Hồng pastel, xanh mint, be, trắng</li>
        <li>Typography đẹp mắt, dễ đọc</li>
        <li>Layout tối giản, nhiều khoảng trắng</li>
      </ul>

      <h2>Phong cách kết hợp Á - Âu</h2>
      <p>Pha trộn giữa nét đẹp phương Đông và phương Tây. Sử dụng họa tiết truyền thống nhưng với bố cục và màu sắc hiện đại.</p>

      <img src="/dam1.jpeg" alt="Thiệp cưới kết hợp" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />
    `,
    author: 'Admin',
    date: '28/01/2026',
    image: '/dam1.jpeg',
    category: 'Hướng dẫn thiệp'
  },
  {
    id: 4,
    title: 'Nên gửi thiệp mời online trước bao lâu? Cách chọn thời điểm lý tưởng',
    slug: 'nen-gui-thiep-truoc-bao-lau',
    excerpt: 'Gửi thiệp quá sớm hay quá muộn đều ảnh hưởng đến hướng đến từ tham dự. Bài viết này giúp bạn chọn đúng thời điểm gửi thiệp online.',
    content: `
      <p>Thời điểm gửi thiệp cưới là yếu tố quan trọng ảnh hưởng đến tỷ lệ khách tham dự. Gửi quá sớm, khách có thể quên; gửi quá muộn, khách không kịp sắp xếp lịch trình. Vậy khi nào là thời điểm vàng?</p>
      
      <img src="/dam1.jpeg" alt="Thời gian gửi thiệp" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Quy tắc chung: 4-6 tuần trước ngày cưới</h2>
      <p>Đối với đa số đám cưới, khoảng thời gian lý tưởng để gửi thiệp chính thức là 4-6 tuần trước ngày diễn ra sự kiện. Điều này cho khách mời đủ thời gian để:</p>
      <ul>
        <li>Sắp xếp lịch trình công việc và cá nhân</li>
        <li>Đặt vé máy bay, khách sạn nếu ở xa</li>
        <li>Chuẩn bị quà cưới</li>
        <li>Mua sắm trang phục dự tiệc</li>
      </ul>

      <h2>Trường hợp đặc biệt: 8-12 tuần trước</h2>
      <p>Nếu đám cưới của bạn diễn ra vào:</p>
      <ul>
        <li><strong>Dịp lễ Tết:</strong> Gửi trước 2-3 tháng vì nhiều người có kế hoạch du lịch</li>
        <li><strong>Mùa cưới cao điểm (tháng 10-12):</strong> Nên gửi sớm hơn vì nhiều đám cưới cùng thời điểm</li>
        <li><strong>Đám cưới destination wedding:</strong> Khách cần thời gian chuẩn bị hơn</li>
      </ul>

      <img src="/dam1.jpeg" alt="Lịch đám cưới" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Gửi "Save the Date" trước 3-6 tháng</h2>
      <p>Ngoài thiệp chính thức, bạn nên gửi thông báo "Save the Date" (Giữ ngày) sớm hơn, khoảng 3-6 tháng trước. Đây chỉ là thông báo sơ bộ về ngày cưới để khách mời "block" thời gian trong lịch của họ.</p>

      <h2>Nhắc lại trước 1 tuần</h2>
      <p>Đừng ngại nhắc lại khách mời trước 1 tuần qua tin nhắn hoặc điện thoại. Điều này giúp tăng tỷ lệ tham dự và thể hiện sự quan tâm của bạn.</p>
    `,
    author: 'Hỷ Thư',
    date: '20/01/2026',
    image: '/dam1.jpeg',
    category: 'Kinh nghiệm'
  },
  {
    id: 5,
    title: '5 lý do nên chọn thiệp mời online cho mọi sự kiện',
    slug: 'ly-do-chon-thiep-online',
    excerpt: 'Tìm hiểu các lý do tại sao thiệp mời online đang trở thành xu hướng đang thịnh hành, đặc biệt cho các sự kiện hiện đại như đám cưới, sinh nhật, và các buổi họp mặt.',
    content: `
      <p>Thiệp mời online đang dần thay thế thiệp giấy truyền thống nhờ nhiều ưu điểm vượt trội. Trong thời đại số hóa, đây không chỉ là xu hướng mà còn là lựa chọn thông minh cho mọi sự kiện.</p>
      
      <img src="/dam1.jpeg" alt="Thiệp online hiện đại" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>1. Tiết kiệm chi phí đáng kể</h2>
      <p>Không phải in ấn, không tốn tiền vận chuyển, không lo thất lạc. Chi phí tạo thiệp online chỉ bằng 10-20% so với thiệp giấy truyền thống, nhưng hiệu quả lại vượt trội hơn nhiều.</p>

      <h2>2. Thân thiện với môi trường</h2>
      <p>Không cần giấy, không gây ô nhiễm trong quá trình sản xuất và vận chuyển. Một đám cưới 300 khách có thể tiết kiệm được hàng kg giấy, góp phần bảo vệ môi trường.</p>

      <img src="/dam1.jpeg" alt="Bảo vệ môi trường" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>3. Dễ dàng chỉnh sửa và cập nhật</h2>
      <p>Thay đổi địa điểm? Dời thời gian? Không vấn đề! Bạn có thể cập nhật thông tin bất cứ lúc nào và khách mời sẽ nhận được thông tin mới nhất ngay lập tức.</p>

      <h2>4. Gửi nhanh chóng đến mọi người</h2>
      <p>Chỉ cần một cú click là thiệp đã đến tay khách mời, dù họ ở bất kỳ đâu trên thế giới. Không lo thời gian vận chuyển, không sợ thất lạc trong đường.</p>

      <img src="/dam1.jpeg" alt="Gửi thiệp nhanh chóng" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>5. Đa dạng mẫu mã và tính năng</h2>
      <p>Hàng trăm mẫu thiệp đẹp để lựa chọn, có thể thêm nhạc nền, video, bản đồ tương tác, countdown timer, và nhiều tính năng độc đáo khác mà thiệp giấy không thể có.</p>
    `,
    author: 'Biên tập viên',
    date: '15/01/2026',
    image: '/dam1.jpeg',
    category: 'Kinh nghiệm'
  },
  {
    id: 6,
    title: 'Ngày cưới trong văn hóa Việt Nam: Truyền thống, nghi lễ và sự biến tấu hiện đại',
    slug: 'ngay-cuoi-van-hoa-viet-nam',
    excerpt: 'Đám cưới không phải chỉ là ngày hạnh phúc của cặp đôi mà còn là nơi thể hiện tinh hoa văn hóa Việt. Cùng thấm phá từng nghi lễ, ý nghĩa và cách giữ gìn để đang làm mới ngày trọng đại này nhé!',
    content: `
      <p>Đám cưới trong văn hóa Việt Nam mang đậm dấu ấn truyền thống với nhiều nghi lễ đặc sắc được truyền từ thế hệ này sang thế hệ khác. Mỗi nghi lễ đều chứa đựng ý nghĩa sâu sắc về tình yêu, gia đình và sự kết nối.</p>
      
      <img src="/dam1.jpeg" alt="Đám cưới Việt Nam" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Ngày cưới trong văn hóa Việt Nam</h2>
      <p>Ngày cưới - một ngày không chỉ là ngày vui đầu của cặp đôi mà còn là cột mốc kết nối hai dòng họ, hai gia tộc. Đây là dịp để hai bên gia đình hợp nhất, cùng chúc phúc cho cô dâu chú rể bước vào hành trình mới.</p>

      <h2>Ý nghĩa ngày cưới trong văn hóa người Việt</h2>
      <p>Trong tâm thức người Việt, ngày cưới không chỉ là ngày vui đầu, mà còn là lời thề nguyện kết duyên trăm năm. Đây là ngày thiêng liêng nhất trong đời người, đánh dấu sự chuyển đổi từ con gái, con trai thành người vợ, người chồng có trách nhiệm xây dựng tổ ấm.</p>

      <img src="/dam1.jpeg" alt="Nghi lễ cưới hỏi" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h2>Các nghi lễ cưới hỏi truyền thống của người Việt</h2>
      
      <h3>1. Lễ dạm ngõ - Mở đầu chính thức</h3>
      <p>Nhà trai mang quà đến nhà gái để báo cáo ý định cưới  xin. Đây là bước đầu tiên, thể hiện sự tôn trọng và nghiêm túc của gia đình nhà trai.</p>

      <h3>2. Lễ ăn hỏi - Nghi thức cơ mất chính thức</h3>
      <p>Đây là nghi lễ quan trọng nhất, nhà trai mang lễ vật đến nhà gái để xin cưới chính thức. Lễ vật thường bao gồm trầu cau, rượu, bánh kẹo, hoa quả, và vàng bạc trang sức.</p>

      <img src="/dam1.jpeg" alt="Lễ ăn hỏi" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

      <h3>3. Lễ cưới chính thức - Thành hôn</h3>
      <p>Nhà trai đón dâu về, cùng tổ chức tiệc cưới mời họ hàng, bạn bè đến chúc phúc. Cô dâu chú rể làm lễ gia tiên, xin phép tổ tiên chứng giám.</p>

      <h3>4. Lễ về nhà gái - Ngày đầu làm dâu</h3>
      <p>Sau ngày cưới, cô dâu chú rể về thăm nhà gái, thể hiện lòng hiếu thảo và sự nhớ nhung quê hương.</p>

      <h2>Giới tích hiện đại môi truyền thống</h2>
      <p>Ngày nay, nhiều cặp đôi kết hợp giữa truyền thống và hiện đại. Vẫn giữ các nghi lễ quan trọng nhưng đơn giản hóa, phù hợp với cuộc sống hiện đại. Thiệp cưới online cũng là một ví dụ điển hình - vẫn giữ được ý nghĩa mời gọi nhưng tiện lợi và hiện đại hơn.</p>

      <img src="/abc.webp" alt="Đám cưới hiện đại" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />
    `,
    author: 'Hỷ Thư',
    date: '10/01/2026',
    image: '/dam1.jpeg',
    category: 'Kinh nghiệm'
  }
]
