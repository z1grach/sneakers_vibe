import Head from 'next/head'
import React from "react";
import styles from '@/styles/AboutInfo.module.scss'

export default function Refund() {

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
                    <h1>Вернуть неподошедший товар</h1>
                    <p>Вы можете вернуть купленный товар в нашем магазине при условии, если: сохранен товарный вид
                        изделия (в том числе оригинальная упаковка); срок обращения не превышает 14 календарных дней, не
                        считая дня совершения покупки. Возврат товара из интернет-магазина осуществляется через СДЕК по
                        адресу: <strong>Санкт-Петербург, Муринская дорога, 55, корп. 1</strong>, заполнив и
                        вложив <span>бланк возврата</span>.</p>
                    <p>Все случаи возврата товаров в нашем магазине регулируются действующими на территории России
                        законами:</p>
                    <p>Постановлением Правительства РФ от 31.12.2020 N 2463 "Об утверждении Правил продажи товаров по
                        договору розничной купли-продажи, перечня товаров длительного пользования, на которые не
                        распространяется требование потребителя о безвозмездном предоставлении ему товара, обладающего
                        этими же основными потребительскими свойствами, на период ремонта или замены такого товара, и
                        перечня непродовольственных товаров надлежащего качества, не подлежащих обмену, а также о
                        внесении изменений в некоторые акты Правительства Российской Федерации";</p>
                    <p>Федеральным Законом от 07 февраля 1992 года N 2300-1 «О защите прав потребителей».</p>
                </div>
                <div>
                    <h1>Вы получили мой возврат?</h1>
                    <p>Как только возвращенный вами товар будет получен и проверен на нашем складе, мы незамедлительно
                        свяжемся с вами.</p>
                    <p>Обработка возвращенного заказа может занять до 24 часов.</p>
                </div>
                <div>
                    <h1>Как и когда вы вернёте мне деньги?</h1>
                    <p>Возврат денежных средств осуществляется безналичным способом на банковскую карту.</p>
                </div>
                <div>
                    <h1>Вернут ли мне деньги за обратную пересылку возврата?</h1>
                    <p>Почтовые расходы, связанные с возвратом товара надлежащего качества оплачиваются покупателем.</p>
                    <p>Исключением являются: товар ненадлежащего качества, ошибочно отправленный товар. В таких случаях
                        почтовые расходы компенсируются.</p>
                </div>
                <div>
                    <h1>На возврат даётся 14 дней, с какого момента начинается отсчёт?</h1>
                    <p>У вас есть 14 календарных дней, не считая дня получения заказа, чтобы произвести возврат товара
                        надлежащего качества.</p>
                </div>
                <div>
                    <h1>Условия возврата товара</h1>
                    <p>К возврату подлежат товары именно в том состоянии, в котором они к Вам прибыли: без следов
                        эксплуатации, с заводскими бирками и в оригинальной упаковке.</p>
                </div>
            </div>
        </>
    )
}