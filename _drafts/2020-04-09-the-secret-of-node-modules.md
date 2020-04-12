---
layout: post
title: The secret of node_modules
date: 2020-04-09T21:15:00.000+00:00
category: study
author: Julio Lozovei
image_src: https://images.unsplash.com/photo-1511075675422-c8e008f749d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2254&q=80
image_author: Stefan Steinbauer
image_from: Unsplash
image_from_url: https://unsplash.com/photos/HK8IoD-5zpg

---
Have you ever asked why node_modules is so big?
<!--more-->
There's a lot of jokes about `node_modules` and its size - it's no secret. But, have you asked yourself why is it so big? Or why does it occupies a large disk size?

I asked it myself a couple times and, to discovery it, I made a simple test. The results I've found almost shocked me.

For those who are new in the business, `node_modules` is the directory that Node.js automatically creates when you install a package - the source code of those packages are stored in this directory, and you may not edit its content, since you can lose those alterations when a package is installed.

When you publish a package on npm registry, the content of your repository will be published to the registry - your `package.json` file, your source code, the tests, the license... And when you update the package's version, the registry will be updated with the new files. _Eezy peezy_.

But, as I said, the content of your repo will be published - and here lies a secret; well, it's not a secret, but people don't pay attention to it.

### The Secret

Between 11/2019 and 02/2020 I made a study case to understand why node_modules is so big. I made the test with my website's old version, which was a React app boostraped with [create-react-app](https://github.com/facebook/create-react-app), and I was using [styled-components](https://github.com/styled-components/styled-components) - you can take a look on the [`package.json`](https://github.com/jlozovei/me/blob/dea2c41107d67e53cafc8b1d03715e59d5e4eff4/www/package.json) used.

To do the test I made three initial thigs:

1. Deleted the _node modules_ dir from the original project;
2. Copy/paste the project, to create two versions on disk;
3. Installed the packages on the new created directory.

After doing it, I registered the `node_modules` size on disk and how many files it contained. Then I started to search its content for `.md`, `LICENSE` and `.test` files, and for `/config`, `/example`, `ignore` and `/test` directories. Also, searched for images, bash and shell scripts, texts and log extensions.

My first results were:

| dir | size | file count | description |
| --- | --- | --- | --- |
| /me | 170,7MB | 46.749 | my project's root folder |
| /me/www | 167MB | 46.743 | the folder where the react app was |
| /me/www/node_modules | 164,6MB | 46.658 | the node_modules for my app |

If I consider only my project's files, they were about 85 and 2,4MB of disk size. And about the random files I found inside `node_modules`:

| name/extension | type | count |
| --- | --- | --- |
| .md | file | 2766 |
| .txt | file | 88 |
| README | file | 1734 |
| CHANGELOG | file | 420 |
| gulpfile.js | file | 303 |
| gruntfile.js | file | 113 |
| /test | folder | 177 |
| /example | folder | 36 |
| .github | dotfolder | 36 |

Those were the highlights - I've also found a lot of `Makefile`, linting config files (eslin, prettier), test coverage and sets config file, dotfiles and dotfolders...

It's a lot of useless stuff. Don't you think? And, what scared me the most is: when you install a package, or when you install the whole dependencies of your project, you're donwload a bunch of files you won't use and you're spending your connection to download them.

After those results I've thought - "damn, it's impossible the packages uses all of those files". Because, it doesn't makes sense. When you `import` or `require` a package on your `.js` files, you only use what you're requiring - and most of the times, you'll require an already minified file - never the "development" version of the code.

Those files - testing, configuration, instructions... - are meant to be present when you're developing, and people won't use the npm registry code to develop - they'll use the VSC code, which would be on GitHub, Bitbucket, GitLab...

In front of it, I started to "clean" the `node_modules`, removing all of those useless files. I've made 3 rounds of cleaning, which were:

1. Removed `.md`, `.txt`, `.log`, `.snap`, `LICENSE` files and `/example(s)` folders;
2. Remove test files, CI recipes and dotfiles
3. Removed `.markdown` (yes, there were `.md` and `.markdown`), `.test`, `CHANGES.*`, `AUTHORS.*` lost dotfiles and dotfolders

I've kept all `*.js/ts`, `*.json`, `*.lock`, `*.npmignore`, `*,yml/yaml`, `*.bin`, `.git` and `.gitattributes` files. And, during the cleaning rounds, there was only 1 file I've deleted that broke the app - a `.js` file wrong deleted.

The results I've got after the cleaning were:

| dir | size | file count |
| --- | --- | --- |
| /me | 142,9MB | 37.979 |
| /me/www | 139,2MB | 37.973 |
| /me/www/node_modules | 136,8MB | 37.888 |

From `164,6MB` to `136,8MB` disk size: almost 28MB; and more than 8k useless files removed. Considering the app's files were about 2,4MB of disk size, 28MB is almost 10x my project.

Since it was a small project, and my machine has a large amount of free disk space, I didn't felt any difference on performance - but, it's a considerable number.

But, how can we ignore those files when publishing a package to npm? Simply, using a `.npmignore` file would solve.

The `.npmignore` file works exactly as a `.gitignore` file - it'll tell npm to ignore files and folders when publishing the package. Inside of it, you can use glob formats for files and folders.

When we talk about disk size, it may be a controversial topic. Quite often people encourage the usage of [Docker](https://www.docker.com/), to hold everything inside its containers - and I agree with it! Docker is a nice tool to use to develop and ship code.

I can only speak of myself about it, but, when I finish a project which I know there won't be any maitenance, I drop it from my machine and keep it only in the VCS - I bet a lot of other developers do the same.

But, the point I want to explore here is the amount of connection we're wasting to publish and download those files.

### The Problem

Searching for npm download rates, I've found [npm-stat](https://npm-stat.com/), an open source download statistics for npm registry. There you can filter the download rate for a specific package within a time period.