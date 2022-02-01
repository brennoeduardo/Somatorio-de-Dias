function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
  }
  
function formatDate(date) {
    const dia = zeroFill(date.getDate());
    const mes = zeroFill(date.getMonth()+ 1);
    const ano = zeroFill(date.getFullYear())  

    return `${dia}/${mes}/${ano}`
}

function render(data){
    const date = document.querySelector('.date')
    date.innerHTML = data;
}

var soma = Number(window.prompt('Digite quantos dias querem somar para a data futura'))

const data = new Date();
data.setDate(data.getDate() + soma);
data.setMonth(data.getMonth() + 0);
data.setFullYear(data.getFullYear() + 0);

render(formatDate(data));
