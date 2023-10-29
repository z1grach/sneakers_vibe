import React from 'react';
import {observer} from "mobx-react-lite";
import {ISneakers} from "@/interface";
import styles from "@/styles/Sneakers.module.scss";
import Filter from "@/components/Filter/Filter";
import SneakersList from "@/components/sneakers/SneakersList";
import {useStore} from "@/components/mobx/mobxProvider";
import FilterMobile from "@/components/FilterMobile/FilterMobile";
import Search from "@/components/Search/Search";

const SneakersMain = observer(({sneakers}: { sneakers: ISneakers[] }) => {
    const coreStore = useStore();

    return (
        <>
            <Search sneakers={sneakers}/>
            <div className={styles.mainContent}>
                {coreStore.smallScreen
                    ? <FilterMobile/>
                    : <Filter/>
                }
                <SneakersList sneakers={sneakers}/>
            </div>
        </>
    );
});

export default SneakersMain;