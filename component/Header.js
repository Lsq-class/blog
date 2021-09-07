import React from 'react'
import styles from '../static/styles/components/Header.module.css'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, EuroOutlined, FundProjectionScreenOutlined } from '@ant-design/icons'

const Header = () => (
    <div className={styles.header}>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className={styles.logo}>技术胖</span>
                <span className={styles.txt}>专注前端开发，每年1000集免费视频</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={8}>
                <Menu mode='horizontal' className='nn'>
                    <Menu.Item key='home'>
                        <HomeOutlined />
                        &nbsp;&nbsp;&nbsp;首页
                    </Menu.Item>
                    <Menu.Item key='video'>
                        <YoutubeOutlined />
                        &nbsp;&nbsp;&nbsp;视频
                    </Menu.Item>
                    <Menu.Item key='life'>
                        <EuroOutlined />
                        &nbsp;&nbsp;&nbsp;生活
                    </Menu.Item>
                    <Menu.Item key='talk'>
                        <FundProjectionScreenOutlined />
                        &nbsp;&nbsp;&nbsp;谈谈
                    </Menu.Item>
                    <Menu.Item key='notalk'>
                        <FundProjectionScreenOutlined />
                        &nbsp;&nbsp;&nbsp;不谈
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)
module.exports = Header

