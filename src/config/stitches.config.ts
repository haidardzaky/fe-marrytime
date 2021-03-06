import { createCss } from '@stitches/react';

export const theme = {
  colors: {
    dark: '#000000',
    grey900: '#161C24',
    grey800: '#212B36',
    grey700: '#454F5B',
    grey600: '#637381',
    grey500: '#919EAB',
    grey400: '#C4CDD5',
    grey300: '#DFE3E8',
    grey200: '#F4F6F8',
    grey100: '#F9FAFB',
    light: '#ffffff',
    primary100: '#D0D2FC',
    primary200: '#A3A7F9',
    primary300: '#7278EF',
    primary400: '#4E53E0',
    primary500: '#1B21CC',
    primary600: '#1318AF',
    primary700: '#0D1192',
    primary800: '#080B76',
    primary900: '#050761',
    primaryTransparent100: 'rgba(27, 33, 204, 0.08)',
    primaryTransparent200: 'rgba(27, 33, 204, 0.16)',
    primaryTransparent300: 'rgba(27, 33, 204, 0.24)',
    primaryTransparent400: 'rgba(27, 33, 204, 0.32)',
    primaryTransparent500: 'rgba(27, 33, 204, 0.4)',
    primaryTransparent600: 'rgba(27, 33, 204, 0.48)',
    secondary100: '#CBFEDB',
    secondary200: '#98FDC2',
    secondary300: '#64FBB2',
    secondary400: '#3DF7B0',
    secondary500: '#00F3AD',
    secondary600: '#00D0A9',
    secondary700: '#00AE9E',
    secondary800: '#008C8C',
    secondary900: '#006874',
    secondaryTransparent100: 'rgba(0, 243, 173, 0.08)',
    secondaryTransparent200: 'rgba(0, 243, 173, 0.16)',
    secondaryTransparent300: 'rgba(0, 243, 173, 0.24)',
    secondaryTransparent400: 'rgba(0, 243, 173, 0.32)',
    secondaryTransparent500: 'rgba(0, 243, 173, 0.4)',
    secondaryTransparent600: 'rgba(0, 243, 173, 0.48)',
    success100: '#F2FBCB',
    success200: '#E3F899',
    success300: '#C8EA64',
    success400: '#AAD63D',
    success500: '#83BC09',
    success600: '#6BA106',
    success700: '#558704',
    success800: '#406D02',
    success900: '#325A01',
    successTransparent100: 'rgba(131, 188, 9, 0.08)',
    successTransparent200: 'rgba(131, 188, 9, 0.16)',
    successTransparent300: 'rgba(131, 188, 9, 0.24)',
    successTransparent400: 'rgba(131, 188, 9, 0.32)',
    successTransparent500: 'rgba(131, 188, 9, 0.4)',
    successTransparent600: 'rgba(131, 188, 9, 0.48)',
    info100: '#D4FBFE',
    info200: '#A9F3FD',
    info300: '#7DE3FB',
    info400: '#5DD0F7',
    info500: '#29B2F2',
    info600: '#1D8BD0',
    info700: '#1469AE',
    info800: '#0D4A8C',
    info900: '#073574',
    infoTransparent100: 'rgba(41, 178, 242, 0.08)',
    infoTransparent200: 'rgba(41, 178, 242, 0.16)',
    infoTransparent300: 'rgba(41, 178, 242, 0.24)',
    infoTransparent400: 'rgba(41, 178, 242, 0.32)',
    infoTransparent500: 'rgba(41, 178, 242, 0.4)',
    infoTransparent600: 'rgba(41, 178, 242, 0.48)',
    warning100: '#FFF5CF',
    warning200: '#FFE89F',
    warning300: '#FFD86F',
    warning400: '#FFC94B',
    warning500: '#FFAF0F',
    warning600: '#DB8E0A',
    warning700: '#B77007',
    warning800: '#935504',
    warning900: '#7A4202',
    warningTransparent100: 'rgba(255, 175, 15, 0.08)',
    warningTransparent200: 'rgba(255, 175, 15, 0.16)',
    warningTransparent300: 'rgba(255, 175, 15, 0.24)',
    warningTransparent400: 'rgba(255, 175, 15, 0.32)',
    warningTransparent500: 'rgba(255, 175, 15, 0.4)',
    warningTransparent600: 'rgba(255, 175, 15, 0.48)',
    danger100: '#FFE8D8',
    danger200: '#FFCCB2',
    danger300: '#FFA98B',
    danger400: '#FF886F',
    danger500: '#FF523F',
    danger600: '#DB312E',
    danger700: '#B71F29',
    danger800: '#931426',
    danger900: '#7A0C24',
    dangerTransparent100: 'rgba(255, 82, 63, 0.08)',
    dangerTransparent200: 'rgba(255, 82, 63, 0.16)',
    dangerTransparent300: 'rgba(255, 82, 63, 0.24)',
    dangerTransparent400: 'rgba(255, 82, 63, 0.32)',
    dangerTransparent500: 'rgba(255, 82, 63, 0.4)',
    dangerTransparent600: 'rgba(255, 82, 63, 0.48)',
  },
  space: {
    0: '0.5em',
    1: '1em',
    2: '2em',
    3: '3em',
    4: '4em',
    5: '5em',
  },
  sizes: {
    0: '0.5em',
    1: '1em',
    2: '2em',
    3: '3em',
    4: '4em',
    5: '5em',
  },
  fontSizes: {
    0: '0.9rem',
    1: '0.95rem',
    2: '1rem',
    3: '1.25rem',
    4: '1.75rem',
    5: '2.5rem',
    6: '3rem',
  },
  fonts: {
    mono: 'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace',
  },
};

const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
};

export const {
  styled,
  global: globalCSS,
  css,
  keyframes,
} = createCss({
  theme,
  utils: {},
  media: breakpoints,
});

globalCSS({
  '::selection': {
    background: '$primaryTransparent300',
  },
});
