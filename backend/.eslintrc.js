module.exports = {
	"env": {
		"browser": true,
		"es2020": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [ "@typescript-eslint" ],
	"rules": {
		"indent": 		   		[ "error", "tab" ],
		"linebreak-style": 		[ "error", "unix" ],
		"quotes": 		   		[ "error", "double" ],
		"semi": 		   		[ "error", "always" ],
		"object-curly-spacing": [ "error", "always" ]
	}
};
