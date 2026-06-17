  // ── DATA (24 sách) ──
  const books = [
    { id:1,  title:"Deep Learning with Python", author:"François Chollet",    price:285000, oldPrice:350000, cat:"ai",      icon:"🤖", img:"../assets/Deep Learning with Python.jpg", bg:"linear-gradient(135deg,#1a1a2e,#16213e)", badge:"Bestseller", rating:4.9, reviews:128 },
    { id:2,  title:"Clean Code",                author:"Robert C. Martin",     price:199000, oldPrice:null,   cat:"web",     icon:"✨", img:"../assets/Clean Code.jpg", bg:"linear-gradient(135deg,#0d2137,#1b2a4a)", badge:"Classic",    rating:4.8, reviews:256 },
    { id:3,  title:"Python Crash Course",        author:"Eric Matthes",         price:175000, oldPrice:220000, cat:"python",  icon:"🐍", img:"../assets/Python Crash Course.jpg", bg:"linear-gradient(135deg,#1a3a1a,#2d5a27)", badge:"Mới",        rating:4.7, reviews:89  },
    { id:4,  title:"Hands-On ML with Scikit-Learn", author:"Aurélien Géron",   price:320000, oldPrice:null,   cat:"ai",      icon:"📊", img:"../assets/Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow Concepts.jpg", bg:"linear-gradient(135deg,#2d1b3d,#4a1942)", badge:"Hot",        rating:4.9, reviews:201 },
    { id:5,  title:"JavaScript: The Good Parts", author:"Douglas Crockford",   price:155000, oldPrice:null,   cat:"web",     icon:"⚡", img:"../assets/Javascript The Good Parts.jpg", bg:"linear-gradient(135deg,#2d2000,#4a3800)", badge:null,         rating:4.6, reviews:145 },
    { id:6,  title:"Database Design for Mere Mortals", author:"Michael Hernandez", price:210000, oldPrice:260000, cat:"db",  icon:"🗄️", img:"../assets/Database Design for Mere Mortals.jpg", bg:"linear-gradient(135deg,#002d2d,#004a4a)", badge:null,         rating:4.5, reviews:67  },
    { id:7,  title:"Hacking: The Art of Exploitation", author:"Jon Erickson",  price:240000, oldPrice:null,   cat:"network", icon:"🔒", img:"../assets/Hacking The Art of Exploitation.jpg", bg:"linear-gradient(135deg,#1a0000,#3d0000)", badge:"Hot",        rating:4.7, reviews:98  },
    { id:8,  title:"Data Science from Scratch",  author:"Joel Grus",            price:195000, oldPrice:240000, cat:"data",   icon:"📈", img:"../assets/Data Science from Scratch.jpg", bg:"linear-gradient(135deg,#001a2d,#003d5c)", badge:null,         rating:4.6, reviews:112 },
    { id:9,  title:"The Pragmatic Programmer",   author:"Andrew Hunt",          price:265000, oldPrice:null,   cat:"web",    icon:"⚙️", img:"../assets/the Pragmatic Programmer.jpg", bg:"linear-gradient(135deg,#1a1a00,#3a3a00)", badge:"Classic",    rating:4.8, reviews:312 },
    { id:10, title:"Automate the Boring Stuff",  author:"Al Sweigart",          price:145000, oldPrice:180000, cat:"python", icon:"🤖", img:"../assets/Automate the Boring.jpg", bg:"linear-gradient(135deg,#001a1a,#003030)", badge:"Mới",        rating:4.7, reviews:178 },
    { id:11, title:"Computer Networks",          author:"Andrew Tanenbaum",     price:310000, oldPrice:null,   cat:"network",icon:"🌐", img:"../assets/Computer Networks.jpg", bg:"linear-gradient(135deg,#00001a,#00003a)", badge:null,         rating:4.6, reviews:89  },
    { id:12, title:"Introduction to Algorithms", author:"Cormen et al.",        price:395000, oldPrice:450000, cat:"web",    icon:"🧮", img:"../assets/Introduction to Algorithms.jpg", bg:"linear-gradient(135deg,#1a001a,#3a003a)", badge:"Classic",    rating:4.9, reviews:445 },
    { id:13, title:"Flask Web Development",      author:"Miguel Grinberg",      price:185000, oldPrice:null,   cat:"python", icon:"🍶", img:"../assets/Flask Web Development.jpg", bg:"linear-gradient(135deg,#001a0a,#003a14)", badge:null,         rating:4.5, reviews:56  },
    { id:14, title:"Natural Language Processing",author:"Steven Bird",          price:275000, oldPrice:320000, cat:"ai",     icon:"💬", img:"../assets/Natural Language Processing.jpg", bg:"linear-gradient(135deg,#1a0a00,#3a1a00)", badge:null,         rating:4.6, reviews:73  },
    { id:15, title:"SQL for Data Analysis",      author:"Cathy Tanimura",       price:190000, oldPrice:null,   cat:"db",     icon:"💾", img:"../assets/SQL for Data Analysis.jpg", bg:"linear-gradient(135deg,#001010,#002020)", badge:"Mới",        rating:4.4, reviews:41  },
    { id:16, title:"Network Security Essentials",author:"William Stallings",    price:255000, oldPrice:300000, cat:"network",icon:"🛡️", img:"../assets/Network Security Essentials.jpg", bg:"linear-gradient(135deg,#0a0010,#150030)", badge:null,         rating:4.5, reviews:64  },
    { id:17, title:"React: Up and Running",      author:"Stoyan Stefanov",      price:215000, oldPrice:null,   cat:"web",    icon:"⚛️", img:"../assets/React up and running.jpg", bg:"linear-gradient(135deg,#001020,#002040)", badge:"Hot",        rating:4.7, reviews:132 },
    { id:18, title:"Data Visualization with D3", author:"Scott Murray",         price:225000, oldPrice:270000, cat:"data",   icon:"📉", img:"../assets/Interactive Data Visualization for the Web.jpg", bg:"linear-gradient(135deg,#100010,#200030)", badge:null,         rating:4.5, reviews:58  },
    { id:19, title:"Statistics for ML",          author:"Jason Brownlee",       price:170000, oldPrice:null,   cat:"ai",     icon:"📐", img:"../assets/Statistical Methods for Machine Learning.jpg", bg:"linear-gradient(135deg,#001a10,#003020)", badge:null,         rating:4.6, reviews:95  },
    { id:20, title:"Learning Python",            author:"Mark Lutz",            price:245000, oldPrice:290000, cat:"python", icon:"🐍", img:"../assets/Learning Python.jpg", bg:"linear-gradient(135deg,#0a1a00,#182800)", badge:null,         rating:4.5, reviews:203 },
    { id:21, title:"MongoDB: The Definitive Guide", author:"Shannon Bradshaw",  price:220000, oldPrice:null,   cat:"db",     icon:"🍃", img:"../assets/MongoDB The Definitive Guide.jpg", bg:"linear-gradient(135deg,#001a00,#003a00)", badge:null,         rating:4.4, reviews:49  },
    { id:22, title:"You Don't Know JS",          author:"Kyle Simpson",         price:165000, oldPrice:200000, cat:"web",    icon:"📖", img:"../assets/You Don't Know JS.jpg", bg:"linear-gradient(135deg,#1a1000,#302000)", badge:"Classic",    rating:4.8, reviews:289 },
    { id:23, title:"Data Analysis with Pandas",  author:"Wes McKinney",         price:235000, oldPrice:null,   cat:"data",   icon:"🐼", img:"../assets/Python for Data Analysis Data Wrangling with Pandas.jpg", bg:"linear-gradient(135deg,#001030,#002050)", badge:"Bestseller", rating:4.7, reviews:167 },
    { id:24, title:"Fluent Python",              author:"Luciano Ramalho",      price:295000, oldPrice:360000, cat:"python", icon:"🐍", img:"../assets/Fluent Python.jpg", bg:"linear-gradient(135deg,#1a1a00,#2a2a10)", badge:"Hot",        rating:4.8, reviews:143 },
  ];

  // ── STATE ──
  let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
  let currentCat = 'all';
  let currentRating = 0;
  let currentView = 'grid';
  let currentPage = 1;
  const PER_PAGE = 12;

  // Cart count
  function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);
  }
  updateCartCount();

  // ── FILTER LOGIC ──
  function selectCat(el, cat) {
    document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));
    el.classList.add('active');
    currentCat = cat;
  }
  function selectRating(el, r) {
    document.querySelectorAll('.rating-row').forEach(e=>e.classList.remove('active'));
    el.classList.add('active');
    currentRating = r;
  }
  function applyFilters() { currentPage = 1; doSearch(); }

  function resetFilters() {
    currentCat = 'all';
    currentRating = 0;
    document.querySelectorAll('.cat-item').forEach((e,i)=>e.classList.toggle('active', i===0));
    document.querySelectorAll('.rating-row').forEach((e,i)=>e.classList.toggle('active', i===0));
    document.getElementById('priceMin').value = 0;
    document.getElementById('priceMax').value = 500000;
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'default';
    currentPage = 1;
    doSearch();
  }

  function doSearch() {
    const q   = document.getElementById('searchInput').value.toLowerCase().trim();
    const min = parseInt(document.getElementById('priceMin').value) || 0;
    const max = parseInt(document.getElementById('priceMax').value) || 999999;
    const sort= document.getElementById('sortSelect').value;

    let filtered = books.filter(b => {
      const matchCat    = currentCat === 'all' || b.cat === currentCat;
      const matchRating = b.rating >= currentRating;
      const matchPrice  = b.price >= min && b.price <= max;
      const matchQ      = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      return matchCat && matchRating && matchPrice && matchQ;
    });

    // Sort
    if (sort === 'price-asc')   filtered.sort((a,b)=>a.price-b.price);
    if (sort === 'price-desc')  filtered.sort((a,b)=>b.price-a.price);
    if (sort === 'rating')      filtered.sort((a,b)=>b.rating-a.rating);
    if (sort === 'reviews')     filtered.sort((a,b)=>b.reviews-a.reviews);
    if (sort === 'name')        filtered.sort((a,b)=>a.title.localeCompare(b.title));

    renderResults(filtered);
    updateActiveFilters();
  }

  function updateActiveFilters() {
    const af = document.getElementById('activeFilters');
    const tags = [];
    if (currentCat !== 'all') tags.push(`📁 ${currentCat.toUpperCase()}`);
    if (currentRating > 0)     tags.push(`⭐ ${currentRating}+`);
    af.innerHTML = tags.map(t=>`<span class="filter-tag">${t} ✕</span>`).join('');
  }

  function renderResults(data) {
    const total = data.length;
    document.getElementById('resultCount').textContent = total;

    // Paginate
    const totalPages = Math.ceil(total / PER_PAGE);
    if (currentPage > totalPages) currentPage = 1;
    const slice = data.slice((currentPage-1)*PER_PAGE, currentPage*PER_PAGE);

    const grid = document.getElementById('booksGrid');
    if (!slice.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-title">Không tìm thấy sách</div>
          <div class="empty-sub">Thử thay đổi từ khoá hoặc bộ lọc nhé.</div>
        </div>`;
      document.getElementById('pagination').innerHTML = '';
      return;
    }

    const isList = currentView === 'list';
    grid.innerHTML = slice.map((b, idx) => {
      const stars = '★'.repeat(Math.floor(b.rating)) + '☆'.repeat(5-Math.floor(b.rating));
      const badgeClass = b.badge === 'Hot' ? 'hot' : b.badge === 'Mới' ? 'new' : '';
      if (isList) {
        return `
          <div class="book-card" style="animation-delay:${idx*0.04}s" onclick="location.href='book-detail.html?id=${b.id}'">
            <div class="book-cover" style="background:${b.bg}">
              ${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : `<span class="book-emoji">${b.icon}</span>`}
              ${b.badge ? `<span class="book-badge ${badgeClass}">${b.badge}</span>` : ''}
            </div>
            <div class="book-info">
              <div class="book-cat-tag">${b.cat.toUpperCase()}</div>
              <div class="book-title">${b.title}</div>
              <div class="book-author">${b.author}</div>
              <div class="book-rating">
                <span class="stars">${stars}</span>
                <span class="rating-num">${b.rating} (${b.reviews} đánh giá)</span>
              </div>
            </div>
            <div class="book-list-actions">
              <div class="price-block">
                <div class="book-price">${b.price.toLocaleString('vi-VN')}₫</div>
                ${b.oldPrice ? `<div class="old-price">${b.oldPrice.toLocaleString('vi-VN')}₫</div>` : ''}
              </div>
              <button class="btn-add-cart" data-id="${b.id}" onclick="event.stopPropagation();addToCart(${b.id})">+ Giỏ hàng</button>
            </div>
          </div>`;
      }
      return `
        <div class="book-card" style="animation-delay:${idx*0.04}s" onclick="location.href='book-detail.html?id=${b.id}'">
          <div class="book-cover" style="background:${b.bg}">
            ${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;position:absolute;top:0;left:0;">` : `<span class="book-emoji">${b.icon}</span>`}
            ${b.badge ? `<span class="book-badge ${badgeClass}">${b.badge}</span>` : ''}
          </div>
          <div class="book-info">
            <div class="book-cat-tag">${b.cat.toUpperCase()}</div>
            <div class="book-title">${b.title}</div>
            <div class="book-author">${b.author}</div>
            <div class="book-rating">
              <span class="stars">${stars}</span>
              <span class="rating-num">${b.rating} (${b.reviews})</span>
            </div>
            <div class="book-footer">
              <div class="price-block">
                <div class="book-price">${b.price.toLocaleString('vi-VN')}₫</div>
                ${b.oldPrice ? `<div class="old-price">${b.oldPrice.toLocaleString('vi-VN')}₫</div>` : ''}
              </div>
              <button class="btn-add-cart" data-id="${b.id}" onclick="event.stopPropagation();addToCart(${b.id})">+ Giỏ hàng</button>
            </div>
          </div>
        </div>`;
    }).join('');

    // Mark already-in-cart
    cart.forEach(c => {
      const btn = document.querySelector(`[data-id="${c.id}"]`);
      if (btn) { btn.textContent = '✓ Đã thêm'; btn.classList.add('added'); }
    });

    renderPagination(totalPages);
  }

  function renderPagination(total) {
    const pg = document.getElementById('pagination');
    if (total <= 1) { pg.innerHTML = ''; return; }
    let html = `<button class="page-btn" onclick="goPage(${currentPage-1})" ${currentPage===1?'disabled':''}>←</button>`;
    for (let i = 1; i <= total; i++) {
      html += `<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
    }
    html += `<button class="page-btn" onclick="goPage(${currentPage+1})" ${currentPage===total?'disabled':''}>→</button>`;
    pg.innerHTML = html;
  }

  function goPage(p) {
    currentPage = p;
    doSearch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── CART ──
  function addToCart(id) {
    const book = books.find(b=>b.id===id);
    const ex = cart.find(c=>c.id===id);
    if (ex) ex.qty++; else cart.push({...book, qty:1});
    localStorage.setItem('itbook_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`✓ Đã thêm "${book.title}" vào giỏ`);
    const btn = document.querySelector(`[data-id="${id}"]`);
    if (btn) { btn.textContent = '✓ Đã thêm'; btn.classList.add('added'); }
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'), 2500);
  }

  // ── VIEW ──
  function setView(v) {
    currentView = v;
    document.getElementById('booksGrid').classList.toggle('list-view', v==='list');
    document.getElementById('gridBtn').classList.toggle('active', v==='grid');
    document.getElementById('listBtn').classList.toggle('active', v==='list');
    doSearch();
  }

  // ── THEME ──
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

  // ── INIT ──
  doSearch();


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
