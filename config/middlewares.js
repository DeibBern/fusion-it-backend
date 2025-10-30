module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://fusionitsolutions.netlify.app', // ✅ your frontend domain
        'http://localhost:3000',                 // ✅ for local testing
      ],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
