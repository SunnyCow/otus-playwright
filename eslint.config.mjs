// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'playwright-report',
      'test-results',
      'eslint.config.*',
      'playwright.config.*',
    ],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-console': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      'playwright/no-page-pause': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      'playwright/missing-playwright-await': 'error',
      'playwright/no-useless-await': 'error',
      'playwright/no-skipped-test': 'error',
    },
  },
);
