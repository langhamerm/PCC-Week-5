# Git Basic Interview Questions

1. What is the difference between Git and GitHub?
git - version controll software and github is a hub for get with the repositories
2. Why would you use Git?
version conrol -track the changes that anyone makes to your project (banches) contributors

3. Why would you use GitHub?
store projects remotely

4. What is the first step necessary to create a _local_ Git repository?
could do it in command line 
 * 'git init'
5. Once a repository is created and linked to GitHub, what are the three commands you need to do each time you create or modify files to send something up to GitHub?
    * `git add `
    `git commit -m <comment>`
    `git push orgin <branch name>`
6. How do you update your local repository from GitHub?
`git pull orgin <branch name>`
7. What is one way to create a new branch?
`git branch`
8. What is one way to check and see what branch you are currently in? (a terminal/bash command)?
`git branch`
9. What is it called when you make a request on GitHub to merge a branch into another branch?
 a merge
10. How would you delete a _local_ Git repository?
`rm -R .git`
11. What does `git clone` do?
clones a repor into  a local machine
12. What is "branching" for?
so that all collaborators on a project can work at the same time witout over writing somones code or comflicts with other parts of the project.
