import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Search.module.scss";
import {ISneakers} from "@/interface";
import SneakersSort from "@/components/Filter/SneakersSort";
import {useStore} from "@/components/mobx/mobxProvider";
import SearchBlock from "@/components/Search/SearchBlock";

const Search = observer(({sneakers}: { sneakers: ISneakers[] }) => {
    const coreStore = useStore();

    return (
        <div className={styles.mainBlock}>
            <div className={styles.contentBlock}>
                <div data-category={'searchElem'} className={styles.searchBlock}>
                    {!coreStore.search
                        ? <SearchBlock sneakers={sneakers}/>
                        : <></>
                    }
                </div>
                <SneakersSort/>
            </div>
        </div>
    );
});

export default Search;