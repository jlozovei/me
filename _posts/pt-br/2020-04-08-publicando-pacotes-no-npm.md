---
layout: post
title:  "Publicando pacotes no npm"
date:   2020-04-08 19:20:00 -0300
category: tutorial
author: "Julio Lozovei"
image_src: "/img/blog/publishing-packages-to-npm/cover.jpeg"
image_author: "chuttersnap"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/fyaTq-fIlro"
language: "pt-br"
ref: "publishing-packages-to-npm"
---
Vamos publicar uns pacotes no npm!
<!--more-->
A base do desenvolvimento JavaScript hoje é a _colaboração_, todos nós sabemos disso. Uma pessoa de um outro país pode resolver seu problema simplesmente por criar um pacote e colocá-lo no npm - e você pode fazer isso também!

Quando você usa um pacote do npm no seu projeto, você tecisa ter em mente que você está utilizando o código de outra pessoa, e você espera que esse código não quebre o seu, nem roube nenhuma informação. Então, se você quer publicar um pacote no npm, você precisa seguir essa "regra".

> O npm tem várias [políticas](https://www.npmjs.com/policies) para prevenir pacotes maliciosos.

E também você espera que o código faça aquilo que ele diz que faz - nem menos, nem mais; seja um pacote para roteamento ou um framework completo. E como garantir isso? Com testes, obviamente!

Então, nesses 3 parágrafos já encontramos algumas "regras" que precisam ser seguidas se quisermos publicar um pacote no npm. Eu digo "regras" e não **regras** porque elas são convenções - você pode publicar um pacote vazio sem testes também, mas, como isso vai ajudar alguém?


### Pacotes publicados
Enquanto eu trabalhava na Bcredi, percebi que utilizava o mesmo pedaço de código em 3 ou 4 projetos diferentes. O mesmo código com os mesmos teste - claramente esse não é um exemplo legal do [Princípio DRY](https://github.com/dwmkerr/hacker-laws/blob/master/translations/pt-BR.md#o-princ%C3%ADpio-dry).

Se uma validação mudasse, precisaríamos trocar ela em todos os projetos, refazer os testes... Uma eterna dor de cabeça.

Para resolver isso, e também como uma oportunidade de estudar sobre pacotes - antes disso, eu não tinha publicado nenhum pacote - eu decidi criar pacotes para esses códigos repetidos. Dessa forma, centralizaríamos todo o código e seus testes - se precisássemos trocar algo, faríamos apenas em um lugar, e depois atualizaríamos a versão.

Os 2 pacotes são:
- [@jlozovei/trim-currency](https://www.npmjs.com/package/@jlozovei/trim-currency)
- [@jlozovei/format-money](https://www.npmjs.com/package/@jlozovei/format-money)

Mas, antes de publicar eles de fato, precisei aprender algumas coisas.


### Como publicar um pacote?
Se você criar um projeto novo usando `npm init -y`, criar um arquivo `index.js` e depois rodar `npm publish`, você poderá dizer que publicou um pacote. Mesmo se o pacote não fizer nada, ele ainda será um pacote publicado.

Mas, o objetivo aqui é ajudar as pessoas, e um pacote vazio não vai ajudar ninguém.

Então, como um iniciante no assunto, eu fui estudar sobre como publicar pacotes. E achei 2 links que me ajudaram muito nesse processo:

- ["How to publish packages to npm (the way the industry does things)", por Zell Liew](https://zellwk.com/blog/publish-to-npm/)
- ["How to Write an Open Source JavaScript Library", um curso do Kent C. Dodds no Egghead.io](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)

Indo direto ao ponto, depois de ver esses dois links eu aprendi vários pontos para publicar um pacote no npm. E, basicamente, todos esses pontos podem ser compilados em 4 tópicos:

1. Criar o projeto
2. Criar alguns testes
3. Criar uma esteira de CI
4. Semantic Versioning (versionamento semântico)


#### 1. Criar o projeto
É meio óbvio, mas precisamos criar o projeto. Você pode criar um repositório na sua plataforma de VSC favorita (GitHub, Bitbucket, GitLab...) e commitar todas as modificações lá.

É interessante utilizar um padrão para os seus commits, dessa forma fazer o _release_ do código será muito mais fácil. Existem várias ferramentas que te ajudam nisso, como o [commitizen](https://github.com/commitizen/cz-cli) ou o [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).

Um grande ponto aqui também é dizer ao npm para ignorar alguns arquivos, utilizando o arquivo `.npmignore`. Esse arquivo será útil para evitar que alguns arquivos sejam publicados juntos como pacote, como os testes, exemplos e documentações. Quando você instala um pacote, todos os arquivos que estão no registro do npm serão baixados na sua máquina - e nós não queremos gastar conexão nem memória com esses arquivos inúteis.

> Dá uma olhada também no [guia do desenvolvedor npm](https://docs.npmjs.com/using-npm/developers.html)!


#### 2. Criar alguns testes
Depois de criar seu código, você precisa garantir que ele estará apto para ser utilizado, e que ele funciona perfeitamente. Você pode utilizar várias ferramentas para criar seus testes. Eu uso muito o [jest](https://github.com/facebook/jest) porque ele é fácil e bem simples de usar.

Você também pode definir o status de cobertura - isso irá informar o quanto do seu código está coberto pelos testes, e garantir que seu código é confiável. Existem várias ferramentas de cobertura de testes, e eu gosto de utilizar o [codecov](http://codecov.io/) nos meus projetos. O _codecov_ vai ler o relatório de cobertura dos seus testes e irá gerar um relatório sobre essa cobertura, mostrando por onde o teste passou e por onde não passou.


#### 3. Criar uma esteira de CI
Como desenvolvedor, eu odeio fazer trabalhos repetidos, e eu tenho certeza que você também não gosta.

> Deixe o trabalho repetitivo para as máquinas.

Criar uma esteira de CI vai te ajudar a testar e publicar seu pacote. Existem muitas ferramentas boas de CI, como o [Travis](https://travis-ci.org/), [CircleCI](https://circleci.com/) e a nova [GitHub Actions](https://github.com/features/actions). Basicamente, o `CI` (_Continuous Integration_, ou Integração Contínua) é uma máquina que vai executar alguns scripts no seu projeto, para realizar os testes e fazer o deploy. Se algo der errado em alguma etapa, o CI vai te dizer onde ocorreram esses erros e parar o processo - evitando publicar código com bugs.


#### 4. Semantic Versioning (versionamento semântico)
Versionamento semântico, abreviado _semver_ é uma convenção definida para estabelecer novas versões ao seu código. Essas versões são baseadas nas modificações feitas, e são classificadas em três categorias. Por definição:

- **Major**: uma modificação que vai quebrar o código antigo (`1.0.0` para `2.0.0`).
- **Minor**: uma modificação que adiciona uma nova feature, com compatibilidade para versões antigas (`1.0.0` para `1.1.0`).
- **Patch**: uma modificação que resolve um bug, com compatibilidade para versões antigas (`1.0.0` para `1.0.1`).

> Você pode aprender mais sobre [semver aqui](https://semver.org/).


Tudo isso será feito pela esteira de CI que criamos, com a ajuda de outra ferramenta. Acho que as mais famosas são o [np](https://github.com/sindresorhus/np) e [semantic-release](https://github.com/semantic-release/semantic-release).

Com o `np` você mesmo pode escolher uma nova versão; com o `semantic-release`, a nova versão será escolhida de acordo com os seus commits (com a ajuda do `conventional-changelog`).

Seguindo esses 4 passos, você garante a qualidade do código e que estaremos publicando um pacote muito bem feito!
