import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [{
  ignores: ['**/dist/**/*', '**/bin/**/*', '**/ext/**/*', '**/node_modules/**/*', '**/neutralino.js'],
}, ...compat.extends('eslint:recommended', 'airbnb-base'), {
  plugins: {},

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.commonjs,
      ...globals.node,
      ...globals.serviceworker,
      ...globals.worker,
      Neutralino: 'readonly',
      F: 'readonly',
      htmx: 'readonly',
      log: 'readonly',
    },

    ecmaVersion: 2022,
    sourceType: 'module',
  },

  rules: {
    'dot-notation': 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'max-len': [1, 250, 3],
    'newline-per-chained-call': 'off',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-case-declarations': 'off',
    'no-continue': 'off',
    'no-control-regex': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    radix: 'off',
  },
}];
