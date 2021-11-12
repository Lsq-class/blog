import styles from '../static/styles/components/Advert.module.css'
import Image from 'next/image'

const Advert = () => {
    return (
        <div className={styles.adDiv + ' comm-box'}>
            <div><Image src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
            <div><Image src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
            <div><Image src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
            <div><Image src='http://blogimages.jspang.com/flutter_ad2.jpg' width='100%' /></div>
        </div>
    )
}

export default Advert