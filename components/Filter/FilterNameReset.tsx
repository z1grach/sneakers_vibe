import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Sneakers.module.scss";
import {useStore} from "@/components/mobx/mobxProvider";
import Image from 'next/image';
import cancelIcon from '../../public/cancel_icon.svg';

const FilterNameReset = observer(() => {
    const coreStore = useStore();

    const resetFilter = () => {
        coreStore.resetFilter();
    }

    return (
        <div className={styles.filterName}>
            {coreStore.filter.brand.length || coreStore.filter.color.length || coreStore.filter.gender.length
                ?
                <div
                    className={styles.resetFilter}
                    onClick={resetFilter}
                >
                    <div className={styles.divClose}>
                        <Image
                            src={cancelIcon}
                            alt="reset_filter"
                            width={20}
                            height={20}
                        />
                    </div>
                    <span>Сбросить фильтр</span>
                </div>
                : 'Фильтр'
            }
        </div>
    );
});

export default FilterNameReset;