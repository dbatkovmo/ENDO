import type { ThemeConfig } from 'antd'
import { designPrimitives } from './design-primitives'

export type ThemeTokens = NonNullable<ThemeConfig['token']>

const { color, font, antd } = designPrimitives

export const theme: ThemeConfig = {
  token: {
    colorPrimary: color.primary,
    colorSuccess: color.success,
    colorWarning: color.warning,
    colorError: color.error,
    colorText: color.text,
    colorTextSecondary: color.textSecondary,
    colorBorder: color.border,
    colorBgBase: color.bg,
    borderRadius: antd.borderRadius,
    fontFamily: font.family,
    fontSize: antd.fontSize,
  },
  components: {
    Button: {
      borderRadius: antd.buttonRadius,
    },
    Card: {
      borderRadius: antd.cardRadius,
    },
  },
}

export const darkTheme: ThemeConfig = {
  ...theme,
  token: {
    ...theme.token,
    colorBgBase: '#141414',
    colorTextBase: '#ffffff',
  },
}
