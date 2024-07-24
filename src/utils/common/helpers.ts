import type { GlobalThemeOverrides } from 'naive-ui'
import { addColorAlpha, getColorPalette } from './color'
import { cloneDeep } from 'lodash-es'
import { sessionStg } from '@/utils/common/sessions'
import { themeSetting } from 'modules/Settings/data'

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed' | 'Active'
type ColorKey = `${ ColorType }Color${ ColorScene }`
type ThemeColor = Partial<Record<ColorKey, string>>

interface ColorAction {
    scene: ColorScene
    handler: (color: string) => string
}

/** 初始化主题配置 */
export function initThemeSettings() {
  const isProd = import.meta.env.PROD
  // 生产环境才缓存主题配置，本地开发实时调整配置更改配置的json
  const storageSettings = sessionStg.get('themeSettings')

  if (isProd && storageSettings) {
    return storageSettings
  }

  const themeColor = sessionStg.get('themeColor') || themeSetting.themeColor
  const info = themeSetting.isCustomizeInfoColor ? themeSetting.otherColor.info : getColorPalette(themeColor, 7)
  const otherColor = { ...themeSetting.otherColor,
    info }
  const setting = cloneDeep({ ...themeSetting,
    themeColor,
    otherColor })
  return setting
}

/** 获取主题颜色的各种场景对应的颜色 */
function getThemeColors(colors: [ColorType, string][]) {
  const colorActions: ColorAction[] = [
    { scene: '',
      handler: color => color },
    { scene: 'Suppl',
      handler: color => color },
    { scene: 'Hover',
      handler: color => getColorPalette(color, 5) },
    { scene: 'Pressed',
      handler: color => getColorPalette(color, 7) },
    { scene: 'Active',
      handler: color => addColorAlpha(color, 0.1) }
  ]

  const themeColor: ThemeColor = {}

  colors.forEach(color => {
    colorActions.forEach(action => {
      const [colorType, colorValue] = color
      const colorKey: ColorKey = `${ colorType }Color${ action.scene }`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })
  return themeColor
}

/** 获取naive的主题颜色 */
export function getNaiveThemeOverrides(colors: Record<ColorType, string>): GlobalThemeOverrides {
  const { primary, success, warning, error } = colors
  console.log(colors)
  const info = colors.info
  // : getColorPalette(primary, 7)

  const themeColors = getThemeColors([
    ['primary', primary],
    ['info', info],
    ['success', success],
    ['warning', warning],
    ['error', error]
  ])

  const colorLoading = primary

  return {
    common: {
      ...themeColors
    },
    LoadingBar: {
      colorLoading
    }
  }
}
