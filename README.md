Angular best practices
======================

A set of Best Practices for AngularJS : [xebia-france.github.io/angular-best-practices](xebia-france.github.io/angular-best-practices)

## History

Angular is a framework that we used since 2012 at our customers, at Xebia. From this experience, we already learned some strong best practices about the coding, the design, and the choice of tool around this tool.

In order to share our knowledge and our expertise in Xebia but to the community too, we decided to create this set of best practices.
  

## How to contribute

### Global structure

We don't claim have the best advices, so of course, this book is open to contributions. You can add new advices, update an existing one, remove an obsolete advice !?

This first thing to know is, what kind of best pratices you want add/update ? Actually we have three types of advice :
 - Coding
 - Architecture
 - Tools

You are free to add your own chapter, if you think it can't be put away in the existing one.
For each chapter you have a respective folder containing a README.md file in the root path of the project. We have one differnt markdown file for one advice.

### Explainations

Follow this steps to contribute :
 - Fork the central project
 - Add your best practices by creating a new markdown file in the correct folder corresponding to a chapter (or create your own folder)
 - Update the SUMMARY.md file (in root of the project) to add a reference to   your new markdown file. (To see the result your can follow the local install chapter)
 - Push our pull request 

NOTE :
Fell free to position our advice in the summary, but like the content, we will discuss of it in the pull-request's issue, in order to find its best place.


## Local install

  - `npm install -g gulp`
  - `npm install`
  - `gulp`
  - See the result : http://localhost:4000/
  
## Deploy on your github pages

  - `gulp deploy`
