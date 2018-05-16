import Post from '../src/models/Post';
import PostService from '../src/services/PostService';
import chai from 'chai';

const expect = chai.expect;

describe('PostService', () => {
  describe('when creating new post', () => {
    let post;
    let postService;

    beforeEach(() => {
      // Create a new postService object before every test.
      postService = new PostService();
      // Create a new Post object before every test.
      post = postService.create();
    });
    
    it('"id" should be generated automatically', () => {
      // This will fail if "post.id" doesn't length 36.
      expect(post).to.have.property('id').with.lengthOf(36)
      // This will fail if "post.id" doesn't type of string.
      expect(post.id).to.be.a('string');
    });

    it('"date" should be generated automatically', () => {
      expect(post).to.have.property('date');
      // This will fail if "post.date" doesn't type of string.
      expect(post.date).to.be.a('string');
    });

    it('"title" should be equals to empty string', () => {
      // This will fail if "post.title" doesn't equal empty string.
      expect(post).to.have.property('title').with.lengthOf(0)
      // This will fail if "post.title" doesn't type of string.
      expect(post.title).to.be.a('string');
    });

    it('"description" should be equals to empty string', () => {
      // This will fail if "post.description" doesn't equal empty string.
      expect(post).to.have.property('description').with.lengthOf(0)
      // This will fail if "post.description" doesn't type of string.
      expect(post.description).to.be.a('string');
    });

    it('"isPublished" should be equals to false', () => {
      expect(post).to.have.property('isPublished')
      // This will fail if "post.isPublished" doesn't equal false.
      expect(post.isPublished).to.equal(false);
    });

    it('"isLiked" should be equals to false', () => {
      expect(post).to.have.property('isLiked')
      // This will fail if "post.isLiked" doesn't equal false.
      expect(post.isLiked).to.equal(false);
    });

  });
});