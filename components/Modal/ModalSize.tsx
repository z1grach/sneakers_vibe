import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "@/components/mobx/mobxProvider";
import styles from "@/styles/Modal.module.scss";

const ModalSize = observer(() => {
    const coreStore = useStore();

    const handleClickOverlay = () => {
        coreStore.setShowModalSize(false)
    }

    return (
        <>
            <div className={styles.modal + (coreStore.showModalSize ? ' ' + styles.active : '')}>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div
                className={styles.overlay + (coreStore.showModalSize ? ' ' + styles.active : '')}
                onClick={handleClickOverlay}
            />
        </>
    );
});

export default ModalSize;