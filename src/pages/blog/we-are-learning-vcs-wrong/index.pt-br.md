---
title: Estamos aprendendo VCS errado
date: '2020-05-22 12:10:00 -0300'
excerpt: Já pensou sobre isso?
category: thoughts
---

Bom, o título desse post pode parecer um _clickbait_ - perdão por isso. Mas, nos últimos meses eu estava pensando sobre isso - _"será que existe uma forma correta de aprender VCS?"_

E, enquanto estava pensando nisso, lembrei do meu começo como desenvolvedor: aprendendo a lidar com código, aprendendo o que era um PR (pull request), o que era um _merge_ e todas essas coisas que hoje já são triviais. No meu primeiro emprego a gente utilizava o SVN, e eu não fazia ideia do que era Git - com o SVN eu aprendi a separar minhas tarefas do "código de produção", e ele funcionava bem.

Depois de alguns meses, a gente migrou os projetos do SVN para o Git. Eu não me lembro se tivemos algum problema durante essa migração - na verdade, eu não me lembro muitas coisas do meu primeiro trabalho - a não ser pelas pessoas incríveis, pelo café e por todo o aprendizado que eu tive lá (tanto no desenvolvimento quanto na vida).

### Primeiro de tudo - o que é VCS?

VCS é uma sigla que significa _Version Control System_, em português _Sistema de Controle de Versão_, e ele é utilizado para criar versões do seu código. Essas versões podem ser para desenvolvimento, uma nova feature, entregas... É feito para ser simples e direto, igual a `um mais um é igual a dois`.

O [Git](https://git-scm.com/) surgiu em 2005 pela grande mente de Linus Torvalds, com o auxílio de Junio Hamano e outras grandes pessoas. Antes disso, as pessoas utilizavam o [SVN](https://www.google.com/search?q=svn&oq=svn&aqs=chrome..69i57.777j0j1&sourceid=chrome&ie=UTF-8) ou o CVS (Concurrent Versions System). Eu nunca usei o CVS, só usei o SVG por um período de tempo (lá em 2015) e logo depois comecei a usar o Git.

> Curiosidade: o GitHub foi lançado em 2008.

Sem dúvidas, o Git hoje é o VCS mais utilizado; é muito raro ver um projeto que use algum outro VCS. E nós temos excelentes plataformas baseadas no Git, como o [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) e o [Bitbucket](https://bitbucket.org/product).

### Como usar o Git?

Git foi feito pra ser simples - ele é utilizando com uma CLI (_command-line interface_, interface de linha de comando), e você tem comandos específicos para ações específicas - _commit_, _push_, _pull_, _cherry-pick_, _status_, _add_ e _remove_, _revert_... E, aqui entramos no primeiro pensamento que me levou a escrever esse post - _"por que as pessoas aprendem errado VCS?_"

As pessas sabem usar o Git - elas sabem os comandos; como fazer stash, push e pull dos arquivos, criar branches... Mas, muitas vezes parece que as pessoas só sabem os comandos, e não como gerenciar o versionamento do código. Estranho, não?

Bom, deixa eu explicar...

Se nós entendermos o VCS como o pacote completo - a ferramenta (Git) e o processo (PR, merges, issues, releases), as pessoas estão fazendo tudo errado - e eu vi isso acontecer em duas experiências de trabalho.

Desde PRs mal revisados, falta de comprometimento na qualidade do código e na organização das branches, péssima nomenclatura para as coisas... Todos nós somos humanos e somos suscetíveis aos erros; mas não podemos errar por falta de conhecimento ou por uma cultura mal orientada.

> E por que isso acontece?

### Cultura mal orientada

A única resposta que eu consigo enxergar é que: _"as pessoas estão focando no lugar errado"_. Você vai encontrar vários desenvolvedores que acham que são "mais desenvolvedores que os outros" porque eles sabem os comandos do terminal e não precisam utilizar apps como [GitHub Desktop](https://desktop.github.com/), [Sourcetree](https://www.sourcetreeapp.com/) ou [Sublime Merge](https://www.sublimemerge.com/) - esses apps são abstrações visuais dos comandos do Git, onde você realiza as operações sem precisar usar o terminal.

Eu uso muito esses apps (especialmente o GitHub Desktop), porque eles me dão maior domínio sobre o que eu estou fazendo - é mais fácil de ver quais arquivos estão em stash, quais foram alterados, quais serão removidos, o _diff_ entre as versões... E isso não me faz menos desenvolvedor que os outros; na verdade, esses apps me fazem ser mais rápido.

É legal saber os comandos do Git, eu concordo (inclusive eu conheço alguns desses comandos) - mas, mais importante do que saber os comandos é entender o conceito. Entender o que é um commit, uma branch, um PR, uma issue, um fork... Do que adianta ser bom no terminal e demorar mais de 4 dias para revisar (revisar, nem cogitei aprovar) um PR simples?

As pessoas focam demais no Git, como ferramenta; e não no VCS, como o ecossistema. Para mim, talvez esse seja o ponto errado. E isso só pode ser resolvido com um ajuste na cultura (e também com bastante tempo).

Se você é novo com código, não ligue se você não souber os comandos do Git de cabeça. É mais importante saber como gerenciar o código do que saber alguns comandos legais.

Aprender os conceitos, como revisar um código da maneira certa, como lidar com as issues (bugs) e como versionar corretamente seus deploys - isso é importante. Afinal, o Git é apenas uma ferramenta (muito boa inclusive) dentro de todo o ecossistema do VCS.

> Nosso foco deve ser em resolver problemas, não em ferramentas ou tecnologias específicas. Sempre se lembre disso!
