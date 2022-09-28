const fs = require("fs");
const prompt = require("prompt-sync")();
const crypto = require("crypto");
let opcaoSelecionada = null;

// Funções do Sistema
const menuPrincipal = () => {
    console.clear();
    console.log(telaInicial);
    opcaoSelecionada = prompt();
};

const cadastraPessoa = () => {
    const listaPessoa = JSON.parse(fs.readFileSync("Pessoas.json"));
    const pessoa = { ID: crypto.randomUUID() };

    console.log("Iniciando um novo cadastro...");
    pessoa.nome = prompt("Nome completo: ");
    pessoa.cpf = prompt("CPF: ");
    pessoa.nascimento = prompt("Data de nascimento: ");
    pessoa.email = prompt("Email: ");
    pessoa.telefone = prompt("Telefone: ");

    listaPessoa.push(pessoa);

    fs.writeFileSync("Pessoas.json", JSON.stringify(listaPessoa));

    console.log("Dados salvos com sucesso!");
};
const cadastraProduto = () => {
    const listaProduto = JSON.parse(fs.readFileSync("Produtos.json"));
    const produto = { ID: crypto.randomUUID() };

    console.log("Iniciando um novo cadastro de produto...");
    produto.nome = prompt("Nome: ");
    produto.descricao = prompt("Descrição: ");
    produto.marca = prompt("Marca: ");
    produto.valor = prompt("Valor em reais: ");

    listaProduto.push(produto);

    fs.writeFileSync("Produtos.json", JSON.stringify(listaProduto));

    console.log("Produto salvo com sucesso!");
};

//Telas do Sistema
const telaInicial = `
Selecione uma opção
    
1 - Cadastrar uma Pessoa;
2 - Cadastrar um Produto;
0 - Sair;`;

//Sistema
while (opcaoSelecionada != 0) {
    menuPrincipal();
    switch (opcaoSelecionada) {
        case "1":
            console.clear();
            cadastraPessoa();
        case "2":
            console.clear();
            cadastraProduto();
    }
}
