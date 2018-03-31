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
        postRepository.create(post);
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
    postRepository.isExist(id).then((result)=>{
      if(!result){
        console.log(`Object with ${id} not found`);
      } else{
        prompt(updateQuestions).then(receivedAnswer => {
          if(!(receivedAnswer.title === '' || receivedAnswer.description === '')){
            postRepository.update(id, receivedAnswer.title, receivedAnswer.description);
            console.log(`Object with ${id} updated`);
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
      console.log(`Object with ${id} ${ !result ?  'not found' : 'deleted'}`)
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
    postRepository.setLike(id)
    .then((result) => {
      console.log(`Object with ${id} ${ !result ?  'not found' : 'liked'}`)
    })
  });

program
  .command('comment <id>')
  .alias('cmt')
  .description('Comment TODO item')
  .action((id) => {
    postRepository.isExist(id).then((result)=>{
      if(!result){
        console.log(`Object with ${id} not found`);
      } else {
        prompt(commentQuestions).then(receivedAnswer => {
          if(receivedAnswer.comment === ''){
            console.log('Inputed incorrect data');
          } else {
            postRepository.setComment(id, receivedAnswer.comment)
            console.log('Comment added');
          }
        });
      }
    })
  }); 

program.parse(process.argv);