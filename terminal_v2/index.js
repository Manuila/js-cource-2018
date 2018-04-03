const program = require('commander');
const { prompt } = require('inquirer');
const Post = require('./src/js/Post');
const PostRepository = require('./src/js/PostRepository');
const postRepository = new PostRepository();

const print = (...args) => console.info(...args);

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
    const post = new Post();
    post.setUser = 'Yauhen';
    prompt(createQuestions)
    .then((receivedAnswer) => {
      post.title = receivedAnswer.title;
      post.description = receivedAnswer.description;
      postRepository.add(post)
      .then(
        () => {
          print(`Object with id = ${post.id} added`);
        },
        (result) => print(result.message));
    });
  });

program
  .command('update <id>')
  .alias('upd')
  .description('Update TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then(
      (post) => {
        prompt(updateQuestions)
        .then((receivedAnswer) => {
          post.title = receivedAnswer.title;
          post.description = receivedAnswer.description;
          if (post.title && post.description){
            postRepository.update(post)
            .then(() => {print(`Object with id = ${id} updated`);});
          } else{
            print(`Data is inconsistent`);
          };
        });
      },
      (result) => print(result.message));
    });

program
  .command('remove <id>')
  .alias('rm')
  .description('Remove TODO item by id')
  .action((id) => {
    postRepository.delete(id)
    .then(
      () => {
        print(`Object with id = ${id} deleted`);
      },
      (result) => print(result.message));
  });

program
  .command('list')
  .alias('ls')
  .description('List all TODOs')
  .action(() => {
    postRepository.getAll()
    .then(print);
  });

program
  .command('like <id>')
  .alias('lk')
  .description('Like TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then(
      (post) => {
        post.isLiked = true;
        postRepository.update(post)
        .then(() => {print(`Object with id = ${id} liked`);});
      },
      (result) => print(result.message));
    });

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then(
      (post) => {
        prompt(commentQuestions)
        .then((receivedAnswer) => {
          post.comment = receivedAnswer.comment;
          if (post.comment){
            postRepository.update(post)
            .then(() => {print(`Object with id = ${id} commented`);});
          } else{
            print(`Data is inconsistent`);
          };
        });
      },
      (result) => print(result.message));
    });

program.parse(process.argv);