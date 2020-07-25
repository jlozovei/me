---
layout: post
title:  "No framework is the best framework"
date:   2020-07-25 14:00:00 -0300
category: opinion
author: "Julio Lozovei"
image_src: "/img/blog/no-framework-is-the-best-framework/cover.jpg"
image_author: "Todd Quackenbush"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/IClZBVw5W5A"
language: "en"
ref: "no-framework-is-the-best-framework"
---
Set free from the framework's handcuffs.
<!--more-->
It's very common for us to find a new _framework_ inside the JavaScript ecosystem. Almost every day we can spot a new one (for us or a newcomer), which claims to be the solution for all of our problems.

At first place, we need to know what is a _framework_: put simply, a _framework_ is an abstraction to solve recurring problems using a generic solution/approach. In many places you'll find a similar definition for _libraries_.

But, the main difference between a _lib_ and a _framework_ is its scope. Consider [React](https://reactjs.org/) and [Angular](https://angular.io/) - the first is a library to build user interfaces; the second is a framework to build SPAs. The difference between them is their scope - inside Angular you'll have routing, services and its _helpers_; and inside React you won't have any of it, but only if you install other _libs_ to accomplish what you want, and those libs will only do what is inside their scope.

Many times we use those libs and frameworks so much that we forget what's behind - JavaScript. And it happened to me when I was starting my career as a front-end developer. When I've started to develop, I used a lot [Boostrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/) for everything. To build a simple page or a huge dashboard, I would put them as dependencies.

And, in a specific project I had a restriction for those dependencies - and it was when I realized that I didn't know JavaScript, but only jQuery. I knew so much the jQuery's functions that I wasn't able to tell if they were from jQuery or native JS. For example, to query elements on the DOM, you'd use the following code:

```js
var element = $('.element');

// or var element = jQuery('element');
```

But, this function is from jQuery, which will render the native JS code:

```js
var element = document.querySelector('.element');
```

Beyond the selectors, it will happen to add/remove classes and other attributes, event listeners, API calls, and many other cases.

And that was the time when I started to really learn JS and how everything worked - I saw jQuery source code to know what all of those functions worked and how they used the JS native code, I learned about _clojures_ and _IIFEs_... And, since then I started to follow the what's inside this article's title:

> No framework is the best framework.

Of course, there are cases which will be easier and simpler to use a lib or a framework to solve a problem - it would save you time and effort, and we won't rebuild the wheel every day. Have you ever thought about writing for yourself the same front-end routing code for every single project you work on? It's not hard, but there are a few libs which do it for you, and your effort is to use them the right way.

But, there will be cases in which the usage of a lib or a framework would only put unnecessary complexity in your _codebase_. I always take the example of [Developer Titles](https://developertitles.com/): I've made it using _VanillaJS_ (JS in its "pure form") with [Webpack](https://webpack.js.org/) as my bundler.

If I used React, or Vue, or any other _hype_ my codebase would became larger and complex, it would increase the number of dependencies, increase the building time... And I see those increasings as unnecessary - our plain old JS can handle it by itself.

Today I see lots of developers excited about those new tools which surrounds front-end development, but they don't know the power and simplicity of JavaScript in its "normal" state - even so after the evolution we're seeing after the emerge of [ES6](https://www.w3schools.com/js/js_es6.asp) on 2015.

---

In the last couple of years I had the luck to know great developers - by changing my job, or going to meetups, or even knowing friends of friends. And due to this contact I'm focusing on those simple, well-written things over those projects with high complexity which solves nothing.

Talking this way would seem that I condemn some tools, but I don't. I just want to say that we, developers, should always focus on simplicity - having the [KISS Princple](https://github.com/dwmkerr/hacker-laws/blob/master/README.md#the-kiss-principle) in our heads when we're developing.

If we focus on simplicity, explicity and solving the problem, the chance of _overengineering_ will decrease dramatically, and we're creating a code that will be simple for other people maintain; even because we're always writing code for other people, not for ourselves or machines.
