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
    'jsx-quotes': [2, 'prefer-single'],
    'react/display-name': [1, { 'acceptTranspilerName': true }],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
  }),
};
