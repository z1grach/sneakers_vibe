import React from 'react';
import {observer} from "mobx-react-lite";
import {ISneakers} from "@/interface";
import styles from "@/styles/SneakerPage.module.scss";
import CopyIcon from "@/public/copy_icon.svg";
import Image from "next/image";
import SneakerPageReplacement from "@/components/sneakerPage/SneakerPageReplacement";
import Button from "@/components/sneakerPage/Button";
import ModalDelivery from "@/components/Modal/ModalDelivery";
import {useStore} from "@/components/mobx/mobxProvider";
import ModalSize from "@/components/Modal/ModalSize";

const SneakerPageInfoBlock = observer(({sneaker}: { sneaker: ISneakers }) => {
    const coreStore = useStore();

    return (
        <>
            <div className={styles.sneakersBlockInfo}>
                <div className={styles.infoName}>
                    <div className={styles.infoNameBrand}>
                        {sneaker.brand}
                    </div>
                    <div className={styles.infoNameModel}>
                        {sneaker.model}
                    </div>
                </div>
                <div className={styles.infoPrice}>
                    {sneaker.price + ' ₽'}
                </div>
                <hr/>
                <div className={styles.infoBlockArticle}>
                    <div className={styles.infoBlockArticleText}>
                        <div className={styles.infoBlockArticleTitle}>Артикул</div>
                        <div className={styles.infoArticle}>{sneaker.article}</div>
                    </div>
                    <div className={styles.infoBlockArticleIcon}>
                        <Image
                            src={CopyIcon}
                            width={20}
                            height={20}
                            alt="copy_svg"
                        />
                    </div>
                </div>
                <hr/>
                <div className={styles.infoBlockArticle}>
                    <div className={styles.infoBlockArticleText}>
                        <div className={styles.infoBlockArticleTitle}>Телефон</div>
                        <div className={styles.infoArticle}>+7 931 208 28 94</div>
                    </div>
                    <div className={styles.infoBlockArticleIcon}>
                        <Image
                            src={CopyIcon}
                            width={20}
                            height={20}
                            alt="copy_svg"
                        />
                    </div>
                </div>
                <hr/>
                <Button
                    className={styles.infoBlockButton}
                    action={() => window.open("https://t.me/z1grach", "_blank")}
                >
                    Заказать в <span>Telegram</span>
                </Button>
                <Button
                    className={styles.infoBlockButton}
                    action={() => window.open("https://wa.me/89312082894", "_blank")}
                >
                    Заказать в <span>WhatsApp</span>
                </Button>
                {sneaker.replacement && sneaker.replacement.length
                    ?
                    <div className={styles.infoBlockReplacement}>
                        <div className={styles.infoBlockReplacementTitle}>Доступные расцветки</div>
                        <SneakerPageReplacement currentArticle={sneaker.article} arr={sneaker.replacement}/>
                    </div>
                    : <></>
                }
                <Button
                    className={styles.infoBlockButtonModal}
                    action={() => coreStore.setShowModalSize(true)}
                >
                    Таблица размеров
                </Button>
                <Button
                    className={styles.infoBlockButtonModal}
                    action={() => coreStore.setShowModalDelivery(true)}
                >
                    Оплата и доставка
                </Button>
            </div>
            <ModalDelivery/>
            <ModalSize/>
        </>
    );
});

export default SneakerPageInfoBlock;