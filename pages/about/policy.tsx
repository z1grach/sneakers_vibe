import Head from 'next/head'
import React from "react";
import styles from '@/styles/AboutInfo.module.scss'

export default function Policy() {

    return (
        <>
            <Head>
                <title>Возврат</title>
                <meta name="description" content="Generated by create next app"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="icon" href="/sneaker_svg.svg"/>
            </Head>
            <div className={styles.mainContent}>
                <div>
                    <h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
                    <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности)
                        действует в отношении всей информации, которую Интернет-магазин «VibeShop» может получить о
                        Пользователе во время
                        использования сайта Интернет-магазина, программ и продуктов Интернет-магазина.</p>
                    <h2>ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</h2>
                </div>
            </div>
        </>
    )
}