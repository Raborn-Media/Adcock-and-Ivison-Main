'use strict';

/**
 * personal-injury service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-injury.personal-injury');
