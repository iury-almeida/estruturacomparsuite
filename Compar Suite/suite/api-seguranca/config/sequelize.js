const database_config = {
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	port: process.env.MYSQL_PORT,
	host: process.env.MYSQL_HOST,
	dialect: 'mysql',
	logging: true
}

export default database_config;
