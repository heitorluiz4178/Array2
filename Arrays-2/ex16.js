let nomes = ["Ana", "Bruno", "Amanda", "Carlos", "Arthur"];

let nomesA = nomes.filter(function(nome) {
    return nome.startsWith("A");
});

alert(nomesA);