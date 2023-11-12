import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/SneakerPage.module.scss";
import {ISneakers} from "@/interface";
import Image from "next/image";

const SneakerPageImage = observer(({sneaker}: { sneaker: ISneakers }) => {

    const handleMouseMoveImg = (e: any) => {
        const imageElem = e.currentTarget.parentNode.firstChild;
        const zoomedImage = e.currentTarget.parentNode.lastChild;
        //zoomedImage.style.backgroundImage = `url(${imageElem.src})`;
        zoomedImage.style.backgroundSize = `${imageElem.offsetWidth * 3}px ${imageElem.offsetHeight * 3}px`;
        zoomedImage.style.display = 'block';

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

    const handleChooseImg = (src: string, e: any) => {
        const mainBlock = e.currentTarget.parentNode.parentNode;

        mainBlock.lastChild.firstChild.src = `/${src}.jpg`;
        mainBlock.lastChild.lastChild.style.backgroundImage = `url(/${src}.jpg)`;
    }

    return (
        <div
            className={styles.sneakersBlockImage}
            draggable={false}
        >
            <div
                className={styles.sneakersBlockImageList}
                draggable={false}
            >
                <div
                    className={styles.sneakersBlockImageListElem/* + ' ' + styles.active*/}
                    onClick={(e: any) => handleChooseImg(`${sneaker.article}_1`, e)}
                    draggable={false}
                >
                    <Image
                        src={`/${sneaker.article}_1.jpg`}
                        alt={sneaker.brand + ' ' + sneaker.model + ' ' + `${sneaker.article}_1`}
                        draggable={false}
                        width={65}
                        height={65}
                    />
                </div>
                <div
                    className={styles.sneakersBlockImageListElem}
                    onClick={(e: any) => handleChooseImg(`${sneaker.article}_2`, e)}
                    draggable={false}
                >
                    <Image
                        src={`/${sneaker.article}_2.jpg`}
                        alt={sneaker.brand + ' ' + sneaker.model + ' ' + `${sneaker.article}_2`}
                        draggable={false}
                        width={65}
                        height={65}
                    />
                </div>
                <div
                    className={styles.sneakersBlockImageListElem}
                    onClick={(e: any) => handleChooseImg(`${sneaker.article}_3`, e)}
                    draggable={false}
                >
                    <Image
                        src={`/${sneaker.article}_3.jpg`}
                        alt={sneaker.brand + ' ' + sneaker.model + ' ' + `${sneaker.article}_3`}
                        draggable={false}
                        width={65}
                        height={65}
                    />
                </div>
                <div
                    className={styles.sneakersBlockImageListElem}
                    onClick={(e: any) => handleChooseImg(`${sneaker.article}_4`, e)}
                    draggable={false}
                >
                    <Image
                        src={`/${sneaker.article}_4.jpg`}
                        alt={sneaker.brand + ' ' + sneaker.model + ' ' + `${sneaker.article}_4`}
                        draggable={false}
                        width={65}
                        height={65}
                    />
                </div>
                <div
                    className={styles.sneakersBlockImageListElem}
                    onClick={(e: any) => handleChooseImg(`${sneaker.article}_5`, e)}
                    draggable={false}
                >
                    <Image
                        src={`/${sneaker.article}_5.jpg`}
                        alt={sneaker.brand + ' ' + sneaker.model + ' ' + `${sneaker.article}_5`}
                        draggable={false}
                        width={65}
                        height={65}
                    />
                </div>
            </div>
            <div
                className={styles.sneakersBlockImageMain}
                draggable={false}
            >
                <img
                    src={`/${sneaker.article}_1.jpg`}
                    alt={sneaker.brand + ' ' + sneaker.model}
                    onMouseMove={handleMouseMoveImg}
                    draggable={false}
                    style={{
                        width: '550px',
                        height: 'auto',
                    }}
                />
                <div
                    id={'zoom'}
                    className={styles.zoomedImage}
                    style={{display: 'none', backgroundImage: `url(/${sneaker.article}_1.jpg)`}}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    draggable={false}
                />
            </div>
        </div>
    );
});

export default SneakerPageImage;