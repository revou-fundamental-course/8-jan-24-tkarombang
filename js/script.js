const btnCalculate = document.querySelectorAll('.btn-calculate');
const resultFormulaLuas = document.getElementById('result-formula-luas');
const resultCalculateLuas = document.getElementById('result-calculate-luas');
const resultFormulaKeliling = document.getElementById('result-formula-keliling');
const resultCalculateKeliling = document.getElementById('result-calculate-keliling');
const btnReset = document.querySelectorAll('#btn-reset');
const btnChange = document.getElementById('change');



btnCalculate.forEach((btn) => {
  const modalAlert = document.querySelector('.modal-alert');
  const btnCloseX = document.querySelector('.close-ok');

  btn.onclick = (e) => {
    const inputNilaiLuas = parseFloat(document.getElementById('nilai-luas').value);
    const inputNilaiKeliling = parseFloat(document.getElementById('nilai-keliling').value);
    if ((!inputNilaiLuas) && (!inputNilaiKeliling)) {
      modalAlert.style.display = 'flex';
    } else {
      if (btn.id === 'btn-calculate-luas') {
        const inputNilaiLuas = parseFloat(document.getElementById('nilai-luas').value);
        const resultLuas = inputNilaiLuas * inputNilaiLuas;
        resultFormulaLuas.innerHTML = inputNilaiLuas + ' X ' + inputNilaiLuas;
        resultCalculateLuas.innerHTML = resultLuas;
        console.log(btn.id);
      } else {
        console.log(btn.id);
        const inputNilaiKeliling = parseFloat(document.getElementById('nilai-keliling').value);
        const resultKeliling = 4 * inputNilaiKeliling
        resultFormulaKeliling.innerHTML = inputNilaiKeliling;
        resultCalculateKeliling.innerHTML = resultKeliling;
      }
    }

    btnCloseX.onclick = () => {
      modalAlert.style.display = 'none';
    }
    e.preventDefault();
  }

})

btnChange.onclick = (e) => {
  e.preventDefault();
  ubah();
}

function ubah() {
  const luasPersegi = document.querySelector('.luas-persegi');
  const kelilingPersegi = document.querySelector('.keliling-persegi');

  if (btnChange.innerHTML === 'Hitung Keliling Persegi') {
    btnChange.innerHTML = 'Hitung Luas Persegi';
    luasPersegi.style.display = 'none';
    kelilingPersegi.style.display = 'flex';
  } else {
    btnChange.innerHTML = 'Hitung Keliling Persegi';
    luasPersegi.style.display = 'flex';
    kelilingPersegi.style.display = 'none';
  }
}

btnReset.forEach((btn) => {
  btn.onclick = () => {
    resultFormulaLuas.innerHTML = '';
    resultCalculateLuas.innerHTML = '';
    resultFormulaKeliling.innerHTML = '';
    resultCalculateKeliling.innerHTML = '';
  }

})