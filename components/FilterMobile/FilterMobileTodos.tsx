import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/MobileFilter.module.scss";
import FilterMobileElem from "@/components/FilterMobile/FilterMobileElem";

const FilterMobileTodos = observer(({arr, type, title}: { arr: string[], type: string, title: string }) => {
    return (
        <div className={styles.checkboxCategory}>
            <h3>{title}</h3>
            <div>
                <hr/>
                {arr.map((elem: string) => {
                    return (
                        <FilterMobileElem
                            key={`filter_${type}_${elem}`}
                            type={type}
                            elem={elem}
                        />
                    )
                })}
            </div>
        </div>
    );
});

export default FilterMobileTodos;