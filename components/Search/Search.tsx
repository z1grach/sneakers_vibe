import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Search.module.scss";
import {ISneakers} from "@/interface";
import SneakersSort from "@/components/Filter/SneakersSort";
import {useStore} from "@/components/mobx/mobxProvider";
import SearchBlock from "@/components/Search/SearchBlock";
import SearchReset from "@/components/Search/SearchReset";

const Search = observer(({sneakers}: { sneakers: ISneakers[] }) => {
    const coreStore = useStore();

    return (
        <div className={styles.mainBlock}>
            <div className={styles.contentBlock}>
                {!coreStore.smallScreen &&
                    <div className={styles.searchBlock}>
                        {!coreStore.search
                            ? <SearchBlock sneakers={sneakers}/>
                            : <SearchReset/>
                        }
                    </div>
                }
                <SneakersSort/>
            </div>
        </div>
    );
});

export default Search;