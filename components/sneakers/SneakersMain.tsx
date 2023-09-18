import React from 'react';
import {observer} from "mobx-react-lite";
import {ISneakers} from "@/interface";
import styles from "@/styles/Sneakers.module.scss";
import Filter from "@/components/Filter/Filter";
import SneakersList from "@/components/sneakers/SneakersList";
import {useStore} from "@/components/mobx/mobxProvider";
import FilterMobile from "@/components/FilterMobile/FilterMobile";

const SneakersMain = observer(({sneakers}: { sneakers: ISneakers[] }) => {
    const coreStore = useStore();

    return (
        <div className={styles.mainContent}>
            {coreStore.mobileMode
                ? <FilterMobile/>
                : <Filter/>
            }
            <SneakersList sneakers={sneakers}/>
        </div>
    );
});

export default SneakersMain;