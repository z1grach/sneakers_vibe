import React, {Fragment, useMemo} from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Sneakers.module.scss";
import {ISneakers} from "@/interface";
import {useStore} from "@/components/mobx/mobxProvider";
import SneakersSort from "@/components/Filter/SneakersSort";
import SneakersPageCount from "@/components/sneakers/SneakersPageCount";
import Link from 'next/link';

const SneakersList = observer(({sneakers}: { sneakers: ISneakers[] }) => {
    const coreStore = useStore();

    const sorting = (a: ISneakers, b: ISneakers) => {
        if (coreStore.sorting === 'descending') {
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
            return 0;
        } else if (coreStore.sorting === 'ascending') {
            if (a.price > b.price) {
                return 1;
            }
            if (a.price < b.price) {
                return -1;
            }
            return 0;
        } else if (coreStore.sorting === 'popular') {
            if (a.popular < b.popular) {
                return 1;
            }
            if (a.popular > b.popular) {
                return -1;
            }
            return 0;
        }
    }

    const check = (el: ISneakers) => {
        if (coreStore.filter.brand.length) {
            if (coreStore.filter.brand.indexOf(el.brand) === -1) {
                return false;
            }
        }

        if (coreStore.filter.color.length) {
            if (coreStore.filter.color.indexOf(el.color) === -1) {
                return false;
            }
        }

        if (coreStore.filter.gender.length) {
            if (coreStore.filter.gender.indexOf(el.gender) === -1) {
                return false;
            }
        }

        return true;
    }

    const data = useMemo(() => {
        if (sneakers) {
            const arr = sneakers.filter((el: ISneakers) => check(el));

            if (coreStore.sorting === 'new' || coreStore.sorting === 'old') {
                return coreStore.sorting === 'new' ? arr.reverse() : arr;
            } else return arr.sort(sorting);
        }
        return undefined;
    }, [coreStore.filter, coreStore.filter.gender, coreStore.filter.color, coreStore.filter.brand, coreStore.sorting]);


    return (
        <>
            {data
                ?
                <div className={styles.sneakersMain}>
                    <SneakersSort/>
                    <div className={styles.sneakersList}>
                        {data.map((el: ISneakers, index: number) => {
                            if (index >= coreStore.pageList * 60 && index < coreStore.pageList * 60 + 60) {
                                return (
                                    <Link
                                        key={'sneaker_id_' + el.article}
                                        className={styles.sneakersElement}
                                        href={`/sneakers/${el.article}`}
                                    >
                                        <div className={styles.imageDiv}>
                                            <img
                                                src={`/${el.article}_1.jpg`}
                                                alt={el.brand + ' ' + el.model}
                                            />
                                        </div>
                                        <div className={styles.infoDiv}>
                                            <span>{el.brand + ' ' + el.model}</span>
                                            <strong>{el.price + ' ₽'}</strong>
                                        </div>
                                    </Link>
                                )
                            } else return <Fragment key={'sneaker_id_' + el.article}/>;
                        })}
                    </div>
                    <SneakersPageCount pageLength={Math.floor(data.length / 60)}/>
                </div>
                : <></>
            }
        </>
    );
});

export default SneakersList;