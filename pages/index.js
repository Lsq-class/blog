import React, { useState } from 'react'
React.useLayoutEffect = React.useEffect

import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'
import Header from '../component/Header'
import { Row, Col, List } from 'antd'
import {
  FieldTimeOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';

import Author from '../component/Author'
import Advert from '../component/Advert';
import Footer from '../component/Footer';



const Home = (list) => {
  //
  const list1 = []
  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      list1.push(list[key]);

    }
  }

  const [mylist, setMylist] = useState(
    list1
  )
  console.log('list的值', list1)
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>


          <List
            header={<div>最新日志</div>}
            itemLayout='vertical'
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className='list-title'>
                  <Link href={{ pathname: '/Detailed', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>


                </div>
                <div className='list-icon'>
                  <span> <FieldTimeOutlined />{item.addTime}</span>
                  <span><FolderOutlined />{item.typeName}</span>
                  <span><FireOutlined />{item.view_count}</span>
                </div>


                <div className='list-context'> {item.introduce}</div>
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

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res) => {
        console.log('--->', res.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}
export default Home