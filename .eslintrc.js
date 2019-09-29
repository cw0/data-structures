module.exports = {
	env: {
    node: true,
		'jest/globals': true
	},
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
		'plugin:@typescript-eslint/recommended',  
		'airbnb-typescript/base'// Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
	parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  plugins: [
    'jest',
    '@typescript-eslint'
  ],
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
