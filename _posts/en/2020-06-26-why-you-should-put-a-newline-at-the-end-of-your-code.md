---
layout: blogpost
title:  "Why you should put a newline at the end of your code"
date:   2020-06-26 13:30:00 -0300
category: tutorial
author: "Julio Lozovei"
image_src: "/img/blog/why-you-should-put-a-newline-at-the-end-of-your-code/cover.jpeg"
image_author: "Ilija Boshkov"
image_from: "Unsplash"
image_from_url: "https://unsplash.com/photos/0nI1DczRQAM"
language: "en"
ref: "why-you-should-put-a-newline-at-the-end-of-your-code"
---
And avoid some unexpected behaviors.
<!--more-->
Today is friday, last day of the sprint - a day to test and approve what was left for the last moment, and to make those final adjustments (if needed). Behold, the last build passed the CI; but in the front-end testing enviroment all the requests are wrong.

You open the browser's console, inspect those requests and notice an redirect rule: after the endpoint is called, the request return throws an `/404` redirect. Seeing this behavior, the first thought that comes to mind is _"the server URL must be wrong"_.

Since the endpoint path is created using environment variables, you put a `console.log` on the application to verify the variables' value - if any value is missing, we'll easily find the problem. But, everything is fine; at least on yout machine.

Environment variables are compiled at build time, so we put this `console.log` on the front-end testing environment too, to inspect the values of that environment. There you notice an error - one of those variables are returning an `undefined` value.

We found what's going wrong, but not why it's wrong. You go to your CI to check your configurations, but everything is right there - each variable with its own value, and the script used to create the dynamic values has no syntax error.

At this moment, you stand up, go to the kitchen get more coffe, come back to your machine and think: _"what the hell is going on here!?"_.

After some time, you open your local `.env` file and see no syntax error too - all variables are written right, no semicolon or quote missing... So, you open the `.env` at your master branch to compare the new modifications you've made with the ones on master.

So, you notice your local `.env` is missing a new empty line at the end of file; you go back to your CI logs and see 2 variables concatenating; we've found the reason!

Yes, the problem is this empty line at the end - you add it to your `.env`, commit the changes on testing branch, wait for the build pass and go test the requests - everything is fine now.

---

This history seems like those programming jokes, where the developer forget a `;` or a `'` somewhere on the code. It happened to me today and I got a little mad for that forgotten empty line.

> But, why an empty line would make such difference?

After solving the bug, put the correct code for testing and take a beer to celebrate everything went fine, I researched about this _newline_.


### Explanation
After some hours researching about it - on StackOverflow, StackExchange, tech blogs and even on Wikipedia - I've found a convincing answer to that question.

My `.env` file was read by a _sh_ script (shell), and there are many registers of bugs and unexpected behaviors on some command line tools while reading the file streams without this new line at the end of the source. Those behaviors can be spotted on C compilers as well.

Those readers (used by many tools) read the stream line by line - and the _newline_ will tell the reader when to stop the reading process.

Today is less common to find those kind of problem - new tools will read the blank line and ignore it. The usage of a _newline_ is a good practice because we're enabling a backward compatibility for those old tools.


### Automating
It's no big deal to manually put those empty lines at the end of all files, and you should not worry about it - a machine can work it out for you.

If you use any kind of linter/formatter on your project - like eslint, prettier.... - you can configure a empty line rule, and the responsibility is no longer yours (the formatter will do it).

> On my personal computer, I have the prettier package installed on my Sublime with a "format-on-save" option enabled - each time I save a file, prettier formats the code with all the defined rules.

Regardless of the language you use, using the _newline_ is a good practice you should follow - especially if you work with more than one platform: you write your code using a Windows, and your CI is Linux-based.

The _newline_ usage is also important because on each file modification, git will change the file _hashsum_. If you use it, it's easier to view modifications at the end of the file - if you don't use it, the _diff_ will only display that the last line was modified!
