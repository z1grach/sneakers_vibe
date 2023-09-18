import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Sneakers.module.scss";
import {useStore} from "@/components/mobx/mobxProvider";
import FilterNameReset from "@/components/Filter/FilterNameReset";

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

const Filter = observer(() => {
    const coreStore = useStore();

    const handleChangeCheckBox = (type: string, value: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        coreStore.setFilter({type, value, flag: e.currentTarget.checked});
    }

    return (
        <div className={styles.filter}>
            <FilterNameReset/>
            <div className={styles.checkboxCategory}>
                <span>Бренд</span>
                <div>
                    {BRAND.map((brand: string) => {
                        return (
                            <label
                                key={'filter_brand_' + brand}
                                className={styles.checkboxElem}
                            >
                                <input
                                    type="checkbox"
                                    checked={coreStore.filter.brand.indexOf(brand) !== -1}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox('brand', brand, e)}
                                />
                                <span>{brand}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className={styles.checkboxCategory}>
                <span>Цвет</span>
                <div>
                    {COLORS.map((color: string) => {
                        return (
                            <label
                                key={'filter_color_' + color}
                                className={styles.checkboxElem}
                            >
                                <input
                                    type="checkbox"
                                    checked={coreStore.filter.color.indexOf(color) !== -1}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox('color', color, e)}
                                />
                                <span>{color}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className={styles.checkboxCategory}>
                <span>Пол</span>
                <div>
                    {GENDER.map((gender: string) => {
                        return (
                            <label
                                key={'filter_gender_' + gender}
                                className={styles.checkboxElem}
                            >
                                <input
                                    type="checkbox"
                                    checked={coreStore.filter.gender.indexOf(gender) !== -1}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox('gender', gender, e)}
                                />
                                <span>{gender}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    );
});

export default Filter;