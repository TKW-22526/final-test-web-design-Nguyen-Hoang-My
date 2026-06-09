// Load book from URL param or default to book id=1
  const allBooks = [
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

  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get('id')) || 1;
  const book = allBooks.find(b => b.id === bookId) || allBooks[0];

  // Populate
  document.getElementById('bcTitle').textContent = book.title;
  document.getElementById('bookCover').style.background = book.bg;
  const emojiEl = document.getElementById('bookEmoji');
  if (book.img) {
    emojiEl.innerHTML = `<img src="${book.img}" alt="${book.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">`;
  } else {
    emojiEl.textContent = book.icon;
  }
  document.getElementById('bookTitle').textContent = book.title;
  document.getElementById('bookAuthor').textContent = book.author;
  document.getElementById('bookCat').textContent = book.cat;
  document.getElementById('bookRating').textContent = book.rating;
  document.getElementById('bookReviews').textContent = book.reviews + ' đánh giá';
  document.getElementById('bookPrice').textContent = book.price.toLocaleString('vi-VN') + '₫';
  document.getElementById('bookStars').textContent = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5-Math.floor(book.rating));
  if (book.oldPrice) {
    document.getElementById('bookOldPrice').textContent = book.oldPrice.toLocaleString('vi-VN') + '₫';
    const pct = Math.round((1 - book.price/book.oldPrice)*100);
    document.querySelector('.price-save').textContent = `Tiết kiệm ${pct}%`;
  } else {
    document.getElementById('bookOldPrice').style.display = 'none';
    document.querySelector('.price-save').style.display = 'none';
  }
  if (book.badge) { document.getElementById('bookBadge').textContent = book.badge; }
  else { document.getElementById('bookBadge').style.display = 'none'; }

  // Related
  const related = allBooks.filter(b => b.id !== book.id).slice(0,4);
  document.getElementById('relatedGrid').innerHTML = related.map(b => `
    <div class="related-card" onclick="location.href='book-detail.html?id=${b.id}'">
      <div class="related-cover" style="background:${b.bg}">${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : b.icon}</div>
      <div class="related-info">
        <div class="related-book-title">${b.title}</div>
        <div class="related-price">${b.price.toLocaleString('vi-VN')}₫</div>
      </div>
    </div>`).join('');

  // Cart
  let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
  let qty = 1;

  function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);
  }
  updateCartCount();

  // Check already in cart
  if (cart.find(c=>c.id===book.id)) {
    const btn = document.getElementById('mainCartBtn');
    btn.textContent = '✓ Đã có trong giỏ';
    btn.classList.add('added');
  }

  function changeQty(delta) {
    qty = Math.max(1, Math.min(99, qty + delta));
    document.getElementById('qtyInput').value = qty;
  }

  function addToCart() {
    const ex = cart.find(c=>c.id===book.id);
    if (ex) ex.qty += qty; else cart.push({...book, qty});
    localStorage.setItem('itbook_cart', JSON.stringify(cart));
    updateCartCount();
    const btn = document.getElementById('mainCartBtn');
    btn.textContent = '✓ Đã thêm vào giỏ';
    btn.classList.add('added');
    showToast(`✓ Đã thêm ${qty} cuốn "${book.title}" vào giỏ`);
  }

  function buyNow() {
    addToCart();
    location.href = 'cart.html';
  }

  // Tabs
  function switchTab(btn, id) {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-'+id).classList.add('active');
  }

  // Stars
  let pickedStar = 0;
  function pickStar(n) {
    pickedStar = n;
    document.querySelectorAll('#starPick span').forEach((s,i)=>{
      s.classList.toggle('active', i < n);
    });
  }

  // Submit review
  function submitReview() {
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    if (!name || !text || !pickedStar) { showToast('⚠️ Vui lòng điền đầy đủ và chọn sao'); return; }
    const stars = '★'.repeat(pickedStar) + '☆'.repeat(5-pickedStar);
    const now = new Date().toLocaleDateString('vi-VN',{day:'numeric',month:'long',year:'numeric'});
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.animation = 'fadeUp 0.4s ease';
    card.innerHTML = `
      <div class="review-header"><span class="reviewer-name">${name}</span><span class="review-date">${now}</span></div>
      <div class="review-stars">${stars}</div>
      <div class="review-text">${text}</div>
      <div class="review-helpful"><button class="helpful-btn">👍 Hữu ích (0)</button></div>`;
    document.getElementById('reviewsList').prepend(card);
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    pickedStar = 0;
    document.querySelectorAll('#starPick span').forEach(s=>s.classList.remove('active'));
    showToast('🎉 Cảm ơn bạn đã đánh giá!');
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'), 2500);
  }

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
