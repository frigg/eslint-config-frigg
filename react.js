var _ = require('lodash');
var base = _.cloneDeep(require('./index'));

base.plugins.push('react');

module.exports = {
  parser: 'babel-eslint',
  plugins: base.plugins,
  ecmaFeatures: _.assign(base.ecmaFeatures, {
    'jsx': true,
  }),
  rules: _.assign(base.rules, {
  }),
};
