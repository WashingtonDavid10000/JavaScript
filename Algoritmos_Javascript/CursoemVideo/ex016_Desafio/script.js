function calcular(){
    let cigarrosDia = Number(prompt("Quantos cigarros você fuma por dia?: "));
    let anosFumados = Number(prompt("Há quantos anos você fuma?: "));
    anosFumados = anosFumados * 365;
    let cigarrosAno = cigarrosDia * anosFumados;
    let minutosTotais = cigarrosAno * 10;
    let diasTotais = minutosTotais / 1440;
    let res = window.document.getElementById("res");
    res.innerHTML = "";
    res.innerHTML = `<p>Você perderá ${minutosTotais} minutos de sua vida.</p>
    <p>Totalizando ${diasTotais.toFixed(0)} dias perdidos!</p>`
}