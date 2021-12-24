const fs = require('fs').promises
const getTheme = require('./theme')

const ohlalaTheme = getTheme({
  theme: 'dark',
  name: 'GitHub Dark Default',
})

// write theme
fs.mkdir('./themes', { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile('./themes/ohlala-color-theme.json', JSON.stringify(ohlalaTheme, null, 2)),
    ])
  )
  .catch(() => process.exit(1))
