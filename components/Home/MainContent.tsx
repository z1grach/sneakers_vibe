import React, {useCallback, useEffect, useRef} from 'react';
import {observer} from "mobx-react-lite";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

const MainContent = observer(() => {
    const blockImages = useRef<HTMLDivElement | null>(null);

    const handleScroll = useCallback((e: any) => {
        if (!blockImages?.current) return;
        const images = blockImages.current?.childNodes;
        if (!images) return;

        const needTop = images[0]?.getBoundingClientRect()?.top;
        if (needTop === undefined) return;

        for (let i = 1; i < images.length; ++i) {
            const blockRect = images[i].getBoundingClientRect();
            const blockTop = blockRect.top;

            if (blockTop <= needTop) {
                if (!images[i].classList.contains(styles.showImg)) images[i].classList.add(styles.showImg);
            } else {
                if (images[i].classList.contains(styles.showImg)) images[i].classList.remove(styles.showImg);
            }
        }
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={blockImages}>
            <Image
                src={'/mp1.jpg'}
                alt={'force'}
                width={1600}
                height={1050}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                style={{
                    margin: '0 auto',
                    width: '60%',
                    height: "auto"
                }}
                priority={true}
                className={styles.noShowImg + ' ' + styles.showImg}
            />
            <Image
                src={'/mp2.jpg'}
                alt={'force'}
                width={1600}
                height={1050}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                style={{
                    margin: '0 auto',
                    width: '60%',
                    height: "auto"
                }}
                priority={true}
                className={styles.noShowImg}
            />
            <Image
                src={'/mp3.jpg'}
                alt={'force'}
                width={1600}
                height={1050}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                style={{
                    margin: '0 auto',
                    width: '60%',
                    height: "auto"
                }}
                priority={true}
                className={styles.noShowImg}
            />
        </div>
    );
});

export default MainContent;