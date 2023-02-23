module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  url: `${env("SERVER_HOST", "127.0.0.1")}/dashboard`,
});
