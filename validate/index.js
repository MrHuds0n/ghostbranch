const validatorFactory = require('@brainhubeu/hadron-validation');
const schemas = require('./schemas');

module.exports = validatorFactory(schemas);
