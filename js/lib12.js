  const REVIEWS = [
    { id:1, bookTitle:'Deep Learning with Python', bookAuthor:'François Chollet', bookIcon:'🤖', bookBg:'linear-gradient(135deg,#1a1a2e,#16213e)', cat:'ai',     rating:5, reviewer:'Nguyễn Minh', avatar:'👨‍💻', date:'12/5/2025', helpful:47, content:'Đây là cuốn sách tốt nhất về deep learning tôi từng đọc. Tác giả là người tạo ra Keras nên cách giải thích rất thực tế và đi vào trọng tâm. Các ví dụ code chạy được ngay, không phải mày mò nhiều. Đặc biệt phần Computer Vision rất chi tiết.' },
    { id:2, bookTitle:'Clean Code', bookAuthor:'Robert C. Martin', bookIcon:'✨', bookBg:'linear-gradient(135deg,#0d2137,#1b2a4a)', cat:'web',    rating:5, reviewer:'Trần Hà Linh', avatar:'👩‍💻', date:'10/5/2025', helpful:38, content:'Uncle Bob viết rất trực tiếp, không hoa mỹ. Mỗi chương là một bài học thực tế về cách đặt tên biến, viết function, xử lý lỗi... Sau khi đọc xong tôi nhìn lại code cũ thấy xấu hổ lắm nhưng cũng biết cách fix. Sách bắt buộc phải đọc.' },
    { id:3, bookTitle:'Python Crash Course', bookAuthor:'Eric Matthes', bookIcon:'🐍', bookBg:'linear-gradient(135deg,#1a3a1a,#2d5a27)', cat:'python', rating:4, reviewer:'Phạm Tuấn', avatar:'🧑‍💻', date:'8/5/2025',  helpful:29, content:'Sách viết rất dễ hiểu, phù hợp cho người mới bắt đầu. Phần đầu dạy Python cơ bản khá nhanh và rõ. Phần sau có 3 project thực tế rất hay: game Alien Invasion, data visualization và web app Django. Tuy nhiên Django chapter hơi nhanh với beginner.' },
    { id:4, bookTitle:'The Pragmatic Programmer', bookAuthor:'Hunt & Thomas', bookIcon:'🔧', bookBg:'linear-gradient(135deg,#1a0d2e,#2d1b4a)', cat:'web',    rating:5, reviewer:'Lê Quốc Huy', avatar:'👨‍🎓', date:'5/5/2025',  helpful:52, content:'Cuốn sách không dạy một ngôn ngữ cụ thể mà dạy cách TƯ DUY như một lập trình viên giỏi. Nhiều tips vẫn còn rất relevant dù sách ra năm 1999. Đọc đi đọc lại vẫn thấy mới. Khuyến khích mọi dev từ junior đến senior đều nên đọc.' },
    { id:5, bookTitle:'Hands-On ML with Scikit-Learn', bookAuthor:'Aurélien Géron', bookIcon:'📊', bookBg:'linear-gradient(135deg,#2d1b3d,#4a1942)', cat:'ai',     rating:5, reviewer:'Nguyễn Thu Hương', avatar:'👩‍🔬', date:'2/5/2025',  helpful:41, content:'Sách cực kỳ toàn diện về ML. Từ linear regression đến neural network đều được giải thích cẩn thận với math đủ để hiểu nhưng không quá phức tạp. Code ví dụ đều dùng scikit-learn và TensorFlow 2. Phải có kiến thức Python cơ bản trước khi đọc.' },
    { id:6, bookTitle:'JavaScript: The Good Parts', bookAuthor:'Douglas Crockford', bookIcon:'⚡', bookBg:'linear-gradient(135deg,#2d2000,#4a3800)', cat:'web',    rating:4, reviewer:'Đinh Văn Long', avatar:'🧑‍💻', date:'28/4/2025', helpful:23, content:'Mỏng nhưng chất. Crockford chỉ ra những phần tốt và phần cần tránh của JavaScript một cách rõ ràng. Đặc biệt hữu ích khi học về closure, prototype, và module pattern. Tuy nhiên sách hơi cũ, không có ES6+ nên cần đọc thêm tài liệu mới.' },
  ];

  function renderReviews() {
    document.getElementById('reviewsGrid').innerHTML = REVIEWS.map(r => `
      <div class="review-card fade-in">
        <div class="review-book">
          <div class="review-cover" style="background:${r.bookBg}">${r.bookIcon}</div>
          <div class="review-book-info">
            <div class="review-book-title">${r.bookTitle}</div>
            <div class="review-book-author">${r.bookAuthor}</div>
            <div class="stars-row">
              <span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
              <span class="rating-num">${r.rating}.0</span>
            </div>
          </div>
        </div>
        <div class="review-divider"></div>
        <div class="review-content">${r.content}</div>
        <div class="reviewer-row">
          <div class="reviewer">
            <div class="reviewer-avatar">${r.avatar}</div>
            <div>
              <div class="reviewer-name">${r.reviewer}</div>
              <div class="review-date">${r.date}</div>
            </div>
          </div>
          <div class="review-helpful">
            <button class="helpful-btn" onclick="toggleHelpful(this,${r.id})">👍 ${r.helpful}</button>
          </div>
        </div>
      </div>`).join('');
    const obs = new IntersectionObserver(entries => entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el=>obs.observe(el));
  }

  function toggleHelpful(btn, id) {
    btn.classList.toggle('liked');
    const r = REVIEWS.find(r=>r.id===id);
    if (btn.classList.contains('liked')) { r.helpful++; } else { r.helpful--; }
    btn.textContent = '👍 ' + r.helpful;
  }

  // Star picker
  let selectedStars = 0;
  document.getElementById('starPicker').addEventListener('click', e => {
    const star = e.target.closest('.star-pick');
    if (!star) return;
    selectedStars = parseInt(star.dataset.star);
    document.querySelectorAll('.star-pick').forEach((s,i) => {
      s.classList.toggle('active', i < selectedStars);
    });
  });

  function submitReview() {
    const name = document.getElementById('wrName').value.trim();
    const book = document.getElementById('wrBook').value;
    const content = document.getElementById('wrContent').value.trim();
    if (!name || !book || !content || !selectedStars) { showToast('⚠️ Vui lòng điền đầy đủ thông tin'); return; }
    showToast('🎉 Cảm ơn bạn đã đánh giá!');
    document.getElementById('wrName').value = '';
    document.getElementById('wrBook').value = '';
    document.getElementById('wrContent').value = '';
    selectedStars = 0;
    document.querySelectorAll('.star-pick').forEach(s=>s.classList.remove('active'));
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)';
    setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(20px)'; }, 2500);
  }

  let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
  document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);

  // ── THEME INIT ──
  (function() {
    if (localStorage.getItem('itbook_theme') === 'light') {
      document.body.classList.add('light');
      var btn = document.getElementById('themeToggle');
      if (btn) btn.textContent = '🌙';
    }
  })();
  document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light');
    this.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
    localStorage.setItem('itbook_theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  renderReviews();
  const obs = new IntersectionObserver(entries => entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));


    // ── USER AVATAR / LOGOUT ──
    (function() {
      const user = JSON.parse(localStorage.getItem("itbook_user") || "null");
      const loginBtn = document.querySelector(".btn-login");
      if (!loginBtn) return;
      if (user) {
        // Thay nút đăng nhập bằng avatar dropdown
        loginBtn.outerHTML = `
          <div class="user-avatar-wrap" style="position:relative">
            <div class="user-avatar" onclick="toggleUserMenu()" title="${user.name}">
              ${user.avatar}
            </div>
            <div class="user-menu" id="userMenu" style="display:none">
              <div class="user-menu-name">👋 ${user.name}</div>
              <div class="user-menu-email">${user.email}</div>
              <hr class="user-menu-divider">
              <a class="user-menu-item" href="#">📦 Đơn hàng của tôi</a>
              <a class="user-menu-item" href="#">❤️ Yêu thích</a>
              <a class="user-menu-item" href="#">⚙️ Cài đặt</a>
              <hr class="user-menu-divider">
              <button class="user-menu-logout" onclick="handleLogout()">🚪 Đăng xuất</button>
            </div>
          </div>`;
      }
    })();

    function toggleUserMenu() {
      const menu = document.getElementById("userMenu");
      if (menu) menu.style.display = menu.style.display === "none" ? "block" : "none";
    }

    function handleLogout() {
      localStorage.removeItem("itbook_user");
      location.reload();
    }

    // Đóng menu khi click ra ngoài
    document.addEventListener("click", function(e) {
      const wrap = document.querySelector(".user-avatar-wrap");
      if (wrap && !wrap.contains(e.target)) {
        const menu = document.getElementById("userMenu");
        if (menu) menu.style.display = "none";
      }
    });
