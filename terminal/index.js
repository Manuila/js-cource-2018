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
      if(!(receivedAnswer.title === '' || receivedAnswer.description === '')){
        post.setTitle = receivedAnswer.title;
        post.setDescription = receivedAnswer.description;
        postRepository.add(post)
        .then(print('Object created'));
      } else {
          print('Inputed incorrect data');
      }
    });
  });

program
  .command('update <id>')
  .alias('upd')
  .description('Update TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then((post)=> {
    if(!post){
      print(`Object with id = ${id} not found`);
    } else {
      prompt(updateQuestions).then(receivedAnswer => {
        if(!(receivedAnswer.title === '' || receivedAnswer.description === '')){
          post.title = receivedAnswer.title;
          post.description = receivedAnswer.description;
          postRepository.update(post)
          .then(print('Object updated'));
        } else {
            print('Inputed incorrect data');
        }
      });
    }
  })
});

program
  .command('remove <id>')
  .alias('rm')
  .description('Remove TODO item by id')
  .action((id) => {
    postRepository.delete(id)
    .then((result) => {
      print(`Object with id = ${id} ${ !result ?  'not found' : 'deleted'}`)
    })
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
    .then((post)=>{
      if(!post){
        print(`Object with id = ${id} not found`);
      } else {
        post.isLiked = true;
        postRepository.update(post)
        .then(print('Object liked'));
      }
    });
  }); 

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then((post)=>{
      if(!post){
        print(`Object with id = ${id} not found`);
      } else {
        prompt(commentQuestions).then(receivedAnswer => {
          if(receivedAnswer.comment === ''){
            print('Inputed incorrect data');
          } else {
            post.comment = receivedAnswer.comment;
            postRepository.update(post)
            .then( print('Comment added'));
          }
        });
      }
    });
  }); 

program.parse(process.argv);