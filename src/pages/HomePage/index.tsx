'use client'
import React, { useMemo, useState } from 'react'
import styles from './index.module.scss'
import Home from '../Home'
import About from '../About'
import More from '../More'

const HomePage: React.FC = () => {
  const [nowPage, setNowPage] = useState('Home')
  const nowComponents = useMemo(() => {
    switch (nowPage) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      case 'More':
        return <More />
      default:
        return null
    }
  }, [nowPage])
  return (
    <>
      <header className={styles['header']}>
        <img src="/logo28×28.png" alt="今日有记" />
        <ul>
          <li className={nowPage === 'Home' ? styles['active'] : ''} onClick={() => setNowPage('Home')}>
            首页
          </li>
          <li className={nowPage === 'About' ? styles['active'] : ''} onClick={() => setNowPage('About')}>
            关于
          </li>
          <li className={nowPage === 'More' ? styles['active'] : ''} onClick={() => setNowPage('More')}>
            更多
          </li>
        </ul>
      </header>
      <main>{nowComponents}</main>
    </>
  )
}

export default HomePage
