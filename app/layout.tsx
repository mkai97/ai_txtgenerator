
import './styles/globals.css'
import './styles/markdown.scss'
import Menu from './components/menu'
import { TabProvider } from './components/menu/TabProvider'
import { getLocaleOnServer } from '@/i18n/server'


const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()

  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px] flex-row flex justify-between items-center">
            <TabProvider>
              <Menu className='w-[5%] h-screen min-w-[150px] ' />
              <div className='w-[95%] h-screen min-w-[600px] '>{children}</div>
            </TabProvider>

          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
