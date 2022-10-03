'use strict';

/**
 * talk-to-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::talk-to-us.talk-to-us');
