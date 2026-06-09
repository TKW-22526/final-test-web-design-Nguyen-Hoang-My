  function switchTab(tab) {
    document.getElementById('tabLogin').classList.toggle('active', tab==='login');
    document.getElementById('tabRegister').classList.toggle('active', tab==='register');
    document.getElementById('loginForm').style.display = tab==='login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = tab==='register' ? 'block' : 'none';
  }

  function togglePwd(id, btn) {
    const el = document.getElementById(id);
    el.type = el.type==='password' ? 'text' : 'password';
    btn.textContent = el.type==='password' ? '👁️' : '🙈';
  }

  function checkStrength(pwd) {
    const fill = document.getElementById('strengthFill');
    const text = document.getElementById('strengthText');
    if (!pwd) { fill.style.width='0%'; text.textContent=''; return; }
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    const levels = [{w:'20%',c:'#ff4444',t:'Yếu'},{w:'40%',c:'#ff8800',t:'Trung bình'},{w:'70%',c:'#f59e0b',t:'Khá'},{w:'100%',c:'#47ff78',t:'Mạnh'}];
    const lv = levels[Math.min(score-1,3)] || levels[0];
    fill.style.width = lv.w; fill.style.background = lv.c; text.textContent = lv.t; text.style.color = lv.c;
  }

  function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pwd = document.getElementById('loginPwd').value;
    if (!email || !pwd) { showToast('⚠️ Vui lòng điền đầy đủ thông tin'); return; }
    // Lấy tên từ email (phần trước @)
    const name = email.split('@')[0];
    const avatar = name.charAt(0).toUpperCase();
    localStorage.setItem('itbook_user', JSON.stringify({ name, email, avatar }));
    showToast('✅ Đăng nhập thành công! Đang chuyển hướng...');
    setTimeout(()=>location.href='../index.html', 1500);
  }

  function handleRegister() {
    const first = document.getElementById('regFirst').value.trim();
    const last = document.getElementById('regLast').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pwd = document.getElementById('regPwd').value;
    const pwd2 = document.getElementById('regPwd2').value;
    const agree = document.getElementById('agreeTerms').checked;
    if (!first || !email || !pwd) { showToast('⚠️ Vui lòng điền đầy đủ thông tin'); return; }
    if (pwd !== pwd2) { showToast('⚠️ Mật khẩu không khớp'); return; }
    if (!agree) { showToast('⚠️ Vui lòng đồng ý điều khoản'); return; }
    const name = first + (last ? ' ' + last : '');
    const avatar = first.charAt(0).toUpperCase();
    localStorage.setItem('itbook_user', JSON.stringify({ name, email, avatar }));
    showToast('🎉 Đăng ký thành công! Chào mừng bạn đến với ITBook!');
    setTimeout(()=>location.href='../index.html', 1500);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)';
    setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(20px)'; }, 2500);
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
