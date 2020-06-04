---
layout: post
title:  "We are learning VCS wrong"
date:   2020-05-22 12:10:00 -0300
category: thoughts
author: "Julio Lozovei"
image_src: "/img/blog/we-are-learning-vcs-wrong/cover.jpeg"
image_author: "Yancy Min"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/842ofHC6MaI"
language: "en"
ref: "we-are-learning-vcs-wrong"
---
Have you ever thought about it?
<!--more-->
Well, the title may sound a little catchy, or even a clickbait - sorry about it. But, in the last couple of months I've been wondering about it - _"is there a right way to learn how to VCS?"_

And, while wondering about it, I saw my early days as a developer: learning how to deal with code, learning what was a PR (pull request), what was a merge and all that kind of stuff which became trivial to me. In my early days I used SVN at work, and I didn't know what was Git - with SVN I learned how to separate my tasks from the "production's code", and it worked very well.

Then, some months after, at my first job we migrated from SVN to Git-based projects. I don't remember any pain during this migration - in fact, I don't remember much from my first job experience - except the amazing people, the coffee and the great tips I've heard there (from development to life issues).


### First of all - what is a VCS?
VCS stands for _Version Control System_, and it's used to create versions of your codebase. Those versions can be for development, new features, releases and milestones. Clear as water, simple as `one plus one equals two`.

[Git](https://git-scm.com/) emerged in 2005 by the great mind of Linus Torvalds, with the help of Junio Hamano and many other great people. Before it, people quite often used [SVN](https://www.google.com/search?q=svn&oq=svn&aqs=chrome..69i57.777j0j1&sourceid=chrome&ie=UTF-8) or CVS (Concurrent Vesions System). I never used CVS, only used SVN for a short period of time (back in 2015) and then dived into Git.

> As a curiosity, GitHub was launched 2008.

Git is the most used VCS with no doubts; nowadays it's very uncommon to see a project using a different VCS. And we also have nice Git-based platforms, such as [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) and [Bitbucket](https://bitbucket.org/product).


### How to use Git?
Git is made to be simple - it's used under a CLI (command-line interface), and you have specific commands for specific actions: _commit_, _push_, _pull_, _cherry-pick_, _status_, _add_ and _remove_, _revert_... And, here we start to enter on my first wondernig which led me into this post - _"why people learn VCS the wrong way?_"

I mean, people know how to use Git - they know the commands; how to stash, push and pull files, create branches... But sometimes it seems people only know the commands, and not to manage the code versioning. Strange, isn't it?

Well, let me explain...

If we understand the VSC as the whole package - the tool (Git) and the process (PR, merges, issues, releases), people are doing it very wrong in my opinion - and I faced this reality in two different job experiences.

Bad-reviewed pull requests, the lack of commitment on code quality and branch organisation, bad nomenclature for stuff... We're all humans, liable to error; but we we can't go wrong for lack of knowledge or for a misguided culture.

> And, why does it happens?


### Misguided culture
The only answer that comes to my mind when I wonder about it is: _"people are focusing on the wrong spot"_. You can find lots of developers which claims themselves "more developers than others" because they know how to deal with Git on the terminal, without using an app like [GitHub Desktop](https://desktop.github.com/), [Sourcetree](https://www.sourcetreeapp.com/) or [Sublime Merge](https://www.sublimemerge.com/) - these apps are visual abstractions of Git's commands, where you can commit files without opening a terminal.

I use those apps a lot (specially GitHub Desktop), since they bring me dominance over what I'm doing - you can see clearer which files were added/removed/changed, which files you're commiting, the _diff_ between the versions... And they don't make me less developer than my colleagues; in fact, those apps make me faster than my colleagues.

It's nice to know Git commands, I surely agree - but, more important than knowing the commands is to know the concepts. What is a commit, a branch, a PR, an issue, a fork... What's the deal on knowing how to merge branches within the terminal and taking more than 4 days to reviewing (and I'm not asking for approves, just a review) a simple PR?

People focus a lot on Git, as the tool; and not on the VCS, as the system. For me, it may be the wrong spot. And it can only be fixed with culture (and a great amount of time).

If you're a newcomer, doesn't mind if you don't master Git's commands. It's more important to learn how to manage code than knowing a few bunch of nice commands.

Learn the concepts, how to effectively review a code, how to deal with issues and how to versionate correctly your deploys. After all, Git is just a (freaking nice and useful) tool inside the VCS ecosystem.

> Our focus should be on solving problems, not on tools or specific technologies. Always remember that!
