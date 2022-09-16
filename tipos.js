let texto = "Texto";
let numero = 0;
let boolean = false;
let objeto = {
    nome: "Juresca",
    idade: 40
};
let meuArray = [texto, numero, boolean, objeto]

const constant = objeto

constant.idade = 12;

// console.log(constant)


const minhaFuncao = (a, b, caso) => {
    switch (caso) {
        case 0:
            return a + b;
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return (a / b);
        case 4:
            return (a % b);
        case 5:
            return (a ** b);
    }
}

const a = () => { }
console.log(minhaFuncao(1, 2, 0));