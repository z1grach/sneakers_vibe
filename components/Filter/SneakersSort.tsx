import React from 'react';
import styles from "@/styles/Sneakers.module.scss";
import {useStore} from "@/components/mobx/mobxProvider";
import {observer} from "mobx-react-lite";
import FilterIcon from "@/public/filter.svg";
import Image from "next/image";

const SneakersSort = observer(() => {
    const coreStore = useStore();

    const handleChange = (e: any) => {
        coreStore.setSorting(e.currentTarget.value)
    }

    const handleOpenFilter = () => {
        if (coreStore.smallScreen) {
            coreStore.setMobileFilter(true);
        }
    }

    return (
        <div
            className={styles.divSorting}
            style={{justifyContent: coreStore.smallScreen ? 'space-between' : 'flex-end'}}
        >
            {coreStore.smallScreen &&
                <div
                    onClick={handleOpenFilter}
                    className={styles.divSortingFilter}
                >
                    <div className={styles.filterIcon}>
                        <Image
                            src={FilterIcon}
                            alt="filter"
                            width={15}
                            height={15}
                        />
                    </div>
                    Фильтр
                </div>
            }
            <select
                name="sorting"
                value={coreStore.sorting}
                onChange={handleChange}
                className={styles.divSortingFilter}
            >
                <option value="new">Сначала новые товары</option>
                <option value="old">Сначала старые товары</option>
                <option value="descending">По убыванию цены</option>
                <option value="ascending">По возрастанию цены</option>
                <option value="popular">Популярные товары</option>
            </select>
        </div>
    );
});

export default SneakersSort;