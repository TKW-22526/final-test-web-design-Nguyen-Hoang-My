// ── DATA ──
    const books = [
      { id:1, title:"Deep Learning with Python", author:"François Chollet", price:285000, oldPrice:350000, cat:"ai", icon:"🤖", img:"assets/Deep Learning with Python.jpg", bg:"linear-gradient(135deg,#1a1a2e,#16213e)", badge:"Bestseller", rating:4.9, reviews:128 },
      { id:2, title:"Clean Code", author:"Robert C. Martin", price:199000, oldPrice:null, cat:"web", icon:"✨", img:"assets/Clean Code.jpg", bg:"linear-gradient(135deg,#0d2137,#1b2a4a)", badge:"Classic", rating:4.8, reviews:256 },
      { id:3, title:"Python Crash Course", author:"Eric Matthes", price:175000, oldPrice:220000, cat:"python", icon:"🐍", img:"assets/Python Crash Course.jpg", bg:"linear-gradient(135deg,#1a3a1a,#2d5a27)", badge:"Mới", rating:4.7, reviews:89 },
      { id:4, title:"Hands-On ML with Scikit-Learn", author:"Aurélien Géron", price:320000, oldPrice:null, cat:"ai", icon:"📊", img:"assets/Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow Concepts.jpg", bg:"linear-gradient(135deg,#2d1b3d,#4a1942)", badge:"Hot", rating:4.9, reviews:201 },
      { id:5, title:"JavaScript: The Good Parts", author:"Douglas Crockford", price:155000, oldPrice:null, cat:"web", icon:"⚡", img:"assets/Javascript The Good Parts.jpg", bg:"linear-gradient(135deg,#2d2000,#4a3800)", badge:null, rating:4.6, reviews:145 },
      { id:6, title:"Database Design for Mere Mortals", author:"Michael Hernandez", price:210000, oldPrice:260000, cat:"db", icon:"🗄️", img:"assets/Database Design for Mere Mortals.jpg", bg:"linear-gradient(135deg,#002d2d,#004a4a)", badge:null, rating:4.5, reviews:67 },
      { id:7, title:"Hacking: The Art of Exploitation", author:"Jon Erickson", price:240000, oldPrice:null, cat:"network", icon:"🔒", img:"assets/Hacking The Art of Exploitation.jpg", bg:"linear-gradient(135deg,#1a0000,#3d0000)", badge:"Hot", rating:4.7, reviews:98 },
      { id:8, title:"Data Science from Scratch", author:"Joel Grus", price:195000, oldPrice:240000, cat:"data", icon:"📈", img:"assets/Data Science from Scratch.jpg", bg:"linear-gradient(135deg,#001a2d,#003d5c)", badge:null, rating:4.6, reviews:112 },
    ];

    const resources = [
      { name:"W3Schools",          desc:"Học HTML, CSS, JavaScript với hàng nghìn ví dụ và tài liệu tham khảo nhanh.", icon:"🌐", iconBg:"#1a2a1a", langs:["HTML","CSS","JS"] },
      { name:"freeCodeCamp",       desc:"Học JavaScript, Python hoàn toàn miễn phí với hàng nghìn bài tập có chứng chỉ.", icon:"🎓", iconBg:"#002a1a", langs:["HTML","CSS","JS","Python"] },
      { name:"TryHackMe",          desc:"Học Cybersecurity qua các phòng lab thực hành và thách thức CTF có hướng dẫn.", icon:"🛡️", iconBg:"#2a0010", langs:["Cybersecurity","Linux","Python"] },
      { name:"Learn Git Branching", desc:"Học Git và branch qua trò chơi trực quan — cách học Git thú vị nhất.", icon:"🌿", iconBg:"#1a0a00", langs:["Git"] },
      { name:"SQLBolt",            desc:"Học SQL từ cơ bản đến nâng cao qua các bài học tương tác trên trình duyệt.", icon:"🗄️", iconBg:"#10001a", langs:["SQL"] },
      { name:"Coursera",           desc:"Học AI, ML với các khóa từ Stanford, DeepLearning.AI và Google.", icon:"🤖", iconBg:"#002a10", langs:["Python","AI","ML"] },
    ];

    // ── CART ──
    let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
    function updateCartCount() {
      document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);
    }
    updateCartCount();

    function addToCart(id) {
      const book = books.find(b => b.id === id);
      const existing = cart.find(c => c.id === id);
      if (existing) existing.qty++;
      else cart.push({ ...book, qty: 1 });
      localStorage.setItem('itbook_cart', JSON.stringify(cart));
      updateCartCount();
      showToast(`✓ Đã thêm "${book.title}" vào giỏ`);
      const btn = document.querySelector(`[data-id="${id}"]`);
      if (btn) { btn.textContent = '✓ Đã thêm'; btn.classList.add('added'); }
    }

    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2500);
    }

    // ── RENDER BOOKS ──
    function renderBooks(data) {
      const grid = document.getElementById('booksGrid');
      if (!data.length) {
        grid.innerHTML = `<p style="color:var(--muted);padding:2rem 0">Không tìm thấy sách phù hợp.</p>`;
        return;
      }
      grid.innerHTML = data.map(b => `
        <div class="book-card" onclick="location.href='html/book-detail.html?id=${b.id}'">
          <div class="book-cover-full" style="background:${b.bg}">
            ${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;position:absolute;top:0;left:0;">` : `<span style="position:relative;z-index:1;font-size:3.5rem">${b.icon}</span>`}
            ${b.badge ? `<span class="book-badge">${b.badge}</span>` : ''}
          </div>
          <div class="book-info">
            <div class="book-cat-tag">${b.cat.toUpperCase()}</div>
            <div class="book-title">${b.title}</div>
            <div class="book-author">${b.author}</div>
            <div class="book-rating">
              <span class="stars">${'★'.repeat(Math.floor(b.rating))}${'☆'.repeat(5-Math.floor(b.rating))}</span>
              <span class="rating-num">${b.rating} (${b.reviews})</span>
            </div>
            <div class="book-footer">
              <div>
                <div class="book-price">${b.price.toLocaleString('vi-VN')}₫</div>
                ${b.oldPrice ? `<div class="book-price old-price">${b.oldPrice.toLocaleString('vi-VN')}₫</div>` : ''}
              </div>
              <button class="btn-add-cart" data-id="${b.id}" onclick="event.stopPropagation();addToCart(${b.id})">+ Giỏ hàng</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    function searchBooks() {
      const q = document.getElementById('searchInput').value.toLowerCase();
      const cat = document.getElementById('filterSelect').value;
      const filtered = books.filter(b =>
        (cat === 'all' || b.cat === cat) &&
        (b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
      );
      renderBooks(filtered);
    }

    function filterBooks(cat) {
      document.getElementById('filterSelect').value = cat;
      window.scrollTo({ top: document.querySelector('.search-wrap').offsetTop - 80, behavior: 'smooth' });
      searchBooks();
    }

    // ── RENDER RESOURCES ──
    function renderResources() {
      document.getElementById('resourceGrid').innerHTML = resources.map(r => `
        <div class="resource-card">
          <div class="resource-icon" style="background:${r.iconBg}">${r.icon}</div>
          <div class="resource-info">
            <div class="resource-name">${r.name}</div>
            <div class="resource-desc">${r.desc}</div>
            <div class="resource-lang">${r.langs.map(l=>`<span class="lang-tag">${l}</span>`).join('')}</div>
          </div>
        </div>
      `).join('');
    }

    // ── NEWSLETTER ──
    function subscribeNewsletter() {
      const email = document.getElementById('nlEmail').value.trim();
      if (!email || !email.includes('@')) { showToast('⚠️ Vui lòng nhập email hợp lệ'); return; }
      showToast('🎉 Đăng ký thành công!');
      document.getElementById('nlEmail').value = '';
    }

    // ── THEME INIT ──
    (function() {
        if (localStorage.getItem('itbook_theme') === 'light') {
            document.body.classList.add('light');
            var btn = document.getElementById('themeToggle');
            if (btn) btn.textContent = '🌙';
        }
    })();
    // ── THEME TOGGLE ──
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
      localStorage.setItem('itbook_theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });

    // ── SCROLL ANIMATION ──
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

    // ── INIT ──
    renderBooks(books);
    renderResources();

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
