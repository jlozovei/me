---
layout: post
title:  "Publishing packages to npm"
date:   2020-04-08 19:20:00 -0300
category: tutorial
author: "Julio Lozovei"
image_src: "/img/blog/publishing-packages-to-npm/cover.jpeg"
image_author: "chuttersnap"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/fyaTq-fIlro"
lang: "en"
language: "en"
ref: "publishing-packages-to-npm"
---
Let's publish some packages to npm!
<!--more-->
The base of JavaScript development today is _collaboration_, we all know that. A person from other country can solve your problem by simply creating a package and sharing it on npm - and you can do it too!

When you use a npm package in your project, you need to keep in mind that you're using other persons' piece of code, and you expect that it would not break your code, or steal your information. So, if you want to publish a package on npm, you need to follow the same.

Also, you expect that the code does what it says it does - not less, not more; either if you're using a simple routing package or a complete framework. And, how to guarantee it? With tests, obviously!

So, with the 3 paragraphs above we encountereed a lot of "rules" we need to follow if we want to publish a package on npm. I mean "rules" and not **rules** because they're conventions - you can publish an empty package without tests too, but, how does it will help people?


### Published Packages
While working for Bcredi, I noticed that we were using the same piece of code in 3 or 4 different projects. The same piece of code with the same piece of tests - it was clearly an example of "how to not [DRY](https://github.com/dwmkerr/hacker-laws#the-dry-principle)".

If the validation changed, we must change it on all projects, redo the tests... A great headache at all.

To solve it, and as an opportunity to study about publishing packages - before that, I haven't published any packages - I decided to create packages for those repeated pieces. This way, we centralize the code and the tests - if we need to change anything, we do it in only one place and update the version.

The 2 packages are:
- [@jlozovei/trim-currency](https://www.npmjs.com/package/@jlozovei/trim-currency)
- [@jlozovei/format-money](https://www.npmjs.com/package/@jlozovei/format-money)

But, before accomplishing the publication, I had to learn some stuff.


### How to publish a package?
If you create a new project, run `npm init -y`, create a new `index.js` and then run `npm publish`, you can say that you've published a package. Even if the package does nothing, it'll be a published package.

But, the goal here is to help people, and an empty package like this won't help anybody.

So, as a beginner on the subject, I started to research about publishing packages. And I found 2 glorious resources that helped me through the process:

- ["How to publish packages to npm (the way the industry does things)", by Zell Liew](https://zellwk.com/blog/publish-to-npm/)
- ["How to Write an Open Source JavaScript Library", a course by Kent C. Dodds at Egghead.io](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)

Going straight to the core, to publish a nice package we need to do 4 basic things:

1. Create the project
2. Set up some tests
3. Create a CI track
4. Semantic Versioning


#### 1. Create the project
It's quite obvious, but we need to create a new project. You create a repo on your favorite VSC platform (GitHub, Bitbucket, GitLab...), and commit every change to the repo.

It'd be nice if you use a pattern for your commits, so this way the releasing will be much easier. There are a lot of nice tools to help you standartize your commits, like [commitizen](https://github.com/commitizen/cz-cli), or [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).

A great point here is to tell npm to ignore some files, using a `.npmignore` file. It's useful to avoid some files to be published within your package, like tests and examples.

> Take a look on the [npm developer guide](https://docs.npmjs.com/using-npm/developers.html)!


#### 2. Set up some tests
After the work is done, you must ensure your code will be able to be used, and also that it's working perfectly. You can use a lot of stuff to create your tests. I use [jest](https://github.com/facebook/jest) a lot because it's easy and simple to use.

Also, you can set up a coverage status - it'll tell how much of your code is covered by the tests, and will ensure that your code is reliable. There are a lot of coverage tools as well, and I like to use [codecov](http://codecov.io/) on my projects. `codecov` will read the coverage reports from your test framework and will generate reports about the coverage, showing where the code was tested and were it wasn't.


#### 3. Create a CI track
As a developer, I hate to do repeatable jobs, and I'm sure you hate it too. Leave the automated work for the machines.

Creating a CI track will help you to test and publish your package. There are a lot of good CI tools, like [Travis](https://travis-ci.org/), [CircleCI](https://circleci.com/) and the newest [GitHub Actions](https://github.com/features/actions). Basically, the `CI` (or Continuous Integration) is a machine that will execute some of your project's scripts to test and deploy the code. If anything goes wrong, it'll tell you where are the errors.


#### 4. Semantic Versioning
Semantic versioning, or _semver_ is a technique, a convention defined to establish a new version based on the changes you've made. The changes can be divided on three categories, by definition:

- **Major**: a change that will break the code (`1.0.0` to `2.0.0`).
- **Minor**: a change that add a new feature, with backwards compatibility (`1.0.0` to `1.1.0`).
- **Patch**: a change that fixes some bugs, with backwards compatibility (`1.0.0` to `1.0.1`).

> You can learn more about [semver here](https://semver.org/).


All of it will be handle by the CI track we've set up, with the help of an automator. The most famous automators are [np](https://github.com/sindresorhus/np) and [semantic-release](https://github.com/semantic-release/semantic-release).

With `np` you can choose the version by yourself; with `semantic-release`, the version will be chosen by the changes you've made (with the help of `conventional-changelog`).

By doing those 4 steps, we guarantee the code quality and we're secured to be publishing a nice package.
