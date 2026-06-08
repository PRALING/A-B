
function setModeA(val) {
  document.getElementById('formA').style.display = val === 'show' ? '' : 'none';
}

function setModeB(val) {
  const show = val === 'show';
  document.getElementById('displayB').style.display = show ? '' : 'none';
  document.getElementById('msgHidden').style.display = show ? 'none' : '';
}

function submitForm() {
  document.getElementById('dNama').textContent = document.getElementById('inNama').value.trim() || '—';
  document.getElementById('dKP').textContent = document.getElementById('inKP').value.trim() || '—';
  document.getElementById('dMatrik').textContent = document.getElementById('inMatrik').value.trim() || '—';
  document.getElementById('dTel').textContent = document.getElementById('inTel').value.trim() || '—';
  document.getElementById('dAlamat').textContent = document.getElementById('inAlamat').value.trim() || '—';

  const msg = document.getElementById('msgA');
  msg.style.display = 'block';
  setTimeout(() => msg.style.display = 'none', 2500);
}

function clearForm() {
  ['inNama', 'inKP', 'inMatrik', 'inTel', 'inAlamat'].forEach(id => {
    document.getElementById(id).value = '';
  });
  ['dNama', 'dKP', 'dMatrik', 'dTel', 'dAlamat'].forEach(id => {
    document.getElementById(id).textContent = '—';
  });
}
