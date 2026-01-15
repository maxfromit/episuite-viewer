// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: { 'unused-imports/no-unused-vars': 'warn' }
})
