# Sistema de Testes do Carrinho de Compras

## 📋 Sobre o projeto

Este projeto foi desenvolvido para realizar testes em um sistema simples de carrinho de compras utilizando **Node.js** e **Jest**.

O sistema possui uma função responsável por calcular o valor total de uma compra, considerando o subtotal dos produtos, desconto por cupom e valor do frete.

O projeto também possui testes automatizados e testes manuais para verificar diferentes situações do carrinho.

## 🛠️ Tecnologias utilizadas

* Node.js
* JavaScript
* Jest 30.5.2
* CommonJS
* NPM

O Jest está configurado como dependência de desenvolvimento e o comando `npm test` é utilizado para executar a suíte de testes.

## 📁 Estrutura do projeto

```text
teste_carrinho/
│
├── carrinho.js
├── carrinho.test.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

### carrinho.js

Contém a função `calcularTotal(itens, cupom)`, responsável pelo cálculo do valor final do carrinho.

O sistema valida o carrinho, calcula o subtotal, aplica o cupom `PROMO10`, calcula o frete e arredonda o resultado para duas casas decimais.

### carrinho.test.js

Contém os testes automatizados utilizando Jest.

São realizados seis casos de teste:

* **CT-01:** Frete grátis para compras de R$ 100.
* **CT-02:** Desconto de 10% com o cupom `PROMO10`.
* **CT-03:** Validação de quantidade negativa ou zero.
* **CT-04:** Arredondamento do valor final.
* **CT-05:** Validação de carrinho vazio.
* **CT-06:** Cobrança de frete para compras abaixo de R$ 100.

### index.js

Executa testes manuais de caixa preta no sistema e apresenta no terminal se cada caso passou ou falhou.

## ⚙️ Instalação

Primeiro, abra o terminal na pasta do projeto.

Instale as dependências utilizando:

```bash
npm install
```

O projeto possui o Jest configurado no `package.json`.

## 🧪 Executando os testes automatizados

Para executar os testes com Jest:

```bash
npm test
```

O comando executará os testes presentes no arquivo `carrinho.test.js`.

## 🖥️ Executando os testes manuais

Para executar os testes de caixa preta presentes no `index.js`, utilize:

```bash
node index.js
```

O terminal exibirá o resultado de cada caso de teste, indicando se o resultado obtido corresponde ao resultado esperado.

## 📊 Casos de teste

| ID    | Cenário                          | Resultado esperado       |
| ----- | -------------------------------- | ------------------------ |
| CT-01 | Compra de R$ 100                 | R$ 100                   |
| CT-02 | Cupom PROMO10 em compra de R$ 50 | R$ 60                    |
| CT-03 | Quantidade negativa              | Erro "Carrinho inválido" |
| CT-04 | Valor com casas decimais         | R$ 48,33                 |
| CT-05 | Carrinho vazio                   | Erro "Carrinho inválido" |
| CT-06 | Compra de R$ 80                  | R$ 95                    |

Os cenários acima correspondem aos testes definidos no arquivo de testes automatizados.

## 🎯 Objetivo dos testes

Os testes têm como objetivo verificar se o sistema:

* Calcula corretamente o subtotal;
* Aplica corretamente o desconto;
* Concede frete grátis a partir de R$ 100;
* Cobra R$ 15 de frete em compras abaixo de R$ 100;
* Rejeita carrinhos inválidos;
* Rejeita quantidades menores ou iguais a zero;
* Arredonda corretamente o valor final para duas casas decimais.

## ✅ Resultado esperado

Ao executar a suíte automatizada, os seis casos de teste devem ser executados pelo Jest.

O projeto foi estruturado para permitir a identificação de erros no cálculo do carrinho e validar o comportamento esperado da aplicação.

## 👨‍💻 Projeto

**Projeto:** Sistema de Testes do Carrinho de Compras
**Versão:** 1.0.0
**Tecnologia:** Node.js
**Framework de testes:** Jest 30.5.2
