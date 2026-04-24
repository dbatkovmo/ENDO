import { designPrimitives } from './design-primitives'

const { color, font, space, radius, shadow, bp, transition } = designPrimitives

/** Имена совпадают с ключами в `src/styles/variables.scss` → `var(--endo-…)`. */
export function applyDesignTokens(target: HTMLElement = document.documentElement): void {
  const s = target.style

  s.setProperty('--endo-color-primary', color.primary)
  s.setProperty('--endo-color-success', color.success)
  s.setProperty('--endo-color-warning', color.warning)
  s.setProperty('--endo-color-error', color.error)
  s.setProperty('--endo-color-text', color.text)
  s.setProperty('--endo-color-text-secondary', color.textSecondary)
  s.setProperty('--endo-color-border', color.border)
  s.setProperty('--endo-color-bg', color.bg)
  s.setProperty('--endo-color-bg-subtle', color.bgSubtle)

  s.setProperty('--endo-font-family', font.family)
  s.setProperty('--endo-font-size-base', font.sizeBase)
  s.setProperty('--endo-font-size-sm', font.sizeSm)
  s.setProperty('--endo-font-size-lg', font.sizeLg)
  s.setProperty('--endo-font-size-xl', font.sizeXl)

  s.setProperty('--endo-space-xs', space.xs)
  s.setProperty('--endo-space-sm', space.sm)
  s.setProperty('--endo-space-md', space.md)
  s.setProperty('--endo-space-lg', space.lg)
  s.setProperty('--endo-space-xl', space.xl)
  s.setProperty('--endo-space-xxl', space.xxl)

  s.setProperty('--endo-radius-sm', radius.sm)
  s.setProperty('--endo-radius-md', radius.md)
  s.setProperty('--endo-radius-lg', radius.lg)
  s.setProperty('--endo-radius-xl', radius.xl)

  s.setProperty('--endo-shadow-sm', shadow.sm)
  s.setProperty('--endo-shadow-md', shadow.md)
  s.setProperty('--endo-shadow-lg', shadow.lg)

  s.setProperty('--endo-bp-xs', bp.xs)
  s.setProperty('--endo-bp-sm', bp.sm)
  s.setProperty('--endo-bp-md', bp.md)
  s.setProperty('--endo-bp-lg', bp.lg)
  s.setProperty('--endo-bp-xl', bp.xl)
  s.setProperty('--endo-bp-xxl', bp.xxl)

  s.setProperty('--endo-transition-fast', transition.fast)
  s.setProperty('--endo-transition-base', transition.base)
  s.setProperty('--endo-transition-slow', transition.slow)
}
