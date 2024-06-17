import ChatGPT from '@/components/ChatGPT'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'

import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'

import styles from './index.module.less'
import { useEffect, useState } from 'react'

export default function Home() {
  const [localeLanguage, setLocaleLanguage]= useState('cn')

  return (
    <Layout hasSider className={styles.layout}>
      <Layout>
        <HeaderBar setLocaleLanguage={setLocaleLanguage} localeLanguage={localeLanguage}/>
        <Content className={styles.main}>
          <ChatGPT fetchPath="/api/chat-completion" localeLanguage={localeLanguage} />
        </Content>
        <FooterBar />
      </Layout>
    </Layout>
  )
}
