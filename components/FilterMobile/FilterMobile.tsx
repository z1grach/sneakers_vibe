import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "@/components/mobx/mobxProvider";
import styles from "@/styles/MobileFilter.module.scss";
import Image from "next/image";
import cancelIcon from "@/public/cancel_icon.svg";
import FilterMobileTodos from "@/components/FilterMobile/FilterMobileTodos";

const BRAND: string[] = [
    'Adidas',
    'New Balance',
    'Nike',
    'Puma',
    'Reebok'
];

const COLORS: string[] = [
    'Белый',
    'Голубой',
    'Зеленый',
    'Красный',
    'Серый',
    'Синий',
    'Черный'
];

const GENDER: string[] = [
    'Мужской',
    'Женский',
    'Унисекс'
];

const FilterMobile = observer(() => {
    const coreStore = useStore();


    const handleResetFilter = () => {
        coreStore.resetFilter();
        coreStore.setMobileFilter(false);
    }

    const handleActivateFilter = (e: any) => {
        e.preventDefault();
        coreStore.activatedTempFilter();
    }

    if (coreStore.showMobileFilter) {
        return (
            <div className={styles.filter}>
                <div className={styles.headerFilter}>
                    <div className={styles.headerFilterDiv}>
                        <div
                            className={styles.headerFilterClose}
                            onClick={() => coreStore.setMobileFilter(false)}
                        >
                            <Image
                                src={cancelIcon}
                                alt="reset_filter"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className={styles.headerFilterTitle}>
                            Фильтр
                        </div>
                        <div
                            className={styles.headerFilterReset}
                            onClick={handleResetFilter}
                        >
                            Сбросить
                        </div>
                    </div>
                </div>
                <div className={styles.contentFilter}>
                    <FilterMobileTodos
                        arr={BRAND}
                        type={'brand'}
                        title={'Бренд'}
                    />
                    <FilterMobileTodos
                        arr={COLORS}
                        type={'color'}
                        title={'Цвет'}
                    />
                    <FilterMobileTodos
                        arr={GENDER}
                        type={'gender'}
                        title={'Пол'}
                    />
                </div>
                <div
                    className={styles.showButton}
                    onClick={handleActivateFilter}
                >
                    Показать
                </div>
            </div>
        );
    }

    return <></>;
});

export default FilterMobile;