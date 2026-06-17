  const SUGGESTED = [
    { id:9,  title:"The Pragmatic Programmer", author:"Andrew Hunt",     price:265000, icon:"⚙️", img:"../assets/the Pragmatic Programmer.jpg", bg:"linear-gradient(135deg,#1a1a00,#3a3a00)" },
    { id:10, title:"Automate the Boring Stuff", author:"Al Sweigart",    price:145000, icon:"🤖", img:"../assets/Automate the Boring.jpg", bg:"linear-gradient(135deg,#001a1a,#003030)" },
    { id:17, title:"React: Up and Running",    author:"Stoyan Stefanov", price:215000, icon:"⚛️", img:"../assets/React up and running.jpg", bg:"linear-gradient(135deg,#001020,#002040)" },
    { id:22, title:"You Don't Know JS",        author:"Kyle Simpson",    price:165000, icon:"📖", img:"../assets/You Don't Know JS.jpg", bg:"linear-gradient(135deg,#1a1000,#302000)" },
  ];

  let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
  let couponDiscount = 0;
  const COUPONS = { 'ITBOOK10': 0.10, 'STUDENT20': 0.20, 'SAVE15': 0.15 };

  function save() { localStorage.setItem('itbook_cart', JSON.stringify(cart)); }

  function updateCartCount() {
    const total = cart.reduce((s,i)=>s+i.qty, 0);
    document.getElementById('cartCount').textContent = total;
    document.getElementById('itemCountLabel').textContent = total;
  }


  function normalizeImg(img) {
    if (!img) return '';
    // If path starts with "assets/" (from index.html), prefix with "../"
    if (img.startsWith('assets/')) return '../' + img;
    return img;
  }
  function renderCart() {
    updateCartCount();
    const body = document.getElementById('cartBody');
    const summaryCol = document.getElementById('summaryCol');
    const couponWrap = document.getElementById('couponWrap');
    const sugSection = document.getElementById('suggestedSection');

    if (!cart.length) {
      body.innerHTML = `
        <div class="cart-empty">
          <div class="empty-icon">🛒</div>
          <div class="empty-title">Giỏ hàng trống</div>
          <div class="empty-sub">Hãy khám phá kho sách và thêm vào giỏ nhé!</div>
          <button class="btn-browse" onclick="location.href='books.html'">Khám phá sách →</button>
        </div>`;
      summaryCol.style.display = 'none';
      couponWrap.style.display = 'none';
      sugSection.style.display = 'block';
      renderSuggested();
      return;
    }

    body.innerHTML = cart.map((item, idx) => `
      <div class="cart-item" id="item-${item.id}" style="animation-delay:${idx*0.07}s">
        <div class="item-cover" style="background:${item.bg}">${item.img ? `<img src="${normalizeImg(item.img)}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : item.icon}</div>
        <div class="item-info">
          <div class="item-cat">${item.cat || 'IT'}</div>
          <div class="item-title">${item.title}</div>
          <div class="item-author">${item.author}</div>
          <div class="item-controls">
            <div class="qty-ctrl">
              <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
            </div>
            <span class="item-subtotal">${(item.price * item.qty).toLocaleString('vi-VN')}₫</span>
          </div>
        </div>
        <div class="item-right">
          <button class="btn-remove" onclick="removeItem(${item.id})" title="Xoá">✕</button>
          <div>
            <div class="item-price-main">${item.price.toLocaleString('vi-VN')}₫</div>
            ${item.oldPrice ? `<div class="item-price-old">${item.oldPrice.toLocaleString('vi-VN')}₫</div>` : ''}
          </div>
        </div>
      </div>`).join('');

    summaryCol.style.display = 'block';
    couponWrap.style.display = 'flex';
    sugSection.style.display = 'none';
    updateSummary();
  }

  function changeQty(id, delta) {
    const item = cart.find(c=>c.id===id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    save(); renderCart();
  }

  function removeItem(id) {
    const el = document.getElementById('item-'+id);
    if (el) { el.classList.add('removing'); setTimeout(()=>{ cart = cart.filter(c=>c.id!==id); save(); renderCart(); }, 280); }
  }

  function clearAll() {
    if (!cart.length) return;
    cart = []; save(); renderCart();
    showToast('🗑️ Đã xoá tất cả khỏi giỏ hàng');
  }

  function updateSummary() {
    const subtotal = cart.reduce((s,i)=>s+(i.price*i.qty), 0);
    const savedFromOld = cart.reduce((s,i)=>{ return i.oldPrice ? s+((i.oldPrice-i.price)*i.qty) : s; }, 0);
    const couponAmt = Math.round(subtotal * couponDiscount);
    const total = subtotal - couponAmt;

    document.getElementById('subtotalVal').textContent = subtotal.toLocaleString('vi-VN')+'₫';
    document.getElementById('totalVal').textContent = total.toLocaleString('vi-VN')+'₫';

    const discRow = document.getElementById('discountRow');
    const couponRow = document.getElementById('couponRow');
    if (savedFromOld > 0) { discRow.style.display='flex'; document.getElementById('discountVal').textContent='-'+savedFromOld.toLocaleString('vi-VN')+'₫'; }
    else discRow.style.display='none';
    if (couponAmt > 0) { couponRow.style.display='flex'; document.getElementById('couponVal').textContent='-'+couponAmt.toLocaleString('vi-VN')+'₫'; }
    else couponRow.style.display='none';
  }

  function applyCoupon() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    if (COUPONS[code]) {
      couponDiscount = COUPONS[code];
      updateSummary();
      showToast(`🎉 Mã "${code}" — giảm ${couponDiscount*100}%!`);
    } else {
      showToast('⚠️ Mã giảm giá không hợp lệ');
    }
  }

  function checkout() {
    const code = 'ITB-' + Math.random().toString(36).substr(2,8).toUpperCase();
    document.getElementById('orderCode').textContent = code;
    document.getElementById('checkoutModal').classList.add('show');
  }

  function confirmOrder() {
    cart = []; save(); closeModal(); renderCart();
    showToast('✅ Cảm ơn bạn! Đơn hàng đã được đặt.');
  }

  function closeModal() { document.getElementById('checkoutModal').classList.remove('show'); }

  function renderSuggested() {
    document.getElementById('suggestedGrid').innerHTML = SUGGESTED.map(b=>`
      <div class="sugg-card" onclick="location.href='book-detail.html?id=${b.id}'">
        <div class="sugg-cover" style="background:${b.bg}">${b.img ? `<img src="${normalizeImg(b.img)}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;">` : b.icon}</div>
        <div class="sugg-info">
          <div class="sugg-title">${b.title}</div>
          <div class="sugg-price">${b.price.toLocaleString('vi-VN')}₫</div>
        </div>
        <button class="btn-sugg-add" onclick="event.stopPropagation();quickAdd(${b.id})">+ Thêm vào giỏ</button>
      </div>`).join('');
  }

  function quickAdd(id) {
    const b = SUGGESTED.find(s=>s.id===id);
    if (!b) return;
    const ex = cart.find(c=>c.id===id);
    if (ex) ex.qty++; else cart.push({...b, qty:1});
    save(); renderCart();
    showToast(`✓ Đã thêm "${b.title}" vào giỏ`);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'), 2500);
  }

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

  // Coupon input enter
  document.getElementById('couponInput').addEventListener('keydown', e => { if (e.key==='Enter') applyCoupon(); });

  renderCart();
  renderSuggested();

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
