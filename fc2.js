const menu = 2;

    switch (menu) {
      case 1: 
      console.log("Exercício 1 selecionando. Executando...\n");
      exerc1(); 
      break;

      case 2:
      console.log("Exercício 2 selecionando. Executando...\n"); 
      exerc2(); 
      break;

      case 3:
     console.log("Exercício 3 selecionando. Executando...\n"); 
      exerc3(); 
      break;

      case 4: 
      console.log("Exercício 4 selecionando. Executando...\n");
      exerc4(); 
      break;

      case 5: 
     console.log("Exercício 5 selecionando. Executando...\n");
      exerc5(); 
      break;

      case 6: 
     console.log("Exercício 6 selecionando. Executando...\n");
      exerc6(); 
      break;

      case 7:
      console.log("Exercício 7 selecionando. Executando...\n");
      exerc7(); 
      break;

      case 8: 
      console.log("Exercício 8 selecionando. Executando...\n");
      exerc8(); 
      break;

      case 9: 
      console.log("Exercício 9 selecionando. Executando...\n");
      exerc9(); 
      break;

      case 10: 
      console.log("Exercício 10 selecionando. Executando...\n");
      exerc10(); 
      break;
    }

// 1. Listar nomes com for...of
function exerc1() {
  const nomes = ["Isabelly", "Kemmily", "Eloize", "Duda", "Isinha"];
  for (const nome of nomes) {
    console.log(nome);
  }
}

// 2. Somar valores com for...of
function exerc2() {
  const numeros = [10, 20, 30, 40];
  let soma = 0;

  for (const num of numeros) {
    soma += num;
  }

  console.log("Soma total:", soma);
}

// 3. Exibir propriedades com for...in
function exerc3() {
  const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };

  for (const chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }
}

// 4. Contar propriedades de um objeto
function exerc4() {
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  let count = 0;

  for (const chave in obj) {
    count++;
  }

  console.log("Total de propriedades:", count);
}

// 5. Concatenar nomes
function exerc5() {
  const nomes = ["Ana", "Bruno", "Carlos"];
  let resultado = "";

  for (const nome of nomes) {
    resultado += nome + ", ";
  }

  console.log(resultado.slice(0, -2));
}

// 6. Tipos de dados
function exerc6() {
  const valores = [10, "texto", true, null, undefined];

  for (const valor of valores) {
    console.log(valor, "->", typeof valor);
  }
}

// 7. Incrementar idades
function exerc7() {
  const pessoas = {
    Ana: 20,
    Bruno: 25,
    Carlos: 30
  };

  for (const nome in pessoas) {
    pessoas[nome] += 1;
  }

  console.log(pessoas);
}

// 8. Objeto para array de strings
function exerc8() {
  const obj = { a: 1, b: 2, c: 3 };
  const resultado = [];

  for (const chave in obj) {
    resultado.push(`${chave}: ${obj[chave]}`);
  }

  console.log(resultado);
}

// DIFÍCEIS
// 9. Valores únicos com Set
function exerc9() {
  const array = [1, 2, 2, 3, 4, 4, 5];
  const setUnico = new Set(array);

  console.log("Valores únicos:", setUnico.size);
}

// 10. Contar caracteres de uma frase
function exerc10() {
  const frase = prompt("Digite uma frase:");
  const contagem = {};

  for (const letra of frase) {
    if (letra !== " ") {
      contagem[letra] = (contagem[letra] || 0) + 1;
    }
  }

  console.log(contagem);
}