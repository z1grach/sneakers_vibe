import React, {Fragment} from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Sneakers.module.scss";
import {useStore} from "@/components/mobx/mobxProvider";

const SneakersPageCount = observer(({pageLength}: { pageLength: number }) => {
    const coreStore = useStore();

    const handleChangePage = (flag: boolean) => {
        document.documentElement.scrollTop = 0;

        if (!flag) {
            if (coreStore.pageList > 0) {
                coreStore.setPageList(coreStore.pageList - 1);
            }
        } else {
            if (coreStore.pageList + 1 < pageLength) {
                coreStore.setPageList(coreStore.pageList + 1);
            }
        }
    }

    const handleChangePageIndex = (num: number) => {
        document.documentElement.scrollTop = 0;
        coreStore.setPageList(num);
    }

    return (
        <div className={styles.divPage}>
            <div
                onClick={() => handleChangePage(false)}
                style={{visibility: coreStore.pageList > 0 ? 'visible' : 'hidden'}}
            >
                <div className={styles.arrowLeft}/>
            </div>
            {pageLength > 0 && Array.from({length: pageLength}, (_, index: number) => {
                if (pageLength <= 5 || ((coreStore.pageList - 2 < 0 && index < 5) || (coreStore.pageList + 2 >= pageLength && index > pageLength - 6)) ||
                    (index > coreStore.pageList - 3 && index < coreStore.pageList + 3)) {
                    return (
                        <div
                            key={'pages_' + index}
                            className={index === coreStore.pageList ? styles.active : ''}
                            onClick={() => handleChangePageIndex(index)}
                        >
                            {index + 1}
                        </div>
                    )
                } else return <Fragment key={'pages_' + index}/>;
            })}
            <div
                onClick={() => handleChangePage(true)}
                style={{visibility: coreStore.pageList + 1 < pageLength ? 'visible' : 'hidden'}}
            >
                <div className={styles.arrowRight}/>
            </div>
        </div>
    );
});

export default SneakersPageCount;