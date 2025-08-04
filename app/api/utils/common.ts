import { type NextRequest } from 'next/server'
import { CompletionClient } from 'dify-client'
import { v4 } from 'uuid'
import { getAppInfo } from '@/config'

export const getInfo = (request: NextRequest) => {
  // 获取查询参数最后一个 selectedMenu 然后删除selectedMenu 参数
  const url = request.nextUrl
  console.log('getInfo-searchParams', request.nextUrl.searchParams)
  const selectedMenu = url.searchParams.get('selectedMenu') || 'default'
  const { APP_ID, API_KEY, API_URL } = getAppInfo(selectedMenu)

  const userPrefix = `user_${APP_ID}:`
  const sessionId = request.cookies.get('session_id')?.value || v4()
  const user = userPrefix + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession = (sessionId: string) => {
  return { 'Set-Cookie': `session_id=${sessionId}` }
}

export const createClient = (request: NextRequest) => {
  // 获取查询参数最后一个 selectedMenu 然后删除selectedMenu 参数
  const url = request.nextUrl
  console.log('createClient-searchParams', request.nextUrl.searchParams)
  const selectedMenu = url.searchParams.get('selectedMenu') || 'default'

  const { APP_ID, API_KEY, API_URL } = getAppInfo(selectedMenu || 'default')

  console.log('createClient-APPINFO', { APP_ID, API_KEY, API_URL })

  return new CompletionClient(API_KEY, API_URL || undefined)
}
