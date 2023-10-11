import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/NavSelection.module.scss";
import Image from "next/image";
import ArrowSvg from "@/public/arrow_icon.svg";
import Link from "next/link";

interface INavSectionProps {
    pages: {
        link: string;
        name: string;
    }[]
}

const NavSection = observer(({pages}: INavSectionProps) => {
    const handleClick = () => {
        history.back();
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
                    href={pages[0].link}
                    className={styles.pageLink}
                >
                    {pages[0].name}
                </Link>
                <span>/</span>
                <Link
                    href={pages[1].link}
                    className={styles.pageLink}
                >
                    {pages[1].name}
                </Link>
            </div>
        </div>
    );
});

export default NavSection;