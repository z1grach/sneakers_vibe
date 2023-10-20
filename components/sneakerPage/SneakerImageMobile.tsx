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
    let countImg = 4;
    let touchIdentifier = -1;


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
        if (!hasSwipeState) {
            touchIdentifier = -1;
            return;
        }

        let event;
        if (e.type.search('touch') === 0) {
            event = e.changedTouches[0];

            if (event.identifier !== touchIdentifier) return;
        } else {
            event = e;
        }

        let diffPosX = swipeStartPosX - event.clientX;
        if (transform === 0 && diffPosX < 0) {
            touchIdentifier = -1;
            hasSwipeState = false;
            return;
        }
        if (transform === -countImg && diffPosX > 0) {
            touchIdentifier = -1;
            hasSwipeState = false;
            return;
        }
        if (diffPosX === 0) {
            touchIdentifier = -1;
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

        touchIdentifier = -1;
        hasSwipeState = false;
    }


    const handleMouseDown = (e: any) => {
        if (hasSwipeState) return;

        let event;
        if (e.type.search('touch') === 0) {
            event = e.changedTouches[0];
            touchIdentifier = event.identifier;
        } else {
            event = e;
        }

        swipeStartPosX = event.clientX;
        swipeStartPosY = event.clientY;
        hasSwipeState = true;
        hasSwiping = false;
    }

    const handleMouseMove = (e: any) => {
        if (!hasSwipeState) return;

        let event;
        if (e.type.search('touch') === 0) {
            event = e.changedTouches[0];
            if (event.identifier !== touchIdentifier) return;
        } else {
            event = e;
        }

        const diffPosX = swipeStartPosX - event.clientX;
        const diffPosY = swipeStartPosY - event.clientY;
        if (transform === 0 && diffPosX < 0) return;
        if (transform === -countImg && diffPosX > 0) return;

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
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchMove={handleMouseMove}
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