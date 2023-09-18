import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import {AppProps} from "next/app";
import {useStore} from "@/components/mobx/mobxProvider";


const AppStart = observer(({Component, pageProps}: AppProps) => {
    const coreStore = useStore();

    useEffect(() => {
        const isMobileDevice = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (isMobileDevice()) {
            coreStore.setMobileMode(true);
        }

        window.onresize = (e: any) => {
            if (e.currentTarget.innerWidth <= 1000 && !coreStore.mobileMode) {
                coreStore.setMobileMode(true);
            } else if (e.currentTarget.innerWidth > 1000 && !isMobileDevice() && coreStore.mobileMode) {
                coreStore.setMobileMode(false);
            }
        }

        if (window.innerWidth <= 1000 && !coreStore.mobileMode) {
            coreStore.setMobileMode(true);
        }
    }, []);

    return (
        <Header>
            <Component {...pageProps} />
            <Footer/>
        </Header>
    );
});

export default AppStart;