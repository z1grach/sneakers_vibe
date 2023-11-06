import React, {useMemo, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Search.module.scss";
import {BRAND} from "@/Utils/Utils";
import {useStore} from "@/components/mobx/mobxProvider";
import {ISneakers} from "@/interface";

const SearchBlock = observer(({sneakers}: { sneakers: ISneakers[] }) => {
    const coreStore = useStore();
    const [showInput, setShowInput] = useState(false);
    const [search, setSearch] = useState('');
    const [flag, setFlag] = useState(false);
    const timeoutRef = useRef<any>(null);

    const handleClickClose = (event: any) => {
        if (event.target?.dataset?.category !== 'searchElem') {
            document.removeEventListener('click', handleClickClose);
            setShowInput(false);
            setSearch('');
        }
    }

    const handleShowInput = (e: any) => {
        setShowInput(true);
        e.currentTarget.parentNode.lastChild.focus();

        const elem = e.currentTarget.parentNode.parentNode;
        const rect = elem.getBoundingClientRect();

        elem.lastChild.style.top = rect.bottom + 'px';
        elem.lastChild.style.left = rect.left + 'px';

        document.addEventListener('click', handleClickClose);
        document.addEventListener('scroll', handleClickClose, {once: true});
    }

    const handleChangeSearch = (e: any) => {
        setSearch(e.currentTarget.value);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setFlag(!flag);
        }, 500);
    }

    const handleChooseElem = (elem: string) => {
        coreStore.setSearch(elem);
    }

    const listSearch = useMemo(() => {
        if (search) {
            const set = new Set();
            const totalSearch = search.toLowerCase().trim();
            const total = [];
            let elem = '';
            for (let i = 0; i < sneakers.length; ++i) {
                elem = (sneakers[i].brand + ' ' + sneakers[i].model).toLowerCase();

                if (elem.indexOf(totalSearch) !== -1) {
                    if (!set.has(sneakers[i].brand + ' ' + sneakers[i].model)) {
                        total.push(sneakers[i].brand + ' ' + sneakers[i].model);
                        set.add(sneakers[i].brand + ' ' + sneakers[i].model);
                    }
                }

                if (total.length >= 10) break;
            }

            return total;
        } else {
            return BRAND;
        }
    }, [flag]);

    return (
        <>
            <div data-category={'searchElem'} className={styles.inputBlock + (showInput ? ' ' + styles.active : '')}>
                <div
                    className={styles.buttonBlock}
                    onClick={handleShowInput}
                    style={{cursor: showInput ? 'auto' : 'pointer'}}
                    data-category={'searchElem'}
                />
                <input
                    maxLength={40}
                    type={'text'}
                    placeholder={'Поиск'}
                    onChange={handleChangeSearch}
                    value={search}
                    data-category={'searchElem'}
                />
            </div>
            <div data-category={'searchElem'}
                 className={styles.autoComplete + (showInput ? ' ' + styles.activeAutoComplete : '')}>
                <div data-category={'searchElem'} className={styles.listAutoComplete}>
                    {listSearch?.length
                        ? listSearch.map((el: string, index: number) => {
                            return (
                                <div
                                    key={`autocomplete_${el}_${index}`}
                                    className={styles.elemAutoComplete}
                                    onClick={() => handleChooseElem(el)}
                                >
                                    {el}
                                </div>
                            )
                        })
                        : <span>Ничего не найдено</span>
                    }
                </div>
            </div>
        </>
    );
});

export default SearchBlock;