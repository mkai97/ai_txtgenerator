'use client'
import React, { useEffect } from 'react'
import TextGeneration from './indexs'
import { useTab } from './menu/TabProvider'

// nextjs+ts 的helloword页面
export default function HomePage() {
    const { activeTab } = useTab()

    useEffect(() => {
        // 这里可以添加一些初始化逻辑，比如获取数据等
        console.log(`当前选中的菜单是: ${activeTab}`)
    }, [activeTab])

    return (
        <>
            {/* <div>activeTab: {activeTab}</div> */}
            {activeTab === 'default' && <TextGeneration />}
            {activeTab === 'WZX' && <TextGeneration />}
        </>

    )
}
