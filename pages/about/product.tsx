import Head from 'next/head'
import React from "react";
import styles from '@/styles/AboutInfo.module.scss'
import NavSection from "@/components/NavBar/NavSection";
import Image from "next/image";

export default function Product() {

    return (
        <>
            <Head>
                <title>Товар</title>
                <meta name="description" content="Generated by create next app"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="icon" href="/sneaker_svg.svg"/>
            </Head>
            <div className={styles.mainContent}>
                <NavSection pages={[{link: '/', name: 'Главная'}, {link: '/about', name: 'Информация'}]}/>
                <div className={styles.textContent}>
                    <div>
                        <h1>Таблица размеров кроссовок</h1>
                        <p>На сегодняшний день не существует универсальной размерной сетки, которой следовали бы бренды
                            из
                            различных стран и сегментов. Марки используют собственные таблицы размеров, которые могут
                            радикально различаться между собой.</p>
                        <p>Чтобы получение коробки с новенькой парой не омрачало, а лишь радовало вас, предлагаем
                            ознакомиться с нашим гайдом по выбору правильного размера кроссовок.</p>
                        <p>Вам необходимо замерить длину стопы (не стельки) согласно инструкции ниже и отправить
                            нам.</p>
                        <Image
                            src={'/razmernaya_tablitsa.jpg'}
                            draggable={false}
                            alt={`razmernaya_tablitsa`}
                            width={600}
                            height={400}
                            style={{
                                height: "auto",
                                marginTop: '1em'
                            }}
                        />
                    </div>
                    <div>
                        <h1>Правила ухода</h1>
                        <p>Следуя рекомендациям по уходу, указанным на информационной бирке товара, вы значительно
                            увеличите
                            срок службы вашей вещи. Более подробную информацию можно найти в
                            разделе <span>«Правила ухода»</span>.</p>
                        <p>Для защиты обуви от воды, грязи и снега используйте водоотталкивающее средство <strong>Kiwi
                            Aquastop "Экстрим"</strong>.</p>
                    </div>
                    <div>
                        <h1>Можно ли купить товар оптом?</h1>
                        <p>Товар можно купить оптом - для более точной информации напишите нам в мессенджер.</p>
                    </div>
                </div>
            </div>
        </>
    )
}