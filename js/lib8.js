  const POSTS = [
    { id:1, cat:'ai',     icon:'🤖', bg:'linear-gradient(135deg,#0d1a2e,#1a2d4a)', tag:'AI & ML',      title:'Top 5 cuốn sách Deep Learning cho người mới bắt đầu', excerpt:'Chọn sách học Deep Learning không hề dễ. Chúng tôi đã đọc và lọc ra 5 cuốn phù hợp nhất cho từng level.', author:'Minh Trí', avatar:'👨‍💻', date:'10/5/2025', read:'5 phút' },
    { id:2, cat:'web',    icon:'🌐', bg:'linear-gradient(135deg,#001a2d,#003d5c)', tag:'Web Dev',       title:'Clean Code: Những nguyên tắc viết code sạch không thể bỏ qua', excerpt:'Cuốn sách của Uncle Bob vẫn là kinh thánh cho mọi lập trình viên. Hãy xem những điều cốt lõi nhất từ cuốn sách này.', author:'Hà Linh', avatar:'👩‍💻', date:'8/5/2025',  read:'6 phút' },
    { id:3, cat:'python', icon:'🐍', bg:'linear-gradient(135deg,#1a3a1a,#2d5a27)', tag:'Python',        title:'Python hay JavaScript: Nên học ngôn ngữ nào đầu tiên?', excerpt:'Câu hỏi muôn thuở của người mới. Chúng tôi phân tích kỹ lưỡng dựa trên mục tiêu nghề nghiệp của bạn.', author:'Tuấn Anh', avatar:'🧑‍💻', date:'5/5/2025',  read:'7 phút' },
    { id:4, cat:'career', icon:'💼', bg:'linear-gradient(135deg,#1a1a0d,#2a2a1a)', tag:'Sự nghiệp',    title:'Kinh nghiệm phỏng vấn tại các công ty công nghệ lớn tại VN', excerpt:'Những kiến thức và kỹ năng thực sự được hỏi trong vòng phỏng vấn kỹ thuật tại các công ty tech hàng đầu.', author:'Hà Linh', avatar:'👩‍💻', date:'2/5/2025',  read:'10 phút' },
    { id:5, cat:'data',   icon:'📊', bg:'linear-gradient(135deg,#2d1b00,#4a3200)', tag:'Data Science',  title:'Pandas vs Polars: Đâu là tương lai của xử lý dữ liệu Python?', excerpt:'Polars đang nổi lên mạnh mẽ. Chúng tôi so sánh hai thư viện này về hiệu năng, cú pháp và trường hợp sử dụng.', author:'Minh Trí', avatar:'👨‍💻', date:'28/4/2025', read:'8 phút' },
    { id:6, cat:'review', icon:'📚', bg:'linear-gradient(135deg,#1a0a2e,#2d1a4a)', tag:'Điểm sách',    title:'Review: "The Pragmatic Programmer" — Vẫn đỉnh sau 25 năm', excerpt:'Xuất bản lần đầu năm 1999, cuốn sách này có còn phù hợp với lập trình viên năm 2025? Câu trả lời sẽ làm bạn bất ngờ.', author:'Tuấn Anh', avatar:'🧑‍💻', date:'25/4/2025', read:'6 phút' },
    { id:7, cat:'ai',     icon:'🧠', bg:'linear-gradient(135deg,#2d1b3d,#4a1942)', tag:'AI & ML',      title:'Transformer là gì? Giải thích đơn giản từ A đến Z', excerpt:'Kiến trúc Transformer đã thay đổi toàn bộ ngành AI. Cùng hiểu nó hoạt động như thế nào qua ví dụ trực quan.', author:'Minh Trí', avatar:'👨‍💻', date:'22/4/2025', read:'12 phút' },
    { id:8, cat:'career', icon:'🎯', bg:'linear-gradient(135deg,#0a1a00,#1a3a00)', tag:'Sự nghiệp',    title:'Freelancer IT tại Việt Nam: Thu nhập thực tế là bao nhiêu?', excerpt:'Khảo sát từ 200+ freelancer IT tại VN về mức thu nhập, nền tảng sử dụng và bí quyết tìm client chất lượng.', author:'Hà Linh', avatar:'👩‍💻', date:'19/4/2025', read:'9 phút' },
    { id:9, cat:'web',    icon:'⚡', bg:'linear-gradient(135deg,#2d2000,#4a3800)', tag:'Web Dev',       title:'React vs Vue vs Svelte năm 2025: Chọn framework nào?', excerpt:'Hệ sinh thái frontend đang thay đổi nhanh chóng. Chúng tôi phân tích ưu nhược điểm của từng framework hiện tại.', author:'Tuấn Anh', avatar:'🧑‍💻', date:'16/4/2025', read:'8 phút' },
  ];

  let activeFilter = 'all';
  let visibleCount = 6;

  function renderPosts() {
    const filtered = activeFilter === 'all' ? POSTS : POSTS.filter(p=>p.cat===activeFilter);
    const visible = filtered.slice(0, visibleCount);
    document.getElementById('blogGrid').innerHTML = visible.map(p => `
      <div class="blog-card fade-in" onclick="location.href='#'">
        <div class="blog-cover" style="background:${p.bg}">${p.icon}</div>
        <div class="blog-body">
          <div class="blog-tags"><span class="blog-tag">${p.tag}</span></div>
          <div class="blog-title">${p.title}</div>
          <div class="blog-excerpt">${p.excerpt}</div>
          <div class="blog-footer">
            <div class="blog-meta">
              <div class="blog-avatar">${p.avatar}</div>
              <span class="blog-author">${p.author}</span>
            </div>
            <span class="blog-read">📖 ${p.read}</span>
          </div>
        </div>
      </div>`).join('');
    // re-observe
    const obs = new IntersectionObserver(entries => entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el=>obs.observe(el));
  }

  function loadMore() { visibleCount += 3; renderPosts(); }

  document.getElementById('filterTabs').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    visibleCount = 6;
    renderPosts();
  });

  function subscribe() {
    const email = document.getElementById('nlEmail').value.trim();
    if (!email || !email.includes('@')) { showToast('⚠️ Vui lòng nhập email hợp lệ'); return; }
    showToast('🎉 Đăng ký thành công! Cảm ơn bạn.');
    document.getElementById('nlEmail').value = '';
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

  renderPosts();
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
