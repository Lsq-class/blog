import styles from '../static/styles/components/Advert.module.css'

const Advert = () => {
    return (
        <div className={styles.adDiv + ' comm-box'}>
            <div><img src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
            <div><img src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
            <div><img src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
            <div><img src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
        </div>
    )
}

export default Advert