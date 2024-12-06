import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { appWithTranslation } from 'next-i18next'
import { Provider as ReduxProvider } from 'react-redux'

import { ProtectedLayout } from 'components/layout/ProtectedLayout'
import { store } from 'redux/store'

import 'styles/globals.css'
import 'styles/template.scss'
import { use, useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

type AppPropsWithAuth = AppProps<{ session: Session }> & {
  Component: {
    requireAuth?: boolean
  }
}
const queryClient = new QueryClient()
const App = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithAuth) => {
  useEffect(() => {
    const initGTM = () => {
      const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'G-31FHD8K98D'
      if (!GTM_ID) {
        return
      }
      const script = document.createElement('script')
      script.id = 'google-tag-manager'
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      script.async = true
      script.defer = true
      script.onload = () => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
          // eslint-disable-next-line prefer-rest-params
          window.dataLayer.push(arguments)
        }

        window.gtag = gtag
        ;(gtag as any)('js', new Date())
        ;(gtag as any)('config', GTM_ID)
      }
      document.head.appendChild(script)
    }

    if (!window.dataLayer) {
      initGTM()
    }

    return () => {
      const script = document.getElementById('google-tag-manager')
      if (script) {
        script.remove()
      }
    }
  }, [])
  return (
    <ReduxProvider store={store}>
      <ConfigProvider>
        <StyleProvider hashPriority='high'>
          <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
              {Component.requireAuth ? (
                <ProtectedLayout>
                  <Component {...pageProps} />
                </ProtectedLayout>
              ) : (
                <Component {...pageProps} />
              )}
            </QueryClientProvider>
          </SessionProvider>
        </StyleProvider>
      </ConfigProvider>
    </ReduxProvider>
  )
}

export default appWithTranslation(App)
