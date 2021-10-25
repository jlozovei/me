---
title: Grids com CSS
date: '2020-08-22 16:00:00 -0300'
excerpt: Você (ainda) usa grids?
category: thoughts
---

Um grid é um excelente ponto de partida para criar interfaces, mas ele também pode ser um assunto levemente polêmico dentro do design de interfaces e do desenvolvimento front-end - a forma como designers e desenvolvedores entendem o grid pode ser diferente, e isso pode gerar algumas confusões.

Aplicada no contexto de design de interfaces, a palavra _grid_ em inglês pode ser traduzida como _"grade"_, e é em cima dessa _grade_ que construímos os nossos _layouts_ por anos.

Se nós voltarmos no tempo e olharmos como o CSS evoluiu, vamos ver que existem diferentes maneiras de usarmos (ou apliarmos) um grid na hora de construir uma interface no front - embora algumas sejam consideradas "arcaicas". Antes de 2016, grids e alinhamento eram tarefas complicadas de serem resolvidas usando CSS.

### Table layout

Lá nos primórdios da web, as tabelas eram muito utilizadas na criação de layouts - inclusive o primeiro site que eu fiz, como forma de estudo, foi feito com uma `table`, e todo o conteúdo do site estava organizado dentro das linhas e colunas.

![Exemplo de table layout na prática](./table-layout.png 'https://stackoverflow.com/questions/42878028/html-tables-page-layout')

