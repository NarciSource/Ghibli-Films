import eslint from '@eslint/js';
import * as eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import prettier from 'prettier';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

const prettierOptions = (await prettier.resolveConfig('.prettierrc')) || {};

export default tseslint.config(
    {
        ignores: ['eslint.config.mjs'],
    },
    // JS 추천 규칙
    eslint.configs.recommended,
    // TS 추천 규칙
    ...tseslint.configs.recommendedTypeChecked,
    // Prettier 규칙
    eslintPluginPrettierRecommended,
    // React / Hooks / JSX-A11y 플러그인
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        plugins: {
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            'jsx-a11y': eslintPluginJsxA11y,
        },
        rules: {
            'react/jsx-uses-react': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'jsx-a11y/alt-text': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/server/**/*.ts'],
        rules: {
            'react-hooks/rules-of-hooks': 'off',
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            import: eslintPluginImport,
        },
        rules: {
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'prettier/prettier': ['error', prettierOptions],
            'import/no-unresolved': 'error',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
        ignores: [],
        settings: {
            'import/resolver': {
                typescript: {
                    project: [
                        './tsconfig.json',
                        './project/server/tsconfig.json',
                        './project/client/tsconfig.json',
                    ],
                },
            },
        },
    },
);
