# Step by step

## Installing

* Create a repository with the name of *js-cource-2018*
* Config for git
```bash
git config --global user.name "Yauhen Manuila"
git config --global user.email myemail@gmail.com
git config --list
git init
```
* Create files *README.md* and *.gitignore*
* Create the first commit
```bash
git add .
git status
git commit -m "first initialization"
git remote add origin https://github.com/Manuila/js-cource-2018.git
git push -u origin master
```
* Create the branch on your local machine and switch in this branch :
```bash
git checkout -b terminal
```
* Push the branch on github :
```bash
git push origin terminal
```
* You can see all branches created by using :
```bash
git branch
```
* Create file *package.json*
```bash
npm init
```
* Install npm packages
```bash
npm install commander --save-dev
```
```bash
npm install inquirer --save-dev
```
```bash
npm install uuid --save-dev
```
```bash
npm install fs --save-dev
```
```bash
npm install util --save-dev
```