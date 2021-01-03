---
layout: blogpost
title:  "Nenhum framework é o melhor framework"
date:   2020-07-25 14:00:00 -0300
category: opinion
author: "Julio Lozovei"
image_src: "/img/blog/no-framework-is-the-best-framework/cover.jpg"
image_author: "Todd Quackenbush"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/IClZBVw5W5A"
language: "pt-br"
ref: "no-framework-is-the-best-framework"
---
Se liberte das algemas dos frameworks.
<!--more-->
No ecossistema JavaScript é bem comum descobrirmos um novo _framework_ a cada dia, seja ele um pouco mais antigo ou um novo que acabou de surgir; inclusive, todos os dias surgem novos _frameworks_ JavaScript, que afirmam resolver todos os seus problemas em um passe de mágica.

Em primeiro lugar, é bom sabermos o que é um _framework_: de forma bem simples, um _framework_ é uma abstração que resolve problemas recorrentes de forma genérica. Em muitos lugares, você vai encontrar uma definição similar para _bibliotecas_ (também chamadas de _libs_).

Mas, a diferença entre uma _biblioteca_ e um _framework_ nada mais é do que o seu escopo. Considere o [React](https://pt-br.reactjs.org/) e o [Angular](https://angular.io/) - o primeiro é uma biblioteca para criação de interfaces de usuário; já o segundo é um framework para criar SPAs. A diferença entre os dois é o escopo - dentro do Angular você tem roteamento, serviços e _helpers_ próprios; já no React, você não tem nada disso de forma intergrada, apenas se instalar outras bibliotecas que realizam apenas o que está dentro do seu escopo.

Muitas vezes usamos tanto essas bibliotecas e frameworks que esquecemos do que está por trás de tudo isso - o JavaScript. E isso aconteceu comigo quando eu estava iniciando minha carreira como desenvolvedor front-end. Quando eu comecei a desenvolver, utilizava o [Boostrap](https://getbootstrap.com/) e o [jQuery](https://jquery.com/) para tudo, tudo mesmo. Fosse para criar uma simples página ou então um sistema, eu utilizava os dois como dependências do meu projeto.

E, em um dado projeto, eu tinha a restrição de utilizar essas duas dependências - e foi aí que eu percebi que eu não sabia JavaScript, e sabia apenas jQuery. No caso, eu conhecia tanto as funções que o jQuery disponibilizava que não sabia mais se elas eram funções nativas do JS ou se eram coisas próprias do jQuery. Por exemplo, para você procurar elementos no DOM, provavelmente você utilizaria esse código:

```js
var element = $('.element');

// ou var element = jQuery('element');
```

Mas, essa função é própria do jQuery, que é convertida para o método nativo do JS:

```js
var element = document.querySelector('.element');
```

Além do seletor de elementos, isso vale para outros métodos como adicionar/remover classes e outros atributos, escutar eventos, chamadas de API, entre outros.

Foi aí então que eu comecei a realmente estudar JavaScript e como tudo funcionava - revirei o código do jQuery para ver o que aquelas funções próprias dele faziam com o código nativo, entendi mais sobre _clojures_ e _IIFEs_... E, desde então, tenho seguido o lema que está no título desse artigo:

> Nenhum framework é o melhor framework.

Claro, existem casos e casos. Em determinados projetos é muito mais fácil você utilizar uma _lib_ ou um framework para resolver um dado problema - isso te poupa tempo e esforço e não queremos reinventar a roda a todo instante. Você já pensou se a cada projeto você precisasse escrever na mão o seu código para controlar rotas no front-end? Sabemos que não é tão difícil, mas, já existem N _libs_ boas que resolvem esse problema e o nosso trabalho é apenas utilizá-las da forma correta.

Porém, existem casos que a utilização de uma lib ou de um framework apenas irá fazer com que o seu código fique complexo sem necessidade. Eu sempre tomo como exemplo o [Developer Titles](https://developertitles.com/): eu fiz ele utilizando _VanillaJS_ (que é a forma do JS "puro", sem libs ou frameworks) junto com o [Webpack](https://webpack.js.org/) para criar a versão minificada do código.

Se eu tivesse feito com React, ou com Vue, ou com qualquer outro _hype_, a _codebase_ (base de código) teria ficado maior, mais complexa, o tempo de build ficaria maior, o número de dependências seria maior... E, eu vejo esse acréscimo como algo desnecessário - o nosso _JS velho de guerra_ consegue resolver tudo isso sozinho.

Hoje eu vejo vários desenvolvedores super empolgados com todos essas novas ferramentas que estão inseridas dentro do contexto do desenvolvimento front-end, e que muitas vezes não conhecem o poder e a simplicidade do próprio JS em seu estado "normal" - ainda mais depois da constante evolução que temos presenciado desde o surgimento do [ES6](https://www.w3schools.com/js/js_es6.asp) lá em 2015.

---

Ao longo dos últimos anos eu tive a sorte de conhecer várias grandes pessoas desenvolvedoras - através de mudanças de emprego, indo em meetups, ou então aqueles que são amigos de amigos. E através do contato com essas pessoas eu tenho focado muito mais em coisas simples que resolvem o problema do que projetos com alto nível de complexidade e que resolvem pouca coisa.

Falando assim parece até que eu condeno algumas ferramentas, mas não quero passar essa impressão. A impressão que eu quero sempre passar é de que as pessoas desenvolvedoras precisam focar sempre em simplicidade - ter o [Príncipio KISS](https://github.com/dwmkerr/hacker-laws/blob/master/translations/pt-BR.md#o-princ%C3%ADpio-kiss) sempre em mente na hora de desenvolver algo.

Se sempre focarmos em simplicidade, explicitude e em resolver o problema, a chance de criarmos um bicho de sete cabeças dentro do nosso código é reduzida drasticamente - ou seja, reduzimos o tão temido [overengineering](https://hipsters.tech/overengineering-hipsters-142/), e ainda criamos algo que será fácil para outras pessoas mexerem; até porque sempre iremos escrever código para outras pessoas, nunca para nós mesmos ou para as máquinas.
