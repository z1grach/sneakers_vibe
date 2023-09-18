import {observer} from "mobx-react";
import styles from "@/styles/Header.module.scss";
import Image from 'next/image';
import SneakerSvg from '@/public/sneaker_svg.svg';
import React from 'react';
import Link from "next/link";

const Header = observer(({children}: { children: React.ReactNode }) => {
    return (
        <main>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.blockIcon}>
                        <Image
                            src={SneakerSvg}
                            width={50}
                            height={50}
                            alt="sneaker_svg"
                            priority={true}
                        />
                    </div>
                    <nav className={styles.navBar}>
                        <Link
                            className={styles.pageLink}
                            href="/"
                        >
                            Главная
                        </Link>
                        <Link
                            className={styles.pageLink}
                            href="/sneakers"
                        >
                            Кроссовки
                        </Link>
                        <Link
                            href="/about"
                            className={styles.pageLink}
                        >
                            Информация
                        </Link>
                    </nav>
                </div>
            </header>
            {children}
        </main>
    )
});

export default Header;