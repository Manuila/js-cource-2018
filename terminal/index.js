const program = require('commander');
const { prompt } = require('inquirer');

const path = require('path');
const STORAGE_PATH = path.resolve('./store.json');

const FileManager = require('./src/js/FileManager');
const EntityTodo = require('./src/js/EntityTodo');
const Answer = require('./src/js/Answer');
const User = require('./src/js/User');
const EntityTodoRepository = require('./src/js/EntityTodoRepository');

const EntityTodoContext = require('./src/js/EntityTodoContext');
const fileManager = new FileManager(STORAGE_PATH);
const entityTodoContext = new EntityTodoContext(fileManager);

const entityTodoRepository = new EntityTodoRepository(entityTodoContext);
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
    });
  });

program
  .command('update <id>')
  .alias('upd')
  .description('Update TODO item')
  .action((id) => {
    prompt(updateQuestions).then(receivedAnswer => {
      //entityTodoRepository.update(id, receivedAnswer.title, receivedAnswer.description);
    });
  });

program
  .command('remove <id>')
  .alias('rm')
  .description('Remove TODO item by id')
  .action((id) => {
    entityTodoRepository.delete(id);
  });

program
  .command('list')
  .alias('ls')
  .description('List all TODOs')
  .action(() => {
    entityTodoRepository.getAll()
    .then((data) => {
      console.log(data);
    })
  });

program
  .command('like <id>')
  .alias('lk')
  .description('Like TODO item')
  .action((id) => {
    //entityTodoRepository.setLike(id);
  });

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    prompt(commentQuestions).then(receivedAnswer => {
      //entityTodoRepository.setComment(id, receivedAnswer.comment);
    });
  });

program.parse(process.argv);