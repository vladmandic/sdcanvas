import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ['**/dist/**/*', '**/bin/**/*', '**/ext/**/*', '**/node_modules/**/*', '**/neutralino.*'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        // ...globals.commonjs,
        // ...globals.node,
        // ...globals.serviceworker,
        // ...globals.worker,
        Neutralino: 'readonly',
        F: 'readonly',
        H: 'readonly',
        S: 'readonly',
        log: 'readonly',
      },
    },
  },
);
