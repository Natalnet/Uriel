import 'styled-components'
import { colorsTheme } from './theme'

declare module 'styled-components' {
  type ThemeType = typeof colorsTheme

  export interface DefaultTheme extends ThemeType {}
}