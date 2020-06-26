---
layout: post
title:  "Por que você deve usar uma nova linha no final do seu código"
date:   2020-06-26 13:30:00 -0300
category: tutorial
author: "Julio Lozovei"
image_src: "/img/blog/why-you-should-put-a-newline-at-the-end-of-your-code/cover.jpeg"
image_author: "Ilija Boshkov"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/0nI1DczRQAM"
language: "pt-br"
ref: "why-you-should-put-a-newline-at-the-end-of-your-code"
---
E evitar alguns comportamentos inesperados.
<!--more-->
Hoje é sexta-feira, último dia de sprint - dia de homologar aquilo que ficou para o último momento, e de fazer aqueles ajustes finais (se for preciso). Eis que o último build passou no CI; mas no front de homologação as requisições estão dando erro.

Você abre o console do navegador, inspeciona as requisições e percebe uma regra de redirect: logo após a chamada da requisição, o retorno para a rota `/404` é instantâneo. Vendo esse comportamento, o primeiro pensamento que vem na cabeça é _"a URL do servidor deve estar errada"_.

Já que o caminho dos endpoints é criado a partir de variáveis de ambiente, você coloca um `console.log` na aplicação para ver o valor dessas variáveis - se algum valor está faltando, encontraremos o problema facilmente. Mas, tudo retorna OK; pelo menos na sua máquina.

Como as variáveis de ambiente são compiladas no _build_, colocamos esse `console.log` no front de homologação também, para inspecionarmos as variáveis dinâmicas. Lá, você percebe que tem um erro - uma delas retorna `undefined`, e é justamente a variável que configura o caminho dos endpoints.

Achamos o que está dando errado, mas ainda não achamos a causa. Você vai até as configurações do seu CI e vê que todas as variáveis estão configuradas certas - cada uma com seu respectivo valor, e o script que irá popular elas dentro da aplicação com os valores dinâmicos não apresenta nenhum erro de sintaxe.

Nesse momento você levanta da cadeira, vai pegar mais café na cozinha, volta para o computador e pensa: _"mas o que está acontecendo aqui!?"_.

Depois de algum tempo, você abre o arquivo `.env` que está no seu ambiente local e não vê nenhum erro de sintaxe - todas as variáveis estão escritas corretamente, nenhuma aspas faltando... Então você abre o `.env` que está na master, para comparar as novas modificações com aquilo que já está em produção.

Nisso, você percebe que o seu `.env` local não tem uma linha em branco no final (_newline_); você volta nos logs do CI e vê que tem 2 variáveis que estão concatenadas; achamos a causa!

Sim, o problema era a linha em branco faltando - você adiciona ela no `.env`, faz o _commit_ na branch de homologação, espera o build passar e vai testar correndo a requisição no navegador - e então ela funciona.

---

Essa breve história parece aqueles causos ou cúmulos de programação, onde esquecemos um `;` ou uma `'`. Ela aconteceu comigo hoje e eu fiquei um pouco nervoso pelo fato de ter sido uma linha em branco que causou o problema.

> Mas, por que uma linha em branco faria diferença?

Depois de arrumar o _bug_, colocar o código correto em homologação e sair para o abraço porque tudo deu certo, eu fui pesquisar sobre essa tal linha em branco, também chamada de _newline_ ou _blank line_.


### Explicação
Depois de algumas horas de pesquisa sobre o tema - entrei em respostas no StackOverflow, StackExchange, em blogs de tecnologia, até na Wikipedia - encontrei uma resposta convincente sobre essa questão.

O meu arquivo `.env` era lido por um script _sh_ (shell), e existem registros de bugs e comportamentos inesperados em algumas ferramentas de linha de comando durante a leitura de arquivos sem uma linha em branco no final. Tanto essas ferramentas quanto compiladores C podem apresentar esses comportamentos inesperados.

Esses leitores (utilizados por diversas ferramentas) executam a leitura linha a linha - e a linha em branco no final do arquivo irá dizer para esse leitor quando terminar o processo de leitura.

Hoje é menos comum encontrar esse tipo de problema (mas ainda é encontrado) - ferramentas novas irão interpretar a linha em branco e apenas ignorá-la. A utilização da nova linha em branco no final do arquivo é uma boa prática pois habilita a compatibilidade para essas ferramentas mais antigas.


### Automatizando
Ficar colocando linhas em branco no final dos arquivos pode ser trabalhoso, e você nem deveria se preocupar com esse tipo de coisa - porque uma máquina pode fazer isso por você.

Se você usa algum tipo de linter/formatter no seu projeto - eslint, prettier... - você pode configurar a regra de novas linhas, e essa responsabilidade ficará para o próprio formatter fazer.

> No meu computador pessoal, tenho o prettier configurado no Sublime com a "format-on-save" habilitada - cada vez que eu salvo um arquivo, ele formata automaticamente com as regras definidas.

Independente da linguagem que você use, deixar uma linha vazia no final do seu código é uma boa prática que deve ser seguida - ainda mais se você trabalha com mais de uma plataforma: você escreve seu código em um Windows, e o CI que você utiliza é baseado em Linux.

A utilização dela também se torna importante pois cada modificação do seu arquivo irá mudar o _hashsum_ do git - se você utiliza a linha em branco no final do arquivo, ficará mais fácil de visualizar as alterações que foram feitas no final do arquivo; sem ela, o _diff_ do git apenas irá mostrar que a última linha do arquivo foi alterada!
