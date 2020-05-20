/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
import { colors } from 'tailwindcss/defaultTheme'
module.exports = {
  theme: {
    colors: {
      ...colors
    },
    zIndex: {
      header: 100
    }
  },
  variants: {},
  plugins: []
}
