const { colors } = require('./colors')

function getTheme({ theme, name }) {
  const themes = (options) => options[theme] // usage: themes({ dark: "darkblue" })
  console.log('color.accent.emphasis: ')

  return {
    name: name,
    colors: {
      focusBorder: colors.green,
      foreground: '#FF0000',
      descriptionForeground: '#FF0000',
      errorForeground: '#FF0000',
      'textLink.foreground': '#FF0000',
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ['constant.other.reference.link', 'string.other.link'],
        settings: {
          foreground: themes({ dark: '#00FF00' }),
          fontStyle: 'underline',
        },
      },
    ],
  }
}

module.exports = getTheme
