import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

const Footer = observer(() => {
    return (
        <footer className={styles.footerBlock}>
            <div className={styles.infoBlock}>
                <div>
                    <span>Информация</span>
                    <div className={styles.listMenu}>
                        <div>
                            <Link href="/about/payment">Оплата и доставка</Link>
                        </div>
                        <div>
                            <Link href="/about/product">Таблица размеров</Link>
                        </div>
                        <div>
                            <Link href="/about/refund">Возврат</Link>
                        </div>
                        <div>
                            <Link href="/about/policy">Политика конфиденциальности</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Контакты</span>
                    <div>
                        <div>
                            Телефон: +7(931)-208-28-94
                        </div>
                        <div>
                            WhatsApp/Telegram: +7(931)-208-28-94
                        </div>
                    </div>
                </div>
                <div>
                    <span>Социальные сети</span>
                    <div className={styles.listMenu}>
                        <div>
                            <a href={'https://vk.com/sneakersvibe'}>ВКонтакте</a>
                        </div>
                        <div>
                            <a href={'https://t.me/z1grach'}>Telegram</a>
                        </div>
                        <div>
                            <a href={'https://wa.me/89312082894'}>WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                © SneakersVibe 2023
            </div>
        </footer>
    );
});

export default Footer;