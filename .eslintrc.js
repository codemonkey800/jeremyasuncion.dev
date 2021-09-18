module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },

  root: true,
  extends: ['next/core-web-vitals'],
  plugins: ['simple-import-sort', 'prettier'],

  rules: {
    semi: ['error', 'never'],

    // It's helpful to split functionality into multiple functions within a class.
    'class-methods-use-this': 'off',

    // Let ESlint sort our imports for us so we don't have to think about it.
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },

  overrides: [
    {
      files: ['./src/**/*.ts{,x}'],

      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],

      rules: {
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-floating-promises': 'off',

        // Throws errors for exported functions, which is a common pattern with ES modules.
        '@typescript-eslint/unbound-method': 'off',

        // Named exports are nicer to work with for a variety of reasons:
        // https://basarat.gitbook.io/typescript/main-1/defaultisbad
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',

        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],

              // Packages.
              // Things that start with a letter (or digit or underscore), or
              // `@` followed by a letter.
              ['^@?\\w'],

              ['^src/'],

              // Absolute imports and other imports such as Vue-style `@/foo`.
              // Anything not matched in another group.
              ['^'],

              // Relative imports.
              // Anything that starts with a dot.
              ['^\\.'],
            ],
          },
        ],
      },
    },

    {
      files: ['./src/**/*.tsx'],
      rules: {
        /**
         * Prop types aren't necessary since we have TypeScript interfaces for
         * prop types.
         */
        'react/prop-types': 'off',

        /**
         *React automatically adds the import as part of the new JSX transform:
         *https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#nextjs
         */
        'react/react-in-jsx-scope': 'off',

        /**
         *Prop spreading is very useful as a simple way for passing multiple
         *props to a component. However, we should still be careful about passing
         *unnecessary props.
         */
        'react/jsx-props-no-spreading': 'off',

        /**
         *This rule isn't really needed anymore since we can use ES6 object defaults
         *for props. There are also plans to deprecate the use of `defaultProps`:
         *https://github.com/reactjs/rfcs/pull/107
         */
        'react/require-default-props': 'off',
      },
    },

    /**
     * Disable explicit return types for TSX files. Prefer inferred return
     * types for React components and Hooks:
     * https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript
     */
    {
      files: ['./src/**/*.tsx', './src/**/*.hooks.ts', './src/hooks/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },

    /**
     * Prefer default exports for Next.js pages and SCSS modules.
     *
     * Next.js routing needs the pages to be exported as default exports, and
     * the team has no plans to add support for the time being:
     * https://github.com/vercel/next.js/issues/7275
     *
     * SCSS modules export from the `default` export, so their type
     * definitions are generated using `export default styles`.
     */
    {
      files: ['./src/pages/**/*.ts{,x}', './src/**/*.module.scss.d.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
}
