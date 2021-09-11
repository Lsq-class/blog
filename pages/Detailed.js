import React from 'react'
import Head from 'next/head'
import Header from '../component/Header'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined
} from '@ant-design/icons';
import styles from '../static/styles/components/Detailed.module.css'

import Author from '../component/Author'
import Advert from '../component/Advert';
import Footer from '../component/Footer';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css'

import axios from 'axios'


const Detailed = () => {
    let markdown = '# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        ' ``` console.log(111) ``` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'

    return (
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
                            <ReactMarkdown
                                children={markdown}
                                skipHtml={false}
                                remarkPlugins={[remarkGfm]}
                            />
                        </div>

                    </div>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className='comm-box'>
                            <div className={styles.navTitle}>文件目录</div>
                            <MarkNav
                                className={styles.articleMenu}
                                source={markdown}
                                ordered={false}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />

        </div>
    )
}

Detailed.getInitialProps = async (context) => {
    console.log(context.query.id)

    let id = context.query.id

    const promise = new Promise((resolve) => {
        axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
            (res) => {
                console.log(res.data)
                resolve(res.data[0])
            }
        )
    })
    return await promise
}
export default Detailed