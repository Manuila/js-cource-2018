import Post from '../models/post';
import PostDAO from './PostDAO';
import mongoose from 'mongoose';

export default class MongoDBPostDAO extends PostDAO {

	constructor(mongoURI){
		super();
		this.mongoURI = mongoURI;
	}

	get connect(){
		return mongoose.connect(this.mongoURI);
	}
	/**
   * @param {Object} newPost
   * @return {Promise}
   */
	add(newPost) {
		return new Promise((resolve, reject) => {
			this.connect.then(() => {
				const post = new Post(newPost);
				return post.save();
			})
				.then(result => {
					resolve(result);
					mongoose.connection.close();
				})
				.catch(error => {
					reject(error);
					mongoose.connection.close();
				});
		});
	}

	/**
   * @param {String} id
   * @return {Promise}
   */
	remove(id) {
		return new Promise((resolve, reject) => {
			this.connect.then(() => {
				return Post.findByIdAndRemove(id);
			})
				.then(result => {
					resolve(result);
					mongoose.connection.close();
				})
				.catch(error => {
					reject(error);
					mongoose.connection.close();
				});
		});
	}
   
	/**
   * @param {String} id
   * @return {Promise}
   */
	getById(id) {
		return new Promise((resolve, reject) => {
			this.connect.then(() => {
				return Post.findOne({ _id: id });
			})
				.then(result => {
					resolve(result);
					mongoose.connection.close();
				})
				.catch(error => {
					reject(error);
					mongoose.connection.close();
				});
		});
	}
  
	/**
   * @param {Object} post
   * @return {Promise}
   */
	update(post) {
		return new Promise((resolve, reject) => {
			this.connect.then(() => {
				return Post.update({ _id: post._id }, {
					title: post.title,
					description: post.description,
					isPublished: post.isPublished,
					isLiked: post.isLiked,});
			})
				.then(result => {
					resolve(result);
					mongoose.connection.close();
				})
				.catch(error => {
					reject(error);
					mongoose.connection.close();
				});
		});
	}

	/**
   * @return {Promise}
   */
	getAll() {
		return new Promise((resolve, reject) => {
			this.connect.then(() => {
				return Post.find().sort('-date');
			})
				.then(result => {
					resolve(result);
					mongoose.connection.close();
				})
				.catch(error => {
					reject(error);
					mongoose.connection.close();
				});
		});
	}
}
