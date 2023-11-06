import React from 'react';
import {observer} from "mobx-react-lite";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";


const MainContent = observer(() => {


    return (
        <div>
            {/*<Image
                src={`/${sneaker.article}_3.jpg`}
                alt={'cross'}
                width={500}
                height={600}
            />*/}
        </div>
    );
});

export default MainContent;