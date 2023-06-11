import React from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'antd'
const ADVANTAGES_LIST = [
  {
    title: '功能齐全',
    content:
      '今日有记不仅可以帮您记账和记日程，还可以让您查看您的财务报表，导出您的数据，分享您的经验，参与社区互动等等。',
  },
  {
    title: '操作简单',
    content: '今日有记的界面设计简洁美观，操作流程清晰易懂，您只需要轻轻一点，就可以完成您想要的功能。',
  },
  {
    title: '数据安全',
    content:
      '今日有记采用了先进的加密技术，保护您的数据不被泄露或丢失。您也可以随时备份和恢复您的数据，不用担心数据丢失的风险。',
  },
  {
    title: '智能推荐',
    content:
      '今日有记可以根据您的收支情况和日程安排，为您提供合理的建议和分析，帮助您优化您的财务和时间管理。您也可以通过今日有记了解到更多的理财知识和生活技巧，提高您的生活品质。',
  },
  {
    title: '定制个性',
    content:
      '今日有记可以让您根据您的喜好和需求，自定义您的记账和记日程的方式，例如选择不同的主题、图标、分类、单位等等。',
  },
  {
    title: '同步云端',
    content:
      '今日有记可以让您在不同的设备上同步您的数据，无论您是在手机、平板还是电脑上，都可以随时随地查看和修改您的数据。',
  },
  {
    title: '支持多币种',
    content: '今日有记可以让您使用不同的货币来记账，无论您是在国内还是国外，都可以方便地记录和转换您的收支。',
  },
  {
    title: '适应场景',
    content:
      '今日有记可以让您根据不同的场景来记账和记日程，无论您是在工作、学习还是旅行，都可以找到适合您的功能和模式。',
  },
  {
    title: '支持多人',
    content:
      '今日有记可以让您和您的家人、朋友、同事等共享您的数据，无论您是想要管理家庭账本、分摊费用还是协作工作，都可以轻松实现。',
  },
  {
    title: '支持多语言',
    content:
      '今日有记可以让您使用不同的语言来记账和记日程，无论您是使用中文、英文还是其他语言，都可以方便地输入和显示您的数据。',
  },
  {
    title: '支持多平台',
    content: '今日有记可以让您在不同的平台上使用，无论您是使用安卓、苹果还是微软，都可以下载和安装今日有记的应用程序。',
  },
  {
    title: '支持多功能',
    content: '今日有记可以让您享受更多的功能和服务，例如语音输入、扫描发票、导入银行卡、接收通知等等。',
  },
]

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
