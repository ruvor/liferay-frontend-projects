/**
 * SPDX-FileCopyrightText: © 2017 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

'use strict';

const local = require('./utils/local');

const config = {
	env: {
		es6: true,
	},
	extends: ['eslint:recommended', require.resolve('eslint-config-prettier')],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		local('@liferay/liferay'),
		'no-for-of-loops',
		'no-only-tests',
		'notice',
		'sort-destructure-keys',
	],
	rules: {
		'@liferay/liferay/array-is-array': 'error',
		'@liferay/liferay/destructure-requires': 'error',
		'@liferay/liferay/group-imports': 'error',
		'@liferay/liferay/import-extensions': 'error',
		'@liferay/liferay/imports-first': 'error',
		'@liferay/liferay/no-absolute-import': 'error',
		'@liferay/liferay/no-duplicate-imports': 'error',
		'@liferay/liferay/no-dynamic-require': 'error',
		'@liferay/liferay/no-it-should': 'error',
		'@liferay/liferay/no-require-and-call': 'error',
		'@liferay/liferay/padded-test-blocks': 'error',
		'@liferay/liferay/sort-import-destructures': 'error',
		'@liferay/liferay/sort-imports': 'error',
		curly: 'error',
		'default-case': 'error',
		'lines-around-comment': [
			'error',
			{
				afterBlockComment: false,
				afterLineComment: true,
				allowArrayEnd: true,
				allowArrayStart: true,
				allowBlockEnd: true,
				allowBlockStart: true,
				allowClassStart: true,
				allowObjectEnd: true,
				allowObjectStart: true,
				beforeBlockComment: true,
				beforeLineComment: true,
			},
		],
		'no-console': ['error', {allow: ['warn', 'error']}],
		'no-constant-condition': ['error', {checkLoops: false}],
		'no-control-regex': 'off',
		'no-for-of-loops/no-for-of-loops': 'error',
		'no-only-tests/no-only-tests': 'error',
		'no-return-assign': ['error', 'always'],
		'no-unused-expressions': 'error',
		'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
		'object-shorthand': 'error',
		'padding-line-between-statements': [
			'error',
			{blankLine: 'always', next: 'return', prev: '*'},
		],
		'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
		'prefer-const': 'error',
		'prefer-object-spread': 'error',
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'sort-destructure-keys/sort-destructure-keys': [
			'error',
			{caseSensitive: true},
		],
		'sort-keys': ['error', 'asc', {caseSensitive: true, natural: true}],
	},
};

module.exports = config;