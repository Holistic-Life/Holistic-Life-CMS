export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'strapidb.cruh6tx1n9bm.us-east-1.rds.amazonaws.com'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'strapidb'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'Jfxd5eSf4TJgsJhrF87K'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
