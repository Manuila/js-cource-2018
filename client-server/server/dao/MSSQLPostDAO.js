import sql from 'mssql';
import PostDAO from './PostDAO';

export default class MSSQLPostDAO extends PostDAO {
  constructor(mssqlURI){
    super();
    this.mssqlURI = mssqlURI;
  }

  get connect(){
    return sql.connect(this.mssqlURI)
  }
	/**
   * @param {Object} newPost
   * @return {Promise}
   */
	add(newPost) {
		return new Promise((resolve, reject) => {
			this.connect.then(() => {
				return sql.query`INSERT INTO Post (title, description)
        OUTPUT INSERTED._id, INSERTED.title, INSERTED.description,
        INSERTED.isPublished, INSERTED.isLiked, INSERTED.date
        VALUES (${newPost.title},${newPost.description})`;
			})
				.then(result => {
					resolve(result.recordset[0]);
					sql.close();
				})
				.catch(error => {
					reject(error);
					sql.close();
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
				return sql.query`DELETE FROM Post
          OUTPUT DELETED._id, DELETED.title, DELETED.description,
          DELETED.isPublished, DELETED.isLiked, DELETED.date
          WHERE _id = ${id}`;
			})
				.then(result => {
					resolve(result.recordset[0]);
					sql.close();
				})
				.catch(error => {
					reject(error);
					sql.close();
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
				return sql.query`SELECT * FROM Post WHERE _id = ${id}`;
			})
				.then(result => {
					resolve(result.recordset[0]);
					sql.close();
				})
				.catch(error => {
					reject(error);
					sql.close();
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
				return sql.query`UPDATE Post
        SET title = ${post.title}, description = ${post.description},
        isPublished = ${post.isPublished}, isLiked = ${post.isLiked}
        WHERE _id = ${post._id}`;
			})
				.then(result => {
					resolve(result.recordset);
					sql.close();
				})
				.catch(error => {
					reject(error);
					sql.close();
				});
		});
	}
  
	/**
   * @return {Promise}
   */
	getAll() {
		return new Promise((resolve, reject) => {
      this.connect.then(() => {
				return sql.query`SELECT * FROM Post ORDER BY date DESC`;
			})
				.then(result => {
					resolve(result.recordset);
					sql.close();
				})
				.catch(error => {
					reject(error);
					sql.close();
				});
		});
	}
}
