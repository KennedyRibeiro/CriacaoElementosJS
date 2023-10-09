// EX 1
function criarRetangulos() {
    let divRetangulos = document.querySelector('#retangulos');

    let retangulo = document.createElement('div');
    retangulo.setAttribute('class', 'retangulo');
    retangulo.style.width = '200px';
    retangulo.style.height = '100px';
    retangulo.style.margin = '10px';
    retangulo.style.float = 'left';
    retangulo.style.backgroundColor = '#736598';

    divRetangulos.appendChild(retangulo);
}

function apagarRetangulos() {
    let divRetangulos = document.querySelector('#retangulos');
    divRetangulos.innerHTML = '';
}

document.querySelector('#criar-retangulos').addEventListener('click', criarRetangulos);
document.querySelector('#apagar-retangulos').addEventListener('click', apagarRetangulos);


// Ex 2

function criarLinks() {
    let nomeLink = document.querySelector('#nome-link').value;
    let urlLink = document.querySelector('#url-link').value;

    if (nomeLink != '' && urlLink != '') {
        let corpoTabela = document.querySelector('#links tbody');

        let novaLinha = document.createElement('tr');

        // coluna 1
        let colunaNome = document.createElement('td');
        colunaNome.textContent = nomeLink;

        // coluna 2
        let colunaUrl = document.createElement('td');
        let link = document.createElement('a');
        link.setAttribute('href', urlLink);
        link.setAttribute('target', '_blank');
        colunaUrl.textContent = urlLink;
        colunaUrl.appendChild(link);

        // coluna 3
        let colunaOpcoes = document.createElement('td');
        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.classList.add('btn');
        botaoExcluir.classList.add('btn-danger');
        botaoExcluir.onclick = function () {
            corpoTabela.removeChild(novaLinha);
        }
        colunaOpcoes.appendChild(botaoExcluir);


        novaLinha.appendChild(colunaNome);
        novaLinha.appendChild(colunaUrl);
        novaLinha.appendChild(colunaOpcoes);
        corpoTabela.appendChild(novaLinha);

    } else {
        alert('Preencha todos os campos! ');
    }
}

function apagarLinks() {
    let corpoTabela = document.querySelector('#links tbody');
    corpoTabela.innerHTML = '';
}

document.querySelector('#criar-links').addEventListener('click', criarLinks);
document.querySelector('#apagar-links').addEventListener('click', apagarLinks);

// EX 3

function trocarCores() {
    let nForma = document.querySelector('#forma').value;
    let cor = document.querySelector('#cor').value;

    if (nForma != '') {
        if (cor != '') {
            let forma = document.querySelector(`#${nForma}`);
            forma.style.backgroundColor = cor;
        } else {
            alert('Selecione uma cor!');
        }
    } else {
        alert('Selecione uma forma!');
    }
}

document.querySelector('#trocar-cor').addEventListener('click', trocarCores);

/*function trocarCores(){
    let nForma = document.querySelector('#forma').value;
    let cor = document.querySelector('#cor').value;
    console.log(nForma, cor);

    let forma = document.querySelector('#'+nForma);
    forma.style.backgroundColor = cor;
}
*/