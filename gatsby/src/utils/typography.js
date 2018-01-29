import Typography from 'typography'

// Twin Peaks was original theme.
// Runner up was irving theme...
import sternGroveTheme from 'typography-theme-stern-grove'

sternGroveTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a:hover,a:active': {
    color: 'white',
  }
})

const typography = new Typography(sternGroveTheme)

export default typography