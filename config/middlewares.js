module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `s3.${env("AWS_REGION")}.amazonaws.com/${env("AWS_BUCKET_NAME")}`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `s3.${env("AWS_REGION")}.amazonaws.com/${env("AWS_BUCKET_NAME")}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
