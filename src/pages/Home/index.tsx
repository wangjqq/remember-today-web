import React from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'antd'
import { ADVANTAGES_LIST } from './data'
const Home: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className={styles['title-h1']}>一个集记账和记日程于一体的APP</h1>
        <h3 className={styles['title-h3']}>今日有记为您提供了一个方便、高效、智能的记账和记日程的解决方案。</h3>
        <h3 className={styles['title-h3']}>
          您可以通过今日有记来记录您的收入和支出，管理您的财务状况，规划您的预算和理财目标。
        </h3>
        <h3 className={styles['title-h3']}>
          您也可以通过今日有记来安排您的日常事务，设置提醒和任务，跟踪您的进度和成就。
        </h3>
        <h3 className={styles['title-h3']}>
          今日有记还可以根据您的习惯和偏好，为您提供个性化的建议和分析，帮助您更好地掌控您的时间和金钱。
        </h3>
        <h3 className={styles['title-h3']}>今日有记是您的贴心小助手，让您的生活更加有序、有趣、有意义。</h3>
      </div>

      <div>
        <h2 className={styles['content-h2']}>为什么选择今日有记</h2>
        <Row className={styles['content-row']} gutter={32}>
          {ADVANTAGES_LIST.map((item, index) => {
            return (
              <Col key={index} lg={8} md={12} sm={24} className={styles['content-col']}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default Home
