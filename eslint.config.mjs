import nextConfig from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = [
  {
    ignores: ['dist/**', '.cache/**', 'public/**', '**/*.esm.js', '.next/**', 'node_modules/**'],
  },
  ...nextConfig,
  ...nextTypescript,
  prettierConfig,
  {
    settings: {
      react: {
        version: '19',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

export default eslintConfig;
