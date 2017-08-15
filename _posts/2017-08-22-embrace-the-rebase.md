---
title: Embrace the rebase
description: Rebasing is often contested and even considered evil. But what if I told you it shouldn't be?
permalink: /embrace-the-rebase
tags: [tool, tooling, open source, tech, git, github, ci, reviews, nodejs, node, rebase, process, workflow. fixup, squash]
---

Don't you just love it when people form an opinion based on another person's ideas? We come across it all the time, and I have to admit I'm no stranger to this either. **Everyone's lazy by default**. When it comes to opinions about git rebase, there's plenty to be found. Some are valid, others not so much depending on the situation. Without further ado, let me introduce how I learned to love the rebase based on personal experience.

 To understand where this love comes from, let me start by explaining our workflow. By now, everyone should be familiar with <a href="<https://guides.github.com/introduction/flow/>
" target="_blank">GitHub flow</a>, which we also use. People pick up a task, create a branch, do some work, merge everything back to master and deploy.

I can illustrate the advantages of git rebase based on two use-cases.

## Git history

Source control is used as a means to understand and document how our code changed along the way. Current git workflows 

Now, before merging everything to master we review  