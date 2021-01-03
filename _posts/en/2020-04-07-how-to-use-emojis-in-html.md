---
layout: blogpost
title:  "How to use emojis in HTML?"
date:   2020-04-07 13:30:00 -0300
category: tutorial
author: "Julio Lozovei"
image_src: "/img/blog/how-to-use-emojis-in-html/cover.jpeg"
image_author: "James Lee"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/R9rFKy_AVbw"
language: "en"
ref: "how-to-use-emojis-in-html"
---
Emojis are cool, use them - in the right way!
<!--more-->
Nowadays _emojis_ are part of human communication. They're on chat apps, graphic design banners, websites, everywhere...

Some people dislike its use on marketing and content; I personally like, sometimes more than icons. And, in order to use them on the web we need to follow some rules; to make it accessible for every one!


### First of all, what is an emoji?
Following the [wikipedia definition of an emoji](https://en.wikipedia.org/wiki/Emoji), it is an _ideogram_ used in electronic messages and web pages. They're inspired by _pictograms_ and their predecessor were the _emoticons_.

So, basically, an emoji is an image that represents a person, an object, a letter or a number. And, those images are nothing but _unicodes_ converted to visual representations.


### What could go wrong using it?
As any text or image, the interpretation of an emoji is subjective - every person will have their own. So, beware when using an emoji, because it could mean a totally different thing from what you want.

> If you use an eggplant emoji, this could mean another thing from what you want!

I don't consider it as a problem, but every platform has its own visual implementation of emojis. Facebook, Twitter, Apple, Google... Everybody has own emoji styles, and it could affect the emoji's use context.

> I like to put emojis no my projects' `README.md` files - when I see the file on a MacOS device, the emojis' style are completely different compared to a Windows device.

Since they're unicode characters converted to images, it could also lead do misunderstandings for disabled people - visual, cognitive. That's why we need to choose a clear communication line, use them (emojis) in a safe way.


### Using emojis on HTML
You may heard or know a lot of different techniques to use emojis on your page, independent of the platform you're using - WordPress, Jekyll, plain HTML, any JS framework (React, Vue, Angular, Svelte...). But, there's a simple way to use them, and I'm gonna show you:

```html
<span aria-label="Ice cream emoji" role="img">🍦</span>
```

In the example above, we're using [WAI ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) to give the emoji a semantic meaning - and it's very useful for screen readers, for example; because we're ensuring the meaning of the emoji used.

- The `aria-label` attribute will define a label to the element;
- The `role` attribute will define how the element will behave: in this case, it'll behave as an image.


### About WAI ARIA
The _WAI ARIA_ attributes can be used with any front-end framework, and will be interpreted by every browser. It can be used in addition to the new HTML5 semantic tags (article, header, footer, aside...), to provide more contextual information about your page's elements. They can be divided by three categories:

#### 1 - Roles
_Roles_ will define how the element will behave inside the document - an image, a list, an article...

#### 2 - Properties
_Properties_ will add semantic context to the element. They're used to pass information about the element for the browser and users.

#### 3 - States
_States_ will tell the browser what's going on with the element at an specific period of time - if the element is enable/disabled, hidden, open/closed...

---

The WAI ARIA _working draft_ is from 2008, and in 2014 it became a complete _W3C Recommendation_ - so, it's been there for a while. It can be hardly used with _accordions_, _dropdowns_ and many other components with visual interactions.

> A curiosity: since version [_2.3.2_](https://getbootstrap.com/2.3.2), Bootstrap implements the WAI ARIA attributes on its markup.
