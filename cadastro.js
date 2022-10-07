const fs = require("fs");
const prompt = require("prompt-sync")();
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

let opcaoSelecionada = null;
// Funções do Sistema
const menuPrincipal = () => {
    console.clear();
    console.log(telaInicial);
    opcaoSelecionada = prompt();
};

const cadastraPessoa = async () => {
    const pessoa = {};

    console.log("Iniciando um novo cadastro...");
    pessoa.nome = prompt("Nome completo: ");
    pessoa.cpf = prompt("CPF: ");
    pessoa.nascimento = prompt("Data de nascimento: ");
    pessoa.email = prompt("Email: ");
    pessoa.telefone = prompt("Telefone: ");

    let result = await db.pessoa.create({ data: pessoa });

    console.log("Dados salvos com sucesso!");
};
const cadastraProduto = async () => {
    const produto = {};

    console.log("Iniciando um novo cadastro de produto...");
    produto.nome = prompt("Nome: ");
    produto.descricao = prompt("Descrição: ");
    produto.marca = prompt("Marca: ");
    produto.valorUnitario = prompt("Valor em reais: ");

    let result = await db.produto.create({ data: produto });
};

//Telas do Sistema
const telaInicial = `
Selecione uma opção
    
1 - Cadastrar uma Pessoa;
2 - Cadastrar um Produto;
0 - Sair;`;

const inicio = async () => {
    while (opcaoSelecionada != 0) {
        menuPrincipal();
        switch (opcaoSelecionada) {
            case "1":
                console.clear();
                await cadastraPessoa();
            case "2":
                console.clear();
                await cadastraProduto();
        }
    }
};
//Sistema
inicio();
