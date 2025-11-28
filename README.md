1. **Tạo file inventory** định nghĩa các máy chủ (ví dụ: `[webservers]` với địa chỉ IP).
2. **Tạo playbook YAML** (ví dụ: `deploy_nginx.yml`).
3. **Ghi rõ tên playbook và target host** (`hosts: webservers`).
4. **Sử dụng `become: yes`** để có quyền sudo.
5. **Cập nhật cache gói** (dành cho hệ thống Debian/Ubuntu).
6. **Cài đặt Nginx** bằng module `apt`.
7. **Khởi động và bật dịch vụ Nginx** tự động chạy khi khởi động.
8. **Triển khai file cấu hình Nginx** từ máy cục bộ lên server bằng module `copy` hoặc `template`.
9. **Tạo liên kết symbolic** từ `sites-available` sang `sites-enabled` để kích hoạt site.
10. **Xóa cấu hình mặc định** (tùy chọn).
11. **Triển khai nội dung website** (file HTML, hình ảnh) vào thư mục root (ví dụ: `/var/www/html`).
12. **Khởi động lại Nginx** để áp dụng cấu hình mới.
13. **Chạy playbook** bằng lệnh `ansible-playbook` với tùy chọn `-i` chỉ định inventory.

