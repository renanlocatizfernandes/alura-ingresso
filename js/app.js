let pista = parseInt(document.getElementById('qtd-pista').textContent);
let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let listaTipo = document.getElementById('tipo-ingresso');
    var tipoEscolhido = listaTipo.options[listaTipo.selectedIndex].value;

    let quantidade = document.getElementById('qtd').value;
    if (quantidade <= 0) {
        alert('Valor inválido!')
        return;
    }

    if (document.getElementById(`qtd-${tipoEscolhido}`).textContent - quantidade >= 0){
        document.getElementById(`qtd-${tipoEscolhido}`).textContent = document.getElementById(`qtd-${tipoEscolhido}`).textContent - quantidade;
    } else {
        alert('Quantidade não disponível!')
        return;
    }
}

