import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // ignore folder build
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // sama seperti biome: noUnusedVariables = off
      '@typescript-eslint/no-unused-vars': 'off',

      // biar tidak error kalau pakai <img>
      '@next/next/no-img-element': 'off',

      // fleksibel untuk development
      'no-console': 'off',

      // tidak terlalu ketat soal any
      '@typescript-eslint/no-explicit-any': 'off',


      // react refresh (vite hot reload)
      'react-refresh/only-export-components': 'warn',

      // hooks rule tetap penting
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])