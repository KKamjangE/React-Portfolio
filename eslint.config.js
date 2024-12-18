import eslintConfigPrettier from 'eslint-config-prettier'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
    tseslint.configs.recommended,
    eslint.configs.recommended,
    eslintConfigPrettier,
    { ignores: ['dist'] },
    {
        files: ['**/*.{ts,tsx}'],
        parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
        plugins: { 'react-refresh': reactRefresh, 'react-hooks': reactHooks },
        rules: {
            'react-refresh/only-export-components': 'warn',
        },
    }
)
