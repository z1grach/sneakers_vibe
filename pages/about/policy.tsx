import Head from 'next/head'
import React from "react";
import styles from '@/styles/AboutInfo.module.scss'
import NavSection from "@/components/NavBar/NavSection";

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
                <NavSection pages={[{link: '/', name: 'Главная'}, {link: '/about', name: 'Информация'}]}/>
                <div className={styles.textContent}>
                    <div>
                        <h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
                        <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика
                            конфиденциальности)
                            действует в отношении всей информации, которую Интернет-магазин «VibeShop» может получить о
                            Пользователе во время
                            использования сайта Интернет-магазина, программ и продуктов Интернет-магазина.</p>
                        <h2>ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</h2>
                        <p>В настоящей Политике конфиденциальности используются следующие термины:</p>
                        <p>«Администрация сайта Интернет-магазина» (далее – Администрация сайта) – уполномоченные
                            сотрудники на управления сайтом, действующие от имени ИМ, которые организуют и осуществляют
                            обработку персональных данных, а также определяют цели обработки персональных
                            данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с
                            персональными данными.</p>
                        <p>«Персональные данные» — любая информация, относящаяся к прямо или косвенно определенному или
                            определяемому физическому лицу (субъекту персональных данных).</p>
                        <p>«Обработка персональных данных» — любое действие (операция) или совокупность действий
                            (операций),
                            совершаемых с использованием средств автоматизации или без использования таких средств с
                            персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение
                            (обновление, изменение), извлечение, использование, передачу (распространение,
                            предоставление,
                            доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
                        <p>«Конфиденциальность персональных данных» — обязательное для соблюдения Оператором или иным
                            получившим доступ к персональным данным лицом требование не допускать их распространения без
                            согласия субъекта персональных данных или наличия иного законного основания.</p>
                        <p>«Пользователь сайта Интернет-магазина (далее — Пользователь)» – лицо, имеющее доступ к Сайту,
                            посредством сети Интернет и использующее Сайт интернет-магазина.</p>
                        <p>«Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере
                            пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в
                            HTTP-запросе при попытке открыть страницу соответствующего сайта.</p>
                        <p>«IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу
                            IP.</p>
                        <h2>ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                        <p>Использование Пользователем сайта Интернет-магазина означает согласие с настоящей Политикой
                            конфиденциальности и условиями обработки персональных данных Пользователя.</p>
                        <p>В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить
                            использование сайта Интернет-магазина.</p>
                        <p>Настоящая Политика конфиденциальности применяется только к сайту Интернет-магазина VibeShop.
                            Интернет-магазин не контролирует и не несет ответственность за сайты третьих лиц, на которые
                            Пользователь может перейти по ссылкам, доступным на сайте Интернет-магазина.</p>
                        <p>Администрация сайта не проверяет достоверность персональных данных, предоставляемых
                            Пользователем
                            сайта Интернет-магазина.</p>
                        <h2>ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h2>
                        <p>Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта
                            интернет-магазина по неразглашению и обеспечению режима защиты конфиденциальности
                            персональных
                            данных, которые Пользователь предоставляет по запросу Администрации сайта при регистрации на
                            сайте интернет-магазина или при оформлении заказа для приобретения Товара.</p>
                        <p>Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности,
                            предоставляются Пользователем путём заполнения регистрационной формы на Сайте
                            интернет-магазина
                            VibeShop и включают в себя следующую информацию:</p>
                        <p>имя, контактный телефон, адрес электронной почты (e-mail), адрес доставки товара.</p>
                        <h2>ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ</h2>
                        <p>Персональные данные Пользователя Администрация сайта интернет-магазина может использовать в
                            целях:</p>
                        <p>Идентификации Пользователя, зарегистрированного на сайте Интернет-магазина, для оформления
                            заказа
                            и (или) заключения Договора купли-продажи товара дистанционным способом с VibeShop.</p>
                        <p>Предоставления Пользователю доступа к персонализированным ресурсам Сайта
                            интернет-магазина.</p>
                        <p>Установления с Пользователем обратной связи, включая направление уведомлений, запросов,
                            касающихся использования Сайта интернет-магазина, оказания услуг, обработка запросов и
                            заявок от
                            Пользователя.</p>
                        <p>Определения места нахождения Пользователя для обеспечения безопасности, предотвращения
                            мошенничества.</p>
                        <p>Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.</p>
                        <p>Создания учетной записи для совершения покупок, если Пользователь дал согласие на создание
                            учетной записи.</p>
                        <p>Уведомления Пользователя Сайта интернет-магазина о состоянии Заказа.</p>
                        <p>Обработки и получения платежей, подтверждения налога или налоговых льгот, оспаривания
                            платежа,
                            определения права на получение кредитной линии Пользователем.</p>
                        <p>Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении
                            проблем связанных с использованием Сайта интернет-магазина.</p>
                        <p>Предоставления Пользователю с его согласия, обновлений продукции, специальных предложений,
                            информации о ценах, новостной рассылки и иных сведений от имени Интернет-магазина или от
                            имени
                            партнеров Интернет-магазина.</p>
                        <p>Осуществления рекламной деятельности с согласия Пользователя.</p>
                        <p>Предоставления доступа Пользователю на сайты или сервисы партнеров Интернет-магазина с целью
                            получения продуктов, обновлений и услуг.</p>
                        <h2>СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                        <p>Обработка персональных данных Пользователя осуществляется без ограничения срока, любым
                            законным
                            способом, в том числе в информационных системах персональных данных с использованием средств
                            автоматизации или без использования таких средств.</p>
                        <p>Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные
                            третьим лицам, в частности, курьерским службам, организациями почтовой связи, операторам
                            электросвязи, исключительно в целях выполнения заказа Пользователя, оформленного на Сайте
                            интернет-магазина «VibeShop», включая доставку Товара.</p>
                        <p>Персональные данные Пользователя могут быть переданы уполномоченным органам государственной
                            власти Российской Федерации только по основаниям и в порядке, установленным
                            законодательством
                            Российской Федерации.</p>
                        <p>При утрате или разглашении персональных данных Администрация сайта информирует Пользователя
                            об
                            утрате или разглашении персональных данных.</p>
                        <p>Администрация сайта принимает необходимые организационные и технические меры для защиты
                            персональной информации Пользователя от неправомерного или случайного доступа, уничтожения,
                            изменения, блокирования, копирования, распространения, а также от иных неправомерных
                            действий
                            третьих лиц.</p>
                        <p>Администрация сайта совместно с Пользователем принимает все необходимые меры по
                            предотвращению
                            убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных
                            данных Пользователя.</p>
                        <h2>ОБЯЗАТЕЛЬСТВА СТОРОН</h2>
                        <p>Пользователь обязан:</p>
                        <p>Предоставить информацию о персональных данных, необходимую для пользования Сайтом
                            интернет-магазина.</p>
                        <p>Обновить, дополнить предоставленную информацию о персональных данных в случае изменения
                            данной
                            информации.</p>
                        <p>Администрация сайта обязана:</p>
                        <p>Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей
                            Политики
                            конфиденциальности.</p>
                        <p>Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного
                            письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование,
                            либо
                            разглашение иными возможными способами переданных персональных данных Пользователя.</p>
                        <p>Принимать меры предосторожности для защиты конфиденциальности персональных данных
                            Пользователя
                            согласно порядку, обычно используемого для защиты такого рода информации в существующем
                            деловом
                            обороте.</p>
                        <p>Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с
                            момента обращения или запроса Пользователя или его законного представителя либо
                            уполномоченного
                            органа по защите прав субъектов персональных данных на период проверки, в случае выявления
                            недостоверных персональных данных или неправомерных действий.</p>
                        <h2>ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2>
                        <p>Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без
                            согласия
                            Пользователя.</p>
                        <p>Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте
                            интернет-магазина, если иное не предусмотрено новой редакцией Политики
                            конфиденциальности.</p>
                    </div>
                </div>
            </div>
        </>
    )
}