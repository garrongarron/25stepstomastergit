import React from 'react';
import logo from './logo.svg';
import './App.css';
import Command from './Command';

function App() {
    const commands = [
    {desc:'set who are you',command: 'git config --global user.name "Name Last-Name"'},
    {desc:'check who are you',command: 'git config --global user.name'},
    {desc:'set your email',command: 'git config --global user.email "my@email.com"'},
    {desc:'check your email',command: 'git config --global user.email'},
    {desc:'see colors in the console',command: 'git config --global color.ui true'},
    {desc:'see whole global configuration',command: 'git config --global --list'},
    {desc:'start a project',command: 'git init'},
    {desc:'see changes or status',command: 'git status'},
    {desc:'add a file',command: 'git add file.txt'},
    {desc:'add all changed files',command: 'git add -A'},
    {desc:'undo add file to staging area',command: 'git reset file.txt'},
    {desc:'commit',command: 'git commit -m "the awesome description of the version of our code"'},
    {desc:'see the history',command: 'git log'},
    {desc:'back in time',command: 'git checkout daskldfq345234k234h534h34k34kh25h43k234'},
    {desc:'go to the last version committed',command: 'git checkout master'},
    {desc:'see all branches',command: 'git branch'},
    {desc:'make a new branch',command: 'git branch TheSecondBranchName'},
    {desc:'go to specific branch',command: 'git checkout TheSecondBranchName'},
    {desc:'merge two branches',command: "step 1: git checkout master,\n step2: git merge TheSecondBranchName"},
    {desc:'delete a branch',command: "git branch -D TheSecondBranchName"},
    {desc:'create a repository on Github and get the https URL of the project',command: "https://github.com/garrongarron/websocket.git"},
    {desc:'over our local project folder execute',command: "git remote add origin https://github.com/garrongarron/websocket.git"},
    {desc:'check liking',command: "git remote -v"},
    {desc:'get the lastest version',command: "git pull"},
    {desc:'upload the commits',command: "git push origin master"},
    ]
  return (
      <div className="App">
      {commands.map((x, i) =>
          <Command c={x} i={i+1}/>
      )}
      </div>
  );
}

export default App;
/*
https://www.youtube.com/watch?v=dGcsHMXbSOA
https://www.youtube.com/watch?v=Law7wfdg_ls
https://www.youtube.com/watch?v=35lXWvCuM8o
*/
