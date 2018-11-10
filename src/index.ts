import * as styledComponents from 'styled-components'
import merge from 'lodash.merge'
import defaultTheme from './default'
import { ThemedStyledComponentsModule } from 'styled-components'
import ThemeInterface from './theme'

export const mergeTheme = (theme: ThemeInterface): ThemeInterface => {
  const merged: ThemeInterface = { ...theme }

  merge(merged, defaultTheme)

  return merged
}

export const viewPorts = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

export const devices = {
  mobileS: `(max-width: ${viewPorts.mobileS}px)`,
  mobileM: `(max-width: ${viewPorts.mobileM}px)`,
  mobileL: `(max-width: ${viewPorts.mobileL}px)`,
  tablet: `(max-width: ${viewPorts.tablet}px)`,
  laptop: `(max-width: ${viewPorts.laptop}px)`,
  laptopL: `(max-width: ${viewPorts.laptopL}px)`,
  desktop: `(max-width: ${viewPorts.desktop}px)`,
  desktopL: `(max-width: ${viewPorts.desktop}px)`
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  createGlobalStyle
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export {
  css,
  injectGlobal,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeInterface as IThemeInterface
}

export default styled
