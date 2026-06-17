  let selectedSubject = '';
  document.getElementById('subjectChips').addEventListener('click', e => {
    const chip = e.target.closest('.subject-chip');
    if (!chip) return;
    document.querySelectorAll('.subject-chip').forEach(c=>c.classList.remove('selected'));
    chip.classList.add('selected');
    selectedSubject = chip.dataset.val;
  });

  function sendMessage() {
    const name = document.getElementById('cfName').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const msg = document.getElementById('cfMessage').value.trim();
    if (!name || !email || !msg) { showToast('⚠️ Vui lòng điền tên, email và nội dung'); return; }
    showToast('✅ Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi trong 24h.');
    document.getElementById('cfName').value = '';
    document.getElementById('cfEmail').value = '';
    document.getElementById('cfMessage').value = '';
    document.getElementById('cfPhone').value = '';
    document.querySelectorAll('.subject-chip').forEach(c=>c.classList.remove('selected'));
    selectedSubject = '';
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
    if (localStorage.getItem('itbook_theme') === 'dark') {
      document.body.classList.add('dark');
      var btn = document.getElementById('themeToggle');
      if (btn) btn.textContent = '🌙';
    }
  })();
  document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
    localStorage.setItem('itbook_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

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
