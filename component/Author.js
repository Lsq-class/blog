import {
    UserOutlined,
    GithubOutlined,
    QqOutlined,
    WeiboSquareOutlined
} from '@ant-design/icons';
import { Avatar, Divider } from 'antd'
import styles from '../static/styles/components/Author.module.css'

const Author = () => (
    <div className={styles.authorDiv + ' comm-box'}>
        <div>
            <Avatar size={100} icon={<UserOutlined />} />
        </div>
        <div className={styles.authorIntroduction}>
            ❤❥웃유♋☮✌☏☢☠✔☑♚▲♪✈✞÷↑↓◆◇⊙■□△▽¿─│♥❣♂♀☿Ⓐ✍✉☣☤✘☒♛▼♫⌘☪≈←→◈◎☉★☆⊿※¡━┃♡ღツ☼☁❅♒✎©®™Σ〗∞✫★
            <Divider>社交账号</Divider>
            <Avatar size={28} icon={<GithubOutlined />} className={styles.account} />
            <Avatar size={28} icon={<QqOutlined />} className={styles.account} />
            <Avatar size={28} icon={<WeiboSquareOutlined />} className={styles.account} />
        </div>

    </div>
)
export default Author