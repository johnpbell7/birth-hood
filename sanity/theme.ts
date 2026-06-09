import { buildLegacyTheme } from 'sanity'

/**
 * birth-hood brand theme for Sanity Studio.
 *
 * Built with Sanity's official `buildLegacyTheme` so the entire Studio palette
 * (buttons, navbar, focus rings, state colours) is generated from a few brand
 * tokens and stays internally consistent. This is version-safe — unlike the
 * previous hand-written CSS overrides that targeted Sanity's internal DOM and
 * broke (the dark band) when those class names changed.
 */
const pink = '#c955a8'      // --pink-deep
const pinkLight = '#e87bc3' // --pink
const ink = '#1a1a1a'       // brand near-black

export const birthHoodTheme = buildLegacyTheme({
  '--black': '#101010',
  '--white': '#ffffff',

  '--gray': '#8d8d8d',
  '--gray-base': '#8d8d8d',

  '--component-bg': '#ffffff',
  '--component-text-color': ink,

  // Brand accent
  '--brand-primary': pink,

  // Buttons
  '--default-button-color': '#8d8d8d',
  '--default-button-primary-color': pink,
  '--default-button-success-color': '#3aae74',
  '--default-button-warning-color': '#f1ad3e',
  '--default-button-danger-color': '#e0526b',

  // State colours
  '--state-info-color': pink,
  '--state-success-color': '#3aae74',
  '--state-warning-color': '#f1ad3e',
  '--state-danger-color': '#e0526b',

  // Dark navbar = on brand
  '--main-navigation-color': ink,
  '--main-navigation-color--inverted': '#ffffff',

  // Pink focus ring
  '--focus-color': pinkLight,
})
