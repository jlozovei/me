---
layout: post
title:  "Como usar emojis no HTML?"
date:   2020-04-07 13:30:00 -0300
category: tutorial
author: "Julio Lozovei"
image_src: "/img/blog/how-to-use-emojis-in-html/cover.jpeg"
image_author: "James Lee"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/R9rFKy_AVbw"
language: "pt-br"
ref: "how-to-use-emojis-in-html"
---
Emojis são legais, use eles - mas do jeito certo!
<!--more-->
Hoje os _emojis_ fazem parte da comunicação humana. Eles estão presentes nos apps de chat, em banners, nos sites, em todos os lugares...

Algumas pessoas não gostam do uso deles em marketing e conteúdos; eu pessoalmente gosto, muitas vezes mais do que ícones. E, para usarmos eles na web, precisamos seguir algumas regras para que eles sejam acessíveis para todo mundo.


### Primeiro de tudo, o que é um emoji?
Seguindo a [definição de um emoji pela wikipedia](https://pt.wikipedia.org/wiki/Emoji), ele é um _ideograma_ utilizado em mensagens eletrônicas e em páginas da web. Eles são inspirados pelos _pictogramas_ e os seus antecessores eram os _emoticons_.

Então, basicamente, um emoji é uma imagem que pode representar uma pessoa, um objeto, uma letra ou um número. E, essas imagens nada mais são do que _unicodes_ convertidos para uma representação visual.


### O que pode dar errado usando eles?
Como qualquer texto ou imagem, a interpretação de um emoji é subjetiva - cada pessoa terá a sua própria. Então, cuidado quando você usar um emoji - ele pode significar algo totalmente diferente do que você quer.

> Se você usar um emoji de uma beringela, bem, isso pode significar outra coisa totalmente diferente.

Eu não considero isso como um problema, mas cada plataforma tem a sua implementação visual dos emojis. Facebook, Twitter, Apple, Google... Cada um deles tem seus estilos de emoji, e talvez isso possa afetar o contexto de uso do emoji.

> Eu gosto de usar emojis nos arquivos `README.md` dos meus projetos. Quando abro esses arquivos em um MacOS o estilo deles é completamente diferente de um dispositivo que usa Windows.

Como os emojis são caracteres unicodes convertidos em imagens, isso pode levar a possíveis desentendimentos para pessoas com deficiência - sejam deficiências visuais, congnitivas... E é por isso que precisamos escolher uma linha de comunicação simples, e usar os emojis da maneira correta.


### Usando emojis no HTML
Existem várias técnicas para usar emojis no seu site, independente da plataforma que você use - WordPress, Jekyll, HTML puro, qualquer frameworks JS (React, Vue, Angular, Svelte...). Mas, existe uma maneira bem simples, e eu vou mostrar para você:

```html
<span aria-label="Ice cream emoji" role="img">🍦</span>
```

No exemplo acima, estamos usando [atributos WAI ARIA](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA) para dar um significado semântico ao emoji - e isso é muito útil para leitores de tela, por exemplo; porque estamos garatindo o significado do emoji utilizado.

- O atributo `aria-label` vai definir uma `label` (ou rótulo) para o elemento;
- O atributo `role` vai definir como o elemento irá se comportar: no caso, como uma imagem.


### Sobre WAI ARIA
Os atributos _WAI ARIA_ podem ser utilizados em qualquer framework front-end, e eles serão interpretados por todos os browsers. Eles podem ser utilizados em conjunto com as novas tags semânticas do HTML5, para dar mais informação sobre o contexto dos elementos da sua página. Os atributos podem ser dividos em três categorias:

#### 1 - Roles (ou funções)
_Roles_ vão definir como o elemento se comporta dentro do documento - uma imagem, uma lista, um artigo...

#### 2 - Properties (ou propriedades)
_Properties_ irão adicionar significado semântico ao elemento. Elas são utilizadas para passar informações do seu elemento para o navegador e para os usuários.

#### 3 - States (ou estados)
_States_ vão dizer ao navegador o que está acontecendo com um elemento em um período específico de tempo - se o elemento está habilitado ou desabilitado, escondido, aberto ou fechado...

---

O rascunho (_working draft_) do WAI ARIA tem a data de 2008, e desde 2014 ele se tornou uma recomendação da W3C - então, já faz um bom tempo que ele existe. Esses atributos podem ser utilizados em _accordions_, _dropdowns_ e vários outros componentes que possuam interações visuais.

> Curiosidade: desde a versão [_2.3.2_](https://getbootstrap.com/2.3.2), o Bootstrap implementa os atributos WAI ARIA nos seus componentes.
