import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Footer.module.scss";

const Footer = observer(() => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.infoBlock}>
                <div>
                    <span>Информация</span>
                    <div>
                        <div>
                            Политика конфиденциальности
                        </div>
                        <div>
                            Оплата и доставка
                        </div>
                        <div>
                            Возврат
                        </div>
                        <div>
                            Таблица размеров
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
                    <div>
                        <div>
                            ВКонтакте
                        </div>
                        <div>
                            Telegram
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                © SneakersVibe 2023
            </div>
        </div>
    );
});

export default Footer;