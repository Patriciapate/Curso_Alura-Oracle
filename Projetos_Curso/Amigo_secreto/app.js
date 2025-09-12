// Array para guardar os nomes dos amigos

let nomesAmigos = [];

// Função para add amigos

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (nomesAmigos.includes(nome)) {
        alert("Este nome já está na lista, digite outro!");
        return;
    }

    nomesAmigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

// Atualizando a lista na tela

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    nomesAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sorteio do amigo secreto

function sortearAmigo () {
    if (nomesAmigos.length === 0) {
        alert('Por favor, adicione pelo menos um nome para validar o sorteio!');
        return;
    }

let indiceSorteado = Math.floor(Math.random() * nomesAmigos.length);
let amigoSorteado = nomesAmigos[indiceSorteado];

let nomeSorteado = document.getElementById('resultado');
nomeSorteado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

}