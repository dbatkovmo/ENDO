/**
 * Единый источник дизайн-токенов (цвета, отступы, типографика).
 * Ant Design theme и SCSS читают значения через CSS variables (см. applyDesignTokens).
 */
export const designPrimitives = {
  color: {
    primary: '#1677ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    text: 'rgba(0, 0, 0, 0.88)',
    textSecondary: 'rgba(0, 0, 0, 0.55)',
    border: '#d9d9d9',
    bg: '#ffffff',
    bgSubtle: '#f5f5f5',
  },
  font: {
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizeBase: '14px',
    sizeSm: '12px',
    sizeLg: '16px',
    sizeXl: '20px',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  bp: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  },
  transition: {
    fast: '0.15s ease',
    base: '0.2s ease',
    slow: '0.3s ease',
  },
  antd: {
    borderRadius: 8,
    fontSize: 14,
    buttonRadius: 8,
    cardRadius: 12,
  },
} as const

export type DesignPrimitives = typeof designPrimitives
