import React from 'react';
import styles from "@/styles/Sneakers.module.scss";
import SneakerImg from "@/public/sneaker_svg.svg";
import Image from "next/image";
import {observer} from "mobx-react-lite";

const SneakersContent = observer(() => {
    return (
        <div className={styles.sneakersMain}>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
            <div className={styles.sneakersElement}>
                <div className={styles.imageDiv}>
                    <Image
                        src={SneakerImg}
                        width={50}
                        height={50}
                        alt="sneaker_img"
                        priority={true}
                    />
                </div>
                <div className={styles.nameDiv}>
                    <span>Sneakers</span>
                </div>
            </div>
        </div>
    );
});

export default SneakersContent;