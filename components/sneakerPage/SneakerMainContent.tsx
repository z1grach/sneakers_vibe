import React from 'react';
import {observer} from "mobx-react-lite";
import {ISneakers} from "@/interface";
import styles from "@/styles/SneakerPage.module.scss";
import NavSection from "@/components/NavBar/NavSection";
import SneakerPageImage from "@/components/sneakerPage/SneakerPageImage";
import SneakerPageInfoBlock from "@/components/sneakerPage/SneakerPageInfoBlock";
import {useStore} from "@/components/mobx/mobxProvider";
import SneakerImageMobile from "@/components/sneakerPage/SneakerImageMobile";

const SneakerMainContent = observer(({sneaker}: { sneaker: ISneakers }) => {
    const coreStore = useStore();

    return (
        <div className={styles.mainBlock}>
            <NavSection pages={[{link: '/', name: 'Главная'}, {link: '/sneakers', name: 'Кроссовки'}]}/>
            <div className={styles.sneakersBlock}>
                {coreStore.mobileMode
                    ? <SneakerImageMobile sneaker={sneaker}/>
                    : <SneakerPageImage sneaker={sneaker}/>
                }
                <SneakerPageInfoBlock sneaker={sneaker}/>
            </div>
        </div>
    );
});

export default SneakerMainContent;