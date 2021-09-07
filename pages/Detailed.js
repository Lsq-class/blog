import React from 'react'
import Head from 'next/head'
import Header from '../component/Header'
import { Row, Col, Breadcrumb } from 'antd'
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined
} from '@ant-design/icons';
import styles from '../static/styles/components/Detailed.module.css'

import Author from '../component/Author'
import Advert from '../component/Advert';
import Footer from '../component/Footer';

const Detailed = () => (
    <div>
        <Head>
            <title>Detailed</title>
        </Head>
        <Header></Header>
        <Row className="comm-main" type='flex' justify='center'>
            <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                <div className={styles.breadDiv}>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                        <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <div className={styles.detailedTitle}>
                        React项目实战开发
                    </div>
                    <div className={styles.center + ' list-icon'}>
                        <span><CalendarOutlined />2021/9/7</span>
                        <span><FolderOutlined />&nbsp;视频教程</span>
                        <span><FireOutlined />&nbsp;2222人</span>
                    </div>
                    <div className={styles.detailedContent}>
                        mardoen内容
                    </div>

                </div>
            </Col>
            <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
                <Advert />
            </Col>
        </Row>
        <Footer />
    </div>
)
export default Detailed