Embora eu tenha feito alguns sites usando essa técnica lá no começo de 2011, nunca vi esse tipo de abordagem em um site "do mundo real" - essa técnica era usada lá no começo da web, quando o [GeoCities](https://tecnoblog.net/262168/yahoo-geocities-japan-rip/) ainda fazia sucesso; antes dos desenvolvedores começarem a entender o funcionamento do `float`.

### Float

A medida em que a web foi evoluindo os desenvolvedores começaram a entender como de fato o CSS funcionava e poderia ajudar na criação de interfaces mais elaboradas. Aqui no Brasil é comum encontrarmos o termo `tableless`, que inclusive dá nome a um excelente [portal de conteúdo](https://tableless.com.br/) - e esse termo significava que o site era feito sem tabelas, e que o seu layout era "controlado" pelo CSS.

Acredito que, pelo menos em tempo de uso, a abordagem de criar interfaces usando `float` e `clear` foi a que eu mais utilizei. A propriedade `float` define como um elemento irá _flutuar_ em relação ao elementos e ao conteúdo que estão a sua volta - acho que o exemplo mais ilustrado disso é pensar em uma imagem que fica à esquerda, ou à direita, de um texto dentro de um container.

Junto com essa técnica, veio o uso do [clearfix hack](https://www.w3schools.com/css/css_float_clear.asp), que resolvia o problema de tamanho em elementos que possuiam filhos com a regra de `float` - a altura de um elemento pai quebrava quando um filho possuia a regra de float, e o _clearfix hack_ resolvia isso usando `overflow` e o _pseudo-elemento after_, criando uma linha invisível depois do conteúdo para que a altura do elemento pai não quebrasse.

> Lembrar desses hacks de _float x clear_ me faz lembrar de uma época engraçada do front-end. Apenas por curiosidade, nessa época o framework JS mais utilizado era o jQuery, e o React e o Vue nem existiam.

O [grid do Bootstrap 3](https://getbootstrap.com/docs/3.3/css/#grid) era criado usando float e clearfix. Hoje em dia ainda é comum encontrar alguns sites que usam essa abordagem - geralmente aqueles blogs mais antigos, ou alguns sites que não tiveram atualizações de layout em alguns anos.

### Flexbox

A ideia do _flexbox_ surgiu lá pelos meados de 2016, 2017; e o objetivo dessa ideia era simples: criar uma regra para alinhar elementos e conteúdos, tanto vertical quanto horizontalmente.

Alinhar elementos e conteúdos antes do flexbox podia ser uma fonte de dor de cabeça para os desenvolvedores, pois o CSS não tinha um mecanismo para trabalhar com isso de forma nativa - você poderia fazer milhões de cálculos e usar, de forma artesanal, _paddings_ e _margins_ combinados, com descontos de altura/largura, ou então usar um plugin js que ficaria calculando a altura/largura dos elementos, e aplicando automaticamente as regras de margin/padding.

Embora o flexbox tenha sido criado com o objetivo do alinhamento, ele também se tornou uma ferramenta interessante na construção/aplicação de grids nas interfaces. Com um flex container, é muito mais fácil manipular o tamanho e o comportamento das colunas, e ainda ganhamos o benefício de não precisar mais utilizar o _clearfix hack_.

Dependendo do público-alvo do site/sistema, a utilização do flexbox precisava ser acompanhada do uso dos [_vendor prefixes_](https://developer.mozilla.org/pt-BR/docs/Glossario/Prefixos_vendor); ainda mais quando a _spec_ surgiu, onde os browsers não estavam preparados para suportar essas propriedades e a utilização de browsers antigos era grande.

Hoje com o [suporte nativo dos browsers em mais de 97%](https://caniuse.com/#feat=flexbox), a utilização do flex deixou de ser algo opcional e se tornou quase mandatória. É muito raro ver algum desenvolvedor que ainda usa float nos dias de hoje, por exemplo. Frameworks como o [Bulma](https://bulma.io/documentation/columns/basics/) e o próprio [Bootstrap 4](https://getbootstrap.com/docs/4.5/layout/grid/) implementam seus grids com flexbox.

### Multiple column layout

Uma alternativa ao flexbox para trabalharmos com colunas, o CSS introduziu a _spec_ do [_multiple column layout_](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns). A ideia dessa abordagem é fazer o conteúdo fluir utilizando várias colunas na tela - definição bem similar a de um grid - como a capa de um jornal.

É uma abordagem pouco utilizada, dado o seu [suporte parcial em vários navegadores](https://caniuse.com/#feat=multicolumn). Outro ponto negativo dessa abordagem é a questão responsiva - trabalhar com mais de 2 colunas em telas de smartphone não é a abordagem mais correta para esse tipo de dispositivo.

### CSS Grid

Uma das grandes evoluções do CSS nos últimos anos, o CSS Grid tem ajudado muito na hora de construir interfaces complexas - seja pela sua capacidade de trabalhar em 2 dimensões (linhas e colunas) ou pela facilidade de utilizar essa abordagem.

A principal diferença do flexbox com o CSS Grid é que o primeiro é baseado apenas em 1 dimensão, e o segundo é baseado em 2. Com o flexbox você só pode operar na vertical ou na horizontal (linhas ou colunas) - já com o CSS Grid é possível operar nas 2 dimensões (linhas e colunas).

Hoje o [suporte do CSS Grid é bem amplo, dentro da casa dos 95%](https://caniuse.com/#feat=css-grid). Se desconsiderarmos o IE da lista, podemos utilizá-lo sem medo de incompatibilidade ou erros na renderização entre diferentes dispositivos.

Muitas pessoas criam várias comparações entre o CSS Grid e o flexbox, mas o propósito dessas abordagens são diferentes embora possuam interseções em vários momentos.

Salvo a necessidade de trabalhar com as 2 dimensões, o CSS Grid pode ser substituído pelo flexbox. Particularmente eu não vejo sentido em usar o CSS Grid para trabalharmos apenas com linhas ou apenas com colunas - é a mesma coisa que usar um _motorhome_ para ir e voltar da sua casa ao seu trabalho; você pode fazer se quiser, mas não é necessário e talvez até seja ridículo.

---

Uma das coisas que eu menos gosto em utilizar frameworks CSS de grids é que eles sujam a markup final com `divs` ou classes que poderiam ser evitadas. Se considerarmos todo o esquema do grid, colunas, diferentes tamanhos para cada _viewport_, esquema de offset... No final dessa lista, vamos perceber que não precisamos de tudo isso para criar a nossa interface.

Isso tudo é compreensível pois os frameworks nos fornecem uma forma genérica de implementarmos algo - no contexto desse texto, um grid com CSS. Logo, como a abordagem é genérica, teremos várias coisas que não vamos precisar, ou coisas que se tornam desnecessárias.

Ao longo dos últimos anos eu tenho usado o meu próprio esquema de grids no CSS, independente de usar flexbox ou CSS Grid. Crio a mínima markup necessária para que a estrutura seja criada, e deixo todas as regras de CSS dentro dessa markup - a quantidade de código é muito menor, tanto no HTML quanto no CSS; e para evitar repetições, é possível criar algumas abstrações como _extends_ com as regras comuns.
