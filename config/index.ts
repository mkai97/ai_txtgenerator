import type { AppInfo } from '@/types/app'

// 默认（合规性） 应用配置
export const default_APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const default_API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const default_API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const default_APP_INFO: AppInfo = {
  title: '制度文件合规性检测',
  description: '本应用旨在帮助用户检测制度文件的合规性，确保其符合相关法律法规和行业标准。',
  copyright: 'mkai.dev',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

// 默认（完整性） 应用配置
export const WZX_APP_ID = `${process.env.NEXT_PUBLIC_WZX_APP_ID}`
export const WZX__API_KEY = `${process.env.NEXT_PUBLIC_WZX_APP_KEY}`
export const WZX__API_URL = `${process.env.NEXT_PUBLIC_WZX_API_URL}`
export const WZX__APP_INFO: AppInfo = {
  title: '制度文件完整性检测',
  description: '本应用旨在帮助用户检测制度文件的完整性，确保其尽可能全面的参考相关法律法规和行业标准。',
  copyright: 'mkai.dev',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

// 应用配置 公共配置
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` || true

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

export type MENU_ITEMS = 'default' | 'WZX'

export function getAppInfo(selectedMenu: string): any {
  if (selectedMenu === 'WZX') {
    return {
      APP_ID: WZX_APP_ID,
      API_KEY: WZX__API_KEY,
      API_URL: WZX__API_URL,
      IS_WORKFLOW, // 假设 WZX 不支持工作流
      APP_INFO: WZX__APP_INFO,

    }
  }
  else if (selectedMenu === 'default') {
    return {
      APP_ID: default_APP_ID,
      API_KEY: default_API_KEY,
      API_URL: default_API_URL,
      IS_WORKFLOW,
      APP_INFO: default_APP_INFO,
    }
  }
}
