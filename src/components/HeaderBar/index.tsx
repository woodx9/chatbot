import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

import styles from './index.module.less'
import LanguageBar from '../LanguageBar'

const { Link } = Typography

const { Header } = Layout


const HeaderBar = () => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="/logo192.png" />
            <h1>ChatBot</h1>
          </Link>
          <LanguageBar  />
        </div>
        <Space className={styles.right} size={0}>
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
