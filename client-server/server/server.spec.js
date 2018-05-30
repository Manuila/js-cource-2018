import request from 'supertest';
import expect from 'expect';
import app from './server';
import Post from './models/post';


// const posts = [
//     new Post({ title: 'Title1', description: 'Description1', isPublished: false, isLiked:false }),
//     new Post({ title: 'Title2', description: 'Description2', isPublished: false, isLiked:false }),
//   ];
// Post.create(posts);

describe('GET /posts', () => {
	it('should get all posts', (done) => {
		request(app)
			.get('/posts')
			.expect(200)
			.expect((res) => {
				expect(res.body.posts.length).toBe(9);
			})
			.end(done);
	});
});

describe('DELETE /posts/:id', () => {
	it('should delete a post', (done) => {
		const post = { title: 'title', description: 'description' };
		request(app)
			.delete(`/posts/${idPost}`)
			.expect(200)
			.expect(res => {
				expect(res.body.post).toBe(post);
			})
			.end(done);
	});
});

describe('POST /posts', () => {
	it('should create a new post', (done) => {
		const post = { title: 'title', description: 'description' };
		request(app)
			.post('/posts')
			.send({ post })
			.expect(200)
			.expect(res => {
				expect(res.body.post).toBe(post);
			})
			.end(done);
	});
});

describe('GET /posts/:id', () => {
	it('should return a post', (done) => {
		request(app)
			.get(`/posts/${idPost}`)
			.expect(200)
			.expect(res => {
				expect(res.body.post).toBe(post);
			})
			.end(done);
	});
});

describe('PUT /posts/:id', () => {
	it('should return a post', (done) => {
		const post = { title: 'title', description: 'description' };
		request(app)
			.put(`/posts/${idPost}`)
			.send({post})
			.expect(200)
			.expect(res => {
				expect(res.body.post).toBe(post);
			})
			.end(done);
	});
});
