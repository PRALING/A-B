function submitForm() {
  const nama = document.getElementById('inNama').value.trim();
  const kp = document.getElementById('inKP').value.trim();
  const matrik = document.getElementById('inMatrik').value.trim();
  const tel = document.getElementById('inTel').value.trim();
  const alamat = document.getElementById('inAlamat').value.trim();

  if (!nama || !kp || !matrik || !tel || !alamat) {
    const msg = document.getElementById('msgError');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2500);
    return;
  }

  localStorage.setItem('nama', nama);
  localStorage.setItem('kp', kp);
  localStorage.setItem('matrik', matrik);
  localStorage.setItem('tel', tel);
  localStorage.setItem('alamat', alamat);

  window.location.href = 'paparan.html';
}

function setModeB(val) {
  const show = val === 'show';
  document.getElementById('displayB').style.display = show ? '' : 'none';
  document.getElementById('msgHidden').style.display = show ? 'none' : '';
}

function clearAndBack() {
  localStorage.clear();
  window.location.href = 'index.html';
}

if (document.getElementById('dNama')) {
  document.getElementById('dNama').textContent = localStorage.getItem('nama') || '—';
  document.getElementById('dKP').textContent = localStorage.getItem('kp') || '—';
  document.getElementById('dMatrik').textContent = localStorage.getItem('matrik') || '—';
  document.getElementById('dTel').textContent = localStorage.getItem('tel') || '—';
  document.getElementById('dAlamat').textContent = localStorage.getItem('alamat') || '—';
}