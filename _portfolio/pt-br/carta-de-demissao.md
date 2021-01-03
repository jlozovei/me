---
layout: portfolio
title:  "Carta de Demissão"
name:   "carta-de-demissao"
year:   2020
stack:
- react
- "styled-components"
- jest
link:   "https://cartadedemissao.com/"
github: "https://github.com/jlozovei/cartadedemissao.com"
language: "pt-br"
en: /portfolio/carta-de-demissao
---
Crie cartas de demissão com apenas alguns cliques.
<!--more-->
Como o nome sugere, o site Carta de Demissão é uma ferramenta que te ajuda na hora de criar uma boa carta de demissão.

Enquanto eu trabalhava no EBANX, tive uma grande dificuldade em achar um bom _template_ ou modelo de carta para usar. Então a ideia de desenvolver o site veio à tona.

Eu decidi criar o site usando React para tirar proveito da _Context API_, guardando os dados do usuário no cliente para renderizar o modelo customizado. Para a parte de estilos utilizei _styled-components_ e o Google Fonts; e também utilizei jest com a _testing-library_ para criar as rotinas de testes automatizados.

Esse projeto é open source e está no [GitHub](https://github.com/jlozovei/cartadedemissao.com). O projeto ainda usa o GitHub Actions como CI e o GitHub Pages como host; o domínio customizado é fornecido pelo Google Domains.
