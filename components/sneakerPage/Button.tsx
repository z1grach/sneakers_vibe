import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "@/styles/SneakerPage.module.scss";

interface IButtonProps {
    children: React.ReactNode
    className: string
    action: () => void
}

const Button = observer(({children, className, action}: IButtonProps) => {
    const handleClick = (e: any) => {
        const wave = document.createElement('span');
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left - 50;
        const y = e.clientY - rect.top - 50;

        wave.className = styles.wave;
        wave.style.top = `${y}px`;
        wave.style.left = `${x}px`;

        e.currentTarget.appendChild(wave)

        setTimeout(() => wave.remove(), 500);

        action();
    }

    return (
        <div
            className={styles.waveBtn + ' ' + className}
            onClick={handleClick}
        >
            {children}
        </div>
    );
});

export default Button;