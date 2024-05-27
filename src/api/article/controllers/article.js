'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async findSlugs(ctx) {
    const entries = await strapi.db.query('api::article.article').findMany({
    //   select: ['UID'],
    });
    return entries;
  },
}));