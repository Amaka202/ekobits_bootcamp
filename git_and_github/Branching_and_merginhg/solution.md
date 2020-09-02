## What does git clean do?

to remove untracked or unmerged file from the working directory.


## What do the -d and -f flags for git clean do?
 **-d**  Remove untracked directories in addition to untracked files. If an untracked directory is managed by a different Git repository, it is not removed by default. Use -f option twice if you really want to remove such a directory.
 
 **-f** If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f, -n or -i. Git will refuse to delete directories with .git sub directory or file unless a second -f is given.



## What git command creates a branch?
 git checkout -b [branch_name]


 ## What is the difference between a fast-forward and recursive merge?

**fast-forward merge** is when git can easily tell when the commits happened and "put" one set of commits on top of another chronologically.

**recursive merge** When different commits happen at different times on two branches, and git can not easily determine what order these commits happened in, a recursive merge needs to happen.


## What git command changes to another branch?
git checkout {branch_name}


## How do you remove modified or deleted files from the working directory?

git rm --cached NAME_OF_FILE

## What git command deletes a branch?

git branch -D NAME_OF_BRANCH

## What does the git diff command do?

to compare the history of your code at two different points in time

## How do you remove files from the staging area?
git rm --cached.


## How do merge conflicts happen?

when you commit changes to the same file on two different branches. In that case, Git does not know which commit to go with so it creates a merge conflict