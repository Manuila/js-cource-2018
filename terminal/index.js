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
    post.setUser = 'Yauhen';
    prompt(createQuestions)
    .then((receivedAnswer) => {
      if(!(receivedAnswer.title === '' || receivedAnswer.description === '')){
        post.setTitle = receivedAnswer.title;
        post.setDescription = receivedAnswer.description;
        postRepository.add(post);
        console.log('Object created');
      } else {
        console.log('Inputed incorrect data');
      }
    });
  });

program
  .command('update <id>')
  .alias('upd')
  .description('Update TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then((post)=>{
    if(!post){
      console.log(`Object with id = ${id} not found`);
    } else {
      prompt(updateQuestions).then(receivedAnswer => {
        if(!(receivedAnswer.title === '' || receivedAnswer.description === '')){
          post.title = receivedAnswer.title;
          post.description = receivedAnswer.description;
          postRepository.update(post)
          console.log('Object updated');
        } else {
          console.log('Inputed incorrect data');
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
      console.log(`Object with id = ${id} ${ !result ?  'not found' : 'deleted'}`)
    })
  });

program
  .command('list')
  .alias('ls')
  .description('List all TODOs')
  .action(() => {
    postRepository.getAll()
    .then((result) => {
      console.log(result);
    })
  });

program
  .command('like <id>')
  .alias('lk')
  .description('Like TODO item')
  .action((id) => {
    postRepository.getById(id)
    .then((post)=>{
      if(!post){
        console.log(`Object with id = ${id} not found`);
      } else {
        post.isLiked = true;
        postRepository.update(post)
        console.log('Object liked');
      }
    })
  }); 

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    postRepository.getById(id).then((post)=>{
      if(!post){
        console.log(`Object with id = ${id} not found`);
      } else {
        prompt(commentQuestions).then(receivedAnswer => {
          if(receivedAnswer.comment === ''){
            console.log('Inputed incorrect data');
          } else {
            post.comment = receivedAnswer.comment;
            postRepository.update(post)
            console.log('Comment added');
          }
        });
      }
    })
  }); 

program.parse(process.argv);