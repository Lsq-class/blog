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

//tocify.tsx  jsx

import Tocify from '../component/tocify.tsx'


import marked from 'marked';
import hljs from 'highlight.js';

import 'highlight.js/styles/monokai-sublime.css'
import 'markdown-navbar/dist/navbar.css'


import axios from 'axios'

import servicePath from '../config/apiUrl';



const Detailed = (props) => {

    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    }
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })

    let html = marked(props.article_content)

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
                            <Breadcrumb.Item><a href={'./List?id=' + props.typeId}>{props.typeName}</a></Breadcrumb.Item>
                            <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className={styles.detailedTitle}>
                            React项目实战开发
                        </div>
                        <div className={styles.center + ' list-icon'}>
                            <span><CalendarOutlined />{props.addTime}</span>
                            <span><FolderOutlined />&nbsp;{props.typeName}</span>
                            <span><FireOutlined />&nbsp;{props.view_count}人</span>
                        </div>
                        <div className={styles.detailedContent}
                            dangerouslySetInnerHTML={{ __html: html }}
                        >

                        </div>

                    </div>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className='comm-box'>
                            <div className={styles.navTitle}>文件目录</div>
                            {tocify && tocify.render()}
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
        axios(servicePath.getArticleById + id).then(
            (res) => {
                console.log(res.data)
                resolve(res.data[0])
            }
        )
    })
    return await promise
}
export default Detailed