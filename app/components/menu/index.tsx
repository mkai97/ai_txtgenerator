'use client'
import React from 'react'
import { useTab } from './TabProvider'
const menuItems = [
    { key: 'default', label: '合规性检测' },
    { key: 'WZX', label: '完整性检测' },
]

export default function Menu({ className }: { className: string }) {
    // 使用 useState 来管理当前选中的菜单项
    // 初始值可以从 localStorage 中获取，如果没有则默认为 'default'
    const { activeTab, setActiveTab } = useTab()

    // 当切换菜单时，更新状态
    const handleMenuClick = (item: typeof menuItems[0]) => {
        setActiveTab(item.key)
        // 这里可以添加其他逻辑，比如路由跳转等
        console.log(`点击了 ${item.label} 菜单`)
        // 存储到 localStorage
        localStorage.setItem('selectedMenu', item.key)
        // 触发页面刷新或其他操作
    }

    return (
        <nav
            className={className}
            style={{

                height: '100vh',
                background: '#f5f7fa',
                boxShadow: '2px 0 8px #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 0',
            }}
        >
            <div style={{ height: 40, width: '100%', textAlign: 'center',fontWeight: 700, fontSize: '18px'}}>智能体平台</div>

            {menuItems.map(item => (
                <div
                    key={item.key}
                    onClick={() => handleMenuClick(item)}
                    style={{
                        margin: '0 12px 6px 12px',
                        padding: '6px',
                        borderRadius: 6,
                        background: activeTab === item.key ? '#1976d2' : '#fff',
                        color: activeTab === item.key ? '#fff' : '#333',
                        boxShadow:
                            activeTab === item.key
                                ? '0 2px 8px rgba(25, 118, 210, 0.15)'
                                : '0 1px 4px rgba(0,0,0,0.04)',
                        cursor: 'pointer',
                        fontWeight: activeTab === item.key ? 600 : 400,
                        transition: 'all 0.2s',
                        border: activeTab === item.key ? '1.5px solid #1976d2' : '1px solid #e0e0e0',
                        textAlign: 'center',
                        fontSize: '14px',
                    }}
                >
                    {item.label}
                </div>
            ))}
        </nav>
    )
}
