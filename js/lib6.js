  // ── THEME INIT ──
  (function() {
    if (localStorage.getItem('itbook_theme') === 'dark') {
      document.body.classList.add('dark');
    }
  })();

  // ── DEFAULT DATA ──
  const DEFAULT_BOOKS = [
    { id:1,  title:"Deep Learning with Python",        author:"François Chollet",  price:285000, oldPrice:350000, cat:"ai",      icon:"🤖", img:"../assets/Deep Learning with Python.jpg", bg:"linear-gradient(135deg,#1a1a2e,#16213e)", badge:"Bestseller", rating:4.9, reviews:128, desc:"Học deep learning với Keras và Python từ tác giả thư viện Keras." },
    { id:2,  title:"Clean Code",                       author:"Robert C. Martin",  price:199000, oldPrice:null,   cat:"web",     icon:"✨", img:"../assets/Clean Code.jpg", bg:"linear-gradient(135deg,#0d2137,#1b2a4a)", badge:"Classic",    rating:4.8, reviews:256, desc:"Nguyên tắc viết code sạch và dễ bảo trì." },
    { id:3,  title:"Python Crash Course",              author:"Eric Matthes",      price:175000, oldPrice:220000, cat:"python",  icon:"🐍", img:"../assets/Python Crash Course.jpg", bg:"linear-gradient(135deg,#1a3a1a,#2d5a27)", badge:"Mới",        rating:4.7, reviews:89,  desc:"Học Python từ đầu với các dự án thực tế." },
    { id:4,  title:"Hands-On ML with Scikit-Learn",    author:"Aurélien Géron",    price:320000, oldPrice:null,   cat:"ai",      icon:"📊", img:"../assets/Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow Concepts.jpg", bg:"linear-gradient(135deg,#2d1b3d,#4a1942)", badge:"Hot",        rating:4.9, reviews:201, desc:"Machine Learning thực hành với Scikit-Learn, Keras và TensorFlow." },
    { id:5,  title:"JavaScript: The Good Parts",       author:"Douglas Crockford", price:155000, oldPrice:null,   cat:"web",     icon:"⚡", img:"../assets/Javascript The Good Parts.jpg", bg:"linear-gradient(135deg,#2d2000,#4a3800)", badge:"",           rating:4.6, reviews:145, desc:"Khám phá những phần tinh hoa nhất của JavaScript." },
    { id:6,  title:"Database Design for Mere Mortals", author:"Michael Hernandez", price:210000, oldPrice:260000, cat:"db",      icon:"🗄️", img:"../assets/Database Design for Mere Mortals.jpg", bg:"linear-gradient(135deg,#002d2d,#004a4a)", badge:"",           rating:4.5, reviews:67,  desc:"Thiết kế cơ sở dữ liệu quan hệ từ cơ bản đến nâng cao." },
    { id:7,  title:"Hacking: Art of Exploitation",     author:"Jon Erickson",      price:240000, oldPrice:null,   cat:"network", icon:"🔒", img:"../assets/Hacking The Art of Exploitation.jpg", bg:"linear-gradient(135deg,#1a0000,#3d0000)", badge:"Hot",        rating:4.7, reviews:98,  desc:"Tìm hiểu cách hoạt động và khai thác lỗ hổng bảo mật." },
    { id:8,  title:"Data Science from Scratch",        author:"Joel Grus",         price:195000, oldPrice:240000, cat:"data",    icon:"📈", img:"../assets/Data Science from Scratch.jpg", bg:"linear-gradient(135deg,#001a2d,#003d5c)", badge:"",           rating:4.6, reviews:112, desc:"Khoa học dữ liệu từ đầu với Python." },
    { id:9,  title:"The Pragmatic Programmer",         author:"Hunt & Thomas",     price:265000, oldPrice:null,   cat:"web",     icon:"🔧", img:"../assets/the Pragmatic Programmer.jpg", bg:"linear-gradient(135deg,#1a0d2e,#2d1b4a)", badge:"Classic",    rating:4.8, reviews:189, desc:"Kim chỉ nam cho lập trình viên chuyên nghiệp." },
    { id:10, title:"Automate the Boring Stuff",        author:"Al Sweigart",       price:140000, oldPrice:180000, cat:"python",  icon:"🤖", img:"../assets/Automate the Boring.jpg", bg:"linear-gradient(135deg,#0a1a0a,#1a3a1a)", badge:"",           rating:4.8, reviews:320, desc:"Tự động hóa các tác vụ nhàm chán bằng Python." },
    { id:11, title:"Computer Networks",                author:"Andrew Tanenbaum",  price:310000, oldPrice:null,   cat:"network", icon:"🌐", img:"../assets/Computer Networks.jpg", bg:"linear-gradient(135deg,#00001a,#00003a)", badge:"",           rating:4.6, reviews:89,  desc:"Giáo trình mạng máy tính toàn diện từ lý thuyết đến thực hành." },
    { id:12, title:"Introduction to Algorithms",       author:"Cormen et al.",     price:395000, oldPrice:450000, cat:"web",     icon:"🧮", img:"../assets/Introduction to Algorithms.jpg", bg:"linear-gradient(135deg,#1a001a,#3a003a)", badge:"Classic",    rating:4.9, reviews:445, desc:"Sách thuật toán kinh điển nhất mọi thời đại — CLRS." },
    { id:13, title:"Flask Web Development",            author:"Miguel Grinberg",   price:185000, oldPrice:null,   cat:"python",  icon:"🍶", img:"../assets/Flask Web Development.jpg", bg:"linear-gradient(135deg,#001a0a,#003a14)", badge:"",           rating:4.5, reviews:56,  desc:"Xây dựng ứng dụng web với Flask framework của Python." },
    { id:14, title:"Natural Language Processing",      author:"Steven Bird",       price:275000, oldPrice:320000, cat:"ai",      icon:"💬", img:"../assets/Natural Language Processing.jpg", bg:"linear-gradient(135deg,#1a0a00,#3a1a00)", badge:"",           rating:4.6, reviews:73,  desc:"Xử lý ngôn ngữ tự nhiên với Python và NLTK." },
    { id:15, title:"SQL for Data Analysis",            author:"Cathy Tanimura",    price:190000, oldPrice:null,   cat:"db",      icon:"💾", img:"../assets/SQL for Data Analysis.jpg", bg:"linear-gradient(135deg,#001010,#002020)", badge:"Mới",        rating:4.4, reviews:41,  desc:"Phân tích dữ liệu chuyên sâu bằng SQL." },
    { id:16, title:"Network Security Essentials",      author:"William Stallings", price:255000, oldPrice:300000, cat:"network", icon:"🛡️", img:"../assets/Network Security Essentials.jpg", bg:"linear-gradient(135deg,#0a0010,#150030)", badge:"",           rating:4.5, reviews:64,  desc:"Bảo mật mạng từ cơ bản đến nâng cao." },
    { id:17, title:"React: Up and Running",            author:"Stoyan Stefanov",   price:215000, oldPrice:null,   cat:"web",     icon:"⚛️", img:"../assets/React up and running.jpg", bg:"linear-gradient(135deg,#001020,#002040)", badge:"Hot",        rating:4.7, reviews:132, desc:"Học React từ đầu và xây dựng ứng dụng thực tế." },
    { id:18, title:"Data Visualization with D3",       author:"Scott Murray",      price:225000, oldPrice:270000, cat:"data",    icon:"📉", img:"../assets/Interactive Data Visualization for the Web.jpg", bg:"linear-gradient(135deg,#100010,#200030)", badge:"",           rating:4.5, reviews:58,  desc:"Trực quan hóa dữ liệu tương tác trên web với D3.js." },
    { id:19, title:"Statistics for ML",                author:"Jason Brownlee",    price:170000, oldPrice:null,   cat:"ai",      icon:"📐", img:"../assets/Statistical Methods for Machine Learning.jpg", bg:"linear-gradient(135deg,#001a10,#003020)", badge:"",           rating:4.6, reviews:95,  desc:"Thống kê toán học ứng dụng trong Machine Learning." },
    { id:20, title:"Learning Python",                  author:"Mark Lutz",         price:245000, oldPrice:290000, cat:"python",  icon:"🐍", img:"../assets/Learning Python.jpg", bg:"linear-gradient(135deg,#0a1a00,#182800)", badge:"",           rating:4.5, reviews:203, desc:"Học Python toàn diện từ cơ bản đến nâng cao." },
    { id:21, title:"MongoDB: The Definitive Guide",    author:"Shannon Bradshaw",  price:220000, oldPrice:null,   cat:"db",      icon:"🍃", img:"../assets/MongoDB The Definitive Guide.jpg", bg:"linear-gradient(135deg,#001a00,#003a00)", badge:"",           rating:4.4, reviews:49,  desc:"Hướng dẫn toàn diện về MongoDB và NoSQL." },
    { id:22, title:"You Don't Know JS",                author:"Kyle Simpson",      price:165000, oldPrice:200000, cat:"web",     icon:"📖", img:"../assets/You Don't Know JS.jpg", bg:"linear-gradient(135deg,#1a1000,#302000)", badge:"Classic",    rating:4.8, reviews:289, desc:"Hiểu sâu JavaScript từ cơ chế hoạt động bên trong." },
    { id:23, title:"Data Analysis with Pandas",        author:"Wes McKinney",      price:235000, oldPrice:null,   cat:"data",    icon:"🐼", img:"../assets/Python for Data Analysis Data Wrangling with Pandas.jpg", bg:"linear-gradient(135deg,#001030,#002050)", badge:"Bestseller", rating:4.7, reviews:167, desc:"Phân tích dữ liệu với Pandas — thư viện của cha đẻ Pandas." },
    { id:24, title:"Fluent Python",                    author:"Luciano Ramalho",   price:295000, oldPrice:360000, cat:"python",  icon:"🐍", img:"../assets/Fluent Python.jpg", bg:"linear-gradient(135deg,#1a1a00,#2a2a10)", badge:"Hot",        rating:4.8, reviews:143, desc:"Viết Python thành thạo và Pythonic theo cách chuyên nghiệp." },
  ];

  const FAKE_ORDERS = [
    { code:'ITB-A12X', book:'Deep Learning with Python', qty:2, total:570000, status:'Hoàn thành' },
    { code:'ITB-B34Y', book:'Clean Code',                qty:1, total:199000, status:'Đang xử lý' },
    { code:'ITB-C56Z', book:'Python Crash Course',       qty:3, total:525000, status:'Hoàn thành' },
    { code:'ITB-D78W', book:'Hands-On ML',               qty:1, total:320000, status:'Chờ xác nhận' },
    { code:'ITB-E90V', book:'JavaScript: Good Parts',    qty:2, total:310000, status:'Hoàn thành' },
  ];

  const CATS = {
    ai:      { name:'AI & ML',        icon:'🤖' },
    web:     { name:'Lập trình Web',  icon:'🌐' },
    python:  { name:'Python',         icon:'🐍' },
    data:    { name:'Data Science',   icon:'📊' },
    network: { name:'Bảo mật',        icon:'🔒' },
    db:      { name:'Cơ sở dữ liệu', icon:'🗄️' },
  };

  // Load from localStorage or defaults
  let books = JSON.parse(localStorage.getItem('itbook_admin_books') || JSON.stringify(DEFAULT_BOOKS));
  let editingId = null;
  let deletingId = null;
  const PER_PAGE = 8;
  let currentPage = 1;

  function saveBooks() { localStorage.setItem('itbook_admin_books', JSON.stringify(books)); }

  // ── NAVIGATION ──
  function showPanel(name, el) {
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    document.getElementById('panel-'+name).classList.add('active');
    if(el) el.classList.add('active');
    document.getElementById('topbarTitle').textContent = {
      dashboard:'📊 Dashboard', books:'📚 Quản lý sách',
      categories:'🗂️ Danh mục', orders:'🛒 Đơn hàng'
    }[name] || name;
    document.getElementById('btnAddBook').style.display = name==='books' ? 'flex' : 'none';
    if(name==='books')       renderTable();
    if(name==='dashboard')   renderDashboard();
    if(name==='categories')  renderCatTable();
    if(name==='orders')      renderOrders();
  }

  // ── DASHBOARD ──
  function renderDashboard() {
    document.getElementById('statTotal').textContent = books.length;
    const avg = books.length ? Math.round(books.reduce((s,b)=>s+b.price,0)/books.length) : 0;
    document.getElementById('statAvg').textContent = avg.toLocaleString('vi-VN')+'₫';
    document.getElementById('dashRecentBooks').innerHTML = books.slice(0,5).map(b=>`
      <tr>
        <td><div class="book-cell"><div class="book-thumb" style="background:${b.bg}">${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : b.icon}</div><div><div class="book-cell-title">${b.title}</div><div class="book-cell-author">${b.author}</div></div></div></td>
        <td><span class="cat-pill">${CATS[b.cat]?.name||b.cat}</span></td>
        <td class="price-cell">${b.price.toLocaleString('vi-VN')}₫</td>
        <td>⭐ ${b.rating}</td>
      </tr>`).join('');
  }

  // ── BOOKS TABLE ──
  function renderTable() {
    const q   = (document.getElementById('bookSearch')?.value||'').toLowerCase();
    const cat = document.getElementById('catFilter')?.value || 'all';
    const sort= document.getElementById('sortFilter')?.value || 'default';

    let data = books.filter(b =>
      (cat==='all'||b.cat===cat) &&
      (!q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    );
    if(sort==='price-asc')  data.sort((a,b)=>a.price-b.price);
    if(sort==='price-desc') data.sort((a,b)=>b.price-a.price);
    if(sort==='rating')     data.sort((a,b)=>b.rating-a.rating);
    if(sort==='name')       data.sort((a,b)=>a.title.localeCompare(b.title));

    const total = data.length;
    const pages = Math.ceil(total/PER_PAGE) || 1;
    if(currentPage>pages) currentPage=1;
    const slice = data.slice((currentPage-1)*PER_PAGE, currentPage*PER_PAGE);

    document.getElementById('bookTable').innerHTML = slice.map(b=>{
      const stock = b.stock ?? 'in';
      return `<tr>
        <td><div class="book-cell"><div class="book-thumb" style="background:${b.bg}">${b.img ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : b.icon}</div><div><div class="book-cell-title">${b.title}</div><div class="book-cell-author">${b.author}</div></div></div></td>
        <td><span class="cat-pill">${CATS[b.cat]?.icon||''} ${CATS[b.cat]?.name||b.cat}</span></td>
        <td class="price-cell">${b.price.toLocaleString('vi-VN')}₫</td>
        <td style="color:var(--muted)">${b.oldPrice?b.oldPrice.toLocaleString('vi-VN')+'₫':'—'}</td>
        <td>⭐ ${b.rating} <span style="color:var(--muted);font-size:0.75rem">(${b.reviews})</span></td>
        <td><div class="stock-cell"><div class="stock-dot in"></div> Còn hàng</div></td>
        <td><div class="action-btns">
          <button class="btn-edit" onclick="openEditModal(${b.id})">✏️ Sửa</button>
          <button class="btn-del"  onclick="openConfirm(${b.id})">🗑️ Xóa</button>
        </div></td>
      </tr>`;
    }).join('');

    // Pagination
    const pg = document.getElementById('pagination');
    pg.innerHTML = `<span class="pg-info">Hiển thị ${slice.length}/${total} sách</span>`;
    for(let i=1;i<=pages;i++) {
      pg.innerHTML += `<button class="pg-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
    }
  }

  function goPage(p) { currentPage=p; renderTable(); }

  // ── CATEGORIES TABLE ──
  function renderCatTable() {
    document.getElementById('catTable').innerHTML = Object.entries(CATS).map(([id,c])=>{
      const count = books.filter(b=>b.cat===id).length;
      return `<tr>
        <td><span style="font-size:1.2rem">${c.icon}</span> ${c.name}</td>
        <td>${count} cuốn</td>
        <td style="color:var(--muted)">Sách về ${c.name.toLowerCase()}</td>
      </tr>`;
    }).join('');
  }

  // ── ORDERS TABLE ──
  function renderOrders() {
    const statusColor = { 'Hoàn thành':'var(--green)', 'Đang xử lý':'#ffb347', 'Chờ xác nhận':'var(--accent2)' };
    document.getElementById('ordersTable').innerHTML = FAKE_ORDERS.map(o=>`
      <tr>
        <td style="font-family:var(--font-head);font-weight:700;color:var(--accent2)">${o.code}</td>
        <td>${o.book}</td>
        <td>${o.qty}</td>
        <td class="price-cell">${o.total.toLocaleString('vi-VN')}₫</td>
        <td><span style="color:${statusColor[o.status]||'var(--muted)'};font-size:0.82rem;font-weight:600">${o.status}</span></td>
      </tr>`).join('');
  }

  // ── MODAL ──
  function openAddModal() {
    editingId = null;
    document.getElementById('modalTitle').textContent = '➕ Thêm sách mới';
    ['fTitle','fAuthor','fPrice','fOldPrice','fRating','fReviews','fDesc'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('fCat').value = 'ai';
    document.getElementById('fBadge').value = '';
    document.getElementById('bookModal').classList.add('show');
  }

  function openEditModal(id) {
    const b = books.find(b=>b.id===id);
    if(!b) return;
    editingId = id;
    document.getElementById('modalTitle').textContent = '✏️ Chỉnh sửa sách';
    document.getElementById('fTitle').value    = b.title;
    document.getElementById('fAuthor').value   = b.author;
    document.getElementById('fCat').value      = b.cat;
    document.getElementById('fPrice').value    = b.price;
    document.getElementById('fOldPrice').value = b.oldPrice || '';
    document.getElementById('fRating').value   = b.rating;
    document.getElementById('fReviews').value  = b.reviews;
    document.getElementById('fBadge').value    = b.badge || '';
    document.getElementById('fDesc').value     = b.desc || '';
    document.getElementById('bookModal').classList.add('show');
  }

  function closeModal() { document.getElementById('bookModal').classList.remove('show'); }

  function saveBook() {
    const title    = document.getElementById('fTitle').value.trim();
    const author   = document.getElementById('fAuthor').value.trim();
    const cat      = document.getElementById('fCat').value;
    const price    = parseInt(document.getElementById('fPrice').value);
    const oldPrice = parseInt(document.getElementById('fOldPrice').value) || null;
    const rating   = parseFloat(document.getElementById('fRating').value) || 4.5;
    const reviews  = parseInt(document.getElementById('fReviews').value) || 0;
    const badge    = document.getElementById('fBadge').value;
    const desc     = document.getElementById('fDesc').value.trim();

    if(!title) { showToast('⚠️ Vui lòng nhập tên sách', true); return; }
    if(!author) { showToast('⚠️ Vui lòng nhập tác giả', true); return; }
    if(!price || price < 0) { showToast('⚠️ Giá bán không hợp lệ', true); return; }

    const catIcons = { ai:'🤖', web:'🌐', python:'🐍', data:'📊', network:'🔒', db:'🗄️' };
    const catBgs   = { ai:'linear-gradient(135deg,#1a1a2e,#16213e)', web:'linear-gradient(135deg,#0d2137,#1b2a4a)', python:'linear-gradient(135deg,#1a3a1a,#2d5a27)', data:'linear-gradient(135deg,#001a2d,#003d5c)', network:'linear-gradient(135deg,#1a0000,#3d0000)', db:'linear-gradient(135deg,#002d2d,#004a4a)' };

    if(editingId) {
      const idx = books.findIndex(b=>b.id===editingId);
      books[idx] = { ...books[idx], title, author, cat, price, oldPrice, rating, reviews, badge, desc };
      showToast('✅ Đã cập nhật sách thành công!');
    } else {
      const newId = Math.max(...books.map(b=>b.id), 0) + 1;
      books.push({ id:newId, title, author, cat, price, oldPrice, rating, reviews, badge, desc, icon:catIcons[cat]||'📖', bg:catBgs[cat]||catBgs.web });
      showToast('✅ Đã thêm sách mới thành công!');
    }
    saveBooks(); closeModal(); renderTable(); renderDashboard();
  }

  // ── DELETE ──
  function openConfirm(id) {
    deletingId = id;
    const b = books.find(b=>b.id===id);
    document.getElementById('confirmText').textContent = `Bạn có chắc muốn xóa "${b?.title}"? Hành động này không thể hoàn tác.`;
    document.getElementById('confirmModal').classList.add('show');
  }
  function closeConfirm() { document.getElementById('confirmModal').classList.remove('show'); deletingId=null; }
  function confirmDelete() {
    books = books.filter(b=>b.id!==deletingId);
    saveBooks(); closeConfirm(); renderTable(); renderDashboard();
    showToast('🗑️ Đã xóa sách thành công!');
  }

  // ── TOAST ──
  function showToast(msg, isError=false) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.toggle('error', isError);
    t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'), 2500);
  }

  // Close modals on overlay click
  document.getElementById('bookModal').addEventListener('click', e=>{ if(e.target.id==='bookModal') closeModal(); });
  document.getElementById('confirmModal').addEventListener('click', e=>{ if(e.target.id==='confirmModal') closeConfirm(); });

  // Init
  renderDashboard();

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
