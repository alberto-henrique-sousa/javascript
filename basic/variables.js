/* 
    var = Toda variável é "elevada (hoisting) até o topo do seu contexto de execução, assim move as variáveis para o topo 
        do seu escopo antes da execução do código.
    let = Escopo de bloco, as variáveis não são movidas para o topo. 
    const = Devem ser inicializadas na declaração e possui escopo de bloco com em "let".
*/

// var

console.log("Variable: VAR");
console.log("=============");
console.log(a);
var a = "test var";
console.log(a);

console.log();
console.log("Variable: LET");
console.log("=============");
try {
    console.log(b);
    let b = "test let";
    console.log(b);    
} catch (e) {
    console.log(e.name + ": " + e.message);
}

console.log();
console.log("Variable: CONST");
console.log("=============");
const c = "test const";
console.log(c);


// null and undefined

console.log();
console.log("null and undefined");
console.log("=============");

let emptiness_1  // não foi atribuido valor, assim tempos um undefined NaN automaticamente

console.log(emptiness_1, emptiness_1 + 3, `o valor é ${emptiness_1}`);

let emptiness_2 = null; // aqui é indicado intencionalmente que não tem valor (null)

console.log(emptiness_2, emptiness_2 + 3, `o valor é ${emptiness_2}`);

// operações matemáticas envolvendo null é automaticamente convertido para o valor 0
