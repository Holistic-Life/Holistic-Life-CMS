export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-161.railway.app'),
      port: env.int('DATABASE_PORT', 5590),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Jfxd5eSf4TJgsJhrF87K'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
