const config = {
	MONGO_URI: process.env.MONGO_URL || 'mongodb://localhost:27017/posts_test',
	EXPRESS_PORT: process.env.PORT || 3000,
	MSSQL_URI: 'mssql://test:M25033Deuu@DESKTOP-MR10QVD\\SQLEXPRESS/Posts',
};
  
export default config;
  