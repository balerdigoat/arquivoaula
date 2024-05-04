function adicionarCampos() {
    let numeroDeAlunos = parseInt(document.getElementById('numeroDeAlunos').value);
    let container = document.getElementById('dadosAlunos');
    container.innerHTML = "";  // Limpar campos anteriores

    for (let i = 0; i < numeroDeAlunos; i++) {
        container.innerHTML += `
            <div>
                <h3>Aluno ${i + 1}</h3>
                <label for="nome${i}">Nome:</label>
                <input class="alunos" type="text" id="nome${i}" required>
                <label for="quantidadeNotas${i}">Quantidade de Avaliações:</label>
                <input class="alunos" type="number" id="quantidadeNotas${i}" min="1" required>
                <div id="notas${i}"></div>
            </div>
        `;
    }
    document.getElementById('calcularMedia').style.display = 'block';
}

function calcularMedia() {
    let numeroDeAlunos = parseInt(document.getElementById('numeroDeAlunos').value);
    let alunos = [];
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "";  // Limpar resultados anteriores

    for (let i = 0; i < numeroDeAlunos; i++) {
        let nome = document.getElementById(`nome${i}`).value;
        let quantidadeDeNotas = parseInt(document.getElementById(`quantidadeNotas${i}`).value);
        let somaNotas = 0;

        for (let j = 0; j < quantidadeDeNotas; j++) {
            let nota = parseFloat(prompt(`Digite a nota ${j + 1} de ${nome}:`)); // Podemos melhorar isso para inputs HTML
            somaNotas += nota;
        }

        let media = somaNotas / quantidadeDeNotas;
        alunos.push({nome: nome, media: media});
    }

    alunos.forEach(aluno => {
        resultadosDiv.innerHTML += `<p>A média de ${aluno.nome} é ${aluno.media.toFixed(2)}</p>`;
    });
}

