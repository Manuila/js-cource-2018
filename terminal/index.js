const program = require('commander');
const { prompt } = require('inquirer');

const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

const FileManager = require('./src/js/FileManager');
const Answer = require('./src/js/Answer');

const fileManager = new FileManager(STORAGE_PATH);

program
  .version('0.0.1')
  .description('TODO app');

// Craft questions to present to users
const createQuestions = [
  {
    type : 'input',
    name : 'title',
    message : 'Enter title ...'
  },
  {
    type : 'input',
    name : 'description',
    message : 'Enter description ...'
  },
];

const updateQuestions = [
  {
    type : 'input',
    name : 'title',
    message : 'Enter new title ...'
  },
  {
    type : 'input',
    name : 'description',
    message : 'Enter new description ...'
  },
];

const commentQuestions = [
  {
    type : 'input',
    name : 'comment',
    message : 'Enter comment ...'
  },
];

const todos = [];

program
  .command('create')
  .alias('cr')
  .description('Create new TODO item')
  .action(() => {
    const answer = new Answer();
    prompt(createQuestions)
      .then((receivedAnswer) => {
        answer.setTitle = receivedAnswer.title;
        answer.setDescription = receivedAnswer.description;
        return fileManager.openFile();
      })
      .then(() => {
        return fileManager.readFile();
      })
      .then((data) => {
        if(!data){
          const temp = '{"todos":[]}';
          fileManager.writeFile(temp);
          data = temp;
        }
        return JSON.parse(data);
      })
      .then((obj) => {
        obj.todos.push(answer);
        return obj;
      })
      .then((updatedObj) => {
        return JSON.stringify(updatedObj);
      })
      .then((data) => {
        fileManager.writeFile(data);
      })
      .catch((error) => {
        console.error(`error: ${error}`);
      });
  });

program
  .command('update <id>')
  .alias('upd')
  .description('Update TODO item')
  .action((id) => {
    prompt(questions).then(answers => {
      // TODO update todo
    });
  });

program
  .command('remove <id>')
  .alias('rm')
  .description('Remove TODO item by id')
  .action((id) => {
    // TODO remove item
  });

program
  .command('list')
  .alias('ls')
  .description('List all TODOs')
  .action(() => {
    // TODO write todos list to the cli
  });

program
  .command('like <id>')
  .alias('lk')
  .description('Like TODO item')
  .action((id) => {
    // TODO mark todo item as liked
  });

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    prompt(commentQuestions).then(answers => {
      // TODO comment for todo item
    });
  });

program.parse(process.argv);