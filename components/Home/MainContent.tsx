import React from 'react';
import {observer} from "mobx-react-lite";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

const MainContent = observer(() => {

    return (
        <div>
            <Image
                src={'/forceMP.jpg'}
                alt={'force'}
                width={1600}
                height={1600}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                style={{
                    margin: '0 auto',
                    width: '60%',
                    height: "auto"
                }}
                priority={true}
            />
        </div>
    );
});

export default MainContent;