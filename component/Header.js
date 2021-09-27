import React, { useState, useEffect } from 'react'
import styles from '../static/styles/components/Header.module.css'
import { Row, Col, Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navArray, setNavArry] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then((res) => {

                return res.data.data
            })
            setNavArry(result)
        }
        fetchData()
    }, [])

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/List?id=' + e.key)
        }
    }

    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_2811370_ibz8h3a4ppo.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)

        ],
    });

    return (
        <div className={styles.header}>
            <Row type='flex' justify='center'>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className={styles.logo}>技术胖</span>
                    <span className={styles.txt}>专注前端开发，每年1000集免费视频</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={8}>
                    <Menu mode='horizontal' onClick={handleClick} className='nn'>
                        <Menu.Item key='0'>
                            <IconFont type='icon-home' />
                            &nbsp;&nbsp;&nbsp;首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <IconFont type={item.icon} />
                                        &nbsp;&nbsp;&nbsp;{item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }


                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

module.exports = Header

