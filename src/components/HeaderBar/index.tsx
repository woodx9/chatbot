import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

import styles from './index.module.less'
import LanguageBar from '../LanguageBar'
import LocaleSettingBar from '../LocaleSettingBar'

const { Link } = Typography

const { Header } = Layout

interface HeaderBar {
  setLocaleLanguage: (state: string) => void; // 明确指定函数类型
  localeLanguage: string;
}


const HeaderBar: React.FC<HeaderBar> = ({localeLanguage, setLocaleLanguage}) => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="/logo192.png" />
            <h1>ChatBot</h1>
          </Link>
          <LanguageBar localeLanguage={localeLanguage} />
        </div>
        <Space className={styles.right} size={0}>
          <LocaleSettingBar setLocaleLanguage={setLocaleLanguage} />
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
