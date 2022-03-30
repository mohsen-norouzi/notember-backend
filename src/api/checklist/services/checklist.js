'use strict';

/**
 * checklist service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::checklist.checklist');
