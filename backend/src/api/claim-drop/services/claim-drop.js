'use strict';

/**
 * claim-drop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::claim-drop.claim-drop');
