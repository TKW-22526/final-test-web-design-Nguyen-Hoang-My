  const CATEGORIES = [
    { id:'ai',      name:'AI & Machine Learning', icon:'🤖', count:6,  desc:'Trí tuệ nhân tạo, học máy, deep learning và các ứng dụng AI trong thực tế.', tags:['Deep Learning','NLP','Computer Vision','TensorFlow','PyTorch'] },
    { id:'web',     name:'Lập trình Web',          icon:'🌐', count:5,  desc:'Frontend, backend, fullstack — từ HTML/CSS cơ bản đến các framework hiện đại.', tags:['HTML/CSS','JavaScript','React','Node.js','REST API'] },
    { id:'python',  name:'Python',                 icon:'🐍', count:4,  desc:'Ngôn ngữ lập trình đa năng — từ scripting, automation đến data science.', tags:['Python 3','OOP','Automation','Scripting','Flask'] },
    { id:'data',    name:'Data Science',            icon:'📊', count:4,  desc:'Phân tích dữ liệu, thống kê, trực quan hóa và khoa học dữ liệu ứng dụng.', tags:['Pandas','NumPy','Matplotlib','SQL','Statistics'] },
    { id:'network', name:'An toàn mạng',            icon:'🔒', count:3,  desc:'Bảo mật thông tin, ethical hacking, penetration testing và phòng thủ mạng.', tags:['Ethical Hacking','Pentest','Network Security','Cryptography'] },
    { id:'db',      name:'Cơ sở dữ liệu',          icon:'🗄️', count:2,  desc:'Thiết kế và quản trị cơ sở dữ liệu quan hệ và phi quan hệ.', tags:['MySQL','PostgreSQL','MongoDB','SQL','Database Design'] },
  ];

  const BOOKS = [
    { id:1,  title:"Deep Learning with Python",         author:"F. Chollet",    price:285000, cat:"ai",      icon:"🤖", img:"../assets/Deep Learning with Python.jpg", bg:"linear-gradient(135deg,#1a1a2e,#16213e)", rating:4.9 },
    { id:4,  title:"Hands-On ML with Scikit-Learn",     author:"A. Géron",      price:320000, cat:"ai",      icon:"📊", img:"../assets/Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow Concepts.jpg", bg:"linear-gradient(135deg,#2d1b3d,#4a1942)", rating:4.9 },
    { id:11, title:"Neural Networks & Deep Learning",   author:"M. Nielsen",    price:230000, cat:"ai",      icon:"🧠", img:"../assets/Computer Networks.jpg", bg:"linear-gradient(135deg,#1a1030,#2a2050)", rating:4.7 },
    { id:18, title:"AI Superpowers",                    author:"Kai-Fu Lee",    price:175000, cat:"ai",      icon:"🌏", img:"../assets/Interactive Data Visualization for the Web.jpg", bg:"linear-gradient(135deg,#1a0a00,#3a1a00)", rating:4.6 },
    { id:2,  title:"Clean Code",                        author:"R.C. Martin",   price:199000, cat:"web",     icon:"✨", img:"../assets/Clean Code.jpg", bg:"linear-gradient(135deg,#0d2137,#1b2a4a)", rating:4.8 },
    { id:5,  title:"JavaScript: The Good Parts",        author:"D. Crockford",  price:155000, cat:"web",     icon:"⚡", img:"../assets/Javascript The Good Parts.jpg", bg:"linear-gradient(135deg,#2d2000,#4a3800)", rating:4.6 },
    { id:9,  title:"The Pragmatic Programmer",          author:"Hunt & Thomas", price:265000, cat:"web",     icon:"🔧", img:"../assets/the Pragmatic Programmer.jpg", bg:"linear-gradient(135deg,#1a0d2e,#2d1b4a)", rating:4.8 },
    { id:3,  title:"Python Crash Course",               author:"E. Matthes",    price:175000, cat:"python",  icon:"🐍", img:"../assets/Python Crash Course.jpg", bg:"linear-gradient(135deg,#1a3a1a,#2d5a27)", rating:4.7 },
    { id:10, title:"Automate the Boring Stuff",         author:"A. Sweigart",   price:140000, cat:"python",  icon:"🤖", img:"../assets/Automate the Boring.jpg", bg:"linear-gradient(135deg,#0a1a0a,#1a3a1a)", rating:4.8 },
    { id:8,  title:"Data Science from Scratch",         author:"J. Grus",       price:195000, cat:"data",    icon:"📈", img:"../assets/Data Science from Scratch.jpg", bg:"linear-gradient(135deg,#001a2d,#003d5c)", rating:4.6 },
    { id:15, title:"Pandas for Data Analysis",          author:"W. McKinney",   price:245000, cat:"data",    icon:"🐼", img:"../assets/SQL for Data Analysis.jpg", bg:"linear-gradient(135deg,#001a2d,#003050)", rating:4.7 },
    { id:7,  title:"Hacking: Art of Exploitation",      author:"J. Erickson",   price:240000, cat:"network", icon:"🔒", img:"../assets/Hacking The Art of Exploitation.jpg", bg:"linear-gradient(135deg,#1a0000,#3d0000)", rating:4.7 },
    { id:13, title:"Cybersecurity Essentials",          author:"Cisco NetAcad", price:185000, cat:"network", icon:"🛡️", img:"../assets/Flask Web Development.jpg", bg:"linear-gradient(135deg,#1a0000,#2d1010)", rating:4.5 },
    { id:6,  title:"Database Design for Mere Mortals",  author:"M. Hernandez",  price:210000, cat:"db",      icon:"🗄️", img:"../assets/Database Design for Mere Mortals.jpg", bg:"linear-gradient(135deg,#002d2d,#004a4a)", rating:4.5 },
    { id:14, title:"Learning SQL",                      author:"A. Beaulieu",   price:165000, cat:"db",      icon:"💾", img:"../assets/Natural Language Processing.jpg", bg:"linear-gradient(135deg,#001a1a,#003030)", rating:4.4 },
  ];

  let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
  function updateCartCount() { document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0); }
  updateCartCount();

  function addToCart(id, e) {
    if(e) e.stopPropagation();
    const b = BOOKS.find(b=>b.id===id);
    if(!b) return;
    const ex = cart.find(c=>c.id===id);
    if(ex) ex.qty++; else cart.push({...b, qty:1});
    localStorage.setItem('itbook_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`✓ Đã thêm "${b.title}"`);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'), 2500);
  }

  // Render category hero cards
  document.getElementById('catHeroGrid').innerHTML = CATEGORIES.map(c => {
    const previews = BOOKS.filter(b=>b.cat===c.id).slice(0,3);
    return `
    <div class="cat-hero-card" data-cat="${c.id}" onclick="location.href='books.html?cat=${c.id}'">
      <div class="cat-hero-top">
        <div class="cat-hero-icon">${c.icon}</div>
        <div class="cat-hero-count">${String(c.count).padStart(2,'0')}</div>
      </div>
      <div class="cat-hero-name">${c.name}</div>
      <div class="cat-hero-desc">${c.desc}</div>
      <div class="cat-tags">${c.tags.map(t=>`<span class="cat-tag">${t}</span>`).join('')}</div>
      <div class="cat-hero-footer">
        <div class="cat-book-previews">${previews.map(b=>`<div class="preview-dot" style="background:${b.bg}">${b.icon}</div>`).join('')}</div>
        <span class="cat-link">Xem sách →</span>
      </div>
    </div>`;
  }).join('');

  // Render books by category sections
  document.getElementById('booksByCat').innerHTML = CATEGORIES.map(c => {
    const catBooks = BOOKS.filter(b=>b.cat===c.id);
    return `
    <div class="cat-section fade-in">
      <div class="cat-section-header">
        <div class="cat-section-title">${c.icon} ${c.name}</div>
        <a class="view-all-link" href="books.html?cat=${c.id}">Xem tất cả →</a>
      </div>
      <div class="books-row">
        ${catBooks.map(b=>`
          <div class="mini-book-card" onclick="location.href='book-detail.html?id=${b.id}'">
            <div class="mini-cover" style="background:${b.bg}">${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : b.icon}</div>
            <div class="mini-info">
              <div class="mini-cat-tag">${b.cat.toUpperCase()}</div>
              <div class="mini-title">${b.title}</div>
              <div class="mini-author">${b.author}</div>
              <div class="mini-footer">
                <div class="mini-price">${b.price.toLocaleString('vi-VN')}₫</div>
                <div class="mini-rating">${'★'.repeat(Math.floor(b.rating))}</div>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');

  // Scroll animation
  const obs = new IntersectionObserver(entries => entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

  // Theme
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
