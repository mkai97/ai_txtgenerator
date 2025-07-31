// contexts/TabContext.tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import type { MENU_ITEMS } from '@/config'

export type TabId = MENU_ITEMS

const TabContext = createContext<{
  activeTab: TabId
  setActiveTab: (v: TabId) => void
}>({ activeTab: 'default', setActiveTab: () => { } })

export const useTab = () => useContext(TabContext)

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>('default')

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedMenu') as TabId
    if (storedTab)
      setActiveTab(storedTab)
  }, [])

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}
