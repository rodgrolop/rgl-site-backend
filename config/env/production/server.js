module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("SERVER_HOST", "127.0.0.1"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
