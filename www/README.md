# jlozovei.dev

My (new) personal website source.

Since my website's first version I overthinked about the stack and how it would look. Of course, it's my site so I would create it in the fanciest way I could; but, I also had a personal conflict on _keeping it as simple as I can_.

For this version, my first idea was to create a blog using [Gatsby](https://www.gatsbyjs.org/). But, I felt tired of configuring all those plugins and import all my texts from Medium and dev.to into this new blog.

After getting tired with Gatsby, I thought about [Jekyll](https://jekyllrb.com/), but, the same happened again:

> _"why would I create a blog if I already use those platforms?"_

The answer isn't clear enough; my goal was to create something I could call _"mine"_. But the effort wasn't worthy - and if you ever took a look on Gatsby's source code you'll understand what am saying.

About Jekyll, well, I sure like it, but, I'll keep using Medium and dev.to for now; maybe I'll create this blog in the future.


## :gem: Stack
So, after this dilemma I decided to create a static page using [React](https://reactjs.org/), bootstrapped it with [create-react-app](https://github.com/facebook/create-react-app). I'm using the [react-i18next](https://github.com/i18next/react-i18next) plugin to create english/portuguese versions.

For global styles (reset and custom definitions) I'm using [PostCSS](https://postcss.org/) (with some nice plugins); and for components/partials based styles, I'm using [styled-components](https://www.styled-components.com/).

As the package manager, I like to use [yarn](https://yarnpkg.com/).


### :station: Routing References
GitHub Pages has some issues with client-side routing - you probably had this kind of issue before. After hours researching about it I found those two links below that provided a workaround to solve it:

- [So you want to host your Single Page React App on GitHub Pages? - ITNEXT](https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48)
- [@rafrex/spa-github-pages](https://github.com/rafrex/spa-github-pages)


## :pencil: Templating
If you want to use this project as a template, feel free to do so and also to modify anything.


## :closed_lock_with_key: License
This repo and its content is licensed under the [MIT License](https://github.com/jlozovei/me/blob/master/LICENSE).
