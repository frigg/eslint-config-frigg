module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [],
  ecmaFeatures: {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'destructuring': true,
    'modules': true,
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'radix': [2],
    'no-param-reassign': 0,
    'no-undef': 1,
    'no-unused-vars': 2,
    'no-console': 2
  }
};
