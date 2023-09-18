import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/Modal.module.scss";
import {useStore} from "@/components/mobx/mobxProvider";

const ModalDelivery = observer(() => {
    const coreStore = useStore();

    const handleClickOverlay = () => {
        coreStore.setShowModalDelivery(false);
    }

    return (
        <>
            <div className={styles.modal + (coreStore.showModalDelivery ? ' ' + styles.active : '')}>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div
                className={styles.overlay + (coreStore.showModalDelivery ? ' ' + styles.active : '')}
                onClick={handleClickOverlay}
            />
        </>
    );
});

export default ModalDelivery;