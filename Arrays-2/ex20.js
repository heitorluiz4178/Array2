let frutas = ["Maçã", "Banana", "Uva", "Laranja"];

let posicao = frutas.indexOf("Banana");

if (posicao != -1) {
    frutas.splice(posicao, 1);
}

alert(frutas);