import React, {useRef} from 'react';
import {observer} from "mobx-react-lite";
import {ISneakerReplacement} from "@/interface";
import styles from "@/styles/SneakerPage.module.scss";
import Image from "next/image";
import Link from "next/link";

const SneakerPageReplacement = observer(({
                                             arr,
                                             currentArticle
                                         }: { arr: ISneakerReplacement[], currentArticle: string }) => {
    const divRef = useRef<any>(null);
    const flagRef = useRef<boolean>(false);

    let startX, startY;

    function scrollContent(event) {
        flagRef.current = true;

        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        divRef.current.scrollLeft -= deltaX;
        divRef.current.scrollTop -= deltaY;

        startX = event.clientX;
        startY = event.clientY;
    }


    const handleMouseDown = (e: any) => {
        if (e.button === 0) {
            startX = e.clientX;
            startY = e.clientY;

            document.addEventListener('mousemove', scrollContent);
            document.addEventListener('mouseup', handleMouseUp);
        }
    }

    const handleMouseUp = (e: any) => {
        if (e.button === 0) {
            setTimeout(() => {
                flagRef.current = false;
            }, 1);

            document.removeEventListener('mousemove', scrollContent);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }

    const handleClick = (e: any) => {
        if (flagRef.current) {
            e.preventDefault();
        }
    }


    return (
        <div
            className={styles.replacementList}
            onMouseDown={handleMouseDown}
            ref={divRef}
            draggable={false}
        >
            {arr.map((el: ISneakerReplacement) => {
                return (
                    <Link
                        key={'colors_' + el.article}
                        className={styles.replacementElem + (el.article === currentArticle ? ' ' + styles.active : '')}
                        title={el.color}
                        href={`/sneakers/${el.article}`}
                        onClick={handleClick}
                        draggable={false}
                    >
                        <Image
                            src={`/${el.article}_1.jpg`}
                            width={60}
                            height={60}
                            alt={`/${el.article}_1.jpg`}
                            draggable={false}
                        />
                    </Link>
                )
            })}
        </div>
    );
});

export default SneakerPageReplacement;