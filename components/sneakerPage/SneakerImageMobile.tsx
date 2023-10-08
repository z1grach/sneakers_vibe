import React, {useEffect, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {ISneakers} from "@/interface";
import styles from "@/styles/SneakerPage.module.scss";

const SneakerImageMobile = observer(({sneaker}: { sneaker: ISneakers }) => {
    const itemRef = useRef(null);
    let swipeStartPosX = 0;
    let swipeStartPosY = 0;
    let hasSwipeState = false;
    let hasSwiping = false;
    let transform = 0;


    const move = (data: any) => {
        if (data.direction === 'none') {
            const valueX = transform * data.itcssWidth;
            data.elItems.style.transform = `translate(${valueX}px, 0px)`;
            return;
        }
        transform += data.direction === 'next' ? -1 : 1;

        const valueX = transform * data.itcssWidth;
        data.elItems.style.transform = `translate(${valueX}px, 0px)`;

    }

    const handleMouseUp = (e: any) => {
        console.log(e.type)
        if (!hasSwipeState) {
            return;
        }
        const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
        let diffPosX = swipeStartPosX - event.clientX;
        if (transform === 0 && diffPosX < 0) return;
        if (transform === -4 && diffPosX > 0) return;
        if (diffPosX === 0) {
            hasSwipeState = false;
            return;
        }

        const value = (diffPosX / e.currentTarget.offsetWidth) * 100;

        const elItems = e.currentTarget.firstChild.firstChild;
        elItems.style.transition = 'transform 0.5s ease';

        if (value > 20) {
            move({
                direction: 'next',
                elItems,
                itcssWidth: e.currentTarget.offsetWidth
            });
        } else if (value < -20) {
            move({
                direction: 'prev',
                elItems,
                itcssWidth: e.currentTarget.offsetWidth
            });
        } else {
            move({
                direction: 'none',
                elItems,
                itcssWidth: e.currentTarget.offsetWidth
            });
        }

        hasSwipeState = false;
    }


    const handleMouseDown = (e: any) => {
        const event = e.type.search('touch') === 0 ? e.touches[0] : e;

        swipeStartPosX = event.clientX;
        swipeStartPosY = event.clientY;
        hasSwipeState = true;
        hasSwiping = false;
    }

    const handleMouseMove = (e: any) => {
        if (!hasSwipeState) {
            return;
        }

        const event = e.type.search('touch') === 0 ? e.touches[0] : e;
        const diffPosX = swipeStartPosX - event.clientX;
        const diffPosY = swipeStartPosY - event.clientY;
        if (transform === 0 && diffPosX < 0) return;
        if (transform === -4 && diffPosX > 0) return;

        if (!hasSwiping) {
            if (Math.abs(diffPosY) > Math.abs(diffPosX) || Math.abs(diffPosX) === 0) {
                hasSwipeState = false;
                return;
            }
            hasSwiping = true;
        }

        const elItems = e.currentTarget.firstChild.firstChild;
        elItems.style.transition = 'none';
        const valueX = transform * e.currentTarget.offsetWidth - diffPosX;
        elItems.style.transform = `translate(${valueX}px, 0px)`;
    }

    useEffect(() => {
        if (itemRef.current) {
            itemRef.current.style.transform = `translate(0px, 0px)`;
        }
    }, [sneaker]);

    return (
        <div
            className={styles.blockImageMobile}
            draggable={false}
        >
            <div
                className={styles.itcss}
                draggable={false}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onTouchCancel={handleMouseUp}
            >
                <div
                    className={styles.itcss__wrapper}
                    draggable={false}
                >
                    <div
                        ref={itemRef}
                        className={styles.itcss__items}
                        draggable={false}
                        style={{transform: 'translate(0px, 0px)'}}
                    >
                        <div
                            className={styles.itcss__item}
                            draggable={false}
                        >
                            <img
                                src={`/${sneaker.article}_1.jpg`}
                                draggable={false}
                                alt={`/${sneaker.article}_1.jpg`}
                            />
                        </div>
                        <div
                            className={styles.itcss__item}
                            draggable={false}
                        >
                            <img
                                src={`/${sneaker.article}_2.jpg`}
                                draggable={false}
                                alt={`/${sneaker.article}_2.jpg`}
                            />
                        </div>
                        <div
                            className={styles.itcss__item}
                            draggable={false}
                        >
                            <img
                                src={`/${sneaker.article}_3.jpg`}
                                draggable={false}
                                alt={`/${sneaker.article}_3.jpg`}
                            />
                        </div>
                        <div
                            className={styles.itcss__item}
                            draggable={false}
                        >
                            <img
                                src={`/${sneaker.article}_4.jpg`}
                                draggable={false}
                                alt={`/${sneaker.article}_4.jpg`}
                            />
                        </div>
                        <div
                            className={styles.itcss__item}
                            draggable={false}
                        >
                            <img
                                src={`/${sneaker.article}_5.jpg`}
                                draggable={false}
                                alt={`/${sneaker.article}_5.jpg`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SneakerImageMobile;