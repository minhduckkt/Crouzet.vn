HƯỚNG DẪN ẢNH & LOGO - CROUZET.VN
=================================
LOGO:
- Logo hiện dùng bản SVG tái tạo (crouzet-logo.svg) - sắc nét, đổi màu được, không cần file ảnh.
- Nếu muốn dùng logo PNG GỐC của bạn: lưu thành assets/images/crouzet-logo.png
  rồi báo lại, sẽ thay khối <svg><use href="#icon-logo"></svg> trong header/footer bằng <img>.

ẢNH SẢN PHẨM:
1. Đặt ảnh vào assets/images/products/  (vd: millenium-em4.jpg, timer-relay.jpg, microswitch.jpg)
2. Ảnh hero: assets/images/hero-crouzet.jpg (1600x1000, nền trắng)
3. Tìm comment <!-- ẢNH SẢN PHẨM --> trong file HTML, thay khối <svg> bằng <img ...>.
4. Nên dùng .webp/.jpg nén <150KB, nền trắng cho đồng bộ.
