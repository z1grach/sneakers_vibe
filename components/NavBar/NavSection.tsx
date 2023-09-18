import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/SneakerPage.module.scss";
import Image from "next/image";
import ArrowSvg from "@/public/arrow_icon.svg";
import Link from "next/link";
import {useRouter} from 'next/router';

const NavSection = observer(() => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/sneakers');
    }

    return (
        <div className={styles.blockNav}>
            <div
                className={styles.blockNavArrow}
                onClick={handleClick}
            >
                <Image
                    src={ArrowSvg}
                    width={30}
                    height={30}
                    alt="arrow_svg"
                    priority={true}
                />
            </div>
            <div className={styles.blockSection}>
                <Link
                    href="/"
                    className={styles.pageLink}
                >
                    Главная
                </Link>
                <span>/</span>
                <Link
                    href="/sneakers"
                    className={styles.pageLink}
                >
                    Кроссовки
                </Link>
            </div>
        </div>
    );
});

export default NavSection;