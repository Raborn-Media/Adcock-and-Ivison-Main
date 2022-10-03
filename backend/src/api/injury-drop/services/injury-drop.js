'use strict';

/**
 * injury-drop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::injury-drop.injury-drop');
