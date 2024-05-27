'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article');
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/article/slug',
        handler: 'article.findSlugs',
        config: {
            policies: [],
            middlewares: [],
            
        }
      },
    ],
  };
