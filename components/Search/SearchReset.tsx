import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "@/components/mobx/mobxProvider";
import styles from "@/styles/Search.module.scss";
import Image from "next/image";
import cancelIcon from "@/public/cancel_icon.svg";

const SearchReset = observer(() => {
    const coreStore = useStore();

    return (
        <div
            onClick={() => coreStore.setSearch('')}
            className={styles.resetSearch}
        >
            <strong>Поиск:</strong>
            <span>"{coreStore.search}"</span>
            <div className={styles.divClose}>
                <Image
                    src={cancelIcon}
                    alt="reset_filter"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
});

export default SearchReset;