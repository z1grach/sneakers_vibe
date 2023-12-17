import React from 'react';
import {observer} from "mobx-react-lite";
import Link from "next/link";

const MainContent = observer(() => {
    return (
        <div style={{padding: '2em', fontSize: '16pt'}}>
            <p>Лайтовый сайтик на: ReactJS, MobX, NextJS</p>
            <br/>
            <p>Все интересное в <Link style={{color: '#8f8f8f'}} href={`/sneakers`}>Кроссовки</Link></p>
        </div>
    );
});

export default MainContent;