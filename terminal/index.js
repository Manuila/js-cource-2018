const program = require('commander');
const { prompt } = require('inquirer');

const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

const FileManager = require('./src/js/FileManager');
const EntityTodo = require('./src/js/EntityTodo');
const Answer = require('./src/js/Answer');
const User = require('./src/js/User');
const EntityTodoRepository = require('./src/js/EntityTodoRepository');

const fileManager = new FileManager(STORAGE_PATH);
const entityTodoRepository = new EntityTodoRepository(fileManager);

const user = new User("Yauhen");

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

program
  .command('create')
  .alias('cr')
  .description('Create new TODO item')
  .action(() => {
    const entityTodo = new EntityTodo();
    entityTodo.setUser = user;
    prompt(createQuestions)
    .then((receivedAnswer) => {
      entityTodo.setAnswer = new Answer(receivedAnswer.title, receivedAnswer.description);
      entityTodoRepository.create(entityTodo);
    })
    .catch((error) => {
      throw error;
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