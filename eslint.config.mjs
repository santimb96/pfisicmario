import { FlatCompat } from '@eslint/eslintrc'
import unusedImports from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.mjs'],
    plugins: {
      'unused-imports': unusedImports
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'],
      'no-extra-semi': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': ['error', { 
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }]
    }
  }
]

export default eslintConfig
