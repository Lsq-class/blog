import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../component/Header'
import { Row, Col, List, Breadcrumb } from 'antd'
import {
    FieldTimeOutlined,
    FolderOutlined,
    FireOutlined,
} from '@ant-design/icons';

import styles from '../static/styles/components/index.module.css'
import Author from '../component/Author'
import Advert from '../component/Advert';
import Footer from '../component/Footer';

import axios from 'axios';
import servicePath from '../config/apiUrl';
import Link from 'next/link';

const myList = (list) => {

    const [mylist, setMylist] = useState(
        list.data
    )

    console.log('listdata的' + mylist[0].typeName)

    useEffect(() => {
        setMylist(list.data)
    })
    return (
        <div>
            <Head>
                <title>list</title>
            </Head>
            <Header></Header>
            <Row className="comm-main" type='flex' justify='center'>
                <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div className='bread'>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>{mylist[0].typeName}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout='vertical'
                        dataSource={mylist}
                        renderItem={item => (
                            <List.Item>
                                <div className={styles.listTitle}>
                                    <Link href={{ pathname: '/Detailed', query: { id: item.id } }}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className={styles.listIcon}>
                                    <span> <FieldTimeOutlined />&nbsp;{item.addTime}</span>
                                    <span><FolderOutlined />&nbsp;{item.typeName}</span>
                                    <span><FireOutlined />&nbsp;{item.view_count}人</span>
                                </div>


                                <div className={styles.listContext}> {item.introduce}</div>
                            </List.Item>
                        )}

                    />
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

myList.getInitialProps = async (context) => {
    let id = context.query.id
    const promise = new Promise((resolve) => {
        axios(servicePath.getListById + id).then(
            (res) => {
                console.log('--->', res.data)
                resolve(res.data)
            }
        )
    })
    return await promise
}

export default myList