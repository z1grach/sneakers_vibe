import React, {useEffect, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/SneakerPage.module.scss";
import {ISneakers} from "@/interface";

const SneakerPageImage = observer(({sneaker}: { sneaker: ISneakers }) => {
    const [image, setImage] = useState(`${sneaker.article}_${1}`);

    const handleMouseMoveImg = (e: any) => {
        const imageElem = e.currentTarget.parentNode.firstChild;
        const zoomedImage = e.currentTarget.parentNode.lastChild;

        zoomedImage.style.backgroundImage = `url(${imageElem.src})`;
        zoomedImage.style.backgroundSize = `${imageElem.offsetWidth * 3}px ${imageElem.offsetHeight * 3}px`;
        zoomedImage.style.display = 'block';

        zoomedImage.style.left = (e.pageX - zoomedImage.offsetWidth / 2) + "px";
        zoomedImage.style.top = (e.pageY - zoomedImage.offsetHeight / 2) + "px";
    }

    const handleMouseMove = (e: any) => {
        const imageElem = e.currentTarget.parentNode.firstChild;
        const zoomedImage = e.currentTarget.parentNode.lastChild;

        const bw = 3;
        const w = zoomedImage.offsetWidth / 2;
        const h = zoomedImage.offsetHeight / 2;

        const rect = imageElem.getBoundingClientRect();

        let mouseX = e.pageX - rect.left - window.scrollX;
        let mouseY = e.pageY - rect.top - window.scrollY;

        if ((rect.right + window.scrollX) - e.pageX < 0) {
            zoomedImage.style.display = 'none';
        }

        if (e.pageX - rect.left < 0) {
            zoomedImage.style.display = 'none';
        }

        if (e.pageY - rect.top < 0) {
            zoomedImage.style.display = 'none';
        }

        if ((rect.bottom + window.scrollY) - e.pageY < 0) {
            zoomedImage.style.display = 'none';
        }


        if (mouseX > imageElem.width - (w / 3)) {
            mouseX = imageElem.width - (w / 3);
        }
        if (mouseX < w / 3) {
            mouseX = w / 3;
        }
        if (mouseY > imageElem.height - (h / 3)) {
            mouseY = imageElem.height - (h / 3);
        }
        if (mouseY < h / 3) {
            mouseY = h / 3;
        }

        zoomedImage.style.left = (e.pageX - w) + "px";
        zoomedImage.style.top = (e.pageY - h) + "px";
        zoomedImage.style.backgroundPosition = "-" + ((mouseX * 3) - w + bw) + "px -" + ((mouseY * 3) - h + bw) + "px";
    }

    const handleMouseLeave = (e: any) => {
        e.currentTarget.style.display = 'none';
    }

    const images = useMemo(() => {
        const arr: string[] = [];
        for (let i = 1; i <= 5; ++i) {
            arr.push(`${sneaker.article}_${i}`);
        }
        return arr;
    }, [sneaker]);

    useEffect(() => {
        setImage(`${sneaker.article}_${1}`);
    }, [sneaker]);

    return (
        <div
            className={styles.sneakersBlockImage}
            draggable={false}
        >
            <div
                className={styles.sneakersBlockImageList}
                draggable={false}
            >
                {images.map((el: string) => {
                    return (
                        <div
                            key={'images_' + el}
                            className={styles.sneakersBlockImageListElem + (image === el ? ' ' + styles.active : '')}
                            onClick={() => setImage(el)}
                            draggable={false}
                        >
                            <div draggable={false}>
                                <img
                                    src={`/${el}.jpg`}
                                    alt={sneaker.brand + ' ' + sneaker.model + ' ' + el}
                                    draggable={false}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div
                className={styles.sneakersBlockImageMain}
                draggable={false}
            >
                <div
                    className={styles.sneakersBlockImageMainDiv}
                    draggable={false}
                >
                    <img
                        src={`/${image}.jpg`}
                        alt={sneaker.brand + ' ' + sneaker.model + ' ' + image}
                        onMouseMove={handleMouseMoveImg}
                        draggable={false}
                    />
                    <div
                        id={'zoom'}
                        className={styles.zoomedImage}
                        style={{display: 'none'}}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
});

export default SneakerPageImage;