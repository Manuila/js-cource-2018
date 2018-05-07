import LocalStorageManagerMock from '../src/utils/LocalStorageManagerMock';
import PostsListDAO from '../src/dao/PostsListDAO';
import PostService from '../src/services/PostService';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;

describe('PostsListDAO', () => {
  describe('when creating new post', () => {
    let postsListDAO;
    let localStorageManager;
    let postService;
    let post1;
    let post2;

    beforeEach(() => {
      // Create a new DummyLocalStorageManager object before every test.
      localStorageManager = new LocalStorageManagerMock();
      // Create a new postsListDAO object before every test.
      postsListDAO = new PostsListDAO(localStorageManager);
      postService = new PostService();
      post1 = postService.create();
      post2 = postService.create();

    });
    
    describe('#add', () => {
        it('should be added the post', () => {
          postsListDAO.add(post1);
          expect(postsListDAO.getAll().length).to.equal(1);
          postsListDAO.add(post2);
          expect(postsListDAO.getAll().length).to.equal(2);
        });
    });

    describe('#remove', () => {
        it('should be removed the post', () => {
          postsListDAO.add(post1);
          expect(postsListDAO.getAll().length).to.equal(1);
          postsListDAO.remove(post1);
          expect(postsListDAO.getAll().length).to.equal(0);
        });
    });

    describe('#getById', () => {
        it('should be returned the post', () => {
          postsListDAO.add(post1);
          expect(postsListDAO.getById(post1.id)).to.equal(post1);
        });
    });

    describe('#update', () => {
        it('should be updated the post', () => {
          postsListDAO.add(post1);
          expect(postsListDAO.getAll().length).to.equal(1);
          const post = postsListDAO.getById(post1.id);
          post.title = 'newTitle';
          post.description = 'newDescription';
          postsListDAO.update(post);
          expect(postsListDAO.getAll().length).to.equal(1);
        });
    });

    describe('#getAll', () => {
        it('should be returned the all posts', () => {
          postsListDAO.add(post1);
          expect(postsListDAO.getAll().length).to.equal(1);
          postsListDAO.add(post2);
          expect(postsListDAO.getAll().length).to.equal(2);
        });
    });

   

    
  });
});