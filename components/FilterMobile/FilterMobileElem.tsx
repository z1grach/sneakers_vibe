import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/MobileFilter.module.scss";
import {useStore} from "@/components/mobx/mobxProvider";

const FilterMobileElem = observer(({type, elem}: { type: string, elem: string }) => {
    const coreStore = useStore();

    const handleChange = (e: any) => {
        coreStore.setTempMobileFilter({type, value: elem, flag: e.currentTarget.checked});
    }

    return (
        <>
            <label className={styles.checkboxElem}>
                <input
                    type="checkbox"
                    checked={coreStore.tempMobileFilter[type].indexOf(elem) !== -1}
                    onChange={handleChange}
                />
                <span>{elem}</span>
            </label>
            <hr/>
        </>
    );
});

export default FilterMobileElem;