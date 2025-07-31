import { useMemo } from 'react'
import * as cf from '../config'
import type { AppInfo } from '@/types/app'

export type TabId = 'default' | 'WZX'

type Config = {
    APP_ID: string
    API_KEY: string
    API_URL: string
    IS_WORKFLOW: boolean
    AppInfo: AppInfo
}

/**
 * 根据 tabId 返回对应的运行时配置
 */
export function useAppConfig(tabId: TabId): Config {
    return useMemo(() => {
        const map: Record<TabId, Config> = {
            default: {
                APP_ID: cf.default_APP_ID!,
                API_KEY: cf.default_API_KEY!,
                API_URL: cf.default_API_URL!,
                IS_WORKFLOW: cf.IS_WORKFLOW,
                AppInfo: cf.default_APP_INFO,
            },
            WZX: {
                APP_ID: cf.WZX_APP_ID,
                API_KEY: cf.WZX__API_KEY,
                API_URL: cf.WZX__API_URL,
                IS_WORKFLOW: true, // 假设 WZX 不支持工作流
                AppInfo: cf.WZX__APP_INFO,
            },
        }
        return map[tabId] || map.default
    }, [tabId])
}
