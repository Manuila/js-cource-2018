const program = require('commander');
const { prompt } = require('inquirer');
const Post = require('./src/js/Post');
const PostRepository = require('./src/js/PostRepository');
const postRepository = new PostRepository();

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
    post.setUser = "Yauhen";
    prompt(createQuestions)
    .then((receivedAnswer) => {
      post.setTitle = receivedAnswer.title;
      post.setDescription = receivedAnswer.description;
      postRepository.create(post);
    });
  });

program
  .command('update <id>')
  .alias('upd')
  .description('Update TODO item')
  .action((id) => {
    prompt(updateQuestions).then(receivedAnswer => {
      postRepository.update(id, receivedAnswer.title, receivedAnswer.description);
    });
  });

program
  .command('remove <id>')
  .alias('rm')
  .description('Remove TODO item by id')
  .action((id) => {
    postRepository.delete(id);
  });

program
  .command('list')
  .alias('ls')
  .description('List all TODOs')
  .action(() => {
    postRepository.getAll()
    .then((data) => {
      console.log(data);
    })
  });

program
  .command('like <id>')
  .alias('lk')
  .description('Like TODO item')
  .action((id) => {
    postRepository.setLike(id);
  });

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    prompt(commentQuestions).then(receivedAnswer => {
      postRepository.setComment(id, receivedAnswer.comment);
    });
  });

program.parse(process.argv);