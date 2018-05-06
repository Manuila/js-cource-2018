import Post from '../src/models/Post';
import PostService from '../src/services/PostService';
import chai from 'chai';
import dateFormat from 'dateformat';

chai.should();
const expect = chai.expect;

describe('PostService', () => {
  describe('#when creating new post', () => {
    let post;
    let postService;

    beforeEach(() => {
      // Create a new postService object before every test.
      postService = new PostService();
      // Create a new Post object before every test.
      post = postService.create();
    });
    
    it('"id" should be generated automatically', () => {
      // This will fail if "post.id" doesn't type of string.
      expect(post.id).to.be.a('string');
      // This will fail if "post.id" doesn't length 36.
      expect(post.id).to.have.lengthOf(36);
    });

    it('"date" should be generated automatically', () => {
      // This will fail if "post.date" doesn't type of string.
      expect(post.date).to.be.a('string');
      // This will fail if "post.date" doesn't length 25.
      expect(post.date).to.have.lengthOf(25);
    });

    it('"title" should be equals to empty string', () => {
      // This will fail if "post.title" doesn't type of string.
      expect(post.title).to.be.a('string');
      // This will fail if "post.title" doesn't equal false.
      post.title.should.equal('');
    });

    it('"description" should be equals to empty string', () => {
      // This will fail if "post.description" doesn't type of string.
      expect(post.description).to.be.a('string');
      // This will fail if "post.description" doesn't equal false.
      post.description.should.equal('');
    });

    it('"isPublished" should be equals to false', () => {
      // This will fail if "post.isPublished" doesn't equal false.
      post.isPublished.should.equal(false);
    });

    it('"isLiked" should be equals to false', () => {
      // This will fail if "post.isLiked" doesn't equal false.
      post.isLiked.should.equal(false);
    });
  });
});