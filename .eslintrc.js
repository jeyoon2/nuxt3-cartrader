module.exports = {
  env: {
    node: true,
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'prettier', 'no-relative-import-paths'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-useless-catch': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-var-requires': 'off',
    curly: ['error', 'all'],
    'no-nested-ternary': 'error',
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src', prefix: '@' },
    ],

    // ESLint에서 prettier 서식 규칙을 설정
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
};
