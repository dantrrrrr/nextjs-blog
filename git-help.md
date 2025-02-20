
---

# **Hướng Dẫn Quản Lý Dự Án với Git Branch**

### **1. Tạo Branch Mới từ `master`**
```sh
git checkout master      # Chuyển sang branch master
git pull origin master    # Tải và hợp nhất các thay đổi mới nhất từ remote repository vào master
git checkout -b feature/my-new-feature  # Tạo và chuyển sang branch mới (tên branch là feature/my-new-feature)
```
- `git checkout master`: Chuyển sang branch `master`. Đảm bảo bạn đang làm việc với code ổn định, đã được kiểm tra.
- `git pull origin master`: Lấy về các thay đổi mới nhất từ GitHub và hợp nhất chúng vào branch `master` của bạn. Nếu có thay đổi trên remote, Git sẽ cập nhật code local của bạn.
- `git checkout -b feature/my-new-feature`: Tạo một branch mới và chuyển sang branch đó. Cái `-b` cho phép bạn tạo và chuyển sang branch trong một lệnh duy nhất.

**Các tùy chọn liên quan:**
- `git checkout <branch-name>`: Chuyển sang một branch có sẵn.
- `git branch -b <branch-name>`: Tạo branch mới nhưng không chuyển sang đó.
  
---

### **2. Thêm Các Tập Tin vào Staging Area**
```sh
git add .  
```
- `git add .`: Thêm tất cả các tệp thay đổi vào staging area (khu vực chuẩn bị commit). Dấu chấm `.` có nghĩa là "tất cả các tệp trong thư mục hiện tại". Bạn cũng có thể chỉ định tệp cụ thể để thêm (ví dụ, `git add <file-name>`).

**Các tùy chọn liên quan:**
- `git add <file-name>`: Thêm một tệp cụ thể.
- `git add -A`: Thêm tất cả các thay đổi (bao gồm xóa tệp).
- `git add -p`: Thêm các phần của tệp thay đổi (cho phép bạn chọn phần thay đổi để commit).

---

### **3. Commit Các Thay Đổi**
```sh
git commit -m "Add feature: my-new-feature"
```
- `git commit -m "message"`: Lưu các thay đổi đã được thêm vào staging area vào lịch sử Git. Thông điệp `"message"` mô tả các thay đổi bạn đã thực hiện.

**Các tùy chọn liên quan:**
- `git commit --amend`: Chỉnh sửa commit cuối cùng (dùng khi bạn muốn thay đổi thông điệp commit hoặc thêm tệp).
- `git commit -a`: Tự động thêm tất cả các thay đổi vào staging area và commit mà không cần dùng `git add` trước.
- `git commit --no-edit`: Không thay đổi thông điệp commit khi sử dụng `--amend`.

---

### **4. Đẩy Thay Đổi Lên GitHub**
```sh
git push -u origin feature/my-new-feature
```
- `git push`: Đẩy thay đổi lên remote repository.
- `-u`: Tùy chọn này sẽ liên kết branch local với remote, cho phép bạn sử dụng `git push` và `git pull` mà không cần chỉ định tên remote và branch trong lần sau.
- `origin`: Tên mặc định của remote repository (thường là GitHub).
- `feature/my-new-feature`: Tên của branch bạn đang đẩy lên.

**Các tùy chọn liên quan:**
- `git push origin <branch-name>`: Đẩy thay đổi từ một branch cụ thể.
- `git push --force`: Đẩy thay đổi mặc dù có sự thay đổi trong lịch sử (dùng cẩn thận).
- `git push --tags`: Đẩy các tags lên remote.

---

### **5. Mở Pull Request (PR) Trên GitHub**
- Sau khi đẩy branch của bạn lên GitHub, GitHub sẽ tự động thông báo về PR.
- Chọn **Compare & pull request** và chọn `master` làm branch gốc.
- Thêm mô tả về PR và gửi đi để người khác xem xét và merge.

---

### **6. Hợp Nhất Pull Request**
- Sau khi người khác đã xem xét và phê duyệt PR, bạn có thể hợp nhất PR vào `master`.
- Vào trang PR trên GitHub, nhấn **Merge pull request** và xác nhận việc hợp nhất.

---

### **7. Xóa Branch Sau Khi Merge (Tùy Chọn)**
```sh
git branch -d feature/my-new-feature     # Xóa branch local
git push origin --delete feature/my-new-feature  # Xóa branch trên remote
```
- `git branch -d <branch-name>`: Xóa một branch local. Cờ `-d` đảm bảo rằng branch chỉ bị xóa nếu nó đã được merge.
- `git push origin --delete <branch-name>`: Xóa branch trên remote repository.

**Các tùy chọn liên quan:**
- `git branch -D <branch-name>`: Xóa branch bất chấp nó đã được merge hay chưa.
- `git branch`: Liệt kê tất cả các branch hiện tại trong repo.

---

### **8. Cập Nhật `master` Branch Của Bạn**
```sh
git checkout master   # Chuyển sang master branch
git pull origin master # Lấy và hợp nhất các thay đổi từ remote
```
- `git checkout master`: Chuyển lại sang branch `master`.
- `git pull origin master`: Lấy và hợp nhất các thay đổi từ `master` trên GitHub vào `master` local.

---

### **9. Rebase (Tùy Chọn)**
```sh
git fetch origin              # Tải về các thay đổi mới nhất từ remote
git rebase origin/master       # Áp dụng các thay đổi của branch hiện tại lên trên branch master mới nhất
```
- `git fetch origin`: Tải về các thay đổi từ remote mà không hợp nhất chúng vào local repository.
- `git rebase origin/master`: Áp dụng các thay đổi của bạn lên trên `master` để giữ lịch sử commit sạch sẽ và dễ theo dõi.

---

### **Các Quy Tắc Tốt Nhất Khi Làm Việc Với Branch**
- **Một tính năng = Một branch**: Mỗi branch chỉ nên chứa một tính năng hoặc sửa lỗi để dễ dàng kiểm tra và quản lý.
- **Commit thường xuyên**: Thực hiện commit cho mỗi thay đổi nhỏ để giữ lịch sử commit rõ ràng và có thể theo dõi dễ dàng.
- **Giữ các branch đồng bộ**: Thường xuyên kéo các thay đổi mới từ `master` (hoặc `dev` nếu sử dụng branch phát triển) vào các branch tính năng của bạn.
- **Dọn dẹp branch**: Sau khi merge, xóa các branch để tránh làm rối repository.

---

### **Cấu Trúc Tên Branch**
- **Branch tính năng**: Thường sử dụng `feature/ten-tinh-nang`, ví dụ: `feature/login-page`.
- **Branch sửa lỗi**: Dùng `bugfix/mota-issue`, ví dụ: `bugfix/fix-login-bug`.
- **Branch sửa gấp**: Dùng `hotfix/sua-loi-urgent`, ví dụ: `hotfix/fix-header`.

---

