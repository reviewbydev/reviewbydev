import path from 'path'

export const rootDir = __dirname

export const srcDir = path.join(__dirname, 'src')

export const server = {
  port: process.env.PORT || 4000,
}

export const plugins = [path.join(__dirname, 'src/plugins/vuetify.ts')]

export const css = ['vuetify/dist/vuetify.css', path.join(__dirname, 'src/assets/common.css')]

export const head = {
  titleTemplate: (title: string): string => {
    return `${title ? `${title} - ` : ''}ReviewByDev`
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
  ],
  link: [
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
      integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
      crossorigin: 'anonymous',
    },
  ],
}

export const build = {
  extractCSS: true,
  extend (config: any) {
    // Allow to mock dependencies
    config.resolve.modules.unshift(path.join(__dirname, 'mock_dependencies'))
  },
}
