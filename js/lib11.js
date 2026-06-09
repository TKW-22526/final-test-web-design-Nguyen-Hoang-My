  const RESOURCES = [
    { name:"W3Schools",          icon:"🌐", iconBg:"#1a2a1a", type:"free", desc:"Học HTML, CSS, JavaScript với hàng nghìn ví dụ thực hành và tham khảo tài liệu nhanh.", langs:["HTML","CSS","JavaScript","SQL","Python"], level:"Người mới", url:"https://w3schools.com" },
    { name:"Codecademy",         icon:"💻", iconBg:"#1a1a2a", type:"free", desc:"Nền tảng học CSS và nhiều ngôn ngữ lập trình khác với bài tập tương tác trực tiếp.", langs:["CSS","HTML","JavaScript","Python","SQL"], level:"Người mới", url:"https://codecademy.com" },
    { name:"freeCodeCamp",       icon:"🎓", iconBg:"#002a1a", type:"free", desc:"Học JavaScript, HTML, CSS, Python hoàn toàn miễn phí với hàng nghìn bài tập có chứng chỉ.", langs:["HTML","CSS","JavaScript","Python","SQL"], level:"Mọi trình độ", url:"https://freecodecamp.org" },
    { name:"react.dev",          icon:"⚛️", iconBg:"#001a2a", type:"free", desc:"Tài liệu chính thức của React — học từ cơ bản đến nâng cao với ví dụ tương tác.", langs:["React","JavaScript"], level:"Trung cấp", url:"https://react.dev" },
    { name:"learnpython.org",    icon:"🐍", iconBg:"#1a2a00", type:"free", desc:"Học Python hoàn toàn miễn phí ngay trên trình duyệt, phù hợp cho người mới bắt đầu.", langs:["Python"], level:"Người mới", url:"https://learnpython.org" },
    { name:"SoloLearn",          icon:"☕", iconBg:"#2a1a00", type:"free", desc:"Học Java và nhiều ngôn ngữ khác qua ứng dụng di động, học mọi lúc mọi nơi.", langs:["Java","Python","C++","JavaScript","HTML"], level:"Người mới", url:"https://sololearn.com" },
    { name:"php.net",            icon:"🐘", iconBg:"#1a002a", type:"free", desc:"Tài liệu chính thức của PHP — tham khảo hàm, cú pháp và hướng dẫn lập trình PHP.", langs:["PHP"], level:"Mọi trình độ", url:"https://php.net" },
    { name:"TryHackMe",          icon:"🛡️", iconBg:"#2a0010", type:"free", desc:"Học Cybersecurity qua các phòng lab thực hành, thách thức CTF và lộ trình có hướng dẫn.", langs:["Cybersecurity","Linux","Networking","Python"], level:"Mọi trình độ", url:"https://tryhackme.com" },
    { name:"learn-c.org",        icon:"🔵", iconBg:"#001a2a", type:"free", desc:"Học ngôn ngữ C miễn phí với bài học tương tác và bài tập thực hành ngay trên trình duyệt.", langs:["C"], level:"Người mới", url:"https://learn-c.org" },
    { name:"learncpp.com",       icon:"🔴", iconBg:"#2a0000", type:"free", desc:"Hướng dẫn học C++ toàn diện từ cơ bản đến nâng cao, miễn phí và có cấu trúc rõ ràng.", langs:["C++"], level:"Mọi trình độ", url:"https://learncpp.com" },
    { name:"AWS Skill Builder",  icon:"☁️", iconBg:"#1a1000", type:"free", desc:"Học AWS và điện toán đám mây với các khóa học chính thức từ Amazon, có chứng chỉ.", langs:["AWS","Cloud","DevOps"], level:"Mọi trình độ", url:"https://skillbuilder.aws" },
    { name:"Coursera (AI/ML)",   icon:"🤖", iconBg:"#002a10", type:"paid", desc:"Học AI và Machine Learning với các khóa học từ Stanford, DeepLearning.AI và Google.", langs:["Python","AI","ML","Data Science"], level:"Trung-Nâng cao", url:"https://coursera.org" },
    { name:"Learn Git Branching", icon:"🌿", iconBg:"#1a0a00", type:"free", desc:"Học Git và các lệnh branch qua trò chơi trực quan, cách học Git thú vị nhất hiện nay.", langs:["Git"], level:"Người mới", url:"https://learngitbranching.js.org" },
    { name:"SQLBolt",            icon:"🗄️", iconBg:"#10001a", type:"free", desc:"Học SQL từ cơ bản đến nâng cao qua các bài học tương tác trực tiếp trên trình duyệt.", langs:["SQL"], level:"Người mới", url:"https://sqlbolt.com" },
  ];

  const ROADMAPS = [
    { icon:"🌐", name:"Frontend Developer",  steps:"HTML → CSS → JS → React → TypeScript", pct:85 },
    { icon:"⚙️", name:"Backend Developer",   steps:"Python/Node.js → SQL → API → Docker", pct:70 },
    { icon:"🤖", name:"AI/ML Engineer",      steps:"Python → Math → ML → Deep Learning", pct:60 },
    { icon:"📊", name:"Data Analyst",        steps:"Excel → SQL → Python → Tableau/PowerBI", pct:75 },
    { icon:"🔒", name:"Cybersecurity",       steps:"Network → Linux → Pentest → Crypto", pct:55 },
    { icon:"☁️", name:"DevOps Engineer",     steps:"Linux → Git → Docker → K8s → CI/CD", pct:65 },
  ];

  let activeFilter = 'all';
  let cart = JSON.parse(localStorage.getItem('itbook_cart') || '[]');
  document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);

  function renderResources() {
    const data = activeFilter === 'all' ? RESOURCES : RESOURCES.filter(r=>r.type===activeFilter);
    document.getElementById('resourceGrid').innerHTML = data.map(r => `
      <div class="resource-card" data-type="${r.type}" onclick="window.open('${r.url}','_blank')">
        <div class="resource-header">
          <div class="resource-icon" style="background:${r.iconBg}">${r.icon}</div>
          <div class="resource-meta">
            <div class="resource-name">${r.name}</div>
            <span class="resource-type-badge badge-${r.type}">${r.type==='free'?'Miễn phí':r.type==='paid'?'Có phí':'Công cụ'}</span>
          </div>
        </div>
        <div class="resource-desc">${r.desc}</div>
        <div class="resource-langs">${r.langs.map(l=>`<span class="lang-pill">${l}</span>`).join('')}</div>
        <div class="resource-footer">
          <div class="resource-level">📊 ${r.level}</div>
          <button class="btn-visit">Truy cập →</button>
        </div>
      </div>`).join('');
  }

  function renderRoadmaps() {
    document.getElementById('roadmapGrid').innerHTML = ROADMAPS.map(r => `
      <div class="roadmap-card">
        <div class="roadmap-icon">${r.icon}</div>
        <div class="roadmap-name">${r.name}</div>
        <div class="roadmap-steps">${r.steps}</div>
        <div class="roadmap-progress"><div class="roadmap-bar" style="width:0%" data-pct="${r.pct}"></div></div>
      </div>`).join('');
    // Animate bars
    setTimeout(() => {
      document.querySelectorAll('.roadmap-bar').forEach(b => {
        b.style.width = b.dataset.pct + '%';
      });
    }, 300);
  }

  // Filter tabs
  document.getElementById('filterTabs').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderResources();
  });

  // Scroll animation
  const obs = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

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

  renderResources();
  renderRoadmaps();

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
